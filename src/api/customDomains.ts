import { HttpService } from "../http"
import type { CreateTenantCustomDomain, TenantCustomDomain } from "../models"
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
  async getAll(queryParams?: {
    limit?: number
    offset?: number
    q?: string
    sort_by?: string | string[]
    fields?: string | string[]
  }): Promise<{ total: number; results: TenantCustomDomain[] }> {
    return await this.http.get(`/custom-domain/${encodedQueryString(queryParams)}`)
  }

  /**
   * @param data Tenant Custom Domain object
   */
  async register(data: CreateTenantCustomDomain): Promise<TenantCustomDomain> {
    return await this.http.post(`/custom-domain/`, data)
  }

  /**
   * @param domain Custom Domain specifier
   */
  async get(domain: string): Promise<TenantCustomDomain> {
    return await this.http.get(`/custom-domain/${domain}`)
  }

  /**
   * @param domain Custom Domain specifier
   */
  async remove(domain: string): Promise<void> {
    return await this.http.delete(`/custom-domain/${domain}`)
  }

  /**
   * @param domain Custom Domain specifier
   */
  async verifyOwnership(
    domain: string,
  ): Promise<{ verified: boolean; verification_value?: string }> {
    return await this.http.get(`/custom-domain/${domain}/verify`)
  }
}
