import { HttpService } from "../http"
import type { Tenant } from "../models"
import type { CreateTenant } from "../models"
import type { TenantStats } from "../models"
import type { TenantSettings } from "../models"
import type { UpdateTenantSettings } from "../models"
import type { TenantSubscription } from "../models"

export class TenantService extends HttpService {
  /**
   * @param data Tenant object
   */
  async create(data: CreateTenant): Promise<Tenant> {
    return await this.http.post(`/tenants/`, data)
  }

  /**
   * @param tenantId Tenant identifier
   */
  async remove(tenantId: string): Promise<void> {
    return await this.http.delete(`/tenants/${tenantId}/`)
  }

  /**
   * @param tenantId Tenant identifier
   */
  async getStats(tenantId: string): Promise<TenantStats> {
    return await this.http.get(`/tenants/${tenantId}/stats`)
  }

  /**
   * @param tenantId Tenant identifier
   */
  async getSettings(tenantId: string): Promise<TenantSettings> {
    return await this.http.get(`/tenants/${tenantId}/settings`)
  }

  /**
   * @param tenantId Tenant identifier
   * @param data Object containing to be updated values
   */
  async updateSettings(tenantId: string, data: UpdateTenantSettings): Promise<TenantSettings> {
    return await this.http.patch(`/tenants/${tenantId}/settings`, data)
  }

  /**
   * @param tenantId Tenant identifier
   */
  async getSubscription(tenantId: string): Promise<TenantSubscription> {
    return await this.http.get(`/tenants/${tenantId}/subscription`)
  }
}
