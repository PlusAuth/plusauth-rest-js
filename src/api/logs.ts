import { HttpService } from '../http';
import { ILogQuery } from '../interfaces/log';
import { encodedQueryString } from '../utils';

export class LogService extends HttpService {
  protected static prefix = '/logs'

  /**
   * Retrieve or filter your tenant's logs.
   *
   * @param query - Log query parameters
   *
   * @example
   * ```js
   * const logs = await plusAuth.logs.getAll({ from: 'now-1d', type: 'error,warn'})
   * ```
   */
  async getAll(
    query: ILogQuery
  ): Promise<string | Record<string, any>> {
    return this.http.get( encodedQueryString( query ) );
  }
}
