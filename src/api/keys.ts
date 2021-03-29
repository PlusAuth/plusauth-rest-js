import { HttpService } from '../http';
/**
 * Service for interacting with API's defined in PlusAuth
 * @public
 */
export class KeyService extends HttpService{
  protected static prefix = '/keys'

  async getSigningKeys( ): Promise<JsonWebKey[]> {
    return this.http.get( '/signing' );
  }

  async rotateSigningKey( keys?: JsonWebKey[] ): Promise<void> {
    return this.http.post( '/signing/rotate', { keys } );
  }
}
