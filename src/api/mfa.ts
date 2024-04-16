import { HttpService } from '../http';
import { PaginatedResult, MFA, MFAType, UpdateMFA } from '../models';
import { encodedQueryString } from '../utils';

export class MfaService extends HttpService {
  async getAll( queryParams?: {offset?: number; limit?: number; sort_by?: string; q?: string;} ): Promise<PaginatedResult<MFA>> {
    return this.http.get( `/mfa${ encodedQueryString( queryParams ) }` );
  }

  async create( data: MFA ): Promise<MFA> {
    return this.http.post( '/mfa', data );
  }

  async get( type: MFAType ): Promise<MFA> {
    return this.http.get( `/mfa/${ type }` );
  }

  async update( type: MFAType, data: UpdateMFA ): Promise<MFA> {
    return this.http.patch( `/mfa/${ type }`, data );
  }

  async remove( type: MFAType ): Promise<void> {
    return this.http.delete( `/mfa/${ type }` );
  }
}
