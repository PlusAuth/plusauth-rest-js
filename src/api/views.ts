import type { View , ViewType } from '../models.js';

import { HttpService } from '../http.js';

export class ViewService extends HttpService {
  async get( type: ViewType ): Promise<View> {
    return this.http.get( `/views/${ type }` );
  }

  async update( type: ViewType, data: string ): Promise<View> {
    return this.http.patch( `/views/${ type }`, data );
  }
}
