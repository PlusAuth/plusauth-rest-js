import type { EmailProvider , Provider , UpdateEmailProvider } from '../models.js';

import { HttpService } from '../http.js';
export declare class ProviderService extends HttpService {
  getEmailSettings(): Promise<EmailProvider>;
  updateEmailSettings( data: UpdateEmailProvider ): Promise<Provider>;
}
