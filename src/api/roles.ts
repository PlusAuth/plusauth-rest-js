import { HttpService } from '../http';
import { PaginatedResult, Role, CreateRole, UpdateRole, Permission, User } from '../models';
import { encodedQueryString } from '../utils';

export class RoleService extends HttpService {
  async getAll( queryParams?: {offset?: number; limit?: number; sort_by?: string; q?: string;} ): Promise<PaginatedResult<Role>> {
    return this.http.get( `/roles${ encodedQueryString( queryParams ) }` );
  }

  async create( data: CreateRole ): Promise<Role> {
    return this.http.post( '/roles', data );
  }

  async get( role_id: string ): Promise<Role> {
    return this.http.get( `/roles/${ role_id }` );
  }

  async update( role_id: string, data: UpdateRole ): Promise<Role> {
    return this.http.patch( `/roles/${ role_id }`, data );
  }

  async remove( role_id: string ): Promise<void> {
    return this.http.delete( `/roles/${ role_id }` );
  }

  async getPermissions( role_id: string, queryParams?: {offset?: number; limit?: number; sort_by?: string; q?: string;} ): Promise<PaginatedResult<Permission>> {
    return this.http.get( `/roles/${ role_id }/permissions${ encodedQueryString( queryParams ) }` );
  }

  async addPermissions( role_id: string, data: string[] ): Promise<Permission> {
    return this.http.post( `/roles/${ role_id }/permissions`, data );
  }

  async removePermissions( role_id: string, data: string[] ): Promise<void> {
    return this.http.delete( `/roles/${ role_id }/permissions`, data );
  }

  async getUsers( role_id: string, queryParams?: {offset?: number; limit?: number; sort_by?: string;} ): Promise<PaginatedResult<User>> {
    return this.http.get( `/roles/${ role_id }/users${ encodedQueryString( queryParams ) }` );
  }
}
