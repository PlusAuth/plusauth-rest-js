"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  PlusAuthRestClient: () => PlusAuthRestClient,
  PlusAuthRestError: () => PlusAuthRestError,
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);

// src/http.ts
var import_deepmerge = __toESM(require("@fastify/deepmerge"), 1);

// src/error.ts
var PlusAuthRestError = class extends Error {
  constructor(error) {
    super(error.message || error.error || error.name);
    if (!(error instanceof Error)) {
      Object.assign(this, error);
    } else {
      Object.defineProperty(this, "_raw", error);
    }
  }
};

// src/utils/fetch_wrapper.ts
var import_cross_fetch = __toESM(require("cross-fetch"), 1);
var fetchPn = import_cross_fetch.default;

// src/http.ts
var deepmerge = (0, import_deepmerge.default)();
async function parseFetchResponse(response, options) {
  const contentType = response.headers.get("content-type");
  if (options.responseType === "stream" && response.ok) {
    return response.body?.getReader();
  }
  if (options.responseType === "json" || contentType && contentType.indexOf("application/json") > -1) {
    return await response.json();
  }
  return await response.text();
}
async function fetchAsPromise(url, options) {
  const rawResponse = await fetchPn(url, options).catch((err) => {
    return Promise.reject(new PlusAuthRestError(err));
  });
  const clone = rawResponse.clone();
  if (rawResponse.ok) {
    return await parseFetchResponse(clone, options);
  }
  if (rawResponse.status === 400) {
    const parsedErr = await parseFetchResponse(clone, options);
    if (parsedErr?.error === "xhr_request" && parsedErr.location) {
      window?.location?.replace(parsedErr.location);
      return false;
    }
    throw new PlusAuthRestError(parsedErr);
  }
  throw new PlusAuthRestError(await parseFetchResponse(clone, options));
}
var HttpService = class {
  static {
    this.prefix = "";
  }
  constructor(apiURL, options = {}) {
    if (!apiURL) {
      throw new Error("'apiURL' must be provided");
    }
    try {
      new URL(apiURL);
    } catch {
      throw new Error("'apiUrl' must be a valid uri");
    }
    if (typeof options !== "object") {
      throw new Error("'options' must be an object");
    }
    if (options.httpClient && typeof options.httpClient !== "function") {
      throw new Error('"httpClient" must be function');
    }
    const finalUri = apiURL + (/\/api\/v\d(\/)?$/.test(apiURL) ? "" : `${apiURL.endsWith("/") ? "" : "/"}api/v1`);
    const _baseUrl = finalUri + this.constructor.prefix;
    const httpClient = options.httpClient || fetchAsPromise;
    const http = {};
    for (const method of ["get", "post", "patch", "delete"]) {
      http[method] = (...args) => {
        let token;
        if (options && typeof options.token === "function") {
          token = options.token.call(void 0);
        } else {
          token = options.token;
        }
        let fetchOptions = {
          method: method.toUpperCase(),
          mode: "cors",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            ...token ? { Authorization: `Bearer ${token}` } : {},
            ...options.version ? { "X-PlusAuth-Version": options.version } : {}
          }
        };
        if (args.length > 1) {
          if (method !== "get") {
            fetchOptions.body = typeof args[1] === "object" ? JSON.stringify(args[1]) : args[1];
          }
        }
        if (!!args[2] && typeof args[2] === "object") {
          fetchOptions = deepmerge(fetchOptions, args[2]);
        }
        return httpClient.call(null, _baseUrl + args[0], fetchOptions);
      };
    }
    this._baseUrl = _baseUrl;
    this.http = http;
  }
  get baseUrl() {
    return this._baseUrl;
  }
};

// src/utils/index.ts
function encodedQueryString(data, appendable = true) {
  if (!data) {
    return "";
  }
  const ret = [];
  for (const d in data) {
    if (data[d] != null) {
      ret.push(`${d}=${encodeURIComponent(data[d].toString())}`);
    }
  }
  if (appendable) {
    return `?${ret.join("&")}`;
  }
  return ret.join("&");
}

