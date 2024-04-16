import type { PaginatedResult , User , CreateUser , UserRbacTree , Permission , RoleGroup , Role , Tenant , UserSession } from '../models.js';

import { HttpService } from '../http.js';
export declare class UserService extends HttpService {
  getAll( queryParams?: {
    offset?: number;
    limit?: number;
    sort_by?: string;
    q?: string;
  } ): Promise<PaginatedResult<User>>;
  create( data: CreateUser ): Promise<User>;
  get( user_id: string ): Promise<User>;
  update( user_id: string, data: CreateUser ): Promise<User>;
  remove( user_id: string ): Promise<void>;
  getRbac( user_id: string ): Promise<UserRbacTree>;
  getPermissions( user_id: string ): Promise<PaginatedResult<Permission>>;
  assignPermissions( user_id: string, data: string[] ): Promise<void>;
  unassignPermissions( user_id: string, data: string[] ): Promise<void>;
  getRoleGroups( user_id: string ): Promise<PaginatedResult<RoleGroup>>;
  assignRoleGroups( user_id: string, data: string[] ): Promise<RoleGroup>;
  unassignRoleGroups( user_id: string, data: string[] ): Promise<void>;
  getRoles( user_id: string ): Promise<PaginatedResult<Role>>;
  assignRoles( user_id: string, data: string[] ): Promise<void>;
  unassignRoles( user_id: string, data: string[] ): Promise<void>;
  getTenants( user_id: string ): Promise<PaginatedResult<Tenant>>;
  getSessions( user_id: string ): Promise<UserSession[]>;
  endAllSessions( user_id: string ): Promise<void>;
  removeCredential( user_id: string, credential_id: string ): Promise<void>;
  endSession( user_id: string, sid: string ): Promise<void>;
}
