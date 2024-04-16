import type { Tenant , CreateTenant , TenantAdministrator , TenantSettings , UpdateTenantSettings } from '../models.js';

import { HttpService } from '../http.js';

export class TenantService extends HttpService {
  async create( data: CreateTenant ): Promise<Tenant> {
    return this.http.post( '/tenants', data );
  }

  async remove( tenant_id: string ): Promise<void> {
    return this.http.delete( `/tenants/${ tenant_id }` );
  }

  async inviteAdmin( tenant_id: string, data: Record<string, any> ): Promise<void> {
    return this.http.post( `/tenants/${ tenant_id }/invite`, data );
  }

  async getAdministrators( tenant_id: string ): Promise<TenantAdministrator[]> {
    return this.http.get( `/tenants/${ tenant_id }/administrators` );
  }

  async removeAdministrators( tenant_id: string, email: string ): Promise<void> {
    return this.http.delete( `/tenants/${ tenant_id }/administrators/${ email }` );
  }

  async assignPermissionsToAdmin( tenant_id: string, admin_id: string, data: string[] ): Promise<void> {
    return this.http.post( `/tenants/${ tenant_id }/administrators/${ admin_id }/permissions`, data );
  }

  async unassignPermissionsFromAdmin( tenant_id: string, admin_id: string, data: string[] ): Promise<void> {
    return this.http.delete( `/tenants/${ tenant_id }/administrators/${ admin_id }/permissions`, data );
  }

  async getStats( tenant_id: string ): Promise<TenantAdministrator[]> {
    return this.http.get( `/tenants/${ tenant_id }/stats` );
  }

  async getSettings( tenant_id: string ): Promise<TenantSettings> {
    return this.http.get( `/tenants/${ tenant_id }/settings` );
  }

  async updateSettings( tenant_id: string, data: UpdateTenantSettings ): Promise<Tenant> {
    return this.http.patch( `/tenants/${ tenant_id }/settings`, data );
  }
}