// src/api/clients.ts
var ClientService = class extends HttpService {
  /**
   * @param queryParams Query parameters
   * @param queryParams.limit Limit the number of results returned
   * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
   * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
   * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
   * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
   */
  async getAll(queryParams) {
    return await this.http.get(`/clients/${encodedQueryString(queryParams)}`);
  }
  /**
   * @param data Client object
   */
  async create(data) {
    return await this.http.post(`/clients/`, data);
  }
  /**
   * @param clientId Client identifier
   */
  async get(clientId) {
    return await this.http.get(`/clients/${clientId}`);
  }
  /**
   * @param clientId Client identifier
   * @param data Object containing to be updated values
   */
  async update(clientId, data) {
    return await this.http.patch(`/clients/${clientId}`, data);
  }
  /**
   * @param clientId Client identifier
   */
  async remove(clientId) {
    return await this.http.delete(`/clients/${clientId}`);
  }
};

// src/api/connections.ts
var ConnectionService = class extends HttpService {
  /**
   * @param queryParams Query parameters
   * @param queryParams.limit Limit the number of results returned
   * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
   * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
   * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
   * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
   */
  async getAll(queryParams) {
    return await this.http.get(`/connections/${encodedQueryString(queryParams)}`);
  }
  /**
   * @param data Connection object
   */
  async create(data) {
    return await this.http.post(`/connections/`, data);
  }
  /**
   * @param name Connection name
   */
  async get(name) {
    return await this.http.get(`/connections/${name}`);
  }
  /**
   * @param name Connection name
   * @param data Object containing to be updated values
   */
  async update(name, data) {
    return await this.http.patch(`/connections/${name}`, data);
  }
  /**
   * @param name Connection name
   */
  async remove(name) {
    return await this.http.delete(`/connections/${name}`);
  }
};

// src/api/customDomains.ts
var CustomDomainService = class extends HttpService {
  /**
   * @param queryParams Query parameters
   * @param queryParams.limit Limit the number of results returned
   * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
   * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
   * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
   * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
   */
  async getAll(queryParams) {
    return await this.http.get(`/custom-domain/${encodedQueryString(queryParams)}`);
  }
  /**
   * @param data Tenant Custom Domain object
   */
  async register(data) {
    return await this.http.post(`/custom-domain/`, data);
  }
  /**
   * @param domain Custom Domain specifier
   */
  async get(domain) {
    return await this.http.get(`/custom-domain/${domain}`);
  }
  /**
   * @param domain Custom Domain specifier
   */
  async remove(domain) {
    return await this.http.delete(`/custom-domain/${domain}`);
  }
  /**
   * @param domain Custom Domain specifier
   */
  async verifyOwnership(domain) {
    return await this.http.get(`/custom-domain/${domain}/verify`);
  }
};

// src/api/hooks.ts
var HookService = class extends HttpService {
  /**
   * @param queryParams Query parameters
   * @param queryParams.limit Limit the number of results returned
   * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
   * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
   * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
   * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
   */
  async getAll(queryParams) {
    return await this.http.get(`/hooks/${encodedQueryString(queryParams)}`);
  }
  /**
   * @param data Hook object
   */
  async create(data) {
    return await this.http.post(`/hooks/`, data);
  }
  /**
   * @param hookId Hook identifier
   */
  async get(hookId) {
    return await this.http.get(`/hooks/${hookId}`);
  }
  /**
   * @param hookId Hook identifier
   * @param data Object containing to be updated values
   */
  async update(hookId, data) {
    return await this.http.patch(`/hooks/${hookId}`, data);
  }
  /**
   * @param hookId Hook identifier
   */
  async remove(hookId) {
    return await this.http.delete(`/hooks/${hookId}`);
  }
};

