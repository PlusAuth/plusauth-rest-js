import { HttpService } from "../http"
import type { CreateTicket } from "../models"
import { encodedQueryString } from "../utils"

export class TicketService extends HttpService {
  /**
   * @param data Ticket object
   */
  async createPasswordReset(data: CreateTicket): Promise<Record<string, any>> {
    return await this.http.post(`/tickets/reset-password`, data)
  }

  /**
   * @param queryParams Query parameters
   * @param queryParams.limit Limit the number of results returned
   * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
   * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
   * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
   * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
   */
  async getVerifyEmail(queryParams?: {
    limit?: number
    offset?: number
    q?: string
    sort_by?: string | string[]
    fields?: string | string[]
  }): Promise<Record<string, any>> {
    return await this.http.get(`/tickets/verify-email${encodedQueryString(queryParams)}`)
  }

  /**
   * @param data Ticket object
   */
  async createVerifyEmail(data: CreateTicket): Promise<Record<string, any>> {
    return await this.http.post(`/tickets/verify-email`, data)
  }
}
