import type { PaginatedResult , Connection , UpdateConnection } from '../models.js';

import { HttpService } from '../http.js';
import { encodedQueryString } from '../utils.js';

export class ConnectionService extends HttpService {
  async getAll( queryParams?: { offset?: number; limit?: number; sort_by?: string; q?: string; } ): Promise<PaginatedResult<Connection>> {
    return this.http.get( `/connections${ encodedQueryString( queryParams ) }` );
  }

  async create( data: Connection ): Promise<Connection> {
    return this.http.post( '/connections', data );
  }

  async get( name: string ): Promise<Connection> {
    return this.http.get( `/connections/${ name }` );
  }

  async update( name: string, data: UpdateConnection ): Promise<Connection> {
    return this.http.patch( `/connections/${ name }`, data );
  }

  async remove( name: string ): Promise<void> {
    return this.http.delete( `/connections/${ name }` );
  }
}
