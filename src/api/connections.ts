import { HttpService } from "../http"
import type { Connection, CreateConnection, UpdateConnection } from "../models"
import { encodedQueryString } from "../utils"

export class ConnectionService extends HttpService {
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
  }): Promise<{ total: number; results: Connection[] }> {
    return await this.http.get(`/connections/${encodedQueryString(queryParams)}`)
  }

  /**
   * @param data Connection object
   */
  async create(data: CreateConnection): Promise<Connection> {
    return await this.http.post(`/connections/`, data)
  }

  /**
   * @param name Connection name
   */
  async get(name: string): Promise<Connection> {
    return await this.http.get(`/connections/${name}`)
  }

  /**
   * @param name Connection name
   * @param data Object containing to be updated values
   */
  async update(name: string, data: UpdateConnection): Promise<Connection> {
    return await this.http.patch(`/connections/${name}`, data)
  }

  /**
   * @param name Connection name
   */
  async remove(name: string): Promise<void> {
    return await this.http.delete(`/connections/${name}`)
  }

  /**
 * Only available for AD/LDAP connections

 * @param name Connection name
 */
  async sync(name: string): Promise<void> {
    return await this.http.get(`/connections/${name}/sync`)
  }
}
