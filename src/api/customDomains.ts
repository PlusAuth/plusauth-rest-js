import { HttpService } from "../http"
import type { TenantCustomDomain } from "../models"
import type { CreateTenantCustomDomain } from "../models"
import { encodedQueryString } from "../utils"

export class CustomDomainService extends HttpService {
  /**
   * @param queryParams Query parameters
   * @param queryParams.limit Limit the number of results returned
   * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
   * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
   * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
   * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
   */
  async getCustomDomains(queryParams?: {
    limit?: number
    offset?: number
    q?: string
    sort_by?: string | string[]
    fields?: string | string[]
  }): Promise<Record<string, any>> {
    return await this.http.get(`/custom-domain/${encodedQueryString(queryParams)}`)
  }

  /**
   * @param data Tenant Custom Domain object
   */
  async registerCustomDomain(data: CreateTenantCustomDomain): Promise<TenantCustomDomain> {
    return await this.http.post(`/custom-domain/`, data)
  }

  /**
   * @param domain Custom Domain specifier
   */
  async getCustomDomain(domain: string): Promise<TenantCustomDomain> {
    return await this.http.get(`/custom-domain/$${domain}`)
  }

  /**
   * @param domain Custom Domain specifier
   */
  async removeCustomDomain(domain: string): Promise<void> {
    return await this.http.delete(`/custom-domain/$${domain}`)
  }

  /**
   * @param domain Custom Domain specifier
   */
  async verifyCustomDomainOwnership(domain: string): Promise<Record<string, any>> {
    return await this.http.get(`/custom-domain/$${domain}/verify`)
  }
}
