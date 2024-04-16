import { HttpService } from '../http';
import { PaginatedResult, User, CreateUser, UserRbacTree, Permission, RoleGroup, Role, Tenant, UserSession } from '../models';
import { encodedQueryString } from '../utils';

export class UserService extends HttpService {
  async getAll( queryParams?: {offset?: number; limit?: number; sort_by?: string; q?: string;} ): Promise<PaginatedResult<User>> {
    return this.http.get( `/users${ encodedQueryString( queryParams ) }` );
  }

  async create( data: CreateUser ): Promise<User> {
    return this.http.post( '/users', data );
  }

  async get( user_id: string ): Promise<User> {
    return this.http.get( `/users/${ user_id }` );
  }

  async update( user_id: string, data: CreateUser ): Promise<User> {
    return this.http.patch( `/users/${ user_id }`, data );
  }

  async remove( user_id: string ): Promise<void> {
    return this.http.delete( `/users/${ user_id }` );
  }

  async getRbac( user_id: string ): Promise<UserRbacTree> {
    return this.http.get( `/users/${ user_id }/rbac` );
  }

  async getPermissions( user_id: string ): Promise<PaginatedResult<Permission>> {
    return this.http.get( `/users/${ user_id }/permissions` );
  }

  async assignPermissions( user_id: string, data: string[] ): Promise<void> {
    return this.http.post( `/users/${ user_id }/permissions`, data );
  }

  async unassignPermissions( user_id: string, data: string[] ): Promise<void> {
    return this.http.delete( `/users/${ user_id }/permissions`, data );
  }

  async getRoleGroups( user_id: string ): Promise<PaginatedResult<RoleGroup>> {
    return this.http.get( `/users/${ user_id }/role_groups` );
  }

  async assignRoleGroups( user_id: string, data: string[] ): Promise<RoleGroup> {
    return this.http.post( `/users/${ user_id }/role_groups`, data );
  }

  async unassignRoleGroups( user_id: string, data: string[] ): Promise<void> {
    return this.http.delete( `/users/${ user_id }/role_groups`, data );
  }

  async getRoles( user_id: string ): Promise<PaginatedResult<Role>> {
    return this.http.get( `/users/${ user_id }/roles` );
  }

  async assignRoles( user_id: string, data: string[] ): Promise<void> {
    return this.http.post( `/users/${ user_id }/roles`, data );
  }

  async unassignRoles( user_id: string, data: string[] ): Promise<void> {
    return this.http.delete( `/users/${ user_id }/roles`, data );
  }

  async getTenants( user_id: string ): Promise<PaginatedResult<Tenant>> {
    return this.http.get( `/users/${ user_id }/tenants` );
  }

  async getSessions( user_id: string ): Promise<UserSession[]> {
    return this.http.get( `/users/${ user_id }/session` );
  }

  async endAllSessions( user_id: string ): Promise<void> {
    return this.http.delete( `/users/${ user_id }/session` );
  }

  async removeCredential( user_id: string, credential_id: string ): Promise<void> {
    return this.http.delete( `/users/${ user_id }/credentials/${ credential_id }` );
  }

  async endSession( user_id: string, sid: string ): Promise<void> {
    return this.http.delete( `/users/${ user_id }/session/${ sid }` );
  }
}
