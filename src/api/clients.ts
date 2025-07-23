import { HttpService } from "../http"
import type { Client, CreateClient, UpdateClient } from "../models"
import { encodedQueryString } from "../utils"

export class ClientService extends HttpService {
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
  }): Promise<{ total: number; results: Client[] }> {
    return await this.http.get(`/clients/${encodedQueryString(queryParams)}`)
  }

  /**
   * @param data Client object
   */
  async create(data: CreateClient): Promise<Client> {
    return await this.http.post(`/clients/`, data)
  }

  /**
   * @param clientId Client identifier
   */
  async get(clientId: string): Promise<Client> {
    return await this.http.get(`/clients/${clientId}`)
  }

  /**
   * @param clientId Client identifier
   * @param data Object containing to be updated values
   */
  async update(clientId: string, data: UpdateClient): Promise<Client> {
    return await this.http.patch(`/clients/${clientId}`, data)
  }

  /**
   * @param clientId Client identifier
   */
  async remove(clientId: string): Promise<void> {
    return await this.http.delete(`/clients/${clientId}`)
  }
}
