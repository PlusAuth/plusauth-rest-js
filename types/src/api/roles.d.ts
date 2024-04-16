import type { PaginatedResult , Role , CreateRole , UpdateRole , Permission , User } from '../models.js';

import { HttpService } from '../http.js';
export declare class RoleService extends HttpService {
  getAll( queryParams?: {
    offset?: number;
    limit?: number;
    sort_by?: string;
    q?: string;
  } ): Promise<PaginatedResult<Role>>;
  create( data: CreateRole ): Promise<Role>;
  get( role_id: string ): Promise<Role>;
  update( role_id: string, data: UpdateRole ): Promise<Role>;
  remove( role_id: string ): Promise<void>;
  getPermissions( role_id: string, queryParams?: {
    offset?: number;
    limit?: number;
    sort_by?: string;
    q?: string;
  } ): Promise<PaginatedResult<Permission>>;
  addPermissions( role_id: string, data: string[] ): Promise<Permission>;
  removePermissions( role_id: string, data: string[] ): Promise<void>;
  getUsers( role_id: string, queryParams?: {
    offset?: number;
    limit?: number;
    sort_by?: string;
  } ): Promise<PaginatedResult<User>>;
}
