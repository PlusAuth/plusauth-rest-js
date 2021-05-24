import { ConnectionType } from '../constants';
import { HttpService } from '../http';
import { IConnection, IPagination, PaginatedResult } from '../interfaces';
import { encodedQueryString } from '../utils';

/**
 * Service for interacting PlusAuth federated connections.
 *
 * @public
 */
export class ConnectionService extends HttpService {
  protected static prefix = '/connections'

  /**
   * Retrieve or filter created federated connections.
   *
   * @param type - Connection type
   * @param pagination - Object containing pagination options
   *
   * @example
   * Retrieve all federated connections
   * ```js
   * const connections = federated.getAll()
   * ```
   *
   * @example
   * Retrieve first 5 connections
   * ```js
   * const connections = await plusAuth.federated.getAll('social', { itemsPerPage: 5 })
   * ```
   */
  async getAll(
    type: ConnectionType,
    pagination?: IPagination
  ): Promise<PaginatedResult<IConnection>> {
    return this.http.get( `/${ type }${ encodedQueryString( pagination ) }` );
  }

  /**
   * Get connection with id
   *
   * @param type - Connection type
   * @param connectionId - Connection id
   *
   * @example
   * ```js
   * const connection = await plusAuth.federated.get('social', 'connection_ID')
   * ```
   */
  async get( type: ConnectionType, connectionId: string ): Promise<IConnection> {
    return this.http.get( `/${ type }/${ connectionId }` );
  }

  /**
   * Create a connection
   *
   * @param type - Connection type
   * @param connection - Federated Connection object
   *
   * @example
   * ```js
   * const connection = await plusAuth.connections.create('social', { name: 'myConnection', enabled: true, settings: { } })
   * ```
   */
  async create( type: ConnectionType, connection: IConnection ): Promise<IConnection> {
    return this.http.post( `/${ type }`, connection );
  }

  /**
   * Update an existing connection
   *
   * @param type - Connection type
   * @param connectionId - Id of connection to be updated
   * @param connection - Object containing to be updated field with values
   *
   * @example
   * ```js
   * const updatedConnection = await plusAuth.connections.update('social', 'connection_ID', { settings: { clientId: 'UPDATED_CLIENT_ID' } })
   * ```
   */
  async update(
    type: ConnectionType,
    connectionId: string,
    connection: Partial<IConnection>
  ): Promise<void> {
    return this.http.patch( `/${ type }/${ connectionId }`, connection );
  }

  /**
   * Remove an existing connection
   *
   * @param type - Connection type
   * @param connectionId - Connection Id to be removed
   *
   * @example
   * ```js
   * if( await plusAuth.connections.remove('connection_ID') ){
   *  console.log('connection removed')
   * }
   * ```
   */
  async remove( type: ConnectionType, connectionId: string ): Promise<void> {
    return this.http.delete( `/${ type }/${ connectionId }` );
  }
}
