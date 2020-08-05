/**
 * @public
 */
export interface ITenant {
  tenant_id: string;
  region: 'tr' | 'eu';
  settings?: ITenantSettings;
}

/**
 * @public
 */
export interface ITenantSettings {
  defaultStrategy: string;
  autoSignIn?: boolean;
  tenantLoginUrl?: string;
  registerEnabled?: boolean;
  forceEmailVerification?: boolean;
  hashFunction: string;
  forgotPasswordEnabled?: boolean;
  mfa: {
    sms?: {
      enabled: boolean;
    };
  };
  email?: any;
  passwordPolicy: {
    min?: number;
    max?: number;
    number?: number;
    lowerCase?: number;
    upperCase?: number;
    customChars?: string;
    customRegexp?: string;
  };
  ttl?: {
    IdToken?: number;
    DeviceCode?: number;
    AccessToken?: number;
    RefreshToken?: number;
    AuthorizationCode?: number;
    ClientCredentials?: number;
  };
}
