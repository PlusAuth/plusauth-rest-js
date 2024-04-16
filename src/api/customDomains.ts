import type { PaginatedResult , TenantCustomDomain , CreateTenantCustomDomain } from '../models.js';

import { HttpService } from '../http.js';
import { encodedQueryString } from '../utils.js';

export class CustomDomainService extends HttpService {
  async getAll( queryParams?: { offset?: number; limit?: number; sort_by?: string; q?: string; } ): Promise<PaginatedResult<TenantCustomDomain>> {
    return this.http.get( `/custom-domain${ encodedQueryString( queryParams ) }` );
  }

  async create( data: CreateTenantCustomDomain ): Promise<TenantCustomDomain> {
    return this.http.post( '/custom-domain', data );
  }

  async get( domain: string ): Promise<TenantCustomDomain> {
    return this.http.get( `/custom-domain/${ domain }` );
  }

  async remove( domain: string ): Promise<void> {
    return this.http.delete( `/custom-domain/${ domain }` );
  }

  async verifyOwnership( domain: string ): Promise<Record<string, any>> {
    return this.http.get( `/custom-domain/${ domain }/verify` );
  }
}
