import { HttpService } from "../http"
import type { PublicKey } from "../models"

export class KeyService extends HttpService {
  /**
   * @param type
   */
  async get(type: "signing" | "encryption"): Promise<PublicKey[]> {
    return await this.http.get(`/keys/$${type}`)
  }

  /**
   * @param type
   */
  async rotate(type: "signing" | "encryption"): Promise<PublicKey> {
    return await this.http.post(`/keys/$${type}/rotate`)
  }

  /**
   * @param type
   * @param kid
   */
  async revoke(type: "signing" | "encryption", kid: string): Promise<void> {
    return await this.http.get(`/keys/$${type}/revoke/$${kid}`)
  }
}
