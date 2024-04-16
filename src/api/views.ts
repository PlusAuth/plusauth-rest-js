import { HttpService } from '../http';
import { View, ViewType } from '../models';

export class ViewService extends HttpService {
  async get( type: ViewType ): Promise<View> {
    return this.http.get( `/views/${ type }` );
  }

  async update( type: ViewType, data: string ): Promise<View> {
    return this.http.patch( `/views/${ type }`, data );
  }
}
