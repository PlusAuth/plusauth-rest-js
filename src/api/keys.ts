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

  async rotateSigningKeys( keys?: JsonWebKey[] ): Promise<void> {
    return this.http.post( '/signing/rotate', { keys } );
  }

  async revokeSigningKey( kid: string ): Promise<void> {
    return this.http.get( `/signing/revoke/${ kid }` );
  }

  async getEncryptionKeys( ): Promise<JsonWebKey[]> {
    return this.http.get( '/encryption' );
  }

  async rotateEncryptionKeys( keys?: JsonWebKey[] ): Promise<void> {
    return this.http.post( '/encryption/rotate', { keys } );
  }

  async revokeEncryptionKey( kid: string ): Promise<void> {
    return this.http.get( `/encryption/revoke/${ kid }` );
  }
}
