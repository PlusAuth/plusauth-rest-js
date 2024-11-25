import { HttpService } from "../http"
import type { EmailProvider } from "../models"
import type { UpdateEmailProvider } from "../models"

export class ProviderService extends HttpService {
  /**
   */
  async getEmailSettings(): Promise<EmailProvider> {
    return await this.http.get(`/providers/email`)
  }

  /**
   * @param data Object containing to be updated values
   */
  async updateEmailSettings(data: UpdateEmailProvider): Promise<EmailProvider> {
    return await this.http.patch(`/providers/email`, data)
  }
}
