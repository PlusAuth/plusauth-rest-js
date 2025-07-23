import { HttpService } from "../http"
import type { CreateHook, Hook, UpdateHook } from "../models"
import { encodedQueryString } from "../utils"

export class HookService extends HttpService {
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
  }): Promise<{ total: number; results: Hook[] }> {
    return await this.http.get(`/hooks/${encodedQueryString(queryParams)}`)
  }

  /**
   * @param data Hook object
   */
  async create(data: CreateHook): Promise<Hook> {
    return await this.http.post(`/hooks/`, data)
  }

  /**
   * @param hookId Hook identifier
   */
  async get(hookId: string): Promise<Hook> {
    return await this.http.get(`/hooks/${hookId}`)
  }

  /**
   * @param hookId Hook identifier
   * @param data Object containing to be updated values
   */
  async update(hookId: string, data: UpdateHook): Promise<Hook> {
    return await this.http.patch(`/hooks/${hookId}`, data)
  }

  /**
   * @param hookId Hook identifier
   */
  async remove(hookId: string): Promise<void> {
    return await this.http.delete(`/hooks/${hookId}`)
  }
}
