import { HttpService } from '../http';
import { PaginatedResult, IView } from '../interfaces';

/**
 * Service for interacting PlusAuth views.
 *
 * @public
 */
export class ViewService extends HttpService {
  protected static prefix = '/views'

  async get( type: string ): Promise<PaginatedResult<IView>> {
    return this.http.get( `/${ type }` );
  }

  async update( type: string, text: string ): Promise<void> {
    return this.http.patch( `/${ type }`, text, {
      headers: {
        'Content-Type': 'text/html'
      }
    } );
  }
}