// src/api/jobs.ts
var JobService = class extends HttpService {
  /**
   * @param queryParams Query parameters
   * @param queryParams.limit Limit the number of results returned
   * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
   * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
   * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
   * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
   */
  async getAll(queryParams) {
    return await this.http.get(`/jobs/${encodedQueryString(queryParams)}`);
  }
  /**
   * @param data Job object
   */
  async create(data) {
    return await this.http.post(`/jobs/`, data);
  }
  /**
   * @param jobId Job identifier
   */
  async get(jobId) {
    return await this.http.get(`/jobs/${jobId}`);
  }
  /**
   * @param jobId Job identifier
   */
  async remove(jobId) {
    return await this.http.delete(`/jobs/${jobId}`);
  }
  /**
   * @param jobId Job identifier
   * @param queryParams Query parameters
   * @param queryParams.limit Limit the number of results returned
   * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
   * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
   * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
   * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
   */
  async getExecutions(jobId, queryParams) {
    return await this.http.get(`/jobs/${jobId}/runs${encodedQueryString(queryParams)}`);
  }
  /**
   * @param jobId Job identifier
   * @param executionId Job Execution identifier
   * @param queryParams Query parameters
   * @param queryParams.limit Limit the number of results returned
   * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
   * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
   * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
   * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
   */
  async getExecutionDetails(jobId, executionId, queryParams) {
    return await this.http.get(`/jobs/${jobId}/runs/${executionId}${encodedQueryString(queryParams)}`);
  }
  /**
   * @param jobId Job identifier
   * @param executionId Job Execution identifier
   * @param queryParams Query parameters
   * @param queryParams.limit Limit the number of results returned
   * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
   */
  async getExecutionLogs(jobId, executionId, queryParams) {
    return await this.http.get(`/jobs/${jobId}/runs/${executionId}/logs${encodedQueryString(queryParams)}`);
  }
  /**
   * @param jobId Job identifier
   * @param executionId Job Execution identifier
   */
  async retryExecution(jobId, executionId) {
    return await this.http.post(`/jobs/${jobId}/runs/${executionId}/retry`);
  }
};

// src/api/keys.ts
var KeyService = class extends HttpService {
  /**
   * @param type 
   */
  async get(type) {
    return await this.http.get(`/keys/${type}`);
  }
  /**
   * @param type 
   */
  async rotate(type) {
    return await this.http.post(`/keys/${type}/rotate`);
  }
  /**
   * @param type 
   * @param kid 
   */
  async revoke(type, kid) {
    return await this.http.get(`/keys/${type}/revoke/${kid}`);
  }
};

// src/api/logs.ts
var LogService = class extends HttpService {
  /**
   * Query over every log generated by PlusAuth belongs to your tenant.
  ### DateMath Reference[](#datemath-reference):
  If you are used to ElasticSearch, Kibana or Grafana date math queries, than you can ignore this section as PlusAuth includes  same characteristics with them.
  The expression starts with an anchor date, which can either be `now`, or a date string ending with `||`. This anchor date can optionally be followed by one or more maths expressions:
  - `+1h`: Add one hour
  - `-1d`: Subtract one day
  - `/d`: Round down to the nearest day
  The supported units are:
  
  | Time Unit | Duration |
  | --- | --- |
  | `y` | Years |
  | `M` | Months |
  | `w` | Weeks |
  | `d` | Days |
  | `h` | Hours |
  | `H` | Hours |
  | `m` | Minutes |
  | `s` | Seconds |
  
  Assuming `now` is `2001-01-01 12:00:00`, some examples are:
  
  | Expression | Description | Resolves To |
  | --- | --- | --- |
  | `now+1h` | `now` in milliseconds plus one hour |  `2001-01-01 13:00:00` |
  | `now-1h` | `now` in milliseconds minus one hour | `2001-01-01 11:00:00` |
  | `now-1h/d` | `now` in milliseconds minus one hour, rounded down to UTC 00:00 | `2001-01-01 00:00:00` |
  
   * @param queryParams Query parameters
   * @param queryParams.limit Limit the number of results returned
   * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
   * @param queryParams.from Filter logs occurred after this date. This can be a datetime string or date math expression.
   * @param queryParams.to Filter logs occurred until this date. This can be a datetime string or date math expression.
   * @param queryParams.q Filter logs occurred until this date. This can be a datetime string or date math expression.
   * @param queryParams.type Type/s of logs to be retrieved. Comma separated. Comma separated.
  Ex.: error,warning,info
   * @param queryParams.operation Retrieve logs belongs to one or more operation. Comma separated.
  Ex.: authorization.error,create.user
   * @param queryParams.include_api Set `true` to include REST API logs
   */
  async getAll(queryParams) {
    return await this.http.get(`/logs/${encodedQueryString(queryParams)}`);
  }
};

