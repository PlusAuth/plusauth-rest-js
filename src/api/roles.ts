import { HttpService } from '../http';
import { PaginatedResult, IRole, IPagination, IPermission } from '../interfaces';
import { encodedQueryString } from '../utils';

/**
 * Service for interacting PlusAuth roles.
 *
 * @public
 */
export class RoleService extends HttpService{
  protected static prefix = '/roles'

  /**
   * Retrieve or filter created roles.
   *
   * @param pagination - Object containing pagination options
   *
   * @example
   * Retrieve all roles
   * ```js
   * const roles = plusAuth.roles.getAll()
   * ```
   *
   * @example
   * Retrieve first 5 roles
   * ```js
   * const roles = await plusAuth.roles.getAll({ itemsPerPage: 5 })
   * ```
   */
  async getAll( pagination?: IPagination ): Promise<PaginatedResult<IRole>> {
    return this.http.get( encodedQueryString( pagination ) );
  }

  /**
   * Get role with id
   *
   * @param roleId - Role id
   *
   * @example
   * ```js
   * const role = await plusAuth.roles.get('ROLE_GROUP_ID')
   * ```
   */
  async get( roleId: string ): Promise<IRole> {
    return this.http.get( `/${ roleId }` );
  }

  /**
   * Create a role
   * @param role - Role object
   *
   * @example
   * ```js
   * const role = await plusAuth.roles.create({ name: 'My Role' })
   * ```
   */
  async create( role: Omit<IRole, 'id'> ): Promise<IRole> {
    return this.http.post( '', role );
  }

  /**
   * Update an existing role
   *
   * @param roleId - Id of role to be updated
   * @param role - Object containing to be updated field with values
   * @example
   * ```js
   * const updatedRole = await plusAuth.roles.update('ROLE_ID', { description: 'updatedDescription' })
   * ```
   */
  async update( roleId: string, role: Partial<Omit<IRole, 'id'>> ): Promise<void> {
    return this.http.patch( `/${ roleId }`, role );
  }

  /**
   * Remove an existing role
   *
   * @param roleId - Role Id to be removed
   *
   * @example
   * ```js
   * if( await plusAuth.roles.remove('ROLE_ID') ){
   *  console.log('role removed')
   * }
   * ```
   */
  async remove( roleId: string ): Promise<void> {
    return this.http.delete( `/${ roleId }` );
  }

  //  PERMISSIONS
  /**
   * Retrieve permissions assigned to the specified Role
   *
   * @param roleId - Role id to retrieve assigned roles of
   * @param pagination - Object containing pagination options
   *
   * @example
   * Retrieve all permissions assigned to the role
   * ```js
   * const permissions = await plusAuth.roles.getPermissions('ROLE_ID')
   * ```
   *
   * @example
   * Retrieve first 5 assigned permissions
   * ```js
   * const permissions = await plusAuth.roles.getPermissions('ROLE_ID', { itemsPerPage: 5 })
   * ```
   */
  async getPermissions( roleId: string, pagination: IPagination ):
  Promise<PaginatedResult<IPermission>> {
    return this.http.get( `/${ roleId }/permissions${ encodedQueryString( pagination ) }` );
  }

  /**
   * Assign permissions to a role
   *
   * @param roleId - Role id for assigning permissions to
   * @param permissionIDs - Array containing permission id's to be assigned
   *
   * @example
   * ```js
   * if ( await plusAuth.roles.assignPermissions('ROLE_GROUP_ID', [ 'PERMISSION_ID_1', 'PERMISSION_ID_2'] ) ){
   *   console.log('permissions are assigned')
   * }
   * ```
   */
  async assignPermissions( roleId: string, permissionIDs: string[] ): Promise<void> {
    return this.http.post( `/${ roleId }/permissions`, permissionIDs );
  }

  /**
   * Unassign permissions from a role
   *
   * @param roleId - Role Group id for unassigning permissions from
   * @param permissionIDs - Array containing permission id's to be unassigned
   *
   * @example
   * ```js
   * if ( await plusAuth.roles.unAssignPermissions('ROLE_GROUP_ID', [ 'PERMISSION_ID_2'] ) ){
   *   console.log('permissions are unassigned')
   * }
   * ```
   */
  async unAssignPermissions( roleId: string, permissionIDs: string[] ): Promise<void> {
    return this.http.delete( `/${ roleId }/permissions`, permissionIDs );
  }
}
