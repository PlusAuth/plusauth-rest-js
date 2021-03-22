import { HttpService } from '../http';
import { IPagination } from '../interfaces';
import { encodedQueryString } from '../utils';

export class LogService extends HttpService {
  protected static prefix = '/logs'

  async getAll(
    pagination: IPagination,
    query: string | Record<string, string | number | boolean>
  ){
    if ( query && typeof query === 'object' ) {
      query = JSON.stringify( query );
    }
    return this.http.get( encodedQueryString( { ...pagination, query } ) );
  }
}
