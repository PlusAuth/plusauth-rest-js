import { HttpService } from "../http"
import type { Template, UpdateTemplate } from "../models"

export class TemplateService extends HttpService {
  /**
   * @param type
   * @param name
   */
  async get(
    type: "sms" | "email",
    name:
      | "welcome"
      | "verification-code"
      | "magic-link"
      | "verify-email"
      | "reset-password"
      | "invite-admin"
      | "payment-failed"
      | "plan-downgraded"
      | "blocked-account"
      | "blocked-ip"
      | "test",
  ): Promise<Template> {
    return await this.http.get(`/templates/${type}/${name}/`)
  }

  /**
   * @param type
   * @param name
   * @param data Object containing to be updated values
   */
  async update(
    type: "sms" | "email",
    name:
      | "welcome"
      | "verification-code"
      | "magic-link"
      | "verify-email"
      | "reset-password"
      | "invite-admin"
      | "payment-failed"
      | "plan-downgraded"
      | "blocked-account"
      | "blocked-ip"
      | "test",
    data: UpdateTemplate,
  ): Promise<Template> {
    return await this.http.patch(`/templates/${type}/${name}/`, data)
  }

  /**
   * @param type
   * @param name
   */
  async reset(
    type: "sms" | "email",
    name:
      | "welcome"
      | "verification-code"
      | "magic-link"
      | "verify-email"
      | "reset-password"
      | "invite-admin"
      | "payment-failed"
      | "plan-downgraded"
      | "blocked-account"
      | "blocked-ip"
      | "test",
  ): Promise<void> {
    return await this.http.delete(`/templates/${type}/${name}/`)
  }
}
