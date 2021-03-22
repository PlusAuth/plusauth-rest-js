import { HttpService } from '../http';
import { IPagination } from '../interfaces';
import { encodedQueryString } from '../utils';

export class CustomDomainService extends HttpService {
  protected static prefix = '/custom-domain'

  async getAll( pagination: IPagination ) {
    return this.http.get( encodedQueryString( pagination ) );
  }

  async get( customDomainId: string ) {
    return this.http.get( `/${ customDomainId }` );
  }

  async create( props: any ) {
    return this.http.post( '', props );
  }

  async update( customDomainId: string, props: any ) {
    return this.http.patch( `/${ customDomainId }`, props );
  }

  async remove( customDomainId: string, ) {
    return this.http.delete( `/${ customDomainId }` );
  }

  async validate( customDomainId: string, ) {
    return this.http.get( `/${ customDomainId }/validate` );
  }
}
