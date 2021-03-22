import { MFAType } from '../constants';
import { HttpService } from '../http';

/**
 * Service for interacting with API's defined in PlusAuth
 * @public
 */
export class MFAService extends HttpService{
  protected static prefix = '/mfa'

  async getAll() {
    return this.http.get( '' );
  }

  async get( type: MFAType ) {
    return this.http.get( `/${ type }` );
  }

  async update( type: MFAType, props: any ) {
    return this.http.patch( `/${ type }`, props );
  }
}
