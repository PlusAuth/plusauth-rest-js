import type { PaginatedResult , Hook , CreateHook , UpdateHook } from '../models.js';

import { HttpService } from '../http.js';
export declare class HookService extends HttpService {
  getAll( queryParams?: {
    offset?: number;
    limit?: number;
    sort_by?: string;
    q?: string;
  } ): Promise<PaginatedResult<Hook>>;
  create( data: CreateHook ): Promise<Hook>;
  get( hook_id: string ): Promise<Hook>;
  update( hook_id: string, data: UpdateHook ): Promise<Hook>;
  remove( hook_id: string ): Promise<void>;
}
