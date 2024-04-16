import type { PaginatedResult , RoleGroup , CreateRoleGroup , UpdateRoleGroup , Role , User } from '../models.js';

import { HttpService } from '../http.js';
export declare class RoleGroupService extends HttpService {
  getAll( queryParams?: {
    offset?: number;
    limit?: number;
    sort_by?: string;
    q?: string;
  } ): Promise<PaginatedResult<RoleGroup>>;
  create( data: CreateRoleGroup ): Promise<RoleGroup>;
  get( role_group_id: string ): Promise<RoleGroup>;
  update( role_group_id: string, data: UpdateRoleGroup ): Promise<RoleGroup>;
  remove( role_group_id: string ): Promise<void>;
  getRoles( role_group_id: string, queryParams?: {
    offset?: number;
    limit?: number;
    sort_by?: string;
  } ): Promise<PaginatedResult<Role>>;
  addRoles( role_group_id: string, data: string[] ): Promise<void>;
  removeRoles( role_group_id: string, data: string[] ): Promise<void>;
  getUsers( role_group_id: string, queryParams?: {
    offset?: number;
    limit?: number;
    sort_by?: string;
  } ): Promise<PaginatedResult<User>>;
}
