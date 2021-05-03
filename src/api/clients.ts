import { HttpService } from '../http';
import { PaginatedResult, IClient, IPagination } from '../interfaces';
import { encodedQueryString } from '../utils';

/**
 * Service for interacting PlusAuth clients.
 *
 * @public
 */
export class ClientService extends HttpService {
  protected static prefix = '/clients'

  /**
   * Retrieve or filter created clients.
   *
   * @param pagination - Object containing pagination options
   *
   * @example
   * Retrieve all Clients
   * ```js
   * const clients = clients.getAll()
   * ```
   *
   * @example
   * Retrieve first 5 clients
   * ```js
   * const clients = await plusAuth.clients.getAll({ itemsPerPage: 5 })
   * ```
   */
  async getAll( pagination?: IPagination ): Promise<PaginatedResult<IClient>>{
    return this.http.get( encodedQueryString( pagination ) )
  }

  /**
   * Get client with id
   *
   * @param clientId - Client id
   *
   * @example
   * ```js
   * const client = await plusAuth.clients.get('client_ID')
   * ```
   */
  async get( clientId: string ): Promise<IClient> {
    return this.http.get( `/${ clientId }` )
  }

  /**
   * Create a client
   * @param clientObject - Client object
   *
   * @example
   * ```js
   * const client = await plusAuth.clients.create({ client_name: 'myClient', application_type: 'web' })
   * ```
   */
  async create( clientObject: Partial<IClient> ): Promise<IClient>{
    return this.http.post( '', clientObject )
  }

  /**
   * Update an existing client
   *
   * @param clientId - Id of client to be updated
   * @param client - Object containing to be updated field with values
   *
   * @example
   * ```js
   * const updatedClient = await plusAuth.clients.update('client_ID', { client_name: 'updatedName' })
   * ```
   */
  async update( clientId: string, client: Partial<IClient> ): Promise<IClient> {
    return this.http.patch( `/${ clientId }`, client );
  }

  /**
   * Remove an existing client
   *
   * @param clientId - Client Id to be removed
   *
   * @example
   * ```js
   * if( await plusAuth.clients.remove('client_ID') ){
   *  console.log('client removed')
   * }
   * ```
   */
  async remove( clientId: string ): Promise<void> {
    return this.http.delete( `/${ clientId }` );
  }
}
