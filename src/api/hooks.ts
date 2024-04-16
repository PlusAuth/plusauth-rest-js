import type { PaginatedResult , Hook , CreateHook , UpdateHook } from '../models.js';

import { HttpService } from '../http.js';
import { encodedQueryString } from '../utils.js';

export class HookService extends HttpService {
  async getAll( queryParams?: { offset?: number; limit?: number; sort_by?: string; q?: string; } ): Promise<PaginatedResult<Hook>> {
    return this.http.get( `/hooks${ encodedQueryString( queryParams ) }` );
  }

  async create( data: CreateHook ): Promise<Hook> {
    return this.http.post( '/hooks', data );
  }

  async get( hook_id: string ): Promise<Hook> {
    return this.http.get( `/hooks/${ hook_id }` );
  }

  async update( hook_id: string, data: UpdateHook ): Promise<Hook> {
    return this.http.patch( `/hooks/${ hook_id }`, data );
  }

  async remove( hook_id: string ): Promise<void> {
    return this.http.delete( `/hooks/${ hook_id }` );
  }
}
