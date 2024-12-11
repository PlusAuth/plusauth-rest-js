import { HttpService } from "../http"
import type { MFA } from "../models"
import type { UpdateMFA } from "../models"
import type { MFAType } from "../models"
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
   * @param data Object containing to be updated values
   */
  async create(data: UpdateMFA): Promise<MFA> {
    return await this.http.post(`/mfa/`, data)
  }

  /**
   * @param type Type of MFA
   */
  async get(type: MFAType): Promise<MFA> {
    return await this.http.get(`/mfa/${type}`)
  }

  /**
   * @param type Type of MFA
   * @param data Object containing to be updated values
   */
  async update(type: MFAType, data: UpdateMFA): Promise<MFA> {
    return await this.http.patch(`/mfa/${type}`, data)
  }

  /**
   * @param type Type of MFA
   */
  async remove(type: MFAType): Promise<void> {
    return await this.http.delete(`/mfa/${type}`)
  }
}
