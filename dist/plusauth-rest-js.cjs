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
      this._raw = error;
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
  } else if (options.responseType === "json" || contentType && contentType.indexOf("application/json") > -1) {
    return await response.json();
  } else {
    return await response.text();
  }
}
function wrapInError(reject) {
  return function(err) {
    reject(new PlusAuthRestError(err));
  };
}
function fetchAsPromise(url, options) {
  return new Promise(function(resolve, reject) {
    fetchPn(url, options).then((rawResponse) => {
      const clone = rawResponse.clone();
      if (rawResponse.ok) {
        parseFetchResponse(clone, options).then(resolve).catch(wrapInError(reject));
      } else if (rawResponse.status === 400) {
        parseFetchResponse(clone, options).then((value) => {
          if (value.error === "xhr_request" && value.location) {
            window?.location?.replace(value.location);
            return false;
          } else {
            reject(value);
          }
        }).catch(wrapInError(reject));
      } else {
        parseFetchResponse(clone, options).then(wrapInError(reject)).catch(wrapInError(reject));
      }
    }).catch(wrapInError(reject));
  });
}
var HttpService = class {
  constructor(apiURL, options = {}) {
    if (!apiURL) {
      throw new Error("'apiURL' must be provided");
    }
    try {
      new URL(apiURL);
    } catch (e) {
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
    ["get", "post", "patch", "delete"].forEach((method) => {
      http[method] = function(...args) {
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
            "Accept": "application/json",
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            ...token ? { Authorization: `Bearer ${token}` } : {},
            ...options.version ? { "X-PlusAuth-Version": options.version } : {}
          }
        };
        if (args.length > 1) {
          method !== "get" ? fetchOptions.body = typeof args[1] === "object" ? JSON.stringify(args[1]) : args[1] : null;
        }
        if (!!args[2] && typeof args[2] === "object") {
          fetchOptions = deepmerge(fetchOptions, args[2]);
        }
        return httpClient.call(null, _baseUrl + args[0], fetchOptions);
      };
    });
    this._baseUrl = _baseUrl;
    this.http = http;
  }
  get baseUrl() {
    return this._baseUrl;
  }
};
HttpService.prefix = "";

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
  } else {
    return ret.join("&");
  }
}

// src/api/clients.ts
var ClientService = class extends HttpService {
  async getAll(queryParams) {
    return this.http.get(`/clients${encodedQueryString(queryParams)}`);
  }
  async create(data) {
    return this.http.post("/clients", data);
  }
  async get(client_id) {
    return this.http.get(`/clients/${client_id}`);
  }
  async update(client_id, data) {
    return this.http.patch(`/clients/${client_id}`, data);
  }
  async remove(client_id) {
    return this.http.delete(`/clients/${client_id}`);
  }
};

// src/api/connections.ts
var ConnectionService = class extends HttpService {
  async getAll(queryParams) {
    return this.http.get(`/connections${encodedQueryString(queryParams)}`);
  }
  async create(data) {
    return this.http.post("/connections", data);
  }
  async get(name) {
    return this.http.get(`/connections/${name}`);
  }
  async update(name, data) {
    return this.http.patch(`/connections/${name}`, data);
  }
  async remove(name) {
    return this.http.delete(`/connections/${name}`);
  }
};

// src/api/customDomains.ts
var CustomDomainService = class extends HttpService {
  async getAll(queryParams) {
    return this.http.get(`/custom-domain${encodedQueryString(queryParams)}`);
  }
  async create(data) {
    return this.http.post("/custom-domain", data);
  }
  async get(domain) {
    return this.http.get(`/custom-domain/${domain}`);
  }
  async remove(domain) {
    return this.http.delete(`/custom-domain/${domain}`);
  }
  async verifyOwnership(domain) {
    return this.http.get(`/custom-domain/${domain}/verify`);
  }
};

// src/api/hooks.ts
var HookService = class extends HttpService {
  async getAll(queryParams) {
    return this.http.get(`/hooks${encodedQueryString(queryParams)}`);
  }
  async create(data) {
    return this.http.post("/hooks", data);
  }
  async get(hook_id) {
    return this.http.get(`/hooks/${hook_id}`);
  }
  async update(hook_id, data) {
    return this.http.patch(`/hooks/${hook_id}`, data);
  }
  async remove(hook_id) {
    return this.http.delete(`/hooks/${hook_id}`);
  }
};

// src/api/keys.ts
var KeyService = class extends HttpService {
  async get(key_type) {
    return this.http.get(`/keys/${key_type}`);
  }
  async rotate(key_type, data) {
    return this.http.post(`/keys/${key_type}/rotate`, data);
  }
  async revoke(key_type, kid) {
    return this.http.get(`/keys/${key_type}/revoke/${kid}`);
  }
};

// src/api/logs.ts
var LogService = class extends HttpService {
  async getAll(queryParams) {
    return this.http.get(`/logs${encodedQueryString(queryParams)}`);
  }
};

