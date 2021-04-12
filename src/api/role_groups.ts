import { HttpService } from '../http';
import { PaginatedResult, IRoleGroup, IPagination, IRole } from '../interfaces';
import { encodedQueryString } from '../utils';

/**
 * Service for interacting PlusAuth roleGroups.
 *
 * @public
 */
export class RoleGroupService extends HttpService{
  protected static prefix = '/roleGroups'

  /**
   * Retrieve or filter created roleGroups.
   *
   * @param pagination - Object containing pagination options
   *
   * @example
   * Retrieve all RoleGroups
   * ```js
   * const roleGroups = roleGroups.getAll()
   * ```
   *
   * @example
   * Retrieve first 5 roleGroups
   * ```js
   * const roleGroups = await plusAuth.roleGroups.getAll({ itemsPerPage: 5 })
   * ```
   */
  async getAll( pagination?: IPagination ): Promise<PaginatedResult<IRoleGroup>> {
    return this.http.get( encodedQueryString( pagination ) );
  }

  /**
   * Get roleGroup with id
   *
   * @param roleGroupId - RoleGroup id
   *
   * @example
   * ```js
   * const roleGroup = await plusAuth.roleGroups.get('ROLE_GROUP_ID')
   * ```
   */
  async get( roleGroupId: string ): Promise<IRoleGroup> {
    return this.http.get( `/${ roleGroupId }` );
  }

  /**
   * Create a roleGroup
   * @param roleGroupObject - RoleGroup object
   *
   * @example
   * ```js
   * const roleGroup = await plusAuth.roleGroups.create({ name: 'myRoleGroup' })
   * ```
   */
  async create( roleGroupObject: IRoleGroup ): Promise<IRoleGroup> {
    return this.http.post( '', roleGroupObject );
  }

  /**
   * Update an existing roleGroup
   *
   * @param roleGroupId - Id of roleGroup to be updated
   * @param roleGroup - Object containing to be updated field with values
   * @example
   * ```js
   * const updatedRoleGroup = await plusAuth.roleGroups.update('ROLE_GROUP_ID', { description: 'updatedDescription' })
   * ```
   */
  async update( roleGroupId: string, roleGroup: Partial<IRoleGroup> ): Promise<void> {
    return this.http.patch( `/${ roleGroupId }`, roleGroup );
  }

  /**
   * Remove an existing roleGroup
   *
   * @param roleGroupId - RoleGroup Id to be removed
   *
   * @example
   * ```js
   * if( await plusAuth.roleGroups.remove('ROLE_GROUP_ID') ){
   *  console.log('roleGroup removed')
   * }
   * ```
   */
  async remove( roleGroupId: string ): Promise<void> {
    return this.http.delete( `/${ roleGroupId }` );
  }

  //  ROLES
  /**
   * Retrieve roles assigned to the specified Role Group
   *
   * @param roleGroupId - Role Group id to retrieve assigned roles of
   * @param pagination - Object containing pagination options
   *
   * @example
   * Retrieve all roles assigned to the role group
   * ```js
   * const permissions = await plusAuth.roleGroups.getRoles('ROLE_GROUP_ID')
   * ```
   *
   * @example
   * Retrieve first 5 roles
   * ```js
   * const permissions = await plusAuth.apis.getRoles('ROLE_GROUP_ID', \{ itemsPerPage: 5 \})
   * ```
   */
  async getRoles( roleGroupId: string, pagination: IPagination ):
  Promise<PaginatedResult<IRole>> {
    return this.http.get( `/${ roleGroupId }/roles${ encodedQueryString( pagination ) }` );
  }

  /**
   * Assign roles to a role group
   *
   * @param roleGroupId - Role Group id for assigning roles to
   * @param roleIDs - Array containing role id's to be assigned
   *
   * @example
   * ```js
   * if ( await plusAuth.roleGroups.assignRoles('ROLE_GROUP_ID', [ 'ROLE_ID_1', 'ROLE_ID_2'] ) ){
   *   console.log('roles are assigned')
   * }
   * ```
   */
  async assignRoles( roleGroupId: string, roleIDs: string[] ) {
    return this.http.post( `/${ roleGroupId }/roles`, roleIDs );
  }

  /**
   * Unassign roles from a role group
   *
   * @param roleGroupId - Role Group id for unassigning roles from
   * @param roleIDs - Array containing role id's to be unassigned
   *
   * @example
   * ```js
   * if ( await plusAuth.roleGroups.assignRoles('ROLE_GROUP_ID', [ 'ROLE_ID_2'] ) ){
   *   console.log('roles are unassigned')
   * }
   * ```
   */
  async unAssignRoles( roleGroupId: string, roleIDs: string[] ) {
    return this.http.delete( `/${ roleGroupId }/roles`, roleIDs );
  }
}
