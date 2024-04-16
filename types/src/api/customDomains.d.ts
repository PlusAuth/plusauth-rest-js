import type { PaginatedResult , TenantCustomDomain , CreateTenantCustomDomain } from '../models.js';

import { HttpService } from '../http.js';
export declare class CustomDomainService extends HttpService {
  getAll( queryParams?: {
    offset?: number;
    limit?: number;
    sort_by?: string;
    q?: string;
  } ): Promise<PaginatedResult<TenantCustomDomain>>;
  create( data: CreateTenantCustomDomain ): Promise<TenantCustomDomain>;
  get( domain: string ): Promise<TenantCustomDomain>;
  remove( domain: string ): Promise<void>;
  verifyOwnership( domain: string ): Promise<Record<string, any>>;
}
