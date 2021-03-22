import { HttpService } from '../http';
import { IPagination, PaginatedResult, IUser,
  ITenant, IPermission, IRoleGroup, IRole } from '../interfaces';

import { encodedQueryString } from '../utils';
/**
 * Service for interacting PlusAuth users.
 *
 * @public
 */
export class UserService extends HttpService {
  protected static prefix = '/users'

  async getAll( pagination?: IPagination ): Promise<PaginatedResult<IUser>> {
    return this.http.get( encodedQueryString( pagination ) )
  }

  async get( userId: string ): Promise<IUser> {
    return this.http.get( `/${ userId }` )
  }

  async getSessions( userId: string ) {
    return this.http.get( `/${ userId }/session` );
  }

  async endSession( userId: string, sessionId: string ) {
    return this.http.delete( `/${ userId }/session/${ sessionId }` );
  }

  async create( userObject: Partial<IUser> ): Promise<IUser> {
    return this.http.post( '', userObject )
  }

  async remove( userId: string ): Promise<void> {
    return this.http.delete( `/${ userId }` )
  }

  async update( userId: string, user: Partial<IUser> ): Promise<IUser> {
    return this.http.patch( `/${ userId }`, user );
  }

  async getTenants( userId: string ): Promise<ITenant> {
    return this.http.get( `/${ userId }/tenants` );
  }

  async getRoleGroups( userId: string ): Promise<IRoleGroup> {
    return this.http.get( `/${ userId }/roleGroups` );
  }

  async assignRoleGroups( userId: string, roleGroupIDs: string[] ): Promise<void> {
    return this.http.post( `/${ userId }/roleGroups`, roleGroupIDs );
  }

  async unAssignRoleGroups( userId: string, roleGroupIDs: string[] ): Promise<void> {
    return this.http.delete( `/${ userId }/roleGroups`, roleGroupIDs );
  }

  async getRoles( userId: string ): Promise<IRole> {
    return this.http.get( `/${ userId }/roles` );
  }

  async assignRoles( userId: string, roleIDs: string[] ): Promise<void> {
    return this.http.post( `/${ userId }/roles`, roleIDs );
  }

  async unAssignRoles( userId: string, roleIDs: string[] ): Promise<void> {
    return this.http.delete( `/${ userId }/roles`, roleIDs );
  }

  async getPermissions( userId: string ): Promise<IPermission> {
    return this.http.get( `/${ userId }/permissions` );
  }

  async assignPermissions( userId: string, permissionIDs: string[] ): Promise<void> {
    return this.http.post( `/${ userId }/permissions`, permissionIDs );
  }

  async unAssignPermissions( userId: string, permissionIDs: string[] ): Promise<void> {
    return this.http.delete( `/${ userId }/permissions`, permissionIDs );
  }
}
