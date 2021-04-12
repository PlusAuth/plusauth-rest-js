import { HttpService } from '../http';
import { PaginatedResult, IRole, IPagination, IPermission } from '../interfaces';
import { encodedQueryString } from '../utils';

/**
 * Service for interacting PlusAuth roles.
 *
 * @public
 */
export class RoleService extends HttpService{
  protected static prefix = '/roles'

  async getAll( pagination?: IPagination ): Promise<PaginatedResult<IRole>> {
    return this.http.get( encodedQueryString( pagination ) );
  }

  async get( roleId: string ): Promise<IRole> {
    return this.http.get( `/${ roleId }` );
  }

  async create( role: IRole ): Promise<IRole> {
    return this.http.post( '', role );
  }

  async update( roleId: string, role: Partial<IRole> ): Promise<void> {
    return this.http.patch( `/${ roleId }`, role );
  }

  async remove( roleId: string ): Promise<void> {
    return this.http.delete( `/${ roleId }` );
  }

  //  PERMISSIONS
  async getPermissions( roleId: string, pagination: IPagination ):
  Promise<PaginatedResult<IPermission>> {
    return this.http.get( `/${ roleId }/permissions${ encodedQueryString( pagination ) }` );
  }

  async assignPermissions( roleId: string, permissionIDs: string[] ) {
    return this.http.post( `/${ roleId }/permissions`, permissionIDs );
  }

  async unAssignPermissions( roleId: string, permissionIDs: string[] ) {
    return this.http.delete( `/${ roleId }/permissions`, permissionIDs );
  }
}
