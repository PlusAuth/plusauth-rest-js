import { HttpService } from '../http';
import { PublicKey, KeyType } from '../models';

export class KeyService extends HttpService {
  async get( key_type: KeyType ): Promise<PublicKey[]> {
    return this.http.get( `/keys/${ key_type }` );
  }

  async rotate( key_type: KeyType, data?: string ): Promise<PublicKey> {
    return this.http.post( `/keys/${ key_type }/rotate`, data );
  }

  async revoke( key_type: KeyType, kid: string ): Promise<void> {
    return this.http.get( `/keys/${ key_type }/revoke/${ kid }` );
  }
}
