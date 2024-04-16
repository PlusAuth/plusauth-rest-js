import type { PaginatedResult , MFA , MFAType , UpdateMFA } from '../models.js';

import { HttpService } from '../http.js';
export declare class MfaService extends HttpService {
  getAll( queryParams?: {
    offset?: number;
    limit?: number;
    sort_by?: string;
    q?: string;
  } ): Promise<PaginatedResult<MFA>>;
  create( data: MFA ): Promise<MFA>;
  get( type: MFAType ): Promise<MFA>;
  update( type: MFAType, data: UpdateMFA ): Promise<MFA>;
  remove( type: MFAType ): Promise<void>;
}
