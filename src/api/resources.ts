import type { PaginatedResult , Resource , CreateResource , UpdateResource , Permission , CreatePermission , ResourceAuthorizedClient , StringArray } from '../models.js';

import { HttpService } from '../http.js';
import { encodedQueryString } from '../utils.js';

export class ResourceService extends HttpService {
  async getAll( queryParams?: { offset?: number; limit?: number; sort_by?: string; q?: string; } ): Promise<PaginatedResult<Resource>> {
    return this.http.get( `/resources${ encodedQueryString( queryParams ) }` );
  }

  async create( data: CreateResource ): Promise<Resource> {
    return this.http.post( '/resources', data );
  }

  async get( resource_id: string ): Promise<Resource> {
    return this.http.get( `/resources/${ resource_id }` );
  }

  async update( resource_id: string, data: UpdateResource ): Promise<Resource> {
    return this.http.patch( `/resources/${ resource_id }`, data );
  }

  async remove( resource_id: string ): Promise<void> {
    return this.http.delete( `/resources/${ resource_id }` );
  }

  async getPermissions( resource_id: string, queryParams?: { offset?: number; limit?: number; sort_by?: string; q?: string; } ): Promise<PaginatedResult<Permission>> {
    return this.http.get( `/resources/${ resource_id }/permissions${ encodedQueryString( queryParams ) }` );
  }

  async createPermission( resource_id: string, data: CreatePermission ): Promise<Permission> {
    return this.http.post( `/resources/${ resource_id }/permissions`, data );
  }

  async deletePermission( resource_id: string, permission_id: string ): Promise<void> {
    return this.http.delete( `/resources/${ resource_id }/permissions/${ permission_id }` );
  }

  async getAuthorizedClients( resource_id: string ): Promise<PaginatedResult<ResourceAuthorizedClient>> {
    return this.http.get( `/resources/${ resource_id }/authorized_clients` );
  }

  async authorizeClients( resource_id: string, data: StringArray ): Promise<void> {
    return this.http.post( `/resources/${ resource_id }/authorized_clients`, data );
  }

  async unauthorizeClients( resource_id: string, data: StringArray ): Promise<void> {
    return this.http.delete( `/resources/${ resource_id }/authorized_clients`, data );
  }

  async getAssignedPermissionsOfClient( resource_id: string, client_id: string, queryParams?: { offset?: number; limit?: number; sort_by?: string; } ): Promise<Permission[]> {
    return this.http.get( `/resources/${ resource_id }/authorized_clients/${ client_id }/permissions${ encodedQueryString( queryParams ) }` );
  }

  async authorizePermissionForClient( resource_id: string, client_id: string, data: string[] ): Promise<void> {
    return this.http.post( `/resources/${ resource_id }/authorized_clients/${ client_id }/permissions`, data );
  }

  async unauthorizePermissionFromClient( resource_id: string, client_id: string, data: string[] ): Promise<void> {
    return this.http.delete( `/resources/${ resource_id }/authorized_clients/${ client_id }/permissions`, data );
  }
}
