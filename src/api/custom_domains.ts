import { HttpService } from '../http';
import { IPagination, PaginatedResult } from '../interfaces';
import { ICustomDomain } from '../interfaces/custom_domain';
import { encodedQueryString } from '../utils';

export class CustomDomainService extends HttpService {
  protected static prefix = '/custom-domain'

  async getAll( pagination: IPagination ): Promise<PaginatedResult<ICustomDomain>> {
    return this.http.get( encodedQueryString( pagination ) );
  }

  async get( customDomainId: string ): Promise<ICustomDomain> {
    return this.http.get( `/${ customDomainId }` );
  }

  async create( props: any ): Promise<ICustomDomain> {
    return this.http.post( '', props );
  }

  async update( customDomainId: string, props: any ): Promise<ICustomDomain> {
    return this.http.patch( `/${ customDomainId }`, props );
  }

  async remove( customDomainId: string ): Promise<void> {
    return this.http.delete( `/${ customDomainId }` );
  }

  async validate( customDomainId: string ): Promise<void> {
    return this.http.get( `/${ customDomainId }/validate` );
  }
}