// src/api/mfa.ts
var MfaService = class extends HttpService {
  /**
   * @param queryParams Query parameters
   * @param queryParams.limit Limit the number of results returned
   * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
   * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
   * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
   * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
   */
  async getAll(queryParams) {
    return await this.http.get(`/mfa/${encodedQueryString(queryParams)}`);
  }
  /**
   * @param data 
   */
  async create(data) {
    return await this.http.post(`/mfa/`, data);
  }
  /**
   * @param type MFA Type
   */
  async get(type) {
    return await this.http.get(`/mfa/${type}`);
  }
  /**
   * @param type MFA Type
   * @param data Object containing to be updated values
   */
  async update(type, data) {
    return await this.http.patch(`/mfa/${type}`, data);
  }
  /**
   * @param type MFA Type
   */
  async remove(type) {
    return await this.http.delete(`/mfa/${type}`);
  }
};

// src/api/moduleSettings.ts
var ModuleSettingService = class extends HttpService {
  /**
   * @param name 
   */
  async get(name) {
    return await this.http.get(`/module-settings/${name}/`);
  }
  /**
   * @param name 
   * @param data Object containing to be updated values
   */
  async update(name, data) {
    return await this.http.patch(`/module-settings/${name}/`, data);
  }
};

// src/api/resources.ts
var ResourceService = class extends HttpService {
  /**
   * @param resourceId Resource identifier
   * @param queryParams Query parameters
   * @param queryParams.limit Limit the number of results returned
   * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
   * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
   * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
   * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
   */
  async getPermissions(resourceId, queryParams) {
    return await this.http.get(`/resources/${resourceId}/permissions/${encodedQueryString(queryParams)}`);
  }
  /**
   * @param resourceId Resource identifier
   * @param data Permission object
   */
  async createPermission(resourceId, data) {
    return await this.http.post(`/resources/${resourceId}/permissions/`, data);
  }
  /**
   * @param resourceId Resource identifier
   * @param permissionId Permission identifier
   */
  async removePermission(resourceId, permissionId) {
    return await this.http.delete(`/resources/${resourceId}/permissions/${permissionId}`);
  }
  /**
   * @param resourceId Resource identifier
   * @param queryParams Query parameters
   * @param queryParams.limit Limit the number of results returned
   * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
   * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
   * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
   * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
   */
  async getAuthorizedClients(resourceId, queryParams) {
    return await this.http.get(`/resources/${resourceId}/authorized_clients/${encodedQueryString(queryParams)}`);
  }
  /**
   * @param resourceId Resource identifier
   * @param clientIdList List of client ID's to be authorized
   */
  async authorizeClients(resourceId, clientIdList) {
    return await this.http.post(`/resources/${resourceId}/authorized_clients/`, clientIdList);
  }
  /**
   * @param resourceId Resource identifier
   * @param clientIdList List of client ID's to be unauthorized
   */
  async unauthorizeClients(resourceId, clientIdList) {
    return await this.http.delete(`/resources/${resourceId}/authorized_clients/`, clientIdList);
  }
  /**
   * @param resourceId Resource identifier
   * @param clientId Client identifier
   */
  async getAssignedPermissionsToClient(resourceId, clientId) {
    return await this.http.get(`/resources/${resourceId}/authorized_clients/${clientId}/permissions/`);
  }
  /**
   * @param resourceId Resource identifier
   * @param clientId Client identifier
   * @param permissionIdList List of permission ID's to be authorized
   */
  async authorizePermissionsToClient(resourceId, clientId, permissionIdList) {
    return await this.http.post(`/resources/${resourceId}/authorized_clients/${clientId}/permissions/`, permissionIdList);
  }
  /**
   * @param resourceId Resource identifier
   * @param clientId Client identifier
   * @param permissionIdList List of permission ID's to be unauthorized
   */
  async unauthorizePermissionsFromClient(resourceId, clientId, permissionIdList) {
    return await this.http.delete(`/resources/${resourceId}/authorized_clients/${clientId}/permissions/`, permissionIdList);
  }
  /**
   * @param queryParams Query parameters
   * @param queryParams.limit Limit the number of results returned
   * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
   * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
   * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
   * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
   */
  async getAll(queryParams) {
    return await this.http.get(`/resources/${encodedQueryString(queryParams)}`);
  }
  /**
   * @param data Resource Object with name and description properties.
   */
  async create(data) {
    return await this.http.post(`/resources/`, data);
  }
  /**
   * @param resourceId Resource identifier
   */
  async get(resourceId) {
    return await this.http.get(`/resources/${resourceId}`);
  }
  /**
   * @param resourceId Resource identifier
   * @param data Resource Object with name and description properties.
   */
  async update(resourceId, data) {
    return await this.http.patch(`/resources/${resourceId}`, data);
  }
  /**
   * @param resourceId Resource identifier
   */
  async remove(resourceId) {
    return await this.http.delete(`/resources/${resourceId}`);
  }
};

