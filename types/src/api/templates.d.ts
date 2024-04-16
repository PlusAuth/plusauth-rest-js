import type { Template , TemplateType , UpdateTemplate } from '../models.js';

import { HttpService } from '../http.js';
export declare class TemplateService extends HttpService {
  get( type: TemplateType, name: undefined ): Promise<Template>;
  update( type: TemplateType, name: undefined, data: UpdateTemplate ): Promise<Template>;
  reset( type: TemplateType, name: undefined ): Promise<void>;
}
