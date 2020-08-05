import { HttpService } from '../http';
import { IConnection, IPagination, PaginatedResult } from '../interfaces';
import { encodedQueryString } from '../utils';

/**
 * Service for interacting PlusAuth federated connections.
 *
 * @public
 */
export class FederatedService extends HttpService {
  protected static prefix = '/federated'

  /**
   * Retrieve or filter created federated connections.
   *
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
   * const connections = await plusAuth.federated.getAll({ itemsPerPage: 5 })
   * ```
   */
  async getAll( pagination?: IPagination ): Promise<PaginatedResult<IConnection>> {
    return this.http.get( encodedQueryString( pagination ) );
  }

  /**
   * Get connection with id
   *
   * @param connectionId - Connection id
   *
   * @example
   * ```js
   * const connection = await plusAuth.federated.get('connection_ID')
   * ```
   */
  async get( connectionId: string ): Promise<IConnection> {
    return this.http.get( `/${ connectionId }` );
  }

  /**
   * Create a connection
   * @param connection - Federated Connection object
   *
   * @example
   * ```js
   * const connection = await plusAuth.connections.create({ name: 'myClient', audience: 'https://connection.example.com' })
   * ```
   */
  async create( connection: IConnection ): Promise<IConnection> {
    return this.http.post( '', connection );
  }

  /**
   * Update an existing connection
   *
   * @param connectionId - Id of connection to be updated
   * @param connection - Object containing to be updated field with values
   *
   * @example
   * ```js
   * const updatedClient = await plusAuth.connections.update('connection_ID', { name: 'updatedName' })
   * ```
   */
  async update( connectionId: string, connection: Partial<IConnection> ): Promise<void> {
    return this.http.patch( `/${ connectionId }`, connection );
  }

  /**
   * Remove an existing connection
   *
   * @param connectionId - Client Id to be removed
   *
   * @example
   * ```js
   * if( await plusAuth.connections.remove('connection_ID') ){
   *  console.log('connection removed')
   * }
   * ```
   */
  async remove( connectionId: string ): Promise<void> {
    return this.http.delete( `/${ connectionId }` );
  }
}
