import {
  ClientService,
  ConnectionService,
  CustomDomainService,
  HookService,
  KeyService,
  LogService,
  MfaService,
  ProviderService,
  ResourceService,
  RoleGroupService,
  RoleService,
  TemplateService,
  TenantAdministratorService,
  TenantService,
  UserService,
  ViewService,
} from "./api"

interface Options {
  httpClient?: (uri: string, options: RequestInit) => Promise<any>
  token?: string | (() => string)
  version?: string
}

/**
 *
 * Entrypoint and main class of the library.
 * @example
 * ```js
 * const pa = new PlusAuthRestClient("https://mytenant.plusauth.com");
 * pa.options.token = "ACCESS_TOKEN";
 * ```
 * @example
 * Initialize with token
 * ```js
 * const pa = new PlusAuthRestClient("https://mytenant.plusauth.com", { token: "ACCESS_TOKEN" });
 * ```
 * @example
 * Retrieve token from a function
 * ```js
 * const pa = new PlusAuthRestClient("https://mytenant.plusauth.com", {
 *    token: function(){
 *      return "ACCESS_TOKEN"
 *    }
 * });
 * ```
 *
 * After initialization, you can call methods from corresponding services.
 * @example
 * ```js
 * const users = await pa.users.getAll()
 * const apis = await pa.apis.getAll()
 * //...
 * ```
 * @public
 */
export class PlusAuthRestClient {
  readonly administrators: InstanceType<typeof TenantAdministratorService>

  readonly clients: InstanceType<typeof ClientService>

  readonly connections: InstanceType<typeof ConnectionService>

  readonly customDomains: InstanceType<typeof CustomDomainService>

  readonly hooks: InstanceType<typeof HookService>

  readonly keys: InstanceType<typeof KeyService>

  readonly logs: InstanceType<typeof LogService>

  readonly mfa: InstanceType<typeof MfaService>

  readonly providers: InstanceType<typeof ProviderService>

  readonly resources: InstanceType<typeof ResourceService>

  readonly roleGroups: InstanceType<typeof RoleGroupService>

  readonly roles: InstanceType<typeof RoleService>

  readonly templates: InstanceType<typeof TemplateService>

  readonly tenants: InstanceType<typeof TenantService>

  readonly users: InstanceType<typeof UserService>

  readonly views: InstanceType<typeof ViewService>

  options: Options

  set token(token: string) {
    this.options.token = token
  }

  /**
   * @param apiUri  Your PlusAuth tenant url. It must be a valid url.
   * @param options Object containing Authorization token to put in requests
   */
  constructor(apiUri: string, options: Options = {}) {
    this.options = options

    this.administrators = new TenantAdministratorService(apiUri, this.options)
    this.clients = new ClientService(apiUri, this.options)
    this.connections = new ConnectionService(apiUri, this.options)
    this.customDomains = new CustomDomainService(apiUri, this.options)
    this.hooks = new HookService(apiUri, this.options)
    this.keys = new KeyService(apiUri, this.options)
    this.logs = new LogService(apiUri, this.options)
    this.mfa = new MfaService(apiUri, this.options)
    this.providers = new ProviderService(apiUri, this.options)
    this.resources = new ResourceService(apiUri, this.options)
    this.roleGroups = new RoleGroupService(apiUri, this.options)
    this.roles = new RoleService(apiUri, this.options)
    this.templates = new TemplateService(apiUri, this.options)
    this.tenants = new TenantService(apiUri, this.options)
    this.users = new UserService(apiUri, this.options)
    this.views = new ViewService(apiUri, this.options)
  }
}

export default (apiUri: string, options: Options = {}): PlusAuthRestClient =>
  new PlusAuthRestClient(apiUri, options)

export type * from "./models.js"

export * from "./error.js"
