import { HttpService } from '../http';
import { IPagination, PaginatedResult } from '../interfaces';
import { ICustomDomain } from '../interfaces';
import { encodedQueryString } from '../utils';

/**
 * Service for interacting custom domains for your tenant.
 */
export class CustomDomainService extends HttpService {
  protected static prefix = '/custom-domain'

  /**
   * Retrieve or filter created custom domains.
   *
   * @param pagination - Object containing pagination options
   *
   * @example
   * Retrieve all Custom Domains
   * ```js
   * const customDomains = plusAuth.customDomains.getAll()
   * ```
   *
   * @example
   * Retrieve first 5 Custom Domains
   * ```js
   * const customDomains = await plusAuth.customDomains.getAll({ itemsPerPage: 5 })
   * ```
   */
  async getAll( pagination: IPagination ): Promise<PaginatedResult<ICustomDomain>> {
    return this.http.get( encodedQueryString( pagination ) );
  }


  /**
   * Get Custom Domain with id
   *
   * @param customDomainId - Custom Domain id
   *
   * @example
   * ```js
   * const customDomain = await plusAuth.customDomains.get('CUSTOM_DOMAIN_ID')
   * ```
   */
  async get( customDomainId: string ): Promise<ICustomDomain> {
    return this.http.get( `/${ customDomainId }` );
  }


  /**
   * Create a custom domain entry
   *
   * @param customDomain - Object containing custom domain properties
   *
   * @example
   * ```js
   * const customDomain = await plusAuth.customDomains.create({ domain: 'myexamplesite.com' })
   * ```
   */
  async create( customDomain: Omit<ICustomDomain, 'validated'> ): Promise<ICustomDomain> {
    return this.http.post( '', customDomain );
  }

  /**
   * Remove a custom domain entry
   *
   * @param customDomainId - Custom Domain Id to be removed
   *
   * @example
   * ```js
   * if( await plusAuth.customDomains.remove('CUSTOM_DOMAIN_ID') ){
   *  console.log('custom domain removed')
   * }
   * ```
   */
  async remove( customDomainId: string ): Promise<void> {
    return this.http.delete( `/${ customDomainId }` );
  }


  /**
   * Trigger validation of custom domain ownership
   *
   * @param customDomainId - Custom Domain Id to be validated
   *
   * @example
   * ```js
   * if( await plusAuth.customDomains.validate('CUSTOM_DOMAIN_ID') ){
   *  console.log('custom domain ownership validated')
   * }
   * ```
   */
  async validate( customDomainId: string ): Promise<void> {
    return this.http.get( `/${ customDomainId }/validate` );
  }
}
