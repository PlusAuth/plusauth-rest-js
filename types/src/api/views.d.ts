import type { View , ViewType } from '../models.js';

import { HttpService } from '../http.js';
export declare class ViewService extends HttpService {
  get( type: ViewType ): Promise<View>;
  update( type: ViewType, data: string ): Promise<View>;
}
