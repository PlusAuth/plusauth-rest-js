import {
  ApiService,
  UserService,
  ClientService,
  RoleService,
  RoleGroupService,
  TenantService, ViewService, TemplateService, HookService, FederatedService,
  CustomDomainService, LogService, MFAService
} from './api';


// export * from './constants'
export * from './interfaces'
// export * from './http'
// export * from './api'

type Options = {
  token?: string | ( () => string )
} & Record<string, string>

/**
 *
 * Entrypoint and main class of the library.
 *
 * @example
 * ```js
 * const pa = new PlusAuthRestClient("https://mytenant.plusauth.com");
 * pa.options.token = "ACCESS_TOKEN";
 * ```
 *
 * @example
 * Initialize with token
 * ```js
 * const pa = new PlusAuthRestClient("https://mytenant.plusauth.com", { token: "ACCESS_TOKEN" });
 * ```
 *
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
export default class PlusAuthRestClient {
  readonly apis: ApiService;

  readonly users: UserService;

  readonly clients: ClientService;

  readonly customDomains: CustomDomainService;

  readonly federated: FederatedService;

  readonly hooks: HookService;

  readonly logs: LogService;

  readonly mfa: MFAService;

  readonly roleGroups: RoleGroupService;

  readonly roles: RoleService;

  readonly templates: TemplateService;

  readonly tenants: TenantService;

  readonly views: ViewService;

  options: Options

  /**
   * @param apiUri - Your PlusAuth tenant url. It must be a valid url.
   * @param options - Object containing Authorization token to put in requests
   */
  constructor( apiUri: string, options: Options = {} ) {
    this.options = options

    this.apis = new ApiService( apiUri, this.options );
    this.clients = new ClientService( apiUri, this.options );
    this.customDomains = new CustomDomainService( apiUri, this.options );
    this.federated = new FederatedService( apiUri, this.options );
    this.hooks = new HookService( apiUri, this.options );
    this.logs = new LogService( apiUri, this.options )
    this.mfa = new MFAService( apiUri, this.options )
    this.roleGroups = new RoleGroupService( apiUri, this.options );
    this.roles = new RoleService( apiUri, this.options );
    this.templates = new TemplateService( apiUri, this.options );
    this.tenants = new TenantService( apiUri, this.options );
    this.users = new UserService( apiUri, this.options );
    this.views = new ViewService( apiUri, this.options );
  }
}
