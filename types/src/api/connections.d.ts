import type { PaginatedResult , Connection , UpdateConnection } from '../models.js';

import { HttpService } from '../http.js';
export declare class ConnectionService extends HttpService {
  getAll( queryParams?: {
    offset?: number;
    limit?: number;
    sort_by?: string;
    q?: string;
  } ): Promise<PaginatedResult<Connection>>;
  create( data: Connection ): Promise<Connection>;
  get( name: string ): Promise<Connection>;
  update( name: string, data: UpdateConnection ): Promise<Connection>;
  remove( name: string ): Promise<void>;
}
