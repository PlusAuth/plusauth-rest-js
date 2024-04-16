import { HttpService } from '../http';
import { PaginatedResult, RoleGroup, CreateRoleGroup, UpdateRoleGroup, Role, User } from '../models';
import { encodedQueryString } from '../utils';

export class RoleGroupService extends HttpService {
  async getAll( queryParams?: {offset?: number; limit?: number; sort_by?: string; q?: string;} ): Promise<PaginatedResult<RoleGroup>> {
    return this.http.get( `/role-groups${ encodedQueryString( queryParams ) }` );
  }

  async create( data: CreateRoleGroup ): Promise<RoleGroup> {
    return this.http.post( '/role-groups', data );
  }

  async get( role_group_id: string ): Promise<RoleGroup> {
    return this.http.get( `/role-groups/${ role_group_id }` );
  }

  async update( role_group_id: string, data: UpdateRoleGroup ): Promise<RoleGroup> {
    return this.http.patch( `/role-groups/${ role_group_id }`, data );
  }

  async remove( role_group_id: string ): Promise<void> {
    return this.http.delete( `/role-groups/${ role_group_id }` );
  }

  async getRoles( role_group_id: string, queryParams?: {offset?: number; limit?: number; sort_by?: string;} ): Promise<PaginatedResult<Role>> {
    return this.http.get( `/role-groups/${ role_group_id }/roles${ encodedQueryString( queryParams ) }` );
  }

  async addRoles( role_group_id: string, data: string[] ): Promise<void> {
    return this.http.post( `/role-groups/${ role_group_id }/roles`, data );
  }

  async removeRoles( role_group_id: string, data: string[] ): Promise<void> {
    return this.http.delete( `/role-groups/${ role_group_id }/roles`, data );
  }

  async getUsers( role_group_id: string, queryParams?: {offset?: number; limit?: number; sort_by?: string;} ): Promise<PaginatedResult<User>> {
    return this.http.get( `/role-groups/${ role_group_id }/users${ encodedQueryString( queryParams ) }` );
  }
}
