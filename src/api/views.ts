import { HttpService } from "../http"
import type { View } from "../models"

export class ViewService extends HttpService {
  /**
   * @param type
   */
  async get(
    type:
      | "consent"
      | "fill-missing"
      | "login"
      | "logout-success"
      | "logout-confirm"
      | "mfa"
      | "mfa-email"
      | "mfa-fv"
      | "mfa-otp"
      | "mfa-push"
      | "mfa-sms"
      | "mfa-webauthn"
      | "password-recovery"
      | "passwordless-email"
      | "passwordless-otp"
      | "passwordless-push"
      | "passwordless-sms"
      | "register"
      | "reset-password"
      | "verify-email"
      | "error",
  ): Promise<View> {
    return await this.http.get(`/views/${type}/`)
  }

  /**
   * @param type
   * @param data View content. Pass null or empty to reset to default
   */
  async update(
    type:
      | "consent"
      | "fill-missing"
      | "login"
      | "logout-success"
      | "logout-confirm"
      | "mfa"
      | "mfa-email"
      | "mfa-fv"
      | "mfa-otp"
      | "mfa-push"
      | "mfa-sms"
      | "mfa-webauthn"
      | "password-recovery"
      | "passwordless-email"
      | "passwordless-otp"
      | "passwordless-push"
      | "passwordless-sms"
      | "register"
      | "reset-password"
      | "verify-email"
      | "error",
    data: string | null,
  ): Promise<View> {
    return await this.http.patch(`/views/${type}/`, data)
  }
}
