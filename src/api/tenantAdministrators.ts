import { HttpService } from "../http"
import type { TenantAdministrator } from "../models"

export class TenantAdministratorService extends HttpService {
  /**
   * @param tenantId Tenant identifier
   * @param invitationDetails Invitation details
   */
  async inviteTenantAdministrator(
    tenantId: string,
    invitationDetails: { email: string; permissions?: string[] },
  ): Promise<void> {
    return await this.http.post(`/tenants/${tenantId}/invite`, invitationDetails)
  }

  /**
   * @param tenantId Tenant identifier
   */
  async getTenantAdministrators(tenantId: string): Promise<TenantAdministrator[]> {
    return await this.http.get(`/tenants/${tenantId}/administrators`)
  }

  /**
   * @param tenantId Tenant identifier
   * @param adminId Administrator identifier
   */
  async removeTenantAdministrator(tenantId: string, adminId: string): Promise<void> {
    return await this.http.delete(`/tenants/${tenantId}/administrators/${adminId}`)
  }

  /**
   * @param tenantId Tenant identifier
   * @param adminId Administrator identifier
   * @param permissionIdList List of permission IDs to be assigned
   */
  async assignPermissionsToTenantAdmin(
    tenantId: string,
    adminId: string,
    permissionIdList: string[],
  ): Promise<void> {
    return await this.http.post(
      `/tenants/${tenantId}/administrators/${adminId}/permissions`,
      permissionIdList,
    )
  }

  /**
   * @param tenantId Tenant identifier
   * @param adminId Administrator identifier
   * @param permissionIdList List of permission IDs to be unassigned
   */
  async unassignPermissionsFromTenantAdmin(
    tenantId: string,
    adminId: string,
    permissionIdList: string[],
  ): Promise<void> {
    return await this.http.delete(
      `/tenants/${tenantId}/administrators/${adminId}/permissions`,
      permissionIdList,
    )
  }
}
