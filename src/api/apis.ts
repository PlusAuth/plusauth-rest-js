import { HttpService } from '../http';
import { PaginatedResult, IApi, IPagination, IPermission, IAuthorizedClients } from '../interfaces';
import { encodedQueryString } from '../utils';

/**
 * Service for interacting with API's defined in PlusAuth
 * @public
 */
export class ApiService extends HttpService{
  protected static prefix = '/apis'

  /**
   * Retrieve or filter created API's.
   *
   * @param pagination - Object containing pagination options
   *
   * @example
   * Retrieve all APIs
   * ```js
   * const apis = await plusAuth.apis.getAll()
   * ```
   *
   * @example
   * Retrieve first 5 APIs
   * ```js
   * const apis = await plusAuth.apis.getAll({ itemsPerPage: 5 })
   * ```
   */
  async getAll( pagination?: IPagination ): Promise<PaginatedResult<IApi>> {
    return this.http.get( encodedQueryString( pagination ) );
  }

  /**
   * Get API with id
   *
   * @param apiId - API id
   *
   * @example
   * ```js
   * const api = await plusAuth.apis.get('API_ID')
   * ```
   */
  async get( apiId: string ): Promise<IApi> {
    return this.http.get( `/${ apiId }` );
  }

  /**
   * Create an API
   *
   * @param api - Object containing api properties
   *
   * @example
   * ```js
   * const api = await plusAuth.apis.create({ name: 'myApi', audience: 'https://api.example.com' })
   * ```
   */
  async create( api: Omit<IApi, 'system'> ): Promise<IApi> {
    return this.http.post( '', api );
  }

  /**
   * Update an existing API.
   *
   * @param apiId - Id of API to be updated
   * @param api - Object containing updated field/s with value/s
   *
   * @example
   * Update API name
   * ```js
   * const updatedApi = await plusAuth.apis.update('API_ID', { name: 'updatedName' })
   * ```
   *
   * @example
   * Update API name and description
   * ```js
   * const updatedApi = await plusAuth.apis.update('API_ID', { name: 'updatedName', description: 'updated Description' })
   * ```
   *
   */
  async update( apiId: string, api: Partial<Omit<IApi, 'system' | 'audience'>> ): Promise<void> {
    return this.http.patch( `/${ apiId }`, api );
  }

  /**
   * Remove an existing API
   *
   * @param apiId - API Id to be removed
   *
   * @example
   * ```js
   * if( await plusAuth.apis.remove('API_ID') ){
   *  console.log('API removed')
   * }
   * ```
   */
  async remove( apiId: string ): Promise<void> {
    return this.http.delete( `/${ apiId }` );
  }

  //  PERMISSIONS
  /**
   * Retrieve permissions created for the specified API
   *
   * @param apiId - ID of Api to retrieve permissions of
   * @param pagination - Object containing pagination options
   *
   * @example
   * Retrieve all permissions of the API
   * ```js
   * const permissions = await plusAuth.apis.getPermissions('API_ID')
   * ```
   *
   * @example
   * Retrieve first 5 permissions
   * ```js
   * const permissions = await plusAuth.apis.getPermissions('API_ID', { itemsPerPage: 5})
   * ```
   */
  async getPermissions( apiId: string, pagination?: IPagination ):
  Promise<PaginatedResult<IPermission>> {
    return this.http.get( `/${ apiId }/permissions${ encodedQueryString( pagination ) }` );
  }

  /**
   * Create permission for the API
   *
   * @param apiId - ID of Api to create permission for
   * @param permission - Object containing permission properties
   *
   * @example
   * ```js
   * const permission = await plusAuth.apis.createPermission('API_ID', { name: 'read:contacts' })
   * ```
   */
  async createPermission( apiId: string, permission: Omit<IPermission, 'id'> ):
  Promise<IPermission> {
    return this.http.post( `/${ apiId }/permissions`, permission );
  }

  /**
   * Delete an existing permission from the API
   *
   * @param apiId - ID of Api to remove permission from
   * @param permissionId - Permission Id to be removed
   *
   * @example
   * ```js
   * if( await plusAuth.apis.removePermission('API_ID>', '<PERMISSION_ID') ){
   *   console.log('permission removed')
   * }
   * ```
   */
  async removePermission( apiId: string, permissionId: string ): Promise<void> {
    return this.http.delete( `/${ apiId }/permissions/${ permissionId }` );
  }

