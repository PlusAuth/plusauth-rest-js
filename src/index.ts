/**
 * @packageDocumentation
 */
import {
  ApiService,
  UserService,
  ClientService,
  RoleService,
  RoleGroupService,
  TenantService, ViewService, TemplateService, HookService, FederatedService
} from './api';


// export * from './constants'
export * from './interfaces'
// export * from './http'
// export * from './api'

/**
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
 * @public
 */
export default class PlusAuthRestClient {
  readonly apis: ApiService;

  readonly users: UserService;

  readonly clients: ClientService;

  readonly customDomains: CustomDomainService;

  readonly federated: FederatedService;

  readonly hooks: HookService;

  readonly roleGroups: RoleGroupService;

  readonly roles: RoleService;

  readonly templates: TemplateService;

  readonly tenants: TenantService;

  readonly views: ViewService;

  options: { token?: string }

  /**
   * @param apiUri - Your PlusAuth tenant url. It must be a valid url.
   * @param options - Object containing Authorization token to put in requests
   */
  constructor( apiUri: string, options: { token?: string } & Record<string, string> = {} ) {
    this.options = options

    this.apis = new ApiService( apiUri, this.options );
    this.clients = new ClientService( apiUri, this.options );
    this.customDomains = new CustomDomainService( apiUri, this.options );
    this.federated = new FederatedService( apiUri, this.options );
    this.hooks = new HookService( apiUri, this.options );
    this.roleGroups = new RoleGroupService( apiUri, this.options );
    this.roles = new RoleService( apiUri, this.options );
    this.templates = new TemplateService( apiUri, this.options );
    this.tenants = new TenantService( apiUri, this.options );
    this.users = new UserService( apiUri, this.options );
    this.views = new ViewService( apiUri, this.options );
  }
}
