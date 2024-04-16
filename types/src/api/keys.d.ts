import type { PublicKey , KeyType } from '../models.js';

import { HttpService } from '../http.js';
export declare class KeyService extends HttpService {
  get( key_type: KeyType ): Promise<PublicKey[]>;
  rotate( key_type: KeyType, data?: string ): Promise<PublicKey>;
  revoke( key_type: KeyType, kid: string ): Promise<void>;
}
