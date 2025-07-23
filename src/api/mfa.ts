import { HttpService } from "../http"
import type { MFA, MFAType, UpdateMFA } from "../models"
import { encodedQueryString } from "../utils"

export class MfaService extends HttpService {
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
  }): Promise<{ total: number; results: MFA[] }> {
    return await this.http.get(`/mfa/${encodedQueryString(queryParams)}`)
  }

  /**
   * @param data
   */
  async create(data: MFA): Promise<MFA> {
    return await this.http.post(`/mfa/`, data)
  }

  /**
   * @param type MFA Type
   */
  async get(type: MFAType): Promise<MFA> {
    return await this.http.get(`/mfa/${type}`)
  }

  /**
   * @param type MFA Type
   * @param data Object containing to be updated values
   */
  async update(type: MFAType, data: UpdateMFA): Promise<MFA> {
    return await this.http.patch(`/mfa/${type}`, data)
  }

  /**
   * @param type MFA Type
   */
  async remove(type: MFAType): Promise<void> {
    return await this.http.delete(`/mfa/${type}`)
  }
}