// src/api/mfa.ts
var MfaService = class extends HttpService {
  async getAll(queryParams) {
    return this.http.get(`/mfa${encodedQueryString(queryParams)}`);
  }
  async create(data) {
    return this.http.post("/mfa", data);
  }
  async get(type) {
    return this.http.get(`/mfa/${type}`);
  }
  async update(type, data) {
    return this.http.patch(`/mfa/${type}`, data);
  }
  async remove(type) {
    return this.http.delete(`/mfa/${type}`);
  }
};

// src/api/providers.ts
var ProviderService = class extends HttpService {
  async getEmailSettings() {
    return this.http.get("/providers/email");
  }
  async updateEmailSettings(data) {
    return this.http.patch("/providers/email", data);
  }
};

// src/api/resources.ts
var ResourceService = class extends HttpService {
  async getAll(queryParams) {
    return this.http.get(`/resources${encodedQueryString(queryParams)}`);
  }
  async create(data) {
    return this.http.post("/resources", data);
  }
  async get(resource_id) {
    return this.http.get(`/resources/${resource_id}`);
  }
  async update(resource_id, data) {
    return this.http.patch(`/resources/${resource_id}`, data);
  }
  async remove(resource_id) {
    return this.http.delete(`/resources/${resource_id}`);
  }
  async getPermissions(resource_id, queryParams) {
    return this.http.get(`/resources/${resource_id}/permissions${encodedQueryString(queryParams)}`);
  }
  async createPermission(resource_id, data) {
    return this.http.post(`/resources/${resource_id}/permissions`, data);
  }
  async deletePermission(resource_id, permission_id) {
    return this.http.delete(`/resources/${resource_id}/permissions/${permission_id}`);
  }
  async getAuthorizedClients(resource_id, queryParams) {
    return this.http.get(`/resources/${resource_id}/authorized_clients${encodedQueryString(queryParams)}`);
  }
  async authorizeClients(resource_id, data) {
    return this.http.post(`/resources/${resource_id}/authorized_clients`, data);
  }
  async unauthorizeClients(resource_id, data) {
    return this.http.delete(`/resources/${resource_id}/authorized_clients`, data);
  }
  async getAssignedPermissionsOfClient(resource_id, client_id, queryParams) {
    return this.http.get(`/resources/${resource_id}/authorized_clients/${client_id}/permissions${encodedQueryString(queryParams)}`);
  }
  async authorizePermissionForClient(resource_id, client_id, data) {
    return this.http.post(`/resources/${resource_id}/authorized_clients/${client_id}/permissions`, data);
  }
  async unauthorizePermissionFromClient(resource_id, client_id, data) {
    return this.http.delete(`/resources/${resource_id}/authorized_clients/${client_id}/permissions`, data);
  }
};

// src/api/roleGroups.ts
var RoleGroupService = class extends HttpService {
  async getAll(queryParams) {
    return this.http.get(`/role-groups${encodedQueryString(queryParams)}`);
  }
  async create(data) {
    return this.http.post("/role-groups", data);
  }
  async get(role_group_id) {
    return this.http.get(`/role-groups/${role_group_id}`);
  }
  async update(role_group_id, data) {
    return this.http.patch(`/role-groups/${role_group_id}`, data);
  }
  async remove(role_group_id) {
    return this.http.delete(`/role-groups/${role_group_id}`);
  }
  async getRoles(role_group_id, queryParams) {
    return this.http.get(`/role-groups/${role_group_id}/roles${encodedQueryString(queryParams)}`);
  }
  async addRoles(role_group_id, data) {
    return this.http.post(`/role-groups/${role_group_id}/roles`, data);
  }
  async removeRoles(role_group_id, data) {
    return this.http.delete(`/role-groups/${role_group_id}/roles`, data);
  }
  async getUsers(role_group_id, queryParams) {
    return this.http.get(`/role-groups/${role_group_id}/users${encodedQueryString(queryParams)}`);
  }
};

// src/api/roles.ts
var RoleService = class extends HttpService {
  async getAll(queryParams) {
    return this.http.get(`/roles${encodedQueryString(queryParams)}`);
  }
  async create(data) {
    return this.http.post("/roles", data);
  }
  async get(role_id) {
    return this.http.get(`/roles/${role_id}`);
  }
  async update(role_id, data) {
    return this.http.patch(`/roles/${role_id}`, data);
  }
  async remove(role_id) {
    return this.http.delete(`/roles/${role_id}`);
  }
  async getPermissions(role_id, queryParams) {
    return this.http.get(`/roles/${role_id}/permissions${encodedQueryString(queryParams)}`);
  }
  async addPermissions(role_id, data) {
    return this.http.post(`/roles/${role_id}/permissions`, data);
  }
  async removePermissions(role_id, data) {
    return this.http.delete(`/roles/${role_id}/permissions`, data);
  }
  async getUsers(role_id, queryParams) {
    return this.http.get(`/roles/${role_id}/users${encodedQueryString(queryParams)}`);
  }
};

