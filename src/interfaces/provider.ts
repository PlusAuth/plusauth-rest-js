import { EmailProvider, SMSProvider } from '../constants/providers';

/**
 * @public
 */
export interface IEmailProviderSettings {
  provider: EmailProvider,
  settings: Record<string, string>
  from?: string
}

/**
 * @public
 */
export interface ISMSProviderSettings {
  provider: SMSProvider,
  settings: Record<string, string>
}
