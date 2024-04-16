import { HttpService } from '../http';
import { EmailProvider, Provider, UpdateEmailProvider } from '../models';

export class ProviderService extends HttpService {
  async getEmailSettings( ): Promise<EmailProvider> {
    return this.http.get( '/providers/email' );
  }

  async updateEmailSettings( data: UpdateEmailProvider ): Promise<Provider> {
    return this.http.patch( '/providers/email', data );
  }
}
