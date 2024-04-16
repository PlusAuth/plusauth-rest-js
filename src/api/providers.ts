import type { EmailProvider , Provider , UpdateEmailProvider } from '../models.js';

import { HttpService } from '../http.js';

export class ProviderService extends HttpService {
  async getEmailSettings( ): Promise<EmailProvider> {
    return this.http.get( '/providers/email' );
  }

  async updateEmailSettings( data: UpdateEmailProvider ): Promise<Provider> {
    return this.http.patch( '/providers/email', data );
  }
}
