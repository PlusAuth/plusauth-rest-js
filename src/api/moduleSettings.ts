import { HttpService } from "../http"
import type { ModuleSettings } from "../models"
import type { UpdateModuleSettings } from "../models"

export class ModuleSettingService extends HttpService {
  /**
   * @param name
   */
  async get(name: "radius"): Promise<ModuleSettings> {
    return await this.http.get(`/module-settings/${name}/`)
  }

  /**
   * @param name
   * @param data Object containing to be updated values
   */
  async update(name: "radius", data: UpdateModuleSettings): Promise<ModuleSettings> {
    return await this.http.patch(`/module-settings/${name}/`, data)
  }
}
