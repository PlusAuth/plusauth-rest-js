import type { PaginatedResult , Client , CreateClient , UpdateClient } from '../models.js';

import { HttpService } from '../http.js';
export declare class ClientService extends HttpService {
  getAll( queryParams?: {
    offset?: number;
    limit?: number;
    sort_by?: string;
    q?: string;
  } ): Promise<PaginatedResult<Client>>;
  create( data: CreateClient ): Promise<Client>;
  get( client_id: string ): Promise<Client>;
  update( client_id: string, data: UpdateClient ): Promise<Client>;
  remove( client_id: string ): Promise<void>;
}
