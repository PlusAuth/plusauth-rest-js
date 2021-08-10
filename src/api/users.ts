import { HttpService } from '../http';
import {
  IPagination, PaginatedResult, IUser,
  ITenant, IPermission, IRoleGroup, IRole, IRbac, IUserSession, IBaseUser
} from '../interfaces';

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

  async create( userObject: IBaseUser ): Promise<IUser> {
    return this.http.post( '', userObject )
  }

  async remove( userId: string ): Promise<void> {
    return this.http.delete( `/${ userId }` )
  }

  async update( userId: string, user: IBaseUser ): Promise<IUser> {
    return this.http.patch( `/${ userId }`, user );
  }

  // USER SESSIONS
  async getSessions( userId: string ): Promise<IUserSession[]> {
    return this.http.get( `/${ userId }/session` );
  }

  async endSession( userId: string, sessionId: string ): Promise<void> {
    return this.http.delete( `/${ userId }/session/${ sessionId }` );
  }

  // USER TENANTS

  async getTenants( userId: string ): Promise<ITenant> {
    return this.http.get( `/${ userId }/tenants` );
  }

  // USER ROLE GROUPS
  async getRoleGroups( userId: string ): Promise<PaginatedResult<IRoleGroup>> {
    return this.http.get( `/${ userId }/roleGroups` );
  }

  async assignRoleGroups( userId: string, roleGroupIDs: string[] ): Promise<void> {
    return this.http.post( `/${ userId }/roleGroups`, roleGroupIDs );
  }

  async unAssignRoleGroups( userId: string, roleGroupIDs: string[] ): Promise<void> {
    return this.http.delete( `/${ userId }/roleGroups`, roleGroupIDs );
  }

  // USER ROLES

  async getRoles( userId: string ): Promise<PaginatedResult<IRole>> {
    return this.http.get( `/${ userId }/roles` );
  }

  async assignRoles( userId: string, roleIDs: string[] ): Promise<void> {
    return this.http.post( `/${ userId }/roles`, roleIDs );
  }

  async unAssignRoles( userId: string, roleIDs: string[] ): Promise<void> {
    return this.http.delete( `/${ userId }/roles`, roleIDs );
  }

  // USER PERMISSIONS
  async getPermissions( userId: string ): Promise<PaginatedResult<IPermission>> {
    return this.http.get( `/${ userId }/permissions` );
  }

  async assignPermissions( userId: string, permissionIDs: string[] ): Promise<void> {
    return this.http.post( `/${ userId }/permissions`, permissionIDs );
  }

  async unAssignPermissions( userId: string, permissionIDs: string[] ): Promise<void> {
    return this.http.delete( `/${ userId }/permissions`, permissionIDs );
  }

  // RBAC
  async getRBAC( userId: string ): Promise<IRbac>{
    return this.http.get( `/${ userId }/rbac` );
  }
}