// src/api/providers.ts
var ProviderService = class extends HttpService {
  /**
   */
  async getEmailSettings() {
    return await this.http.get(`/providers/email`);
  }
  /**
   * @param data Object containing to be updated values
   */
  async updateEmailSettings(data) {
    return await this.http.patch(`/providers/email`, data);
  }
};

// src/api/roles.ts
var RoleService = class extends HttpService {
  /**
   * @param queryParams Query parameters
   * @param queryParams.limit Limit the number of results returned
   * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
   * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
   * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
   * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
   */
  async getAll(queryParams) {
    return await this.http.get(`/roles/${encodedQueryString(queryParams)}`);
  }
  /**
   * @param data Role object
   */
  async create(data) {
    return await this.http.post(`/roles/`, data);
  }
  /**
   * @param roleId Role identifier
   */
  async get(roleId) {
    return await this.http.get(`/roles/${roleId}`);
  }
  /**
   * @param roleId Role identifier
   * @param data Object containing to be updated values
   */
  async update(roleId, data) {
    return await this.http.patch(`/roles/${roleId}`, data);
  }
  /**
   * @param roleId Role identifier
   */
  async remove(roleId) {
    return await this.http.delete(`/roles/${roleId}`);
  }
  /**
   * @param roleId Role identifier
   * @param queryParams Query parameters
   * @param queryParams.limit Limit the number of results returned
   * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
   * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
   * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
   * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
   */
  async getPermissions(roleId, queryParams) {
    return await this.http.get(`/roles/${roleId}/permissions${encodedQueryString(queryParams)}`);
  }
  /**
   * @param roleId Role identifier
   * @param permissionIdList List of permission ID's to be assigned to the role
   */
  async assignPermissions(roleId, permissionIdList) {
    return await this.http.post(`/roles/${roleId}/permissions`, permissionIdList);
  }
  /**
   * @param roleId Role identifier
   * @param permissionIdList List of permission ID's to be unassigned from the role
   */
  async unassignPermissions(roleId, permissionIdList) {
    return await this.http.delete(`/roles/${roleId}/permissions`, permissionIdList);
  }
  /**
   * @param roleId Role identifier
   * @param queryParams Query parameters
   * @param queryParams.limit Limit the number of results returned
   * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
   * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
   * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
   * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
   */
  async getUsers(roleId, queryParams) {
    return await this.http.get(`/roles/${roleId}/users${encodedQueryString(queryParams)}`);
  }
};

