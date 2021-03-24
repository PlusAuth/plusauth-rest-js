import { EmailProvider, SMSProvider } from '../constants/providers';

export interface IEmailProviderSettings {
  provider: EmailProvider,
  settings: Record<string, string>
  from?: string
}
export interface ISMSProviderSettings {
  provider: SMSProvider,
  settings: Record<string, string>
}
