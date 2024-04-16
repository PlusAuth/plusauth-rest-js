import type { Tenant , CreateTenant , TenantAdministrator , TenantSettings , UpdateTenantSettings } from '../models.js';

import { HttpService } from '../http.js';
export declare class TenantService extends HttpService {
  create( data: CreateTenant ): Promise<Tenant>;
  remove( tenant_id: string ): Promise<void>;
  inviteAdmin( tenant_id: string, data: Record<string, any> ): Promise<void>;
  getAdministrators( tenant_id: string ): Promise<TenantAdministrator[]>;
  removeAdministrators( tenant_id: string, email: string ): Promise<void>;
  assignPermissionsToAdmin( tenant_id: string, admin_id: string, data: string[] ): Promise<void>;
  unassignPermissionsFromAdmin( tenant_id: string, admin_id: string, data: string[] ): Promise<void>;
  getStats( tenant_id: string ): Promise<TenantAdministrator[]>;
  getSettings( tenant_id: string ): Promise<TenantSettings>;
  updateSettings( tenant_id: string, data: UpdateTenantSettings ): Promise<Tenant>;
}
