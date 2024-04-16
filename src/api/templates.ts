import type { Template , TemplateType , UpdateTemplate } from '../models.js';

import { HttpService } from '../http.js';

export class TemplateService extends HttpService {
  async get( type: TemplateType, name: undefined ): Promise<Template> {
    return this.http.get( `/templates/${ type }/${ name }` );
  }

  async update( type: TemplateType, name: undefined, data: UpdateTemplate ): Promise<Template> {
    return this.http.patch( `/templates/${ type }/${ name }`, data );
  }

  async reset( type: TemplateType, name: undefined ): Promise<void> {
    return this.http.delete( `/templates/${ type }/${ name }` );
  }
}
