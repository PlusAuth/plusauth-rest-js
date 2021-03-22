import { HttpService } from '../http';
import { IPagination, ITenant, ITenantSettings, PaginatedResult } from '../interfaces';
import { encodedQueryString } from '../utils';

/**
 * Service for interacting with PlusAuth tenants
 *
 * @public
 */
export class TenantService extends HttpService {
  protected static prefix = '/tenants'

  /**
   * Retrieve or filter created tenants. This will retrieve tenants of the user whom the access token is given for.
   *
   * @param pagination - Object containing pagination options
   *
   * @example
   * Retrieve all tenants
   * ```js
   * const tenants = await plusAuth.tenants.getAll();
   * ```
   *
   * @example
   * Retrieve first 5 tenants
   * ```js
   * const tenants = await plusAuth.tenants.getAll({ itemsPerPage: 5 })
   * ```
   */
  async getAll( pagination?: IPagination ): Promise<PaginatedResult<ITenant>> {
    return this.http.get( `${ encodedQueryString( pagination ) }` );
  }

  /**
   * Create a tenant
   *
   * @param tenant - Tenant object
   *
   * @example
   * ```js
   * const createdTenant = await plusAuth.tenants.create({tenant_id: 'myuniquetenantid'})
   * ```
   *
   * @example
   * Create in 'eu' region.
   *
   * ```js
   * const createdTenant = await plusAuth.tenants.create({ tenant_id: 'myuniquetenantid', region: 'eu' })
   * ```
   */
  async create( tenant: ITenant ): Promise<ITenant> {
    return this.http.post( '', tenant, {
      headers: {
        'X-PlusAuth-Tenant': 'api'
      }
    } );
  }


  /**
   * Delete a tenant
   *
   * @param tenantId - Id of tenant to be deleted
   *
   * @example
   * ```js
   * if( await plusAuth.tenants.delete('YOUR_TENANT_ID') ){
   *   console.log('tenant deleted')
   * }
   * ```
   */
  async delete( tenantId: string ): Promise<void> {
    return this.http.delete( `/${ tenantId }` );
  }

  /**
   * Retrieve settings of a tenant
   *
   * @param tenantId - Id of the tenant
   *
   * @example
   * ```js
   * const tenantSettings = await plusAuth.tenants.getSettings('TENANT_ID')
   * ```
   */
  async getSettings( tenantId: string ): Promise<ITenantSettings> {
    return this.http.get( `/${ tenantId }/settings` );
  }

  /**
   * Update settings of a tenant
   *
   * @param tenantId - Id of tenant
   * @param settings - Object containing to be updated setting and values
   *
   * @example
   * ```js
   * const updatedTenant = await plusAuth.tenants.updateSettings('TENANT_ID', { ttl: { AccessToken: 14000 } } )
   * ```
   */
  async updateSettings( tenantId: string, settings: Partial<ITenantSettings> ): Promise<ITenant> {
    return this.http.patch( `/${ tenantId }/settings`, settings );
  }

  async inviteAdmin( tenantId: string, email: string ) {
    return this.http.post( `/${ tenantId }/invite`, { email } );
  }

  async getAdministrators( tenantId: string ) {
    return this.http.get( `/${ tenantId }/administrators` );
  }

  async removeAdministrator( tenantId: string, email: string ) {
    return this.http.delete( `/${ tenantId }/administrators/${ email }` );
  }

  async getStats( tenantId: string, pagination?: IPagination ) {
    return this.http.get( `/${ tenantId }/stats${ encodedQueryString( pagination ) }` );
  }

  async getSMSProviderSettings( tenantId: string, provider?: string ){
    return this.http.get( `/${ tenantId }/provider/sms${ provider ? `/${ provider }` : '' }` );
  }

  async updateSMSProviderSettings( tenantId: string, settings: {
    provider: string,
    settings: Record<string, string>
  } ){
    return this.http.patch( `/${ tenantId }/provider/sms`, settings );
  }

  async getEmailProviderSettings( tenantId: string, provider?: string ){
    return this.http.get( `/${ tenantId }/provider/email${ provider ? `/${ provider }` : '' }` );
  }

  async updateEmailProviderSettings( tenantId: string, settings: {
    provider: string,
    from: string,
    settings: Record<string, string>
  } ){
    return this.http.patch( `/${ tenantId }/provider/sms`, settings );
  }
}