// src/api/templates.ts
var TemplateService = class extends HttpService {
  async get(type, name) {
    return this.http.get(`/templates/${type}/${name}`);
  }
  async update(type, name, data) {
    return this.http.patch(`/templates/${type}/${name}`, data);
  }
  async reset(type, name) {
    return this.http.delete(`/templates/${type}/${name}`);
  }
};

// src/api/tenants.ts
var TenantService = class extends HttpService {
  async create(data) {
    return this.http.post("/tenants", data);
  }
  async remove(tenant_id) {
    return this.http.delete(`/tenants/${tenant_id}`);
  }
  async inviteAdmin(tenant_id, data) {
    return this.http.post(`/tenants/${tenant_id}/invite`, data);
  }
  async getAdministrators(tenant_id) {
    return this.http.get(`/tenants/${tenant_id}/administrators`);
  }
  async removeAdministrators(tenant_id, email) {
    return this.http.delete(`/tenants/${tenant_id}/administrators/${email}`);
  }
  async assignPermissionsToAdmin(tenant_id, admin_id, data) {
    return this.http.post(`/tenants/${tenant_id}/administrators/${admin_id}/permissions`, data);
  }
  async unassignPermissionsFromAdmin(tenant_id, admin_id, data) {
    return this.http.delete(`/tenants/${tenant_id}/administrators/${admin_id}/permissions`, data);
  }
  async getStats(tenant_id) {
    return this.http.get(`/tenants/${tenant_id}/stats`);
  }
  async getSettings(tenant_id) {
    return this.http.get(`/tenants/${tenant_id}/settings`);
  }
  async updateSettings(tenant_id, data) {
    return this.http.patch(`/tenants/${tenant_id}/settings`, data);
  }
};

// src/api/users.ts
var UserService = class extends HttpService {
  async getAll(queryParams) {
    return this.http.get(`/users${encodedQueryString(queryParams)}`);
  }
  async create(data) {
    return this.http.post("/users", data);
  }
  async get(user_id) {
    return this.http.get(`/users/${user_id}`);
  }
  async update(user_id, data) {
    return this.http.patch(`/users/${user_id}`, data);
  }
  async remove(user_id) {
    return this.http.delete(`/users/${user_id}`);
  }
  async getRbac(user_id) {
    return this.http.get(`/users/${user_id}/rbac`);
  }
  async getPermissions(user_id) {
    return this.http.get(`/users/${user_id}/permissions`);
  }
  async assignPermissions(user_id, data) {
    return this.http.post(`/users/${user_id}/permissions`, data);
  }
  async unassignPermissions(user_id, data) {
    return this.http.delete(`/users/${user_id}/permissions`, data);
  }
  async getRoleGroups(user_id) {
    return this.http.get(`/users/${user_id}/role_groups`);
  }
  async assignRoleGroups(user_id, data) {
    return this.http.post(`/users/${user_id}/role_groups`, data);
  }
  async unassignRoleGroups(user_id, data) {
    return this.http.delete(`/users/${user_id}/role_groups`, data);
  }
  async getRoles(user_id) {
    return this.http.get(`/users/${user_id}/roles`);
  }
  async assignRoles(user_id, data) {
    return this.http.post(`/users/${user_id}/roles`, data);
  }
  async unassignRoles(user_id, data) {
    return this.http.delete(`/users/${user_id}/roles`, data);
  }
  async getTenants(user_id) {
    return this.http.get(`/users/${user_id}/tenants`);
  }
  async getSessions(user_id) {
    return this.http.get(`/users/${user_id}/session`);
  }
  async endAllSessions(user_id) {
    return this.http.delete(`/users/${user_id}/session`);
  }
  async endSession(user_id, sid) {
    return this.http.delete(`/users/${user_id}/session/${sid}`);
  }
  async removeCredential(user_id, credential_id) {
    return this.http.delete(`/users/${user_id}/credentials/${credential_id}`);
  }
};

// src/api/views.ts
var ViewService = class extends HttpService {
  async get(type) {
    return this.http.get(`/views/${type}`);
  }
  async update(type, data) {
    return this.http.patch(`/views/${type}`, data);
  }
};

// src/index.ts
var PlusAuthRestClient = class {
  set token(token) {
    this.options.token = token;
  }
  /**
   * @param apiUri - Your PlusAuth tenant url. It must be a valid url.
   * @param options - Object containing Authorization token to put in requests
   */
  constructor(apiUri, options = {}) {
    this.options = options;
    this.resources = new ResourceService(apiUri, this.options);
    this.clients = new ClientService(apiUri, this.options);
    this.connections = new ConnectionService(apiUri, this.options);
    this.customDomains = new CustomDomainService(apiUri, this.options);
    this.hooks = new HookService(apiUri, this.options);
    this.keys = new KeyService(apiUri, this.options);
    this.logs = new LogService(apiUri, this.options);
    this.mfa = new MfaService(apiUri, this.options);
    this.providers = new ProviderService(apiUri, this.options);
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