// src/api/roleGroups.ts
var RoleGroupService = class extends HttpService {
  /**
   * @param queryParams Query parameters
   * @param queryParams.limit Limit the number of results returned
   * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
   * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
   * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
   * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
   */
  async getAll(queryParams) {
    return await this.http.get(`/role-groups/${encodedQueryString(queryParams)}`);
  }
  /**
   * @param data Role Group object
   */
  async create(data) {
    return await this.http.post(`/role-groups/`, data);
  }
  /**
   * @param roleGroupId Role Group identifier
   */
  async get(roleGroupId) {
    return await this.http.get(`/role-groups/${roleGroupId}`);
  }
  /**
   * @param roleGroupId Role Group identifier
   * @param data Object containing to be updated values
   */
  async update(roleGroupId, data) {
    return await this.http.patch(`/role-groups/${roleGroupId}`, data);
  }
  /**
   * @param roleGroupId Role Group identifier
   */
  async remove(roleGroupId) {
    return await this.http.delete(`/role-groups/${roleGroupId}`);
  }
  /**
   * @param roleGroupId Role Group identifier
   */
  async getRoles(roleGroupId) {
    return await this.http.get(`/role-groups/${roleGroupId}/roles`);
  }
  /**
   * @param roleGroupId Role Group identifier
   * @param roleIdList List of role ID's to be assigned to the role group
   */
  async assignRoles(roleGroupId, roleIdList) {
    return await this.http.post(`/role-groups/${roleGroupId}/roles`, roleIdList);
  }
  /**
   * @param roleGroupId Role Group identifier
   * @param roleIdList List of role ID's to be unassigned from the role group
   */
  async unassignRoles(roleGroupId, roleIdList) {
    return await this.http.delete(`/role-groups/${roleGroupId}/roles`, roleIdList);
  }
  /**
   * @param roleGroupId Role Group identifier
   * @param queryParams Query parameters
   * @param queryParams.limit Limit the number of results returned
   * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
   * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
   * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
   * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
   */
  async getUsers(roleGroupId, queryParams) {
    return await this.http.get(`/role-groups/${roleGroupId}/users${encodedQueryString(queryParams)}`);
  }
};

// src/api/templates.ts
var TemplateService = class extends HttpService {
  /**
   * @param type 
   * @param name 
   */
  async get(type, name) {
    return await this.http.get(`/templates/${type}/${name}/`);
  }
  /**
   * @param type 
   * @param name 
   * @param data Object containing to be updated values
   */
  async update(type, name, data) {
    return await this.http.patch(`/templates/${type}/${name}/`, data);
  }
  /**
   * @param type 
   * @param name 
   */
  async reset(type, name) {
    return await this.http.delete(`/templates/${type}/${name}/`);
  }
};

// src/api/tenantAdministrators.ts
var TenantAdministratorService = class extends HttpService {
  /**
   * @param tenantId Tenant identifier
   * @param invitationDetails Invitation details
   */
  async invite(tenantId, invitationDetails) {
    return await this.http.post(`/tenants/${tenantId}/invite`, invitationDetails);
  }
  /**
   * @param tenantId Tenant identifier
   */
  async getAll(tenantId) {
    return await this.http.get(`/tenants/${tenantId}/administrators`);
  }
  /**
   * @param tenantId Tenant identifier
   * @param adminId Administrator identifier
   */
  async remove(tenantId, adminId) {
    return await this.http.delete(`/tenants/${tenantId}/administrators/${adminId}`);
  }
  /**
   * @param tenantId Tenant identifier
   * @param adminId Administrator identifier
   * @param permissionIdList List of permission IDs to be assigned
   */
  async assignPermissions(tenantId, adminId, permissionIdList) {
    return await this.http.post(`/tenants/${tenantId}/administrators/${adminId}/permissions`, permissionIdList);
  }
  /**
   * @param tenantId Tenant identifier
   * @param adminId Administrator identifier
   * @param permissionIdList List of permission IDs to be unassigned
   */
  async unassignPermissions(tenantId, adminId, permissionIdList) {
    return await this.http.delete(`/tenants/${tenantId}/administrators/${adminId}/permissions`, permissionIdList);
  }
};

