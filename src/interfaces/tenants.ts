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
  tokenEndpointAuthMethods?: string[];
  whitelistedJWA?: Record<string, string[]>;
  defaultStrategy: string;
  autoSignIn?: boolean;
  tenantLoginUrl?: string;
  registerEnabled?: boolean;
  welcomeEmailsEnabled?: boolean;
  forceEmailVerification?: boolean;
  hashFunction: string;
  forgotPasswordEnabled?: boolean;
  exposeUnsafeErrors?: boolean;
  extraScopes?: string[];
  extraParams?: string[];
  passwordPolicy: {
    min?: number;
    max?: number;
    number?: number;
    lowerCase?: number;
    upperCase?: number;
    customChars?: string;
    customRegexp?: { value: string, message?: string };
  },
  passwordHistory?: number,
  social?: Record<string, any>;
  ttl?: {
    IdToken?: number;
    DeviceCode?: number;
    AccessToken?: number;
    RefreshToken?: number;
    AuthorizationCode?: number;
    ClientCredentials?: number;
  },
  protection: {
    bruteForce: {
      allowedAttempts: number,
      blockDuration: number,
      duration: number,
      enabled: boolean,
      notification: boolean,
      whiteList: string[],
    },
    accountBlockingPolicy: {
      allowedAttempts: number,
      allowUserUnblock: boolean,
      blockDuration: number,
      duration: number,
      notification: boolean,
      resetAfterSuccess: boolean
    }
  }
}


export interface ITenantAdministrator {
  email: string;
  owner: boolean;
  inviteAccepted: boolean;
}


export interface IStats {
  usage: {
    date: string,
    data: {
      new_user: number,
      active_user: number
    }
  }[],
  totalUsers: number,
  totalHooks: number,
}
