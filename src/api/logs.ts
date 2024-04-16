import { HttpService } from '../http';
import { encodedQueryString } from '../utils';

export class LogService extends HttpService {
  async getAll( queryParams?: {limit?: number; offset?: number; from?: string; to?: string; type?: string; operation?: string;} ): Promise<string[]> {
    return this.http.get( `/logs${ encodedQueryString( queryParams ) }` );
  }
}
