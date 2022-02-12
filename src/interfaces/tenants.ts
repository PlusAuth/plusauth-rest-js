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
  api_version: string;
  token_endpoint_auth_methods?: string[];
  whitelisted_jwa?: Record<string, string[]>;
  default_strategy: string;
  auto_sign_in?: boolean;
  tenant_login_url?: string;
  register_enabled?: boolean;
  welcome_emails_enabled?: boolean;
  force_email_verification?: boolean;
  hash_function: string;
  forgot_password_enabled?: boolean;
  expose_unsafe_errors?: boolean;
  extra_scopes?: string[];
  extra_params?: string[];
  password_policy: {
    min?: number;
    max?: number;
    number?: number;
    lower_case?: number;
    upper_case?: number;
    custom_chars?: string
  },
  password_history?: number,
  social: Record<string, any>;
  ttl: {
    access_token: number;
    authorization_code: number;
    backchannel_authentication_request: number;
    client_credentials: number;
    device_code: number;
    id_token: number;
    refresh_token: number;
  },
  ciba: {
    notifier_endpoint?: string,
    delivery_mode?: 'ping' | 'poll',
  },
  protection: {
    brute_force: {
      allowed_attempts: number,
      block_duration: number,
      duration: number,
      enabled: boolean,
      notification: boolean,
      white_list: string[],
    },
    account_blocking_policy: {
      allowed_attempts: number,
      allow_user_unblock: boolean,
      block_duration: number,
      duration: number,
      enabled: boolean,
      notification: boolean,
      reset_after_success: boolean
    }
  }
}


/**
 * @public
 */
export interface ITenantAdministrator {
  email: string;
  owner: boolean;
  invite_accepted: boolean;
}

/**
 * @public
 */
export interface IStats {
  usage: {
    date: string,
    data: {
      hooks: number
      active_user: number
      federated_user: number,
      social_user: number,
      new_user: number,
    }
  }[],
  total_users: number,
  total_hooks: number,
  total_sessions: number,
}