  //  AUTHORIZED CLIENTS
  /**
   * Retrieve authorized clients to the specified API
   *
   * @param apiId - ID of Api to retrieve authorized clients from
   * @param pagination - Object containing pagination options
   *
   * @example
   * Retrieve all authorized clients to the API
   * ```js
   * const authorizedClients = await plusAuth.apis.getAuthorizedClients('API_ID')
   * ```
   *
   * @example
   * Retrieve first 5 permissions
   * ```js
   * const authorizedClients = await plusAuth.apis.getAuthorizedClients('API_ID', { itemsPerPage: 5})
   * ```
   */
  async getAuthorizedClients(
    apiId: string,
    pagination: IPagination
  ): Promise<PaginatedResult<IAuthorizedClients>> {
    return this.http.get( `/${ apiId }/authorized_clients${ encodedQueryString( pagination ) }` );
  }

  /**
   * Authorize client/s to the specified API
   *
   * @param apiId - ID of Api to authorize client/s to
   * @param clientIds - IDs of to be authorized clients
   *
   * @example
   * ```js
   *  if( await plusAuth.apis.authorizeClients('API_ID', ['CLIENT_1_ID', 'CLIENT_2_ID']) ){
   *    console.log('clients authorized')
   *  }
   * ```
   */
  async authorizeClients( apiId: string, clientIds: string[] ): Promise<void> {
    return this.http.post( `/${ apiId }/authorized_clients`, clientIds );
  }

  /**
   * Unauthorize client/s from the specified API
   *
   * @param apiId - ID of Api to unauthorize client/s from
   * @param clientIds - IDs of to be unauthorized clients
   *
   * @example
   * ```js
   *  if( await plusAuth.apis.unAuthorizeClients('API_ID', ['CLIENT_1_ID', 'CLIENT_2_ID']) ){
   *    console.log('clients unauthorized')
   *  }
   * ```
   */
  async unAuthorizeClients( apiId: string, clientIds: string[] ): Promise<void> {
    return this.http.delete( `/${ apiId }/authorized_clients`, clientIds );
  }

  // AUTHORIZED CLIENT PERMISSIONS
  /**
   * Retrieve authorized permissions of authorized client of the specified API
   *
   * @param apiId - ID of Api to retrieve authorized clients from
   * @param clientId - Authorized client id
   *
   * @example
   * ```js
   * const authorizedPermissions = await plusAuth.apis.getAssignedPermissionsToClient('API_ID', 'CLIENT_ID')
   * ```
   *
   */
  async getAssignedPermissionsToClient( apiId: string, clientId: string ): Promise<string[]> {
    return this.http.get( `/${ apiId }/authorized_clients/${ clientId }/permissions` );
  }

  /**
   * Authorize permission/s to an authorized client of the specified API
   *
   * @param apiId - ID of Api to retrieve authorized clients from
   * @param clientId - Authorized client id
   * @param permissionIds - Permissions ID array to be authorized
   *
   * @example
   * ```js
   * if( await plusAuth.apis.assignPermissionsToClient('API_ID', 'CLIENT_ID', ['perm_id_1', 'perm_id_2']) ){
   *   console.log('permissions authorized for client')
   * }
   * ```
   *
   */
  async assignPermissionsToClient(
    apiId: string,
    clientId: string,
    permissionIds: string[] ): Promise<void> {
    return this.http.post(
      `/${ apiId }/authorized_clients/${ clientId }/permissions`,
      permissionIds
    );
  }

  /**
   * Unauthorize permission/s from an authorized client of the specified API
   *
   * @param apiId - ID of Api to retrieve authorized clients from
   * @param clientId - Authorized client id
   * @param permissionIds - Permissions ID array to be authorized
   *
   * @example
   * ```js
   * if( await plusAuth.apis.assignPermissionsToClient('API_ID', 'CLIENT_ID', ['perm_id_1', 'perm_id_2']) ){
   *   console.log('permissions unauthorized from client')
   * }
   * ```
   *
   */
  async unassignPermissionsFromClient(
    apiId: string,
    clientId: string,
    permissionIds: string[] ): Promise<void> {
    return this.http.delete(
      `/${ apiId }/authorized_clients/${ clientId }/permissions`,
      permissionIds
    );
  }
}
