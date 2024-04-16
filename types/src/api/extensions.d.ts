import type { Extension, UpdateExtension } from '../models.js';

import { HttpService } from '../http.js';
export declare class ExtensionService extends HttpService {
  get( extension_name: string ): Promise<Extension>;
  update( extension_name: string, data: UpdateExtension ): Promise<Extension>;
  remove( extension_name: string ): Promise<void>;
}