// src/api/tenants.ts
var TenantService = class extends HttpService {
  /**
   * @param data Tenant object
   */
  async create(data) {
    return await this.http.post(`/tenants/`, data);
  }
  /**
   * @param tenantId Tenant identifier
   */
  async remove(tenantId) {
    return await this.http.delete(`/tenants/${tenantId}/`);
  }
  /**
   * @param tenantId Tenant identifier
   */
  async getStats(tenantId) {
    return await this.http.get(`/tenants/${tenantId}/stats`);
  }
  /**
   * @param tenantId Tenant identifier
   */
  async getSettings(tenantId) {
    return await this.http.get(`/tenants/${tenantId}/settings`);
  }
  /**
   * @param tenantId Tenant identifier
   * @param data Object containing to be updated values
   */
  async updateSettings(tenantId, data) {
    return await this.http.patch(`/tenants/${tenantId}/settings`, data);
  }
  /**
   * @param tenantId Tenant identifier
   */
  async getSubscription(tenantId) {
    return await this.http.get(`/tenants/${tenantId}/subscription`);
  }
};

// src/api/users.ts
var UserService = class extends HttpService {
  /**
   * @param queryParams Query parameters
   * @param queryParams.limit Limit the number of results returned
   * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
   * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
   * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
   * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
   */
  async getAll(queryParams) {
    return await this.http.get(`/users/${encodedQueryString(queryParams)}`);
  }
  /**
   * For user creation at least one of identifier is required. Available identifiers are `username`, `email` and `phone_number`.
  
   * @param data User object
   */
  async create(data) {
    return await this.http.post(`/users/`, data);
  }
  /**
   * @param userId User identifier
   */
  async get(userId) {
    return await this.http.get(`/users/${userId}`);
  }
  /**
   * @param userId User identifier
   * @param data Object containing to be updated values
   */
  async update(userId, data) {
    return await this.http.patch(`/users/${userId}`, data);
  }
  /**
   * @param userId User identifier
   */
  async remove(userId) {
    return await this.http.delete(`/users/${userId}`);
  }
  /**
   * @param userId User identifier
   */
  async getRbac(userId) {
    return await this.http.get(`/users/${userId}/rbac`);
  }
  /**
   * @param userId User identifier
   * @param credentialId Credential identifier
   */
  async removeCredential(userId, credentialId) {
    return await this.http.delete(`/users/${userId}/credentials/${credentialId}`);
  }
  /**
   * @param userId User identifier
   * @param data 
   */
  async linkIdentity(userId, data) {
    return await this.http.post(`/users/${userId}/identities/`, data);
  }
  /**
   * @param userId User identifier
   * @param queryParams Query parameters
   * @param queryParams.limit Limit the number of results returned
   * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
   * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
   * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
   * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
   */
  async getPermissions(userId, queryParams) {
    return await this.http.get(`/users/${userId}/permissions/${encodedQueryString(queryParams)}`);
  }
  /**
   * @param userId User identifier
   * @param permissionIdList List of permission IDs to be assigned
   */
  async assignPermissions(userId, permissionIdList) {
    return await this.http.post(`/users/${userId}/permissions/`, permissionIdList);
  }
  /**
   * @param userId User identifier
   * @param permissionIdList List of permission IDs to be unassigned
   */
  async unassignPermissions(userId, permissionIdList) {
    return await this.http.delete(`/users/${userId}/permissions/`, permissionIdList);
  }
  /**
   * @param userId User identifier
   * @param queryParams Query parameters
   * @param queryParams.limit Limit the number of results returned
   * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
   * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
   * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
   * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
   */
  async getRoles(userId, queryParams) {
    return await this.http.get(`/users/${userId}/roles/${encodedQueryString(queryParams)}`);
  }
  /**
   * @param userId User identifier
   * @param roleIdList List of role IDs to be assigned
   */
  async assignRoles(userId, roleIdList) {
    return await this.http.post(`/users/${userId}/roles/`, roleIdList);
  }
  /**
   * @param userId User identifier
   * @param roleIdList List of role IDs to be unassigned
   */
  async unassignRoles(userId, roleIdList) {
    return await this.http.delete(`/users/${userId}/roles/`, roleIdList);
  }
  /**
   * @param userId User identifier
   * @param queryParams Query parameters
   * @param queryParams.limit Limit the number of results returned
   * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
   * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
   * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
   * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
   */
  async getRoleGroups(userId, queryParams) {
    return await this.http.get(`/users/${userId}/role-groups/${encodedQueryString(queryParams)}`);
  }
  /**
   * @param userId User identifier
   * @param roleGroupIdList List of role group IDs to be assigned
   */
  async assignRoleGroups(userId, roleGroupIdList) {
    return await this.http.post(`/users/${userId}/role-groups/`, roleGroupIdList);
  }
  /**
   * @param userId User identifier
   * @param roleGroupIdList List of role groups IDs to be unassigned
   */
  async unassignRoleGroups(userId, roleGroupIdList) {
    return await this.http.delete(`/users/${userId}/role-groups/`, roleGroupIdList);
  }
  /**
   * Retrieve a list of user sessions with optional pagination. If no pagination parameters are provided, all sessions are returned.
  
   * @param userId User identifier
   * @param queryParams Query parameters
   * @param queryParams.limit Limit the number of results returned
   * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
   */
  async getSessions(userId, queryParams) {
    return await this.http.get(`/users/${userId}/session/${encodedQueryString(queryParams)}`);
  }
  /**
   * @param userId User identifier
   */
  async endSessions(userId) {
    return await this.http.delete(`/users/${userId}/session/`);
  }
  /**
   * @param userId User identifier
   * @param sessionId Session identifier
   */
  async endSession(userId, sessionId) {
    return await this.http.delete(`/users/${userId}/session/${sessionId}`);
  }
};

