import type { PaginatedResult , Client , CreateClient , UpdateClient } from '../models.js';

import { HttpService } from '../http.js';
import { encodedQueryString } from '../utils.js';

export class ClientService extends HttpService {
  async getAll( queryParams?: { offset?: number; limit?: number; sort_by?: string; q?: string; } ): Promise<PaginatedResult<Client>> {
    return this.http.get( `/clients${ encodedQueryString( queryParams ) }` );
  }

  async create( data: CreateClient ): Promise<Client> {
    return this.http.post( '/clients', data );
  }

  async get( client_id: string ): Promise<Client> {
    return this.http.get( `/clients/${ client_id }` );
  }

  async update( client_id: string, data: UpdateClient ): Promise<Client> {
    return this.http.patch( `/clients/${ client_id }`, data );
  }

  async remove( client_id: string ): Promise<void> {
    return this.http.delete( `/clients/${ client_id }` );
  }
}
