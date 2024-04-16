import type { PaginatedResult , Resource , CreateResource , UpdateResource , Permission , CreatePermission , ResourceAuthorizedClient , StringArray } from '../models.js';

import { HttpService } from '../http.js';
export declare class ResourceService extends HttpService {
  getAll( queryParams?: {
    offset?: number;
    limit?: number;
    sort_by?: string;
    q?: string;
  } ): Promise<PaginatedResult<Resource>>;
  create( data: CreateResource ): Promise<Resource>;
  get( resource_id: string ): Promise<Resource>;
  update( resource_id: string, data: UpdateResource ): Promise<Resource>;
  remove( resource_id: string ): Promise<void>;
  getPermissions( resource_id: string, queryParams?: {
    offset?: number;
    limit?: number;
    sort_by?: string;
    q?: string;
  } ): Promise<PaginatedResult<Permission>>;
  createPermission( resource_id: string, data: CreatePermission ): Promise<Permission>;
  deletePermission( resource_id: string, permission_id: string ): Promise<void>;
  getAuthorizedClients( resource_id: string ): Promise<PaginatedResult<ResourceAuthorizedClient>>;
  authorizeClients( resource_id: string, data: StringArray ): Promise<void>;
  unauthorizeClients( resource_id: string, data: StringArray ): Promise<void>;
  getAssignedPermissionsOfClient( resource_id: string, client_id: string, queryParams?: {
    offset?: number;
    limit?: number;
    sort_by?: string;
  } ): Promise<Permission[]>;
  authorizePermissionForClient( resource_id: string, client_id: string, data: string[] ): Promise<void>;
  unauthorizePermissionFromClient( resource_id: string, client_id: string, data: string[] ): Promise<void>;
}
