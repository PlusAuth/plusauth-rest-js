import { EmailProvider, SMSProvider } from '../constants/providers';
import { HttpService } from '../http';
import {
  IPagination,
  ITenant,
  ITenantSettings,
  PaginatedResult,
  ITenantAdministrator, IStats,
  IEmailProviderSettings,
  ISMSProviderSettings,
} from '../interfaces';

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
   * Create in 'tr' region.
   *
   * ```js
   * const createdTenant = await plusAuth.tenants.create({ tenant_id: 'myuniquetenantid', region: 'tr' })
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

  /**
   * Send admin invitation to an email.
   *
   * @param tenantId - Tenant to invite the admin
   * @param email - Email of invitation recipient
   *
   * @example
   * ```js
   * if(await plusAuth.tenants.inviteAdmin('TENANT_ID', 'john@doe.com' )){
   *   console.log('invitation sent')
   * }
   * ```
   */
  async inviteAdmin( tenantId: string, email: string ): Promise<void> {
    return this.http.post( `/${ tenantId }/invite`, { email } );
  }


  /**
   * Retrieve administrators of tenant including all invited ones.
   *
   * @param tenantId - Id of the tenant
   *
   * @example
   * ```js
   * const administrators = await plusAuth.tenants.getAdministrators('TENANT_ID')
   * ```
   */
  async getAdministrators( tenantId: string ): Promise<ITenantAdministrator> {
    return this.http.get( `/${ tenantId }/administrators` );
  }

  /**
   * Remove and administrator from your tenant
   *
   * @param tenantId - Tenant to invite the admin
   * @param email - Email of administrator
   *
   * @example
   * ```js
   * if(await plusAuth.tenants.removeAdministrator('TENANT_ID', 'john@doe.com' )){
   *   console.log('administrator removed')
   * }
   * ```
   */
  async removeAdministrator( tenantId: string, email: string ): Promise<void> {
    return this.http.delete( `/${ tenantId }/administrators/${ email }` );
  }

  /**
   * Retrieve usage stats of tenant
   *
   * @param tenantId - Id of the tenant
   * @param queryOptions - Additional filters
   *
   * @example
   * ```js
   * const stats = await plusAuth.tenants.getStats('TENANT_ID')
   * ```
   */
  async getStats( tenantId: string, queryOptions?: Pick<IPagination, 'q'> ): Promise<IStats> {
    return this.http.get( `/${ tenantId }/stats${ encodedQueryString( queryOptions ) }` );
  }

  /**
   * Retrieve SMS provider settings
   *
   * @param tenantId - Your tenant ID
   * @param provider - If necessary, specific provider type
   *
   * @example
   * ```js
   * const smsProviderSettings = await plusAuth.tenants.getSMSProviderSettings('MY_TENANT_ID')
   * ```
   */
  async getSMSProviderSettings(
    tenantId: string,
    provider?: SMSProvider
  ): Promise<ISMSProviderSettings>{
    return this.http.get( `/${ tenantId }/provider/sms${ provider ? `/${ provider }` : '' }` );
  }

  /**
   * Update SMS provider settings
   *
   * @param tenantId - Your tenant ID
   * @param settings - SMS Provider settings
   *
   * @example
   * ```js
   * if(await plusAuth.tenants.updateSMSProviderSettings('MY_TENANT_ID', {
   *   provider: SMSProvider.MESSAGEBIRD,
   *   settings: {
   *      apiKey: 'MESSAGE_BIRD_API_KEY',
   *      originator: 'MESSAGE_BIRD_ORIGINATOR'
   *   }
   * })){
   *   console.log('sms provider settings updated')
   * }
   * ```
   */
  async updateSMSProviderSettings(
    tenantId: string,
    settings: ISMSProviderSettings
  ): Promise<ISMSProviderSettings>{
    return this.http.patch( `/${ tenantId }/provider/sms`, settings );
  }


  /**
   * Retrieve Email provider settings
   *
   * @param tenantId - Your tenant ID
   * @param provider - If necessary, specific provider type
   *
   * @example
   * ```js
   * const emailProviderSettings = await plusAuth.tenants.getEmailProviderSettings('MY_TENANT_ID')
   * ```
   */
  async getEmailProviderSettings(
    tenantId: string,
    provider?: EmailProvider
  ): Promise<IEmailProviderSettings>{
    return this.http.get( `/${ tenantId }/provider/email${ provider ? `/${ provider }` : '' }` );
  }


  /**
   * Update Email provider settings
   *
   * @param tenantId - Your tenant ID
   * @param settings - SMS Provider settings
   *
   * @example
   * ```js
   * if(await plusAuth.tenants.updateEmailProviderSettings('MY_TENANT_ID', {
   *   provider: EmailProvider.SENDGRID,
   *   settings: {
   *      api_key: 'SENDGRID_API_KEY',
   *   }
   * })){
   *   console.log('email provider settings updated')
   * }
   * ```
   */
  async updateEmailProviderSettings(
    tenantId: string,
    settings: IEmailProviderSettings
  ): Promise<IEmailProviderSettings>{
    return this.http.patch( `/${ tenantId }/provider/email`, settings );
  }
}
