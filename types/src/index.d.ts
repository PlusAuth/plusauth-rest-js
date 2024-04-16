import type { MfaService, ResourceService, UserService, ClientService, RoleService, KeyService, RoleGroupService, TenantService, ViewService, TemplateService, HookService, ConnectionService, CustomDomainService, LogService, ProviderService } from './api.js';
type Options = {
  httpClient?: ( uri: string, options: RequestInit ) => Promise<any>;
  token?: string | ( () => string );
  version?: string;
};
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
export declare class PlusAuthRestClient {
  readonly users: UserService;
  readonly clients: ClientService;
  readonly connections: ConnectionService;
  readonly customDomains: CustomDomainService;
  readonly keys: KeyService;
  readonly hooks: HookService;
  readonly logs: LogService;
  readonly mfa: MfaService;
  readonly providers: ProviderService;
  readonly resources: ResourceService;
  readonly roleGroups: RoleGroupService;
  readonly roles: RoleService;
  readonly templates: TemplateService;
  readonly tenants: TenantService;
  readonly views: ViewService;
  options: Options;
  set token( token: string );
  /**
     * @param apiUri - Your PlusAuth tenant url. It must be a valid url.
     * @param options - Object containing Authorization token to put in requests
     */
  constructor( apiUri: string, options?: Options );
}
declare const _default: ( apiUri: string, options?: Options ) => PlusAuthRestClient;
export default _default;
export type * from './models.js';
export * from './error.js';