// src/api/views.ts
var ViewService = class extends HttpService {
  /**
   * @param type 
   */
  async get(type) {
    return await this.http.get(`/views/${type}/`);
  }
  /**
   * @param type 
   * @param data View content. Pass null or empty to reset to default
   */
  async update(type, data) {
    return await this.http.patch(`/views/${type}/`, data);
  }
};

// src/index.ts
var PlusAuthRestClient = class {
  set token(token) {
    this.options.token = token;
  }
  /**
   * @param apiUri  Your PlusAuth tenant url. It must be a valid url.
   * @param options Object containing Authorization token to put in requests
   */
  constructor(apiUri, options = {}) {
    this.options = options;
    this.administrators = new TenantAdministratorService(apiUri, this.options);
    this.clients = new ClientService(apiUri, this.options);
    this.connections = new ConnectionService(apiUri, this.options);
    this.customDomains = new CustomDomainService(apiUri, this.options);
    this.hooks = new HookService(apiUri, this.options);
    this.keys = new KeyService(apiUri, this.options);
    this.jobs = new JobService(apiUri, this.options);
    this.logs = new LogService(apiUri, this.options);
    this.mfa = new MfaService(apiUri, this.options);
    this.moduleSettings = new ModuleSettingService(apiUri, this.options);
    this.providers = new ProviderService(apiUri, this.options);
    this.resources = new ResourceService(apiUri, this.options);
    this.roleGroups = new RoleGroupService(apiUri, this.options);
    this.roles = new RoleService(apiUri, this.options);
    this.templates = new TemplateService(apiUri, this.options);
    this.tenants = new TenantService(apiUri, this.options);
    this.users = new UserService(apiUri, this.options);
    this.views = new ViewService(apiUri, this.options);
  }
};
var src_default = (apiUri, options = {}) => new PlusAuthRestClient(apiUri, options);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PlusAuthRestClient,
  PlusAuthRestError
});
