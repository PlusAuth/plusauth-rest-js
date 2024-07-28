/**
 * @public
 */
export declare interface AccountBlockingPolicy {
    enabled: boolean;
    /**
     * Send an email to user's email address about the activity.
     */
    notification: boolean;
    /**
     * Reset failed attempts count after successful login.
     */
    reset_after_success: boolean;
    /**
     * If `true`, users will be able to unblock their accounts by the link received in notification email.
     */
    allow_user_unblock: boolean;
    /**
     * Maximum failed login attempts to block user for specified duration.
     */
    allowed_attempts: number;
    /**
     * Number of seconds to block the account.
     */
    block_duration: number;
    /**
     * Number of seconds before attempts are reset
     */
    duration: number;
}

/**
 * Resource Object with name and description properties.
 * @public
 */
export declare interface AuthPlusAccount {
    category_id?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at: string;
    details: {
        [k: string]: any;
    };
    icon?: (string | null);
    /**
     * Unique identifier of entity
     */
    id: string;
    name?: (string | null);
    /**
     * Category order
     */
    order?: number;
    type: ('totp' | 'hotp' | 'push');
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
}

/**
 * Category definition to AuthPlus application
 * @public
 */
export declare interface AuthPlusCategory {
    /**
     * Unique identifier of entity
     */
    id: string;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Category name
     */
    name: (string | null);
    /**
     * Category order
     */
    order?: number;
}

/**
 * Registered device to AuthPlus application
 * @public
 */
export declare interface AuthPlusDevice {
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    name?: (string | null);
    device_identifier: string;
    model: string;
    os: string;
    details?: {
        [k: string]: any;
    };
}

/**
 * @public
 */
export declare interface AwsSesEmailProvider {
    type: 'email';
    is_custom?: boolean;
    provider: 'aws_ses';
    settings: {
        /**
         * `from` field for your emails
         */
        from: string;
        /**
         * AWS SES access key id.
         */
        access_key_id: string;
        /**
         * AWS SES secret access key.
         */
        secret_access_key: string;
        /**
         * AWS SES region.
         */
        region: string;
    };
}

/**
 * @public
 */
declare type BodyType = Record<string, any> | string;

/**
 * @public
 */
export declare interface BruteForcePolicy {
    enabled: boolean;
    /**
     * Allowed consecutive login attempts
     */
    allowed_attempts: number;
    /**
     * Number of seconds before attempts are reset
     */
    duration: number;
    /**
     * Number of seconds to block the IP.
     */
    block_duration: number;
    /**
     * Send an email to user's email address about the activity.
     */
    notification: boolean;
    /**
     * Whitelisted IP addresses.
     */
    white_list: string[];
}

/**
 * @public
 */
export declare interface Client {
    type: ('web' | 'server-to-server' | 'single-page-application' | 'financial' | 'native');
    /**
     * Unique client identifier.
     */
    client_id: string;
    /**
     * Unique client identifier.
     */
    client_secret: string;
    /**
     * Client name for displaying purposes.
     */
    client_name: string;
    /**
     * Additional description for the client
     */
    description?: (string | null);
    logo_uri?: (string | null);
    /**
     * Is client first party
     */
    first_party?: (boolean | null);
    token_endpoint_auth_method: string;
    response_types: string[];
    oidc_conformant?: (boolean | null);
    redirect_uris: string[];
    logout_uris: string[];
    grant_types: string[];
    advanced: {
        pkce_required?: boolean;
    };
    extra_metadata: {
        [k: string]: (string | boolean | number | null);
    };
    connectors: {
        saml?: {
            enabled?: boolean;
            entity_id: string;
            /**
             * Your SAML SP's assertion consumer endpoint.
             */
            consumer_service: string;
            /**
             * Application specific resource in an IDP initiated Single Sign-On scenario. In most instances this is blank.
             */
            relay_state?: string;
            mappings: {
                /**
                 * This interface was referenced by `undefined`'s JSON-Schema definition
                 * via the `patternProperty` "^(.*)$".
                 */
                [k: string]: any;
            };
            /**
             * Your SAML SP's metadata URL.
             */
            metadata_url?: string;
            request_binding: ('HTTP-POST' | 'HTTP-Redirect');
            sign_assertions?: boolean;
            sign_out_enabled?: boolean;
            sign_out_url?: string;
            signed_requests?: boolean;
            signature_algorithm?: ('sha512' | 'sha256' | 'sha1');
            signing_certificate?: (string | null);
        };
        wsfed?: {
            enabled?: boolean;
            /**
             * Your WS Fed application's callback uri.
             */
            callback_url: string;
            /**
             * Application identifier (wtrealm parameter)
             */
            realm: string;
            audiences?: string[];
            /**
             * Validity time in seconds
             */
            validity?: number;
        };
    };
    jwks?: {
        /**
         * @maxItems 4
         */
        keys: Record<string, any>;
        [k: string]: any;
    };
}

declare class ClientService extends HttpService {
    getAll(queryParams?: {
        offset?: number;
        limit?: number;
        sort_by?: string;
        q?: string;
    }): Promise<PaginatedResult<Client>>;
    create(data: CreateClient): Promise<Client>;
    get(client_id: string): Promise<Client>;
    update(client_id: string, data: UpdateClient): Promise<Client>;
    remove(client_id: string): Promise<void>;
}

/**
 * @public
 */
export declare interface CommonCredential {
    /**
     * Authenticator id
     */
    id: string;
    type: ('e-sign' | 'sms' | 'email' | 'custom');
    /**
     * Connection name
     */
    connection?: (string | null);
    /**
     * Raw user object from the connection
     */
    details: {
        [k: string]: any;
    };
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
}

/**
 * @public
 */
export declare type Connection = (({
    type: 'email';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: 'aws_ses';
    settings: {
        /**
         * `from` field for your emails
         */
        from: string;
        /**
         * AWS SES access key id.
         */
        access_key_id: string;
        /**
         * AWS SES secret access key.
         */
        secret_access_key: string;
        /**
         * AWS SES region.
         */
        region: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        use_magic_link?: boolean;
        enabled_clients: string[];
    };
    enabled: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
} | {
    type: 'email';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: 'postmark';
    /**
     * Postmark email service configuration settings.
     */
    settings: {
        /**
         * `from` field for your emails
         */
        from: string;
        /**
         * Postmark API Key
         */
        api_key: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        use_magic_link?: boolean;
        enabled_clients: string[];
    };
    enabled: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
} | {
    type: 'email';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: 'sendgrid';
    /**
     * SendGrid email service configuration settings.
     */
    settings: {
        /**
         * `from` field for your emails
         */
        from: string;
        /**
         * SendGrid API Key
         */
        api_key: string;
        /**
         * SendGrid API User
         */
        api_user?: (string | null);
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        use_magic_link?: boolean;
        enabled_clients: string[];
    };
    enabled: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
} | {
    type: 'email';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: 'sparkpost';
    /**
     * SparkPost email service configuration settings.
     */
    settings: {
        /**
         * `from` field for your emails
         */
        from: string;
        /**
         * SparkPost API Key
         */
        api_key: string;
        /**
         * SparkPost Endpoint
         */
        endpoint: string;
        /**
         * SparkPost API Version
         */
        api_version: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        use_magic_link?: boolean;
        enabled_clients: string[];
    };
    enabled: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
} | {
    type: 'email';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: 'smtp';
    /**
     * Your SMTP provider configuration settings.
     */
    settings: {
        /**
         * `from` field for your emails
         */
        from: string;
        /**
         * Hostname of your SMTP provider
         */
        host: string;
        /**
         * Port of your SMTP provider
         */
        port: number;
        /**
         * Username for SMTP authentication
         */
        username: string;
        /**
         * Password for SMTP authentication
         */
        password: string;
        secure?: boolean;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        use_magic_link?: boolean;
        enabled_clients: string[];
    };
    enabled: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
}) | ({
    type: 'sms';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: 'dataport';
    /**
     * DataPort configuration settings.
     */
    settings: {
        /**
         * DataPort username
         */
        username: string;
        /**
         * DataPort user credentials.
         */
        password: string;
        /**
         * Account number used for token retrieval
         */
        account_id: string;
        /**
         * Operator identifier
         */
        operator: ('1' | '2' | '3' | '4');
        /**
         * Short code of operator used for sendind messages
         */
        short_number: string;
        /**
         * Orginator value
         */
        from: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients: string[];
    };
    enabled: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
} | {
    type: 'sms';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: 'messagebird';
    /**
     * MessageBird configuration settings.
     */
    settings: {
        /**
         * MessageBird API Key
         */
        api_key: string;
        /**
         * MessageBird originator also known as Sender ID.
         */
        originator: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients: string[];
    };
    enabled: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
} | {
    type: 'sms';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: 'custom';
    /**
     * Custom SMS provider configuration settings.
     */
    settings: {
        /**
         * SMS provider's hook context
         */
        hook_context: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients: string[];
    };
    enabled: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
} | {
    type: 'sms';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: '3gbilisim';
    /**
     * 3gBilisim configuration settings.
     */
    settings: {
        /**
         * If provided, sms requests will be made to this endpoint
         */
        endpoint?: string;
        /**
         * Username provided by your 3GBilisim dealer.
         */
        username: string;
        /**
         * Password provided by your 3GBilisim dealer.
         */
        password: string;
        /**
         * Dealer-specific code provided by your 3GBilisim dealer.
         */
        company_code?: string;
        /**
         * It is the message header defined in the NetGSM (your sender name). If you want your subscriber number to be your message header, write your subscriber number to this parameter without a leading zero. 8xxxxxxxxxx
         */
        from?: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients: string[];
    };
    enabled: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
} | {
    type: 'sms';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: 'twilio';
    /**
     * Twilio SMS service configuration settings.
     */
    settings: {
        /**
         * Your Twilio auth token
         */
        auth_token: string;
        /**
         * Your Twilio account sid.
         */
        sid: string;
        strategy: ('copilot' | 'from');
        /**
         * If strategy is `copilot` than this value needs to be your Twilio messaging service SID. Otherwise it is phone number for originating your messages.
         */
        from: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients: string[];
    };
    enabled: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
} | {
    type: 'sms';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: 'vonage';
    /**
     * Vonage SMS service configuration settings.
     */
    settings: {
        /**
         * Vonage API Key
         */
        api_key: string;
        /**
         * Vonage API Secret
         */
        api_secret: string;
        /**
         * Originating phone number
         */
        from: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients: string[];
    };
    enabled: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
} | {
    type: 'sms';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: 'netgsm';
    /**
     * NetGSM configuration settings.
     */
    settings: {
        /**
         * Subscriber number obtained from Netgsm service. For ex: 850xxxxxxx, 312XXXXXXX
         */
        username: string;
        /**
         * Sub-user password with defined API authorization.
         */
        password: string;
        /**
         * If you are a dealer member, your dealer-specific code.
         */
        merchant_code?: string;
        /**
         * The ID information of the application published from your developer account.
         */
        app_key?: string;
        /**
         * It is the message header defined in the NetGSM (your sender name). If you want your subscriber number to be your message header, write your subscriber number to this parameter without a leading zero. 8xxxxxxxxxx
         */
        from?: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients: string[];
    };
    enabled: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
}) | ({
    type: 'social';
    provider: 'apple';
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        enabled_clients: string[];
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
            [k: string]: any;
        };
        client_id: string;
        key_id: string;
        team_id: string;
        scopes: string[];
    };
} | {
    type: 'social';
    provider: 'e-devlet';
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        enabled_clients: string[];
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
            [k: string]: any;
        };
        client_id: string;
        client_secret: string;
        is_test?: boolean;
        scopes: string[];
    };
} | {
    type: 'social';
    provider: ('amazon' | 'dribbble' | 'facebook' | 'github' | 'google' | 'linkedin' | 'microsoft' | 'slack' | 'spotify');
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        enabled_clients: string[];
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
            [k: string]: any;
        };
        client_id: string;
        client_secret: string;
        scopes: string[];
    };
} | {
    type: 'social';
    provider: 'custom-oauth2';
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        enabled_clients: string[];
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
            [k: string]: any;
        };
        extra_params: {
            [k: string]: string;
        };
        extra_headers: {
            [k: string]: string;
        };
        client_id: string;
        client_secret: string;
        authorization_url: string;
        token_url: string;
        scopes: string[];
    };
} | {
    type: 'social';
    provider: 'dropbox';
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        enabled_clients: string[];
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
            [k: string]: any;
        };
        app_key: string;
        app_secret: string;
        scopes: string[];
    };
} | {
    type: 'social';
    provider: 'twitter';
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        enabled_clients: string[];
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
            [k: string]: any;
        };
        consumer_key: string;
        consumer_secret: string;
    };
}) | ({
    type: 'enterprise';
    provider: 'ldap';
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        enabled_clients: string[];
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
            [k: string]: any;
        };
        /**
         * Your LDAP server's URL in format `<ldap/s>://<host>:<port>`
         */
        url: string;
        /**
         * Password of LDAP admin account which defined in `bind_dn`
         */
        bind_credentials: string;
        /**
         * DN of LDAP admin, which will be used by PlusAuth to access LDAP server
         */
        bind_dn: string;
        /**
         * Full DN of LDAP tree where your users are. This DN is the parent of LDAP users. Assuming that your typical user will have DN like `uid=john,ou=users,dc=example,dc=com`, this value would be `ou=users,dc=example,dc=com`
         */
        search_base: string;
        /**
         * LDAP filter for user lookup. Make sure it is wrapped with parentheses. For ex: `(uid={{username}})`
         */
        search_filter: string;
        /**
         * Specify the portion of the target subtree that should be considered
         */
        search_scope?: ('base' | 'one' | 'sub' | 'subordinate');
        /**
         * Encrypts the connection to LDAP using STARTTLS, which will disable connection pooling
         */
        start_tls?: boolean;
        /**
         * Enabling this option will reflect user updates and deletes to your LDAP connection. This means when user is deleted/updated from PlusAuth, it will be deleted from your LDAP too.
         */
        write_mode?: boolean;
        mappings: {
            /**
             * @minItems 1
             *
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             */
            [k: string]: (string | [
            (string | {
                value?: (string | boolean | number);
                [k: string]: any;
            }),
            ...((string | {
                value?: (string | boolean | number);
                [k: string]: any;
            }))[]
            ] | {
                value?: (string | boolean | number);
                [k: string]: any;
            } | boolean);
        };
    };
} | {
    type: 'enterprise';
    provider: 'saml';
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        enabled_clients: string[];
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
            [k: string]: any;
        };
        /**
         * Your SAML IDP's metadata URL.
         */
        metadata_url?: string;
        /**
         * Your SAML IdP's entity_id
         */
        entity_id: string;
        /**
         * Your SAML IdP's login URL in format `<http/s>://<host>:<port?>`
         */
        sign_in_url: string;
        /**
         * If enabled, when user logs out from PlusAuth a SAML logout request will be sent to SAML IdP.
         */
        sign_out_enabled?: boolean;
        /**
         * Your SAML IdP's sign out URL in format `<http/s>://<host>:<port?>`
         */
        sign_out_url?: (string | null);
        signing_certificate?: (string | null);
        /**
         * Enable/Disable the SAML authentication request signing.
         */
        sign_request?: boolean;
        sign_request_algorithm: ('sha512' | 'sha256' | 'sha1');
        /**
         * SAML Request Binding
         */
        request_binding: ('HTTP-POST' | 'HTTP-Redirect');
        mappings: {
            /**
             * @minItems 1
             *
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             */
            [k: string]: (string | [
            (string | {
                value?: (string | boolean | number);
                [k: string]: any;
            }),
            ...((string | {
                value?: (string | boolean | number);
                [k: string]: any;
            }))[]
            ] | {
                value?: (string | boolean | number);
                [k: string]: any;
            } | boolean);
        };
    };
}) | ({
    type: 'otp';
    provider: 'hotp';
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        enabled_clients: string[];
        /**
         * The length of the OTP code.
         */
        code_length: number;
        hash_alg: ('sha1' | 'sha256' | 'sha512');
        window: number;
        initial_counter: number;
    };
} | {
    type: 'otp';
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    provider: 'totp';
    settings: {
        enabled_clients: string[];
        hash_alg: ('sha1' | 'sha256' | 'sha512');
        window: number;
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * Time to live of the OTP code in seconds.
         */
        ttl: number;
    };
}) | ({
    type: 'push';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: 'native';
    settings: {
        /**
         * Firebase Cloud Messaging configuration settings.
         * To enable the FCM integration, you need to get your service account key from the [Firebase Console](https://console.firebase.google.com/).
         * - Select your project, and click the gear icon on the top of the sidebar.
         * - After opening "Project Settings", head to the "Service Accounts" tab.
         * - Click "Generate new private key", then confirm by clicking "Generate key".
         * - Clicking "Generate key" downloads the generated service account json file.
         */
        fcm?: {
            /**
             * `project_id` field located in your service account json
             */
            project_id: string;
            /**
             * `client_email` field located in your service account json
             */
            client_email: string;
            /**
             * `private_key` field located in your service account json
             */
            private_key: string;
        };
        /**
         * Apple Push Notification Service configuration settings.
         */
        apns?: {
            /**
             * p8 of your Apple Developer account. To generate one follow these steps:
             * - Head over to Certificates, Identifiers & Profiles > Keys.
             * - Register a new key and give it a name.
             * - Enable the Apple Push Notifications service (APNs) checkbox by selecting it.
             * - Click the Continue button and on the next page, select Register.
             * - Download the .p8 key file.
             */
            key: string;
            /**
             * This is a 10-character unique identifier for the authentication key. You can find it in the key details section of the newly created key in your Apple developer account.
             */
            key_id: string;
            /**
             * This is available in your Apple developer account.
             */
            team_id: string;
            /**
             * This is the ID of your app. You can find it in the app info section of your Apple developer account.
             */
            bundle_id: string;
            production: boolean;
        };
        enabled_clients: string[];
        /**
         * Push notification strategy
         */
        strategy?: ('code' | 'prompt');
    };
    enabled: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
} | {
    type: 'push';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: 'expo';
    /**
     * To enable Expo Push integration,
     *         you need to create an [Expo Application Services (EAS)](https://expo.dev/) account and generate an access token in the EAS dashboard.
     */
    settings: {
        /**
         * Your Expo account's access token
         */
        access_token: string;
        enabled_clients: string[];
        /**
         * Push notification strategy
         */
        strategy?: ('code' | 'prompt');
    };
    enabled: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
} | {
    type: 'push';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: 'one-signal';
    settings: {
        /**
         * `OneSignal App ID` located in your [application's settings page](https://documentation.onesignal.com/docs/keys-and-ids)
         */
        app_id: string;
        /**
         * `Rest API Key` located in your [application's settings page](https://documentation.onesignal.com/docs/keys-and-ids)
         */
        api_key: string;
        enabled_clients: string[];
        /**
         * Push notification strategy
         */
        strategy?: ('code' | 'prompt');
    };
    enabled: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
}));

declare class ConnectionService extends HttpService {
    getAll(queryParams?: {
        offset?: number;
        limit?: number;
        sort_by?: string;
        q?: string;
    }): Promise<PaginatedResult<Connection>>;
    create(data: Connection): Promise<Connection>;
    get(name: string): Promise<Connection>;
    update(name: string, data: UpdateConnection): Promise<Connection>;
    remove(name: string): Promise<void>;
}

/**
 * @public
 */
export declare type ConnectionType = ('sms' | 'otp' | 'push' | 'email' | 'social' | 'enterprise');

/**
 * @public
 */
export declare type CreateAuthPlusAccount = ({
    category_id?: (string | null);
    details: {
        secret: string;
        hash_alg: ('sha1' | 'sha256' | 'sha512');
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * Time to live of the OTP code in seconds.
         */
        ttl: number;
    };
    icon?: (string | null);
    name?: (string | null);
    /**
     * Category order
     */
    order?: number;
    type: 'totp';
} | {
    category_id?: (string | null);
    details: {
        secret: string;
        counter: number;
        /**
         * The length of the OTP code.
         */
        code_length: number;
        hash_alg: ('sha1' | 'sha256' | 'sha512');
    };
    icon?: (string | null);
    name?: (string | null);
    /**
     * Category order
     */
    order?: number;
    type: 'hotp';
} | {
    category_id?: (string | null);
    details: {
        secret: string;
        hash_alg: ('sha1' | 'sha256' | 'sha512');
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * Time to live of the OTP code in seconds.
         */
        ttl: number;
        /**
         * If `true` this account will be disabled whenever end-user's SIM card changes.
         */
        is_sim_bound?: boolean;
        sim_card_identifiers?: {
            [k: string]: any;
        }[];
        fcm_token: string;
        device_identifier: string;
    };
    icon?: (string | null);
    name?: (string | null);
    /**
     * Category order
     */
    order?: number;
    type: 'push';
});

/**
 * @public
 */
export declare interface CreateAuthPlusCategory {
    /**
     * Category name
     */
    name?: (string | null);
    /**
     * Category order
     */
    order?: number;
}

/**
 * Registered device to AuthPlus application
 * @public
 */
export declare interface CreateAuthPlusDevice {
    name?: (string | null);
    device_identifier: string;
    model: string;
    os: string;
    details?: {
        [k: string]: any;
    };
}

/**
 * @public
 */
export declare interface CreateClient {
    type: ('web' | 'server-to-server' | 'single-page-application' | 'financial' | 'native');
    /**
     * Unique client identifier.
     */
    client_id?: string;
    /**
     * Unique client identifier.
     */
    client_secret?: string;
    /**
     * Client name for displaying purposes.
     */
    client_name: string;
    /**
     * Additional description for the client
     */
    description?: (string | null);
    logo_uri?: (string | null);
    /**
     * Is client first party
     */
    first_party?: (boolean | null);
    token_endpoint_auth_method?: string;
    response_types?: string[];
    oidc_conformant?: (boolean | null);
    redirect_uris?: string[];
    logout_uris?: string[];
    grant_types?: string[];
    advanced?: {
        pkce_required?: boolean;
    };
    extra_metadata?: {
        [k: string]: (string | boolean | number | null);
    };
    connectors?: {
        saml?: {
            enabled?: boolean;
            entity_id: string;
            /**
             * Your SAML SP's assertion consumer endpoint.
             */
            consumer_service: string;
            /**
             * Application specific resource in an IDP initiated Single Sign-On scenario. In most instances this is blank.
             */
            relay_state?: string;
            mappings: {
                /**
                 * This interface was referenced by `undefined`'s JSON-Schema definition
                 * via the `patternProperty` "^(.*)$".
                 */
                [k: string]: any;
            };
            /**
             * Your SAML SP's metadata URL.
             */
            metadata_url?: string;
            request_binding: ('HTTP-POST' | 'HTTP-Redirect');
            sign_assertions?: boolean;
            sign_out_enabled?: boolean;
            sign_out_url?: string;
            signed_requests?: boolean;
            signature_algorithm?: ('sha512' | 'sha256' | 'sha1');
            signing_certificate?: (string | null);
        };
        wsfed?: {
            enabled?: boolean;
            /**
             * Your WS Fed application's callback uri.
             */
            callback_url: string;
            /**
             * Application identifier (wtrealm parameter)
             */
            realm: string;
            audiences?: string[];
            /**
             * Validity time in seconds
             */
            validity?: number;
        };
    };
    jwks?: {
        /**
         * @maxItems 4
         */
        keys: Record<string, any>;
        [k: string]: any;
    };
}

/**
 * @public
 */
export declare interface CreateHook {
    /**
     * Hook name
     */
    name: string;
    /**
     * Defines hook's area of usage
     */
    type: ('pre-register' | 'post-register' | 'pre-login' | 'post-login' | 'pre-mfa' | 'pre-access-token' | 'pre-id-token' | 'pre-fc-import' | 'post-fc-import' | 'pre-fc-export' | 'ciba-auth-prompt' | 'ciba-validate-r-c' | 'ciba-validate-u-c');
    /**
     * Additional information for the hook
     */
    description?: (string | null);
    /**
     * Execution order of the hook. It applies to hook types. Lower ordered hooks executed first.
     */
    order?: number;
    /**
     * Your hook code written in javascript.
     */
    content: string;
    /**
     * Whether the hook is enabled or not.
     */
    enabled?: boolean;
}

/**
 * @public
 */
export declare interface CreatePermission {
    /**
     * Permission identifier. This field is unique and cannot contain **spaces**. Ex. `read:user`
     */
    name: string;
    /**
     * Additional information for the permission
     */
    description?: (string | null);
}

/**
 * @public
 */
export declare interface CreateResource {
    /**
     * Display name for the Resource.
     */
    name: string;
    /**
     * Unique identifier for the Resource. This field must be a valid URL without fragments. Cannot be changed after set.
     */
    audience: string;
    /**
     * Additional identifier to be stored with Resource.
     */
    description?: string;
    settings?: {
        access_token_ttl?: number;
    };
}

/**
 * @public
 */
export declare interface CreateRole {
    /**
     * A name defining your role
     */
    name: string;
    /**
     * Additional information for the role
     */
    description?: (string | null);
    /**
     * If `true` this role will be assigned to new users automatically.
     */
    assign_on_signup?: boolean;
}

/**
 * @public
 */
export declare interface CreateRoleGroup {
    /**
     * A name defining your role group
     */
    name: string;
    /**
     * Additional information for the role group
     */
    description?: (string | null);
    /**
     * If `true` this role group will be assigned to new users automatically.
     */
    assign_on_signup?: boolean;
}

/**
 * @public
 */
export declare interface CreateTenant {
    /**
     * Your tenant's identifier.
     */
    tenant_id: string;
    region: 'tr-1';
    settings?: {
        default_strategy?: (string | null);
        auto_sign_in?: boolean;
        register_enabled?: boolean;
        forgot_password_enabled?: boolean;
        environment_variables?: {
            [k: string]: string;
        };
        expose_unsafe_errors?: boolean;
        welcome_emails_enabled?: boolean;
        force_email_verification?: boolean;
        extra_params?: string[];
        acr_values?: string[];
        extra_scopes?: string[];
        api_version?: ('2021-07-04' | null);
        tenant_login_url?: (string | null);
        /**
         * PlusAuth Authenticator Application related settings
         */
        authenticator?: {
            /**
             * Should authenticator application logout if a SIM card change detected on device
             */
            bind_sim?: boolean;
            [k: string]: any;
        };
        ciba?: {
            delivery_mode?: ('ping' | 'poll');
            notifier_endpoint?: string;
        };
        /**
         * Lifetime settings of generated tokens defined in seconds.
         */
        ttl?: {
            access_token?: number;
            authorization_code?: number;
            backchannel_authentication_request?: number;
            client_credentials?: number;
            device_code?: number;
            id_token?: number;
            refresh_token?: number;
            session?: number;
        };
        hash_function?: ('bcrypt' | 'argon2' | 'pbkdf2');
        policies?: {
            /**
             * Password policy settings to be enforced to your new users.
             */
            password?: {
                /**
                 * Minimum number of characters
                 */
                min?: (number | null);
                /**
                 * Maximum number of characters
                 */
                max?: (number | null);
                /**
                 * Require at least on of the given characters
                 */
                custom_chars?: (string | null);
                /**
                 * The system will maintain a password history for each user and prevent the reuse of passwords included in the history. The password history can be up to 10 in size. When provided, the system will maintain existing and new users' password history going forward.
                 */
                history?: (number | null);
                /**
                 * Require at least given value of uppercase letters
                 */
                upper_case?: (number | null);
                /**
                 * Require at least given value of lowercase letters
                 */
                lower_case?: (number | null);
                /**
                 * Require at least given value of numbers
                 */
                number?: (number | null);
            };
            account_blocking?: {
                enabled?: boolean;
                /**
                 * Send an email to user's email address about the activity.
                 */
                notification?: boolean;
                /**
                 * Reset failed attempts count after successful login.
                 */
                reset_after_success?: boolean;
                /**
                 * If `true`, users will be able to unblock their accounts by the link received in notification email.
                 */
                allow_user_unblock?: boolean;
                /**
                 * Maximum failed login attempts to block user for specified duration.
                 */
                allowed_attempts?: number;
                /**
                 * Number of seconds to block the account.
                 */
                block_duration?: number;
                /**
                 * Number of seconds before attempts are reset
                 */
                duration?: number;
            };
            brute_force?: {
                enabled?: boolean;
                /**
                 * Allowed consecutive login attempts
                 */
                allowed_attempts?: number;
                /**
                 * Number of seconds before attempts are reset
                 */
                duration?: number;
                /**
                 * Number of seconds to block the IP.
                 */
                block_duration?: number;
                /**
                 * Send an email to user's email address about the activity.
                 */
                notification?: boolean;
                /**
                 * Whitelisted IP addresses.
                 */
                white_list?: string[];
            };
        };
    };
}

/**
 * @public
 */
export declare type CreateTenantAdministrator = ({
    email: string;
    user_id?: string;
    permissions?: string[];
    [k: string]: any;
} | {
    email?: string;
    user_id: string;
    permissions?: string[];
    [k: string]: any;
});

/**
 * @public
 */
export declare interface CreateTenantCustomDomain {
    domain: string;
}

/**
 * @public
 */
export declare type CreateTicket = ({
    [k: string]: any;
} & {
    type: ('verify-email' | 'forgot-password' | 'invite-admin' | 'unblock-ip' | 'unblock-account');
    token?: string;
    user_id?: string;
    email?: string;
    client_id?: string;
    /**
     * Ticket's validity in seconds. After specified time passed ticket will be expired.
     */
    ttl?: number;
    details?: {
        [k: string]: string;
    };
    used?: boolean;
});

/**
 * @public
 */
export declare type CreateUser = ({
    [k: string]: any;
} & {
    /**
     * End-User's username
     */
    username?: (string | null);
    /**
     * End-User's e-mail address.
     */
    email?: (string | null);
    /**
     * `true` if the End-User's e-mail address has been verified; otherwise `false`. If `force_email_verification` is enabled in your tenant's settings, it will check this value of user while performing email verification checks.
     */
    email_verified?: (boolean | null);
    /**
     * End-User's preferred phone number. It will be stored in [E.164](https://en.wikipedia.org/wiki/E.164) format.
     */
    phone_number?: (string | null);
    /**
     * `true` if the End-User's phone number has been verified; otherwise `false`. If SMS MFA is enabled this value will be used to determine whether End-User has verified it's phone or not.
     */
    phone_number_verified?: (boolean | null);
    /**
     * End-User's full name in displayable form including all name parts, possibly including titles and suffixes, ordered according to the End-User's locale and preferences.
     */
    name?: (string | null);
    /**
     * URI reference of the End-User's profile picture.
     */
    picture?: (string | null);
    /**
     * Whether this End-User is blocked or not. If `true` End-User will not be able to login.
     */
    blocked?: (boolean | null);
    /**
     * Failed login attempts of user. It will reset to `0` after successful login.
     */
    login_attempts?: number;
    profile?: {
        /**
         * Given name(s) or first name(s) of the End-User. Note that in some cultures, people can have multiple given names; all can be present, with the names being separated by space characters.
         */
        given_name?: (string | null);
        /**
         * Middle name(s) of the End-User. Note that in some cultures, people can have multiple middle names; all can be present, with the names being separated by space characters. Also note that in some cultures, middle names are not used.
         */
        middle_name?: (string | null);
        /**
         * Surname(s) or last name(s) of the End-User. Note that in some cultures, people can have multiple family names or no family name; all can be present, with the names being separated by space characters.
         */
        family_name?: (string | null);
        /**
         * Casual name of the End-User that may or may not be the same as the given_name. For instance, a nickname value of Mike might be returned alongside a given_name value of Michael.
         */
        nickname?: (string | null);
        /**
         * URI reference for the End-User's profile page.
         */
        profile_page?: (string | null);
        /**
         * URI reference for the End-User's Web page or blog.
         */
        website?: (string | null);
        /**
         * Short code of End-User's gender.
         */
        gender?: (string | number | null);
        /**
         * End-User's birthday. ISO 8601:2004 YYYY-MM-DD format. The year may be 0000, indicating that it is omitted. To represent only the year, YYYY format is preferred.
         */
        birthdate?: (string | null);
        /**
         * End-User's locale. For example, en-US or fr-CA.
         */
        locale?: (string | null);
        /**
         * String from zoneinfo time zone database representing the End-User's time zone. For example, Europe/Paris or America/Los_Angeles.
         */
        zoneinfo?: (string | null);
        addresses?: ({
            /**
             * Identifier for user address. Example: `Delivery Address`, `Billing Address` etc.
             */
            id?: (string | null);
            is_primary?: (boolean | null);
            first_name?: (string | null);
            last_name?: (string | null);
            /**
             * State, province, prefecture or region component.
             */
            state?: (string | null);
            /**
             * Country name component.
             */
            country?: (string | null);
            /**
             * City or locality component.
             */
            city?: (string | null);
            /**
             * Full street address component, which MAY include house number, street name, Post Office Box, and multi-line extended street address information. This field may contain multiple lines, separated by newline characters.
             */
            street_address?: (string | null);
            /**
             * Full street address component, which MAY include house number, street name, Post Office Box, and multi-line extended street address information. This field may contain multiple lines, separated by newline characters.
             */
            street_address_2?: (string | null);
            /**
             * Zip code or postal code component.
             */
            zip_code?: (string | null);
        }[] | null);
    };
    /**
     * Additional metadata for your End-User. It must be an object containing **10** fields at max with keys and values no more than 1024 characters. Values can be only one of the types `string`, `number` and `boolean`. You can also use `"null"` as value to make metadata consistent across other users.
     */
    metadata?: {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^(.*)$".
         */
        [k: string]: (string | boolean | number | null);
    };
    verify_email?: (boolean | null);
    /**
     * End-User's password in plaintext. Defined password policy rules will be enforced.
     */
    password?: (string | null);
    /**
     * [Salt](https://wikipedia.org/wiki/Salt_(cryptography)) value used in computing hash of password.
     */
    salt?: (string | null);
    /**
     * Used password hash function identifier.
     */
    hash_fn?: (('bcrypt' | 'argon2' | 'pbkdf2') | null);
    identities?: {
        /**
         * External user's id coming from the connection.
         */
        id?: string;
        /**
         * Connection name
         */
        connection: string;
        type: ('sms' | 'otp' | 'push' | 'email' | 'social' | 'enterprise');
        provider: ('twilio' | 'vonage' | 'netgsm' | '3gbilisim' | 'dataport' | 'messagebird' | 'custom' | 'hotp' | 'totp' | 'native' | 'expo' | 'one-signal' | 'aws_ses' | 'postmark' | 'sendgrid' | 'sparkpost' | 'smtp' | 'custom-oauth2' | 'amazon' | 'apple' | 'e-devlet' | 'dribbble' | 'dropbox' | 'facebook' | 'github' | 'google' | 'linkedin' | 'microsoft' | 'slack' | 'spotify' | 'twitter' | 'saml' | 'ldap');
        /**
         * Raw user object from the connection
         */
        details: {
            [k: string]: any;
        };
    }[];
});

/**
 * @public
 */
export declare type CreateUserCredential = ({
    type: ('e-sign' | 'sms' | 'email' | 'custom');
    /**
     * Connection name
     */
    connection?: (string | null);
    /**
     * Raw user object from the connection
     */
    details: {
        [k: string]: any;
    };
} | {
    type: 'password';
    /**
     * Connection name
     */
    connection?: (string | null);
    details: {
        /**
         * Hashed value of user's password.
         */
        hash: string;
        hash_fn: ('bcrypt' | 'argon2' | 'pbkdf2');
        /**
         * [Salt](https://wikipedia.org/wiki/Salt_(cryptography)) value used in computing hash of password.
         */
        salt: string;
    };
} | {
    type: 'otp';
    /**
     * Connection name
     */
    connection?: (string | null);
    details: {
        /**
         * Secret for recovering user's OTP credential
         */
        secret: string;
    };
} | {
    type: 'push';
    /**
     * Connection name
     */
    connection?: (string | null);
    details: {
        device: {
            type?: string;
            vendor?: string;
            model?: string;
        };
        os: {
            name?: string;
            version?: string;
        };
        ua: string;
        device_identifier: string;
        credentials: {
            private_key: {
                [k: string]: any;
            };
            /**
             * Public JWK. You can look at JWK specification from [here](https://www.rfc-editor.org/rfc/rfc7517)
             */
            public_key: {
                kty: string;
                e: string;
                key_ops?: ('sign' | 'verify' | 'encrypt' | 'decrypt' | 'wrapKey' | 'unwrapKey' | 'deriveKey' | 'deriveBits')[];
                n: string;
                use: string;
                alg: string;
                kid: string;
                x5u?: string;
                x5c?: string[];
                x5t?: string;
                'x5t#S256'?: string;
                [k: string]: any;
            };
            service: string;
            device_token: string;
        };
        /**
         * Secret for recovering user's OTP credential
         */
        secret: string;
    };
} | {
    type: 'fv';
    /**
     * Connection name
     */
    connection?: (string | null);
    details: {
        hash?: string;
        templates: {
            [k: string]: any;
        };
    };
} | {
    type: 'webauthn';
    /**
     * Connection name
     */
    connection?: (string | null);
    details: {
        credentialID: string;
        credentialPublicKey: {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(0|[1-9][0-9]*)$".
             */
            [k: string]: number;
        };
        counter: number;
        transports?: ('ble' | 'cable' | 'hybrid' | 'internal' | 'nfc' | 'smart-card' | 'usb')[];
    };
});

/**
 * @public
 */
export declare interface CreateUserIdentity {
    /**
     * External user's id coming from the connection.
     */
    id?: string;
    /**
     * Connection name
     */
    connection: string;
    type: ('sms' | 'otp' | 'push' | 'email' | 'social' | 'enterprise');
    provider: ('twilio' | 'vonage' | 'netgsm' | '3gbilisim' | 'dataport' | 'messagebird' | 'custom' | 'hotp' | 'totp' | 'native' | 'expo' | 'one-signal' | 'aws_ses' | 'postmark' | 'sendgrid' | 'sparkpost' | 'smtp' | 'custom-oauth2' | 'amazon' | 'apple' | 'e-devlet' | 'dribbble' | 'dropbox' | 'facebook' | 'github' | 'google' | 'linkedin' | 'microsoft' | 'slack' | 'spotify' | 'twitter' | 'saml' | 'ldap');
    /**
     * Raw user object from the connection
     */
    details: {
        [k: string]: any;
    };
}

declare class CustomDomainService extends HttpService {
    getAll(queryParams?: {
        offset?: number;
        limit?: number;
        sort_by?: string;
        q?: string;
    }): Promise<PaginatedResult<TenantCustomDomain>>;
    create(data: CreateTenantCustomDomain): Promise<TenantCustomDomain>;
    get(domain: string): Promise<TenantCustomDomain>;
    remove(domain: string): Promise<void>;
    verifyOwnership(domain: string): Promise<Record<string, any>>;
}

/**
 * @public
 */
declare type CustomRequestOptions = RequestInit & {
    responseType?: 'stream' | 'json';
};

/**
 * @public
 */
export declare interface CustomSmsProvider {
    type: 'sms';
    is_custom?: boolean;
    provider: 'custom';
    /**
     * Custom SMS provider configuration settings.
     */
    settings: {
        /**
         * SMS provider's hook context
         */
        hook_context: string;
    };
}

/**
 * @public
 */
export declare interface DataportSmsProvider {
    type: 'sms';
    is_custom?: boolean;
    provider: 'dataport';
    /**
     * DataPort configuration settings.
     */
    settings: {
        /**
         * DataPort username
         */
        username: string;
        /**
         * DataPort user credentials.
         */
        password: string;
        /**
         * Account number used for token retrieval
         */
        account_id: string;
        /**
         * Operator identifier
         */
        operator: ('1' | '2' | '3' | '4');
        /**
         * Short code of operator used for sendind messages
         */
        short_number: string;
        /**
         * Orginator value
         */
        from: string;
    };
}

declare const _default: (apiUri: string, options?: Options) => PlusAuthRestClient;
export default _default;

/**
 * @public
 */
export declare type EmailConnection = ({
    type: 'email';
    [k: string]: any;
} & ({
    type: 'email';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: 'aws_ses';
    settings: {
        /**
         * `from` field for your emails
         */
        from: string;
        /**
         * AWS SES access key id.
         */
        access_key_id: string;
        /**
         * AWS SES secret access key.
         */
        secret_access_key: string;
        /**
         * AWS SES region.
         */
        region: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        use_magic_link?: boolean;
        enabled_clients: string[];
    };
    enabled: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
} | {
    type: 'email';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: 'postmark';
    /**
     * Postmark email service configuration settings.
     */
    settings: {
        /**
         * `from` field for your emails
         */
        from: string;
        /**
         * Postmark API Key
         */
        api_key: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        use_magic_link?: boolean;
        enabled_clients: string[];
    };
    enabled: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
} | {
    type: 'email';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: 'sendgrid';
    /**
     * SendGrid email service configuration settings.
     */
    settings: {
        /**
         * `from` field for your emails
         */
        from: string;
        /**
         * SendGrid API Key
         */
        api_key: string;
        /**
         * SendGrid API User
         */
        api_user?: (string | null);
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        use_magic_link?: boolean;
        enabled_clients: string[];
    };
    enabled: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
} | {
    type: 'email';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: 'sparkpost';
    /**
     * SparkPost email service configuration settings.
     */
    settings: {
        /**
         * `from` field for your emails
         */
        from: string;
        /**
         * SparkPost API Key
         */
        api_key: string;
        /**
         * SparkPost Endpoint
         */
        endpoint: string;
        /**
         * SparkPost API Version
         */
        api_version: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        use_magic_link?: boolean;
        enabled_clients: string[];
    };
    enabled: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
} | {
    type: 'email';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: 'smtp';
    /**
     * Your SMTP provider configuration settings.
     */
    settings: {
        /**
         * `from` field for your emails
         */
        from: string;
        /**
         * Hostname of your SMTP provider
         */
        host: string;
        /**
         * Port of your SMTP provider
         */
        port: number;
        /**
         * Username for SMTP authentication
         */
        username: string;
        /**
         * Password for SMTP authentication
         */
        password: string;
        secure?: boolean;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        use_magic_link?: boolean;
        enabled_clients: string[];
    };
    enabled: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
}));

/**
 * @public
 */
export declare type EmailProvider = ({
    type: 'email';
    [k: string]: any;
} & ({
    type: 'email';
    is_custom?: boolean;
    provider: 'aws_ses';
    settings: {
        /**
         * `from` field for your emails
         */
        from: string;
        /**
         * AWS SES access key id.
         */
        access_key_id: string;
        /**
         * AWS SES secret access key.
         */
        secret_access_key: string;
        /**
         * AWS SES region.
         */
        region: string;
    };
} | {
    type: 'email';
    is_custom?: boolean;
    provider: 'postmark';
    /**
     * Postmark email service configuration settings.
     */
    settings: {
        /**
         * `from` field for your emails
         */
        from: string;
        /**
         * Postmark API Key
         */
        api_key: string;
    };
} | {
    type: 'email';
    is_custom?: boolean;
    provider: 'sendgrid';
    /**
     * SendGrid email service configuration settings.
     */
    settings: {
        /**
         * `from` field for your emails
         */
        from: string;
        /**
         * SendGrid API Key
         */
        api_key: string;
        /**
         * SendGrid API User
         */
        api_user?: (string | null);
    };
} | {
    type: 'email';
    is_custom?: boolean;
    provider: 'sparkpost';
    /**
     * SparkPost email service configuration settings.
     */
    settings: {
        /**
         * `from` field for your emails
         */
        from: string;
        /**
         * SparkPost API Key
         */
        api_key: string;
        /**
         * SparkPost Endpoint
         */
        endpoint: string;
        /**
         * SparkPost API Version
         */
        api_version: string;
    };
} | {
    type: 'email';
    is_custom?: boolean;
    provider: 'smtp';
    /**
     * Your SMTP provider configuration settings.
     */
    settings: {
        /**
         * `from` field for your emails
         */
        from: string;
        /**
         * Hostname of your SMTP provider
         */
        host: string;
        /**
         * Port of your SMTP provider
         */
        port: number;
        /**
         * Username for SMTP authentication
         */
        username: string;
        /**
         * Password for SMTP authentication
         */
        password: string;
        secure?: boolean;
    };
}));

/**
 * @public
 */
export declare interface EmailTemplate {
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    content: string;
    is_default?: (boolean | null);
    type: 'email';
    name: ('welcome' | 'verification-code' | 'magic-link' | 'verify-email' | 'reset-password' | 'invite-admin' | 'payment-failed' | 'plan-downgraded' | 'blocked-account' | 'blocked-ip' | 'test');
    details: {
        /**
         * `from` field for your emails
         */
        from?: string;
        /**
         * `subject` field for your emails.
         */
        subject?: string;
    };
}

/**
 * @public
 */
export declare type EmailTemplateType = ('welcome' | 'verification-code' | 'magic-link' | 'verify-email' | 'reset-password' | 'invite-admin' | 'payment-failed' | 'plan-downgraded' | 'blocked-account' | 'blocked-ip' | 'test');

/**
 * @public
 */
export declare type EnterpriseConnection = ({
    type: 'enterprise';
    [k: string]: any;
} & ({
    type: 'enterprise';
    provider: 'ldap';
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        enabled_clients: string[];
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
            [k: string]: any;
        };
        /**
         * Your LDAP server's URL in format `<ldap/s>://<host>:<port>`
         */
        url: string;
        /**
         * Password of LDAP admin account which defined in `bind_dn`
         */
        bind_credentials: string;
        /**
         * DN of LDAP admin, which will be used by PlusAuth to access LDAP server
         */
        bind_dn: string;
        /**
         * Full DN of LDAP tree where your users are. This DN is the parent of LDAP users. Assuming that your typical user will have DN like `uid=john,ou=users,dc=example,dc=com`, this value would be `ou=users,dc=example,dc=com`
         */
        search_base: string;
        /**
         * LDAP filter for user lookup. Make sure it is wrapped with parentheses. For ex: `(uid={{username}})`
         */
        search_filter: string;
        /**
         * Specify the portion of the target subtree that should be considered
         */
        search_scope?: ('base' | 'one' | 'sub' | 'subordinate');
        /**
         * Encrypts the connection to LDAP using STARTTLS, which will disable connection pooling
         */
        start_tls?: boolean;
        /**
         * Enabling this option will reflect user updates and deletes to your LDAP connection. This means when user is deleted/updated from PlusAuth, it will be deleted from your LDAP too.
         */
        write_mode?: boolean;
        mappings: {
            /**
             * @minItems 1
             *
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             */
            [k: string]: (string | [
            (string | {
                value?: (string | boolean | number);
                [k: string]: any;
            }),
            ...((string | {
                value?: (string | boolean | number);
                [k: string]: any;
            }))[]
            ] | {
                value?: (string | boolean | number);
                [k: string]: any;
            } | boolean);
        };
    };
} | {
    type: 'enterprise';
    provider: 'saml';
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        enabled_clients: string[];
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
            [k: string]: any;
        };
        /**
         * Your SAML IDP's metadata URL.
         */
        metadata_url?: string;
        /**
         * Your SAML IdP's entity_id
         */
        entity_id: string;
        /**
         * Your SAML IdP's login URL in format `<http/s>://<host>:<port?>`
         */
        sign_in_url: string;
        /**
         * If enabled, when user logs out from PlusAuth a SAML logout request will be sent to SAML IdP.
         */
        sign_out_enabled?: boolean;
        /**
         * Your SAML IdP's sign out URL in format `<http/s>://<host>:<port?>`
         */
        sign_out_url?: (string | null);
        signing_certificate?: (string | null);
        /**
         * Enable/Disable the SAML authentication request signing.
         */
        sign_request?: boolean;
        sign_request_algorithm: ('sha512' | 'sha256' | 'sha1');
        /**
         * SAML Request Binding
         */
        request_binding: ('HTTP-POST' | 'HTTP-Redirect');
        mappings: {
            /**
             * @minItems 1
             *
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             */
            [k: string]: (string | [
            (string | {
                value?: (string | boolean | number);
                [k: string]: any;
            }),
            ...((string | {
                value?: (string | boolean | number);
                [k: string]: any;
            }))[]
            ] | {
                value?: (string | boolean | number);
                [k: string]: any;
            } | boolean);
        };
    };
}));

/**
 * @public
 */
export declare interface ExpoPushProvider {
    type: 'push';
    is_custom?: boolean;
    provider: 'expo';
    /**
     * To enable Expo Push integration,
     *         you need to create an [Expo Application Services (EAS)](https://expo.dev/) account and generate an access token in the EAS dashboard.
     */
    settings: {
        /**
         * Your Expo account's access token
         */
        access_token: string;
    };
}

/**
 * @public
 */
export declare interface FvConnection {
    type: 'fv';
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    provider: 'hitachi-h1';
    settings: {
        enabled_clients: string[];
        /**
         * Hitachi H1 seed
         */
        seed: string;
    };
}

/**
 * @public
 */
export declare interface FVCredential {
    /**
     * Authenticator id
     */
    id: string;
    type: 'fv';
    /**
     * Connection name
     */
    connection?: (string | null);
    details: {
        hash?: string;
        templates: {
            [k: string]: any;
        };
    };
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
}

/**
 * @public
 */
export declare interface Hook {
    /**
     * Unique identifier of entity
     */
    id: string;
    /**
     * Hook name
     */
    name: string;
    /**
     * Defines hook's area of usage
     */
    type: ('pre-register' | 'post-register' | 'pre-login' | 'post-login' | 'pre-mfa' | 'pre-access-token' | 'pre-id-token' | 'pre-fc-import' | 'post-fc-import' | 'pre-fc-export' | 'ciba-auth-prompt' | 'ciba-validate-r-c' | 'ciba-validate-u-c');
    /**
     * Additional information for the hook
     */
    description?: (string | null);
    /**
     * Execution order of the hook. It applies to hook types. Lower ordered hooks executed first.
     */
    order: number;
    /**
     * Your hook code written in javascript.
     */
    content: string;
    /**
     * Whether the hook is enabled or not.
     */
    enabled: boolean;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
}

/**
 * @public
 */
export declare interface HookContext {
    context: {
        connection?: {
            [k: string]: any;
        };
        externalUser?: {
            [k: string]: any;
        };
        accessToken?: {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             */
            [k: string]: any;
        };
        idToken?: {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             */
            [k: string]: any;
        };
        mfa?: {
            verified: boolean;
            required: boolean;
            sms?: {
                enabled?: boolean;
                required?: boolean;
                verified?: boolean;
                [k: string]: any;
            };
            email?: {
                enabled?: boolean;
                required?: boolean;
                verified?: boolean;
                [k: string]: any;
            };
            fv?: {
                enabled?: boolean;
                required?: boolean;
                verified?: boolean;
                [k: string]: any;
            };
            otp?: {
                enabled?: boolean;
                required?: boolean;
                verified?: boolean;
                [k: string]: any;
            };
            [k: string]: any;
        };
        response: {
            body: (string | {
                [k: string]: any;
            } | any[]);
            headers: {
                [k: string]: string;
            };
            [k: string]: any;
        };
        [k: string]: any;
    };
    user: {
        [k: string]: any;
    };
    [k: string]: any;
}

declare class HookService extends HttpService {
    getAll(queryParams?: {
        offset?: number;
        limit?: number;
        sort_by?: string;
        q?: string;
    }): Promise<PaginatedResult<Hook>>;
    create(data: CreateHook): Promise<Hook>;
    get(hook_id: string): Promise<Hook>;
    update(hook_id: string, data: UpdateHook): Promise<Hook>;
    remove(hook_id: string): Promise<void>;
}

/**
 * Resource Object with name and description properties.
 * @public
 */
export declare interface HOTPAuthPlusAccount {
    category_id?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at: string;
    details: {
        secret: string;
        counter: number;
        /**
         * The length of the OTP code.
         */
        code_length: number;
        hash_alg: ('sha1' | 'sha256' | 'sha512');
    };
    icon?: (string | null);
    /**
     * Unique identifier of entity
     */
    id: string;
    name?: (string | null);
    /**
     * Category order
     */
    order?: number;
    type: 'hotp';
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
}

/**
 * @public
 */
export declare interface HOTPConnection {
    type: 'otp';
    provider: 'hotp';
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        enabled_clients: string[];
        /**
         * The length of the OTP code.
         */
        code_length: number;
        hash_alg: ('sha1' | 'sha256' | 'sha512');
        window: number;
        initial_counter: number;
    };
}

/**
 * @public
 */
declare interface HttpClient {
    get: (uri: string, options?: CustomRequestOptions) => Promise<any>;
    post: (uri: string, body?: BodyType, options?: CustomRequestOptions) => Promise<any>;
    patch: (uri: string, body?: BodyType, options?: CustomRequestOptions) => Promise<any>;
    delete: (uri: string, body?: BodyType, options?: CustomRequestOptions) => Promise<any>;
}

/**
 * @public
 */
declare class HttpService {
    protected http: HttpClient;
    protected static prefix: string;
    private _baseUrl;
    ['constructor']: typeof HttpService;
    constructor(apiURL: string, options?: Record<string, any>);
    get baseUrl(): string;
}

/**
 * Public JWK. You can look at JWK specification from [here](https://www.rfc-editor.org/rfc/rfc7517)
 * @public
 */
export declare interface Key {
    kty: string;
    e: string;
    key_ops?: ('sign' | 'verify' | 'encrypt' | 'decrypt' | 'wrapKey' | 'unwrapKey' | 'deriveKey' | 'deriveBits')[];
    n: string;
    use: string;
    alg: string;
    kid: string;
    x5u?: string;
    x5c?: string[];
    x5t?: string;
    'x5t#S256'?: string;
    [k: string]: any;
}

declare class KeyService extends HttpService {
    get(key_type: KeyType_2): Promise<PublicKey[]>;
    rotate(key_type: KeyType_2, data?: string): Promise<PublicKey>;
    revoke(key_type: KeyType_2, kid: string): Promise<void>;
}

/**
 * @public
 */
declare type KeyType_2 = ('signing' | 'encryption');
export { KeyType_2 as KeyType }

/**
 * @public
 */
export declare interface LDAPConnection {
    type: 'enterprise';
    provider: 'ldap';
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        enabled_clients: string[];
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
            [k: string]: any;
        };
        /**
         * Your LDAP server's URL in format `<ldap/s>://<host>:<port>`
         */
        url: string;
        /**
         * Password of LDAP admin account which defined in `bind_dn`
         */
        bind_credentials: string;
        /**
         * DN of LDAP admin, which will be used by PlusAuth to access LDAP server
         */
        bind_dn: string;
        /**
         * Full DN of LDAP tree where your users are. This DN is the parent of LDAP users. Assuming that your typical user will have DN like `uid=john,ou=users,dc=example,dc=com`, this value would be `ou=users,dc=example,dc=com`
         */
        search_base: string;
        /**
         * LDAP filter for user lookup. Make sure it is wrapped with parentheses. For ex: `(uid={{username}})`
         */
        search_filter: string;
        /**
         * Specify the portion of the target subtree that should be considered
         */
        search_scope?: ('base' | 'one' | 'sub' | 'subordinate');
        /**
         * Encrypts the connection to LDAP using STARTTLS, which will disable connection pooling
         */
        start_tls?: boolean;
        /**
         * Enabling this option will reflect user updates and deletes to your LDAP connection. This means when user is deleted/updated from PlusAuth, it will be deleted from your LDAP too.
         */
        write_mode?: boolean;
        mappings: {
            /**
             * @minItems 1
             *
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             */
            [k: string]: (string | [
            (string | {
                value?: (string | boolean | number);
                [k: string]: any;
            }),
            ...((string | {
                value?: (string | boolean | number);
                [k: string]: any;
            }))[]
            ] | {
                value?: (string | boolean | number);
                [k: string]: any;
            } | boolean);
        };
    };
}

declare class LogService extends HttpService {
    getAll(queryParams?: {
        limit?: number;
        offset?: number;
        from?: string;
        to?: string;
        type?: string;
        operation?: string;
        include_api?: boolean;
    }): Promise<string[]>;
}

/**
 * @public
 */
export declare interface MessagebirdSmsProvider {
    type: 'sms';
    is_custom?: boolean;
    provider: 'messagebird';
    /**
     * MessageBird configuration settings.
     */
    settings: {
        /**
         * MessageBird API Key
         */
        api_key: string;
        /**
         * MessageBird originator also known as Sender ID.
         */
        originator: string;
    };
}

/**
 * @public
 */
export declare type MFA = (({
    type: 'push';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: 'native';
    settings: {
        /**
         * Firebase Cloud Messaging configuration settings.
         * To enable the FCM integration, you need to get your service account key from the [Firebase Console](https://console.firebase.google.com/).
         * - Select your project, and click the gear icon on the top of the sidebar.
         * - After opening "Project Settings", head to the "Service Accounts" tab.
         * - Click "Generate new private key", then confirm by clicking "Generate key".
         * - Clicking "Generate key" downloads the generated service account json file.
         */
        fcm?: {
            /**
             * `project_id` field located in your service account json
             */
            project_id: string;
            /**
             * `client_email` field located in your service account json
             */
            client_email: string;
            /**
             * `private_key` field located in your service account json
             */
            private_key: string;
        };
        /**
         * Apple Push Notification Service configuration settings.
         */
        apns?: {
            /**
             * p8 of your Apple Developer account. To generate one follow these steps:
             * - Head over to Certificates, Identifiers & Profiles > Keys.
             * - Register a new key and give it a name.
             * - Enable the Apple Push Notifications service (APNs) checkbox by selecting it.
             * - Click the Continue button and on the next page, select Register.
             * - Download the .p8 key file.
             */
            key: string;
            /**
             * This is a 10-character unique identifier for the authentication key. You can find it in the key details section of the newly created key in your Apple developer account.
             */
            key_id: string;
            /**
             * This is available in your Apple developer account.
             */
            team_id: string;
            /**
             * This is the ID of your app. You can find it in the app info section of your Apple developer account.
             */
            bundle_id: string;
            production: boolean;
        };
        enabled_clients: string[];
        /**
         * Push notification strategy
         */
        strategy?: ('code' | 'prompt');
    };
    enabled: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
} | {
    type: 'push';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: 'expo';
    /**
     * To enable Expo Push integration,
     *         you need to create an [Expo Application Services (EAS)](https://expo.dev/) account and generate an access token in the EAS dashboard.
     */
    settings: {
        /**
         * Your Expo account's access token
         */
        access_token: string;
        enabled_clients: string[];
        /**
         * Push notification strategy
         */
        strategy?: ('code' | 'prompt');
    };
    enabled: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
} | {
    type: 'push';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: 'one-signal';
    settings: {
        /**
         * `OneSignal App ID` located in your [application's settings page](https://documentation.onesignal.com/docs/keys-and-ids)
         */
        app_id: string;
        /**
         * `Rest API Key` located in your [application's settings page](https://documentation.onesignal.com/docs/keys-and-ids)
         */
        api_key: string;
        enabled_clients: string[];
        /**
         * Push notification strategy
         */
        strategy?: ('code' | 'prompt');
    };
    enabled: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
}) | ({
    type: 'email';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: 'aws_ses';
    settings: {
        /**
         * `from` field for your emails
         */
        from: string;
        /**
         * AWS SES access key id.
         */
        access_key_id: string;
        /**
         * AWS SES secret access key.
         */
        secret_access_key: string;
        /**
         * AWS SES region.
         */
        region: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients: string[];
    };
    enabled: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
} | {
    type: 'email';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: 'postmark';
    /**
     * Postmark email service configuration settings.
     */
    settings: {
        /**
         * `from` field for your emails
         */
        from: string;
        /**
         * Postmark API Key
         */
        api_key: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients: string[];
    };
    enabled: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
} | {
    type: 'email';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: 'sendgrid';
    /**
     * SendGrid email service configuration settings.
     */
    settings: {
        /**
         * `from` field for your emails
         */
        from: string;
        /**
         * SendGrid API Key
         */
        api_key: string;
        /**
         * SendGrid API User
         */
        api_user?: (string | null);
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients: string[];
    };
    enabled: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
} | {
    type: 'email';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: 'sparkpost';
    /**
     * SparkPost email service configuration settings.
     */
    settings: {
        /**
         * `from` field for your emails
         */
        from: string;
        /**
         * SparkPost API Key
         */
        api_key: string;
        /**
         * SparkPost Endpoint
         */
        endpoint: string;
        /**
         * SparkPost API Version
         */
        api_version: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients: string[];
    };
    enabled: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
} | {
    type: 'email';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: 'smtp';
    /**
     * Your SMTP provider configuration settings.
     */
    settings: {
        /**
         * `from` field for your emails
         */
        from: string;
        /**
         * Hostname of your SMTP provider
         */
        host: string;
        /**
         * Port of your SMTP provider
         */
        port: number;
        /**
         * Username for SMTP authentication
         */
        username: string;
        /**
         * Password for SMTP authentication
         */
        password: string;
        secure?: boolean;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients: string[];
    };
    enabled: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
}) | ({
    type: 'sms';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: 'dataport';
    /**
     * DataPort configuration settings.
     */
    settings: {
        /**
         * DataPort username
         */
        username: string;
        /**
         * DataPort user credentials.
         */
        password: string;
        /**
         * Account number used for token retrieval
         */
        account_id: string;
        /**
         * Operator identifier
         */
        operator: ('1' | '2' | '3' | '4');
        /**
         * Short code of operator used for sendind messages
         */
        short_number: string;
        /**
         * Orginator value
         */
        from: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients: string[];
    };
    enabled: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
} | {
    type: 'sms';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: 'messagebird';
    /**
     * MessageBird configuration settings.
     */
    settings: {
        /**
         * MessageBird API Key
         */
        api_key: string;
        /**
         * MessageBird originator also known as Sender ID.
         */
        originator: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients: string[];
    };
    enabled: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
} | {
    type: 'sms';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: 'custom';
    /**
     * Custom SMS provider configuration settings.
     */
    settings: {
        /**
         * SMS provider's hook context
         */
        hook_context: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients: string[];
    };
    enabled: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
} | {
    type: 'sms';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: '3gbilisim';
    /**
     * 3gBilisim configuration settings.
     */
    settings: {
        /**
         * If provided, sms requests will be made to this endpoint
         */
        endpoint?: string;
        /**
         * Username provided by your 3GBilisim dealer.
         */
        username: string;
        /**
         * Password provided by your 3GBilisim dealer.
         */
        password: string;
        /**
         * Dealer-specific code provided by your 3GBilisim dealer.
         */
        company_code?: string;
        /**
         * It is the message header defined in the NetGSM (your sender name). If you want your subscriber number to be your message header, write your subscriber number to this parameter without a leading zero. 8xxxxxxxxxx
         */
        from?: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients: string[];
    };
    enabled: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
} | {
    type: 'sms';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: 'twilio';
    /**
     * Twilio SMS service configuration settings.
     */
    settings: {
        /**
         * Your Twilio auth token
         */
        auth_token: string;
        /**
         * Your Twilio account sid.
         */
        sid: string;
        strategy: ('copilot' | 'from');
        /**
         * If strategy is `copilot` than this value needs to be your Twilio messaging service SID. Otherwise it is phone number for originating your messages.
         */
        from: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients: string[];
    };
    enabled: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
} | {
    type: 'sms';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: 'vonage';
    /**
     * Vonage SMS service configuration settings.
     */
    settings: {
        /**
         * Vonage API Key
         */
        api_key: string;
        /**
         * Vonage API Secret
         */
        api_secret: string;
        /**
         * Originating phone number
         */
        from: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients: string[];
    };
    enabled: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
} | {
    type: 'sms';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: 'netgsm';
    /**
     * NetGSM configuration settings.
     */
    settings: {
        /**
         * Subscriber number obtained from Netgsm service. For ex: 850xxxxxxx, 312XXXXXXX
         */
        username: string;
        /**
         * Sub-user password with defined API authorization.
         */
        password: string;
        /**
         * If you are a dealer member, your dealer-specific code.
         */
        merchant_code?: string;
        /**
         * The ID information of the application published from your developer account.
         */
        app_key?: string;
        /**
         * It is the message header defined in the NetGSM (your sender name). If you want your subscriber number to be your message header, write your subscriber number to this parameter without a leading zero. 8xxxxxxxxxx
         */
        from?: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients: string[];
    };
    enabled: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
}) | ({
    type: 'otp';
    provider: 'hotp';
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        enabled_clients: string[];
        /**
         * The length of the OTP code.
         */
        code_length: number;
        hash_alg: ('sha1' | 'sha256' | 'sha512');
        window: number;
        initial_counter: number;
    };
} | {
    type: 'otp';
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    provider: 'totp';
    settings: {
        enabled_clients: string[];
        hash_alg: ('sha1' | 'sha256' | 'sha512');
        window: number;
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * Time to live of the OTP code in seconds.
         */
        ttl: number;
    };
}) | {
    type: 'fv';
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    provider: 'hitachi-h1';
    settings: {
        enabled_clients: string[];
        /**
         * Hitachi H1 seed
         */
        seed: string;
    };
} | {
    provider: 'plusauth';
    type: 'webauthn';
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        enabled_clients: string[];
    };
} | {
    provider: 'plusauth';
    type: 'e-sign';
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        enabled_clients: string[];
    };
});

declare class MfaService extends HttpService {
    getAll(queryParams?: {
        offset?: number;
        limit?: number;
        sort_by?: string;
        q?: string;
    }): Promise<PaginatedResult<MFA>>;
    create(data: MFA): Promise<MFA>;
    get(type: MFAType): Promise<MFA>;
    update(type: MFAType, data: UpdateMFA): Promise<MFA>;
    remove(type: MFAType): Promise<void>;
}

/**
 * @public
 */
export declare type MFAType = ('sms' | 'otp' | 'push' | 'webauthn' | 'e-sign' | 'fv' | 'email');

/**
 * @public
 */
export declare interface NativePushProvider {
    type: 'push';
    is_custom?: boolean;
    provider: 'native';
    settings: {
        /**
         * Firebase Cloud Messaging configuration settings.
         * To enable the FCM integration, you need to get your service account key from the [Firebase Console](https://console.firebase.google.com/).
         * - Select your project, and click the gear icon on the top of the sidebar.
         * - After opening "Project Settings", head to the "Service Accounts" tab.
         * - Click "Generate new private key", then confirm by clicking "Generate key".
         * - Clicking "Generate key" downloads the generated service account json file.
         */
        fcm?: {
            /**
             * `project_id` field located in your service account json
             */
            project_id: string;
            /**
             * `client_email` field located in your service account json
             */
            client_email: string;
            /**
             * `private_key` field located in your service account json
             */
            private_key: string;
        };
        /**
         * Apple Push Notification Service configuration settings.
         */
        apns?: {
            /**
             * p8 of your Apple Developer account. To generate one follow these steps:
             * - Head over to Certificates, Identifiers & Profiles > Keys.
             * - Register a new key and give it a name.
             * - Enable the Apple Push Notifications service (APNs) checkbox by selecting it.
             * - Click the Continue button and on the next page, select Register.
             * - Download the .p8 key file.
             */
            key: string;
            /**
             * This is a 10-character unique identifier for the authentication key. You can find it in the key details section of the newly created key in your Apple developer account.
             */
            key_id: string;
            /**
             * This is available in your Apple developer account.
             */
            team_id: string;
            /**
             * This is the ID of your app. You can find it in the app info section of your Apple developer account.
             */
            bundle_id: string;
            production: boolean;
        };
    };
}

/**
 * @public
 */
export declare interface NetGSMSmsProvider {
    type: 'sms';
    is_custom?: boolean;
    provider: 'netgsm';
    /**
     * NetGSM configuration settings.
     */
    settings: {
        /**
         * Subscriber number obtained from Netgsm service. For ex: 850xxxxxxx, 312XXXXXXX
         */
        username: string;
        /**
         * Sub-user password with defined API authorization.
         */
        password: string;
        /**
         * If you are a dealer member, your dealer-specific code.
         */
        merchant_code?: string;
        /**
         * The ID information of the application published from your developer account.
         */
        app_key?: string;
        /**
         * It is the message header defined in the NetGSM (your sender name). If you want your subscriber number to be your message header, write your subscriber number to this parameter without a leading zero. 8xxxxxxxxxx
         */
        from?: string;
    };
}

/**
 * @public
 */
export declare interface OneSignalPushProvider {
    type: 'push';
    is_custom?: boolean;
    provider: 'one-signal';
    settings: {
        /**
         * `OneSignal App ID` located in your [application's settings page](https://documentation.onesignal.com/docs/keys-and-ids)
         */
        app_id: string;
        /**
         * `Rest API Key` located in your [application's settings page](https://documentation.onesignal.com/docs/keys-and-ids)
         */
        api_key: string;
    };
}

declare type Options = {
    httpClient?: (uri: string, options: RequestInit) => Promise<any>;
    token?: string | (() => string);
    version?: string;
};

/**
 * @public
 */
export declare type OTPConnection = ({
    type: 'otp';
    [k: string]: any;
} & ({
    type: 'otp';
    provider: 'hotp';
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        enabled_clients: string[];
        /**
         * The length of the OTP code.
         */
        code_length: number;
        hash_alg: ('sha1' | 'sha256' | 'sha512');
        window: number;
        initial_counter: number;
    };
} | {
    type: 'otp';
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    provider: 'totp';
    settings: {
        enabled_clients: string[];
        hash_alg: ('sha1' | 'sha256' | 'sha512');
        window: number;
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * Time to live of the OTP code in seconds.
         */
        ttl: number;
    };
}));

/**
 * @public
 */
export declare interface OTPCredential {
    /**
     * Authenticator id
     */
    id: string;
    type: 'otp';
    /**
     * Connection name
     */
    connection?: (string | null);
    details: {
        /**
         * Secret for recovering user's OTP credential
         */
        secret: string;
    };
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
}

/**
 * @public
 */
export declare type PaginatedResult<T> = {
    results: T[];
    total: number;
};

/**
 * @public
 */
export declare interface Pagination {
    /**
     * Limit the number of results returned
     */
    limit?: number;
    /**
     * The number of records you wish to skip before selecting records
     */
    offset?: number;
    /**
     * Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
     */
    q?: string;
    /**
     * Properties that should be ordered by with their order type. To define order append it to the field with dot. For example: sort_by=email.asc or sort_by=email.desc
     */
    sort_by?: string;
    /**
     * Include only defined fields
     */
    fields?: string;
}

/**
 * @public
 */
export declare interface PasswordCredential {
    /**
     * Authenticator id
     */
    id: string;
    type: 'password';
    /**
     * Connection name
     */
    connection?: (string | null);
    details: {
        /**
         * Hashed value of user's password.
         */
        hash: string;
        hash_fn: ('bcrypt' | 'argon2' | 'pbkdf2');
        /**
         * [Salt](https://wikipedia.org/wiki/Salt_(cryptography)) value used in computing hash of password.
         */
        salt: string;
    };
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
}

/**
 * Password policy settings to be enforced to your new users.
 * @public
 */
export declare interface PasswordPolicy {
    /**
     * Minimum number of characters
     */
    min?: (number | null);
    /**
     * Maximum number of characters
     */
    max?: (number | null);
    /**
     * Require at least on of the given characters
     */
    custom_chars?: (string | null);
    /**
     * The system will maintain a password history for each user and prevent the reuse of passwords included in the history. The password history can be up to 10 in size. When provided, the system will maintain existing and new users' password history going forward.
     */
    history?: (number | null);
    /**
     * Require at least given value of uppercase letters
     */
    upper_case?: (number | null);
    /**
     * Require at least given value of lowercase letters
     */
    lower_case?: (number | null);
    /**
     * Require at least given value of numbers
     */
    number?: (number | null);
}

/**
 * @public
 */
export declare interface Permission {
    /**
     * Unique identifier of entity
     */
    id: string;
    /**
     * Id of the resource which this permission belongs to
     */
    resource_id: string;
    /**
     * Permission identifier. This field is unique and cannot contain **spaces**. Ex. `read:user`
     */
    name: string;
    /**
     * Additional information for the permission
     */
    description?: (string | null);
}

/**
 * Applied plan name
 * @public
 */
export declare type PlanType = ('free' | 'basic' | 'pro' | 'enterprise' | 'on-premise');

/**
 *
 * Entrypoint and main class of the library.
 *
 * @example
 * ```js
 * const pa = new PlusAuthRestClient("https://mytenant.plusauth.com");
 * pa.options.token = "ACCESS_TOKEN";
 * ```
 *
 * @example
 * Initialize with token
 * ```js
 * const pa = new PlusAuthRestClient("https://mytenant.plusauth.com", { token: "ACCESS_TOKEN" });
 * ```
 *
 * @example
 * Retrieve token from a function
 * ```js
 * const pa = new PlusAuthRestClient("https://mytenant.plusauth.com", {
 *    token: function(){
 *      return "ACCESS_TOKEN"
 *    }
 * });
 * ```
 *
 * After initialization, you can call methods from corresponding services.
 * @example
 * ```js
 * const users = await pa.users.getAll()
 * const apis = await pa.apis.getAll()
 * //...
 * ```
 * @public
 */
export declare class PlusAuthRestClient {
    readonly users: InstanceType<typeof UserService>;
    readonly clients: InstanceType<typeof ClientService>;
    readonly connections: InstanceType<typeof ConnectionService>;
    readonly customDomains: InstanceType<typeof CustomDomainService>;
    readonly keys: InstanceType<typeof KeyService>;
    readonly hooks: InstanceType<typeof HookService>;
    readonly logs: InstanceType<typeof LogService>;
    readonly mfa: InstanceType<typeof MfaService>;
    readonly providers: InstanceType<typeof ProviderService>;
    readonly resources: InstanceType<typeof ResourceService>;
    readonly roleGroups: InstanceType<typeof RoleGroupService>;
    readonly roles: InstanceType<typeof RoleService>;
    readonly templates: InstanceType<typeof TemplateService>;
    readonly tenants: InstanceType<typeof TenantService>;
    readonly views: InstanceType<typeof ViewService>;
    options: Options;
    set token(token: string);
    /**
     * @param apiUri - Your PlusAuth tenant url. It must be a valid url.
     * @param options - Object containing Authorization token to put in requests
     */
    constructor(apiUri: string, options?: Options);
}

/**
 * @public
 */
export declare class PlusAuthRestError extends Error {
    _raw?: Error;
    constructor(error: Error | any);
}

/**
 * @public
 */
export declare interface PostmarkEmailProvider {
    type: 'email';
    is_custom?: boolean;
    provider: 'postmark';
    /**
     * Postmark email service configuration settings.
     */
    settings: {
        /**
         * `from` field for your emails
         */
        from: string;
        /**
         * Postmark API Key
         */
        api_key: string;
    };
}

/**
 * @public
 */
export declare type Provider = (({
    type: 'email';
    is_custom?: boolean;
    provider: 'aws_ses';
    settings: {
        /**
         * `from` field for your emails
         */
        from: string;
        /**
         * AWS SES access key id.
         */
        access_key_id: string;
        /**
         * AWS SES secret access key.
         */
        secret_access_key: string;
        /**
         * AWS SES region.
         */
        region: string;
    };
} | {
    type: 'email';
    is_custom?: boolean;
    provider: 'postmark';
    /**
     * Postmark email service configuration settings.
     */
    settings: {
        /**
         * `from` field for your emails
         */
        from: string;
        /**
         * Postmark API Key
         */
        api_key: string;
    };
} | {
    type: 'email';
    is_custom?: boolean;
    provider: 'sendgrid';
    /**
     * SendGrid email service configuration settings.
     */
    settings: {
        /**
         * `from` field for your emails
         */
        from: string;
        /**
         * SendGrid API Key
         */
        api_key: string;
        /**
         * SendGrid API User
         */
        api_user?: (string | null);
    };
} | {
    type: 'email';
    is_custom?: boolean;
    provider: 'sparkpost';
    /**
     * SparkPost email service configuration settings.
     */
    settings: {
        /**
         * `from` field for your emails
         */
        from: string;
        /**
         * SparkPost API Key
         */
        api_key: string;
        /**
         * SparkPost Endpoint
         */
        endpoint: string;
        /**
         * SparkPost API Version
         */
        api_version: string;
    };
} | {
    type: 'email';
    is_custom?: boolean;
    provider: 'smtp';
    /**
     * Your SMTP provider configuration settings.
     */
    settings: {
        /**
         * `from` field for your emails
         */
        from: string;
        /**
         * Hostname of your SMTP provider
         */
        host: string;
        /**
         * Port of your SMTP provider
         */
        port: number;
        /**
         * Username for SMTP authentication
         */
        username: string;
        /**
         * Password for SMTP authentication
         */
        password: string;
        secure?: boolean;
    };
}) | ({
    type: 'sms';
    is_custom?: boolean;
    provider: 'dataport';
    /**
     * DataPort configuration settings.
     */
    settings: {
        /**
         * DataPort username
         */
        username: string;
        /**
         * DataPort user credentials.
         */
        password: string;
        /**
         * Account number used for token retrieval
         */
        account_id: string;
        /**
         * Operator identifier
         */
        operator: ('1' | '2' | '3' | '4');
        /**
         * Short code of operator used for sendind messages
         */
        short_number: string;
        /**
         * Orginator value
         */
        from: string;
    };
} | {
    type: 'sms';
    is_custom?: boolean;
    provider: 'messagebird';
    /**
     * MessageBird configuration settings.
     */
    settings: {
        /**
         * MessageBird API Key
         */
        api_key: string;
        /**
         * MessageBird originator also known as Sender ID.
         */
        originator: string;
    };
} | {
    type: 'sms';
    is_custom?: boolean;
    provider: 'custom';
    /**
     * Custom SMS provider configuration settings.
     */
    settings: {
        /**
         * SMS provider's hook context
         */
        hook_context: string;
    };
} | {
    type: 'sms';
    is_custom?: boolean;
    provider: '3gbilisim';
    /**
     * 3gBilisim configuration settings.
     */
    settings: {
        /**
         * If provided, sms requests will be made to this endpoint
         */
        endpoint?: string;
        /**
         * Username provided by your 3GBilisim dealer.
         */
        username: string;
        /**
         * Password provided by your 3GBilisim dealer.
         */
        password: string;
        /**
         * Dealer-specific code provided by your 3GBilisim dealer.
         */
        company_code?: string;
        /**
         * It is the message header defined in the NetGSM (your sender name). If you want your subscriber number to be your message header, write your subscriber number to this parameter without a leading zero. 8xxxxxxxxxx
         */
        from?: string;
    };
} | {
    type: 'sms';
    is_custom?: boolean;
    provider: 'twilio';
    /**
     * Twilio SMS service configuration settings.
     */
    settings: {
        /**
         * Your Twilio auth token
         */
        auth_token: string;
        /**
         * Your Twilio account sid.
         */
        sid: string;
        strategy: ('copilot' | 'from');
        /**
         * If strategy is `copilot` than this value needs to be your Twilio messaging service SID. Otherwise it is phone number for originating your messages.
         */
        from: string;
    };
} | {
    type: 'sms';
    is_custom?: boolean;
    provider: 'vonage';
    /**
     * Vonage SMS service configuration settings.
     */
    settings: {
        /**
         * Vonage API Key
         */
        api_key: string;
        /**
         * Vonage API Secret
         */
        api_secret: string;
        /**
         * Originating phone number
         */
        from: string;
    };
} | {
    type: 'sms';
    is_custom?: boolean;
    provider: 'netgsm';
    /**
     * NetGSM configuration settings.
     */
    settings: {
        /**
         * Subscriber number obtained from Netgsm service. For ex: 850xxxxxxx, 312XXXXXXX
         */
        username: string;
        /**
         * Sub-user password with defined API authorization.
         */
        password: string;
        /**
         * If you are a dealer member, your dealer-specific code.
         */
        merchant_code?: string;
        /**
         * The ID information of the application published from your developer account.
         */
        app_key?: string;
        /**
         * It is the message header defined in the NetGSM (your sender name). If you want your subscriber number to be your message header, write your subscriber number to this parameter without a leading zero. 8xxxxxxxxxx
         */
        from?: string;
    };
}) | ({
    type: 'push';
    is_custom?: boolean;
    provider: 'native';
    settings: {
        /**
         * Firebase Cloud Messaging configuration settings.
         * To enable the FCM integration, you need to get your service account key from the [Firebase Console](https://console.firebase.google.com/).
         * - Select your project, and click the gear icon on the top of the sidebar.
         * - After opening "Project Settings", head to the "Service Accounts" tab.
         * - Click "Generate new private key", then confirm by clicking "Generate key".
         * - Clicking "Generate key" downloads the generated service account json file.
         */
        fcm?: {
            /**
             * `project_id` field located in your service account json
             */
            project_id: string;
            /**
             * `client_email` field located in your service account json
             */
            client_email: string;
            /**
             * `private_key` field located in your service account json
             */
            private_key: string;
        };
        /**
         * Apple Push Notification Service configuration settings.
         */
        apns?: {
            /**
             * p8 of your Apple Developer account. To generate one follow these steps:
             * - Head over to Certificates, Identifiers & Profiles > Keys.
             * - Register a new key and give it a name.
             * - Enable the Apple Push Notifications service (APNs) checkbox by selecting it.
             * - Click the Continue button and on the next page, select Register.
             * - Download the .p8 key file.
             */
            key: string;
            /**
             * This is a 10-character unique identifier for the authentication key. You can find it in the key details section of the newly created key in your Apple developer account.
             */
            key_id: string;
            /**
             * This is available in your Apple developer account.
             */
            team_id: string;
            /**
             * This is the ID of your app. You can find it in the app info section of your Apple developer account.
             */
            bundle_id: string;
            production: boolean;
        };
    };
} | {
    type: 'push';
    is_custom?: boolean;
    provider: 'expo';
    /**
     * To enable Expo Push integration,
     *         you need to create an [Expo Application Services (EAS)](https://expo.dev/) account and generate an access token in the EAS dashboard.
     */
    settings: {
        /**
         * Your Expo account's access token
         */
        access_token: string;
    };
} | {
    type: 'push';
    is_custom?: boolean;
    provider: 'one-signal';
    settings: {
        /**
         * `OneSignal App ID` located in your [application's settings page](https://documentation.onesignal.com/docs/keys-and-ids)
         */
        app_id: string;
        /**
         * `Rest API Key` located in your [application's settings page](https://documentation.onesignal.com/docs/keys-and-ids)
         */
        api_key: string;
    };
}));

declare class ProviderService extends HttpService {
    getEmailSettings(): Promise<EmailProvider>;
    updateEmailSettings(data: UpdateEmailProvider): Promise<Provider>;
}

/**
 * @public
 */
export declare type ProviderType = ('email' | 'sms' | 'push');

/**
 * @public
 */
export declare interface PublicKey {
    /**
     * Public JWK. You can look at JWK specification from [here](https://www.rfc-editor.org/rfc/rfc7517)
     */
    key: {
        kty: string;
        e: string;
        key_ops?: ('sign' | 'verify' | 'encrypt' | 'decrypt' | 'wrapKey' | 'unwrapKey' | 'deriveKey' | 'deriveBits')[];
        n: string;
        use: string;
        alg: string;
        kid: string;
        x5u?: string;
        x5c?: string[];
        x5t?: string;
        'x5t#S256'?: string;
        [k: string]: any;
    };
    /**
     * Key creation date in milliseconds since the epoch
     */
    created_at: number;
    /**
     * Rotation time in milliseconds since the epoch
     */
    rotated_at?: (number | null);
    /**
     * Revocation time in milliseconds since the epoch
     */
    revoked_at?: (number | null);
    [k: string]: any;
}

/**
 * Resource Object with name and description properties.
 * @public
 */
export declare interface PushAuthPlusAccount {
    category_id?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at: string;
    details: {
        secret: string;
        hash_alg: ('sha1' | 'sha256' | 'sha512');
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * Time to live of the OTP code in seconds.
         */
        ttl: number;
        /**
         * If `true` this account will be disabled whenever end-user's SIM card changes.
         */
        is_sim_bound?: boolean;
        sim_card_identifiers?: {
            [k: string]: any;
        }[];
        fcm_token: string;
        device_identifier: string;
    };
    icon?: (string | null);
    /**
     * Unique identifier of entity
     */
    id: string;
    name?: (string | null);
    /**
     * Category order
     */
    order?: number;
    type: 'push';
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
}

/**
 * @public
 */
export declare type PushConnection = ({
    type: 'push';
    [k: string]: any;
} & ({
    type: 'push';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: 'native';
    settings: {
        /**
         * Firebase Cloud Messaging configuration settings.
         * To enable the FCM integration, you need to get your service account key from the [Firebase Console](https://console.firebase.google.com/).
         * - Select your project, and click the gear icon on the top of the sidebar.
         * - After opening "Project Settings", head to the "Service Accounts" tab.
         * - Click "Generate new private key", then confirm by clicking "Generate key".
         * - Clicking "Generate key" downloads the generated service account json file.
         */
        fcm?: {
            /**
             * `project_id` field located in your service account json
             */
            project_id: string;
            /**
             * `client_email` field located in your service account json
             */
            client_email: string;
            /**
             * `private_key` field located in your service account json
             */
            private_key: string;
        };
        /**
         * Apple Push Notification Service configuration settings.
         */
        apns?: {
            /**
             * p8 of your Apple Developer account. To generate one follow these steps:
             * - Head over to Certificates, Identifiers & Profiles > Keys.
             * - Register a new key and give it a name.
             * - Enable the Apple Push Notifications service (APNs) checkbox by selecting it.
             * - Click the Continue button and on the next page, select Register.
             * - Download the .p8 key file.
             */
            key: string;
            /**
             * This is a 10-character unique identifier for the authentication key. You can find it in the key details section of the newly created key in your Apple developer account.
             */
            key_id: string;
            /**
             * This is available in your Apple developer account.
             */
            team_id: string;
            /**
             * This is the ID of your app. You can find it in the app info section of your Apple developer account.
             */
            bundle_id: string;
            production: boolean;
        };
        enabled_clients: string[];
        /**
         * Push notification strategy
         */
        strategy?: ('code' | 'prompt');
    };
    enabled: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
} | {
    type: 'push';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: 'expo';
    /**
     * To enable Expo Push integration,
     *         you need to create an [Expo Application Services (EAS)](https://expo.dev/) account and generate an access token in the EAS dashboard.
     */
    settings: {
        /**
         * Your Expo account's access token
         */
        access_token: string;
        enabled_clients: string[];
        /**
         * Push notification strategy
         */
        strategy?: ('code' | 'prompt');
    };
    enabled: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
} | {
    type: 'push';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: 'one-signal';
    settings: {
        /**
         * `OneSignal App ID` located in your [application's settings page](https://documentation.onesignal.com/docs/keys-and-ids)
         */
        app_id: string;
        /**
         * `Rest API Key` located in your [application's settings page](https://documentation.onesignal.com/docs/keys-and-ids)
         */
        api_key: string;
        enabled_clients: string[];
        /**
         * Push notification strategy
         */
        strategy?: ('code' | 'prompt');
    };
    enabled: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
}));

/**
 * @public
 */
export declare interface PushCredential {
    /**
     * Authenticator id
     */
    id: string;
    type: 'push';
    /**
     * Connection name
     */
    connection?: (string | null);
    details: {
        device: {
            type?: string;
            vendor?: string;
            model?: string;
        };
        os: {
            name?: string;
            version?: string;
        };
        ua: string;
        device_identifier: string;
        credentials: {
            private_key: {
                [k: string]: any;
            };
            /**
             * Public JWK. You can look at JWK specification from [here](https://www.rfc-editor.org/rfc/rfc7517)
             */
            public_key: {
                kty: string;
                e: string;
                key_ops?: ('sign' | 'verify' | 'encrypt' | 'decrypt' | 'wrapKey' | 'unwrapKey' | 'deriveKey' | 'deriveBits')[];
                n: string;
                use: string;
                alg: string;
                kid: string;
                x5u?: string;
                x5c?: string[];
                x5t?: string;
                'x5t#S256'?: string;
                [k: string]: any;
            };
            service: string;
            device_token: string;
        };
        /**
         * Secret for recovering user's OTP credential
         */
        secret: string;
    };
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
}

/**
 * @public
 */
export declare type PushNotificationProvider = ({
    type: 'push';
    [k: string]: any;
} & ({
    type: 'push';
    is_custom?: boolean;
    provider: 'native';
    settings: {
        /**
         * Firebase Cloud Messaging configuration settings.
         * To enable the FCM integration, you need to get your service account key from the [Firebase Console](https://console.firebase.google.com/).
         * - Select your project, and click the gear icon on the top of the sidebar.
         * - After opening "Project Settings", head to the "Service Accounts" tab.
         * - Click "Generate new private key", then confirm by clicking "Generate key".
         * - Clicking "Generate key" downloads the generated service account json file.
         */
        fcm?: {
            /**
             * `project_id` field located in your service account json
             */
            project_id: string;
            /**
             * `client_email` field located in your service account json
             */
            client_email: string;
            /**
             * `private_key` field located in your service account json
             */
            private_key: string;
        };
        /**
         * Apple Push Notification Service configuration settings.
         */
        apns?: {
            /**
             * p8 of your Apple Developer account. To generate one follow these steps:
             * - Head over to Certificates, Identifiers & Profiles > Keys.
             * - Register a new key and give it a name.
             * - Enable the Apple Push Notifications service (APNs) checkbox by selecting it.
             * - Click the Continue button and on the next page, select Register.
             * - Download the .p8 key file.
             */
            key: string;
            /**
             * This is a 10-character unique identifier for the authentication key. You can find it in the key details section of the newly created key in your Apple developer account.
             */
            key_id: string;
            /**
             * This is available in your Apple developer account.
             */
            team_id: string;
            /**
             * This is the ID of your app. You can find it in the app info section of your Apple developer account.
             */
            bundle_id: string;
            production: boolean;
        };
    };
} | {
    type: 'push';
    is_custom?: boolean;
    provider: 'expo';
    /**
     * To enable Expo Push integration,
     *         you need to create an [Expo Application Services (EAS)](https://expo.dev/) account and generate an access token in the EAS dashboard.
     */
    settings: {
        /**
         * Your Expo account's access token
         */
        access_token: string;
    };
} | {
    type: 'push';
    is_custom?: boolean;
    provider: 'one-signal';
    settings: {
        /**
         * `OneSignal App ID` located in your [application's settings page](https://documentation.onesignal.com/docs/keys-and-ids)
         */
        app_id: string;
        /**
         * `Rest API Key` located in your [application's settings page](https://documentation.onesignal.com/docs/keys-and-ids)
         */
        api_key: string;
    };
}));

/**
 * Resource Object with name and description properties.
 * @public
 */
export declare interface Resource {
    system: boolean;
    /**
     * Unique identifier of entity
     */
    id: string;
    /**
     * Display name for the Resource.
     */
    name: string;
    /**
     * Unique identifier for the Resource. This field must be a valid URL without fragments. Cannot be changed after set.
     */
    audience: string;
    /**
     * Additional identifier to be stored with Resource.
     */
    description?: string;
    settings: {
        access_token_ttl?: number;
    };
}

/**
 * ResourceAuthorizedClient Object with name and description properties.
 * @public
 */
export declare interface ResourceAuthorizedClient {
    /**
     * Unique identifier of entity
     */
    id: string;
    resource_id: string;
    client_id: string;
    permissions: string[];
}

declare class ResourceService extends HttpService {
    getAll(queryParams?: {
        offset?: number;
        limit?: number;
        sort_by?: string;
        q?: string;
    }): Promise<PaginatedResult<Resource>>;
    create(data: CreateResource): Promise<Resource>;
    get(resource_id: string): Promise<Resource>;
    update(resource_id: string, data: UpdateResource): Promise<Resource>;
    remove(resource_id: string): Promise<void>;
    getPermissions(resource_id: string, queryParams?: {
        offset?: number;
        limit?: number;
        sort_by?: string;
        q?: string;
    }): Promise<PaginatedResult<Permission>>;
    createPermission(resource_id: string, data: CreatePermission): Promise<Permission>;
    deletePermission(resource_id: string, permission_id: string): Promise<void>;
    getAuthorizedClients(resource_id: string, queryParams?: {
        offset?: number;
        limit?: number;
        sort_by?: string;
        q?: string;
    }): Promise<PaginatedResult<ResourceAuthorizedClient>>;
    authorizeClients(resource_id: string, data: StringArray): Promise<void>;
    unauthorizeClients(resource_id: string, data: StringArray): Promise<void>;
    getAssignedPermissionsOfClient(resource_id: string, client_id: string, queryParams?: {
        offset?: number;
        limit?: number;
        sort_by?: string;
    }): Promise<Permission[]>;
    authorizePermissionForClient(resource_id: string, client_id: string, data: string[]): Promise<void>;
    unauthorizePermissionFromClient(resource_id: string, client_id: string, data: string[]): Promise<void>;
}

/**
 * @public
 */
export declare interface Role {
    /**
     * Unique identifier of entity
     */
    id: string;
    /**
     * A name defining your role
     */
    name: string;
    /**
     * Additional information for the role
     */
    description?: (string | null);
    /**
     * If `true` this role will be assigned to new users automatically.
     */
    assign_on_signup?: boolean;
}

/**
 * @public
 */
export declare interface RoleGroup {
    /**
     * Unique identifier of entity
     */
    id: string;
    /**
     * A name defining your role group
     */
    name: string;
    /**
     * Additional information for the role group
     */
    description?: (string | null);
    /**
     * If `true` this role group will be assigned to new users automatically.
     */
    assign_on_signup?: boolean;
}

declare class RoleGroupService extends HttpService {
    getAll(queryParams?: {
        offset?: number;
        limit?: number;
        sort_by?: string;
        q?: string;
    }): Promise<PaginatedResult<RoleGroup>>;
    create(data: CreateRoleGroup): Promise<RoleGroup>;
    get(role_group_id: string): Promise<RoleGroup>;
    update(role_group_id: string, data: UpdateRoleGroup): Promise<RoleGroup>;
    remove(role_group_id: string): Promise<void>;
    getRoles(role_group_id: string, queryParams?: {
        offset?: number;
        limit?: number;
        sort_by?: string;
    }): Promise<PaginatedResult<Role>>;
    addRoles(role_group_id: string, data: string[]): Promise<void>;
    removeRoles(role_group_id: string, data: string[]): Promise<void>;
    getUsers(role_group_id: string, queryParams?: {
        offset?: number;
        limit?: number;
        sort_by?: string;
    }): Promise<PaginatedResult<User>>;
}

declare class RoleService extends HttpService {
    getAll(queryParams?: {
        offset?: number;
        limit?: number;
        sort_by?: string;
        q?: string;
    }): Promise<PaginatedResult<Role>>;
    create(data: CreateRole): Promise<Role>;
    get(role_id: string): Promise<Role>;
    update(role_id: string, data: UpdateRole): Promise<Role>;
    remove(role_id: string): Promise<void>;
    getPermissions(role_id: string, queryParams?: {
        offset?: number;
        limit?: number;
        sort_by?: string;
        q?: string;
    }): Promise<PaginatedResult<Permission>>;
    addPermissions(role_id: string, data: string[]): Promise<Permission>;
    removePermissions(role_id: string, data: string[]): Promise<void>;
    getUsers(role_id: string, queryParams?: {
        offset?: number;
        limit?: number;
        sort_by?: string;
    }): Promise<PaginatedResult<User>>;
}

/**
 * @public
 */
export declare interface SAMLConnection {
    type: 'enterprise';
    provider: 'saml';
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        enabled_clients: string[];
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
            [k: string]: any;
        };
        /**
         * Your SAML IDP's metadata URL.
         */
        metadata_url?: string;
        /**
         * Your SAML IdP's entity_id
         */
        entity_id: string;
        /**
         * Your SAML IdP's login URL in format `<http/s>://<host>:<port?>`
         */
        sign_in_url: string;
        /**
         * If enabled, when user logs out from PlusAuth a SAML logout request will be sent to SAML IdP.
         */
        sign_out_enabled?: boolean;
        /**
         * Your SAML IdP's sign out URL in format `<http/s>://<host>:<port?>`
         */
        sign_out_url?: (string | null);
        signing_certificate?: (string | null);
        /**
         * Enable/Disable the SAML authentication request signing.
         */
        sign_request?: boolean;
        sign_request_algorithm: ('sha512' | 'sha256' | 'sha1');
        /**
         * SAML Request Binding
         */
        request_binding: ('HTTP-POST' | 'HTTP-Redirect');
        mappings: {
            /**
             * @minItems 1
             *
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             */
            [k: string]: (string | [
            (string | {
                value?: (string | boolean | number);
                [k: string]: any;
            }),
            ...((string | {
                value?: (string | boolean | number);
                [k: string]: any;
            }))[]
            ] | {
                value?: (string | boolean | number);
                [k: string]: any;
            } | boolean);
        };
    };
}

/**
 * @public
 */
export declare interface SendgridEmailProvider {
    type: 'email';
    is_custom?: boolean;
    provider: 'sendgrid';
    /**
     * SendGrid email service configuration settings.
     */
    settings: {
        /**
         * `from` field for your emails
         */
        from: string;
        /**
         * SendGrid API Key
         */
        api_key: string;
        /**
         * SendGrid API User
         */
        api_user?: (string | null);
    };
}

/**
 * @public
 */
export declare type SmsConnection = ({
    type: 'sms';
    [k: string]: any;
} & ({
    type: 'sms';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: 'dataport';
    /**
     * DataPort configuration settings.
     */
    settings: {
        /**
         * DataPort username
         */
        username: string;
        /**
         * DataPort user credentials.
         */
        password: string;
        /**
         * Account number used for token retrieval
         */
        account_id: string;
        /**
         * Operator identifier
         */
        operator: ('1' | '2' | '3' | '4');
        /**
         * Short code of operator used for sendind messages
         */
        short_number: string;
        /**
         * Orginator value
         */
        from: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients: string[];
    };
    enabled: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
} | {
    type: 'sms';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: 'messagebird';
    /**
     * MessageBird configuration settings.
     */
    settings: {
        /**
         * MessageBird API Key
         */
        api_key: string;
        /**
         * MessageBird originator also known as Sender ID.
         */
        originator: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients: string[];
    };
    enabled: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
} | {
    type: 'sms';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: 'custom';
    /**
     * Custom SMS provider configuration settings.
     */
    settings: {
        /**
         * SMS provider's hook context
         */
        hook_context: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients: string[];
    };
    enabled: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
} | {
    type: 'sms';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: '3gbilisim';
    /**
     * 3gBilisim configuration settings.
     */
    settings: {
        /**
         * If provided, sms requests will be made to this endpoint
         */
        endpoint?: string;
        /**
         * Username provided by your 3GBilisim dealer.
         */
        username: string;
        /**
         * Password provided by your 3GBilisim dealer.
         */
        password: string;
        /**
         * Dealer-specific code provided by your 3GBilisim dealer.
         */
        company_code?: string;
        /**
         * It is the message header defined in the NetGSM (your sender name). If you want your subscriber number to be your message header, write your subscriber number to this parameter without a leading zero. 8xxxxxxxxxx
         */
        from?: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients: string[];
    };
    enabled: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
} | {
    type: 'sms';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: 'twilio';
    /**
     * Twilio SMS service configuration settings.
     */
    settings: {
        /**
         * Your Twilio auth token
         */
        auth_token: string;
        /**
         * Your Twilio account sid.
         */
        sid: string;
        strategy: ('copilot' | 'from');
        /**
         * If strategy is `copilot` than this value needs to be your Twilio messaging service SID. Otherwise it is phone number for originating your messages.
         */
        from: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients: string[];
    };
    enabled: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
} | {
    type: 'sms';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: 'vonage';
    /**
     * Vonage SMS service configuration settings.
     */
    settings: {
        /**
         * Vonage API Key
         */
        api_key: string;
        /**
         * Vonage API Secret
         */
        api_secret: string;
        /**
         * Originating phone number
         */
        from: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients: string[];
    };
    enabled: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
} | {
    type: 'sms';
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: 'netgsm';
    /**
     * NetGSM configuration settings.
     */
    settings: {
        /**
         * Subscriber number obtained from Netgsm service. For ex: 850xxxxxxx, 312XXXXXXX
         */
        username: string;
        /**
         * Sub-user password with defined API authorization.
         */
        password: string;
        /**
         * If you are a dealer member, your dealer-specific code.
         */
        merchant_code?: string;
        /**
         * The ID information of the application published from your developer account.
         */
        app_key?: string;
        /**
         * It is the message header defined in the NetGSM (your sender name). If you want your subscriber number to be your message header, write your subscriber number to this parameter without a leading zero. 8xxxxxxxxxx
         */
        from?: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients: string[];
    };
    enabled: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
}));

/**
 * @public
 */
export declare type SmsProvider = ({
    type: 'sms';
    [k: string]: any;
} & ({
    type: 'sms';
    is_custom?: boolean;
    provider: 'dataport';
    /**
     * DataPort configuration settings.
     */
    settings: {
        /**
         * DataPort username
         */
        username: string;
        /**
         * DataPort user credentials.
         */
        password: string;
        /**
         * Account number used for token retrieval
         */
        account_id: string;
        /**
         * Operator identifier
         */
        operator: ('1' | '2' | '3' | '4');
        /**
         * Short code of operator used for sendind messages
         */
        short_number: string;
        /**
         * Orginator value
         */
        from: string;
    };
} | {
    type: 'sms';
    is_custom?: boolean;
    provider: 'messagebird';
    /**
     * MessageBird configuration settings.
     */
    settings: {
        /**
         * MessageBird API Key
         */
        api_key: string;
        /**
         * MessageBird originator also known as Sender ID.
         */
        originator: string;
    };
} | {
    type: 'sms';
    is_custom?: boolean;
    provider: 'custom';
    /**
     * Custom SMS provider configuration settings.
     */
    settings: {
        /**
         * SMS provider's hook context
         */
        hook_context: string;
    };
} | {
    type: 'sms';
    is_custom?: boolean;
    provider: '3gbilisim';
    /**
     * 3gBilisim configuration settings.
     */
    settings: {
        /**
         * If provided, sms requests will be made to this endpoint
         */
        endpoint?: string;
        /**
         * Username provided by your 3GBilisim dealer.
         */
        username: string;
        /**
         * Password provided by your 3GBilisim dealer.
         */
        password: string;
        /**
         * Dealer-specific code provided by your 3GBilisim dealer.
         */
        company_code?: string;
        /**
         * It is the message header defined in the NetGSM (your sender name). If you want your subscriber number to be your message header, write your subscriber number to this parameter without a leading zero. 8xxxxxxxxxx
         */
        from?: string;
    };
} | {
    type: 'sms';
    is_custom?: boolean;
    provider: 'twilio';
    /**
     * Twilio SMS service configuration settings.
     */
    settings: {
        /**
         * Your Twilio auth token
         */
        auth_token: string;
        /**
         * Your Twilio account sid.
         */
        sid: string;
        strategy: ('copilot' | 'from');
        /**
         * If strategy is `copilot` than this value needs to be your Twilio messaging service SID. Otherwise it is phone number for originating your messages.
         */
        from: string;
    };
} | {
    type: 'sms';
    is_custom?: boolean;
    provider: 'vonage';
    /**
     * Vonage SMS service configuration settings.
     */
    settings: {
        /**
         * Vonage API Key
         */
        api_key: string;
        /**
         * Vonage API Secret
         */
        api_secret: string;
        /**
         * Originating phone number
         */
        from: string;
    };
} | {
    type: 'sms';
    is_custom?: boolean;
    provider: 'netgsm';
    /**
     * NetGSM configuration settings.
     */
    settings: {
        /**
         * Subscriber number obtained from Netgsm service. For ex: 850xxxxxxx, 312XXXXXXX
         */
        username: string;
        /**
         * Sub-user password with defined API authorization.
         */
        password: string;
        /**
         * If you are a dealer member, your dealer-specific code.
         */
        merchant_code?: string;
        /**
         * The ID information of the application published from your developer account.
         */
        app_key?: string;
        /**
         * It is the message header defined in the NetGSM (your sender name). If you want your subscriber number to be your message header, write your subscriber number to this parameter without a leading zero. 8xxxxxxxxxx
         */
        from?: string;
    };
}));

/**
 * @public
 */
export declare interface SmsTemplate {
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    content: string;
    is_default?: (boolean | null);
    type: 'sms';
    name: ('verification-code' | 'test');
}

/**
 * @public
 */
export declare type SmsTemplateType = ('verification-code' | 'test');

/**
 * @public
 */
export declare interface SMTPEmailProvider {
    type: 'email';
    is_custom?: boolean;
    provider: 'smtp';
    /**
     * Your SMTP provider configuration settings.
     */
    settings: {
        /**
         * `from` field for your emails
         */
        from: string;
        /**
         * Hostname of your SMTP provider
         */
        host: string;
        /**
         * Port of your SMTP provider
         */
        port: number;
        /**
         * Username for SMTP authentication
         */
        username: string;
        /**
         * Password for SMTP authentication
         */
        password: string;
        secure?: boolean;
    };
}

/**
 * @public
 */
export declare type SocialConnection = ({
    type: 'social';
    [k: string]: any;
} & ({
    type: 'social';
    provider: 'apple';
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        enabled_clients: string[];
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
            [k: string]: any;
        };
        client_id: string;
        key_id: string;
        team_id: string;
        scopes: string[];
    };
} | {
    type: 'social';
    provider: 'e-devlet';
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        enabled_clients: string[];
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
            [k: string]: any;
        };
        client_id: string;
        client_secret: string;
        is_test?: boolean;
        scopes: string[];
    };
} | {
    type: 'social';
    provider: ('amazon' | 'dribbble' | 'facebook' | 'github' | 'google' | 'linkedin' | 'microsoft' | 'slack' | 'spotify');
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        enabled_clients: string[];
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
            [k: string]: any;
        };
        client_id: string;
        client_secret: string;
        scopes: string[];
    };
} | {
    type: 'social';
    provider: 'custom-oauth2';
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        enabled_clients: string[];
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
            [k: string]: any;
        };
        extra_params: {
            [k: string]: string;
        };
        extra_headers: {
            [k: string]: string;
        };
        client_id: string;
        client_secret: string;
        authorization_url: string;
        token_url: string;
        scopes: string[];
    };
} | {
    type: 'social';
    provider: 'dropbox';
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        enabled_clients: string[];
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
            [k: string]: any;
        };
        app_key: string;
        app_secret: string;
        scopes: string[];
    };
} | {
    type: 'social';
    provider: 'twitter';
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        enabled_clients: string[];
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
            [k: string]: any;
        };
        consumer_key: string;
        consumer_secret: string;
    };
}));

/**
 * @public
 */
export declare interface SparkPostEmailProvider {
    type: 'email';
    is_custom?: boolean;
    provider: 'sparkpost';
    /**
     * SparkPost email service configuration settings.
     */
    settings: {
        /**
         * `from` field for your emails
         */
        from: string;
        /**
         * SparkPost API Key
         */
        api_key: string;
        /**
         * SparkPost Endpoint
         */
        endpoint: string;
        /**
         * SparkPost API Version
         */
        api_version: string;
    };
}

/**
 * @public
 */
export declare type StringArray = string[];

/**
 * Details about the subscription usage
 * @public
 */
export declare interface SubscriptionUsage {
    active_user?: (boolean | number | {
        max?: number;
        min?: number;
        step?: number;
        type?: 'range';
    });
    administrators?: (boolean | number);
    /**
     * Is feature enabled or not
     */
    ciba?: boolean;
    'connections.passwordless'?: (boolean | number);
    'connections.social'?: (boolean | number);
    'connections.saml'?: (boolean | number);
    'connections.e_devlet'?: (boolean | number);
    'connections.ldap'?: (boolean | number);
    /**
     * Is feature enabled or not
     */
    custom_algorithm?: boolean;
    custom_domain?: (boolean | number);
    /**
     * Is feature enabled or not
     */
    custom_password_policy?: boolean;
    /**
     * Is feature enabled or not
     */
    custom_token_ttl?: boolean;
    /**
     * Is feature enabled or not
     */
    fapi?: boolean;
    hooks?: (boolean | number);
    /**
     * Log retention period in days
     */
    log_retention?: number;
    /**
     * Is feature enabled or not
     */
    log_shipping?: boolean;
    /**
     * Is feature enabled or not
     */
    log_signing?: boolean;
    /**
     * Number of defined feature
     */
    max_clients?: number;
    /**
     * Number of defined feature
     */
    max_resources?: number;
    /**
     * Number of defined feature
     */
    max_tenants?: number;
    /**
     * Number of defined feature
     */
    max_users?: number;
    mfa?: (boolean | number);
    'mfa.sms'?: boolean;
    'mfa.otp'?: boolean;
    'mfa.fv'?: boolean;
    'mfa.push'?: boolean;
    'mfa.email'?: boolean;
    'mfa.e-sign'?: boolean;
    'mfa.webauthn'?: boolean;
    /**
     * Is feature enabled or not
     */
    password_history?: boolean;
    /**
     * Is feature enabled or not
     */
    rbac_management?: boolean;
    /**
     * Is feature enabled or not
     */
    user_management?: boolean;
}

/**
 * @public
 */
export declare type Template = ({
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    content: string;
    is_default?: (boolean | null);
    type: 'email';
    name: ('welcome' | 'verification-code' | 'magic-link' | 'verify-email' | 'reset-password' | 'invite-admin' | 'payment-failed' | 'plan-downgraded' | 'blocked-account' | 'blocked-ip' | 'test');
    details: {
        /**
         * `from` field for your emails
         */
        from?: string;
        /**
         * `subject` field for your emails.
         */
        subject?: string;
    };
} | {
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    content: string;
    is_default?: (boolean | null);
    type: 'sms';
    name: ('verification-code' | 'test');
});

declare class TemplateService extends HttpService {
    get(type: TemplateType, name: undefined): Promise<Template>;
    update(type: TemplateType, name: undefined, data: UpdateTemplate): Promise<Template>;
    reset(type: TemplateType, name: undefined): Promise<void>;
}

/**
 * @public
 */
export declare type TemplateType = ('email' | 'sms');

/**
 * @public
 */
export declare interface Tenant {
    /**
     * Your tenant's identifier.
     */
    tenant_id: string;
    region: 'tr-1';
    settings: {
        default_strategy: (string | null);
        auto_sign_in: boolean;
        register_enabled: boolean;
        forgot_password_enabled: boolean;
        environment_variables: {
            [k: string]: string;
        };
        expose_unsafe_errors: boolean;
        welcome_emails_enabled: boolean;
        force_email_verification: boolean;
        extra_params: string[];
        acr_values?: string[];
        extra_scopes: string[];
        api_version: ('2021-07-04' | null);
        tenant_login_url: (string | null);
        /**
         * PlusAuth Authenticator Application related settings
         */
        authenticator?: {
            /**
             * Should authenticator application logout if a SIM card change detected on device
             */
            bind_sim?: boolean;
            [k: string]: any;
        };
        ciba: {
            delivery_mode: ('ping' | 'poll');
            notifier_endpoint: string;
        };
        /**
         * Lifetime settings of generated tokens defined in seconds.
         */
        ttl: {
            access_token: number;
            authorization_code: number;
            backchannel_authentication_request: number;
            client_credentials: number;
            device_code: number;
            id_token: number;
            refresh_token: number;
            session?: number;
        };
        hash_function: ('bcrypt' | 'argon2' | 'pbkdf2');
        policies: {
            /**
             * Password policy settings to be enforced to your new users.
             */
            password: {
                /**
                 * Minimum number of characters
                 */
                min?: (number | null);
                /**
                 * Maximum number of characters
                 */
                max?: (number | null);
                /**
                 * Require at least on of the given characters
                 */
                custom_chars?: (string | null);
                /**
                 * The system will maintain a password history for each user and prevent the reuse of passwords included in the history. The password history can be up to 10 in size. When provided, the system will maintain existing and new users' password history going forward.
                 */
                history?: (number | null);
                /**
                 * Require at least given value of uppercase letters
                 */
                upper_case?: (number | null);
                /**
                 * Require at least given value of lowercase letters
                 */
                lower_case?: (number | null);
                /**
                 * Require at least given value of numbers
                 */
                number?: (number | null);
            };
            account_blocking: {
                enabled: boolean;
                /**
                 * Send an email to user's email address about the activity.
                 */
                notification: boolean;
                /**
                 * Reset failed attempts count after successful login.
                 */
                reset_after_success: boolean;
                /**
                 * If `true`, users will be able to unblock their accounts by the link received in notification email.
                 */
                allow_user_unblock: boolean;
                /**
                 * Maximum failed login attempts to block user for specified duration.
                 */
                allowed_attempts: number;
                /**
                 * Number of seconds to block the account.
                 */
                block_duration: number;
                /**
                 * Number of seconds before attempts are reset
                 */
                duration: number;
            };
            brute_force: {
                enabled: boolean;
                /**
                 * Allowed consecutive login attempts
                 */
                allowed_attempts: number;
                /**
                 * Number of seconds before attempts are reset
                 */
                duration: number;
                /**
                 * Number of seconds to block the IP.
                 */
                block_duration: number;
                /**
                 * Send an email to user's email address about the activity.
                 */
                notification: boolean;
                /**
                 * Whitelisted IP addresses.
                 */
                white_list: string[];
            };
        };
    };
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    keystore: {
        /**
         * Public JWK. You can look at JWK specification from [here](https://www.rfc-editor.org/rfc/rfc7517)
         */
        key: {
            kty: string;
            e: string;
            key_ops?: ('sign' | 'verify' | 'encrypt' | 'decrypt' | 'wrapKey' | 'unwrapKey' | 'deriveKey' | 'deriveBits')[];
            n: string;
            use: string;
            alg: string;
            kid: string;
            x5u?: string;
            x5c?: string[];
            x5t?: string;
            'x5t#S256'?: string;
            [k: string]: any;
        };
        /**
         * Key creation date in milliseconds since the epoch
         */
        created_at: number;
        /**
         * Rotation time in milliseconds since the epoch
         */
        rotated_at?: (number | null);
        /**
         * Revocation time in milliseconds since the epoch
         */
        revoked_at?: (number | null);
        [k: string]: any;
    }[];
    /**
     * Subscription details of tenant
     */
    subscription: {
        id?: string;
        user_id?: string;
        issued_at?: string;
        expires_at?: string;
        /**
         * Applied plan name
         */
        plan: ('free' | 'basic' | 'pro' | 'enterprise' | 'on-premise');
        /**
         * Details about the subscription usage
         */
        plan_details: {
            active_user?: (boolean | number | {
                max?: number;
                min?: number;
                step?: number;
                type?: 'range';
            });
            administrators?: (boolean | number);
            /**
             * Is feature enabled or not
             */
            ciba?: boolean;
            'connections.passwordless'?: (boolean | number);
            'connections.social'?: (boolean | number);
            'connections.saml'?: (boolean | number);
            'connections.e_devlet'?: (boolean | number);
            'connections.ldap'?: (boolean | number);
            /**
             * Is feature enabled or not
             */
            custom_algorithm?: boolean;
            custom_domain?: (boolean | number);
            /**
             * Is feature enabled or not
             */
            custom_password_policy?: boolean;
            /**
             * Is feature enabled or not
             */
            custom_token_ttl?: boolean;
            /**
             * Is feature enabled or not
             */
            fapi?: boolean;
            hooks?: (boolean | number);
            /**
             * Log retention period in days
             */
            log_retention?: number;
            /**
             * Is feature enabled or not
             */
            log_shipping?: boolean;
            /**
             * Is feature enabled or not
             */
            log_signing?: boolean;
            /**
             * Number of defined feature
             */
            max_clients?: number;
            /**
             * Number of defined feature
             */
            max_resources?: number;
            /**
             * Number of defined feature
             */
            max_tenants?: number;
            /**
             * Number of defined feature
             */
            max_users?: number;
            mfa?: (boolean | number);
            'mfa.sms'?: boolean;
            'mfa.otp'?: boolean;
            'mfa.fv'?: boolean;
            'mfa.push'?: boolean;
            'mfa.email'?: boolean;
            'mfa.e-sign'?: boolean;
            'mfa.webauthn'?: boolean;
            /**
             * Is feature enabled or not
             */
            password_history?: boolean;
            /**
             * Is feature enabled or not
             */
            rbac_management?: boolean;
            /**
             * Is feature enabled or not
             */
            user_management?: boolean;
        };
        metadata?: {
            [k: string]: any;
        };
    };
}

/**
 * @public
 */
export declare interface TenantAdministrator {
    /**
     * Unique identifier of entity
     */
    id: string;
    owner: boolean;
    email: string;
    user_id: string;
    invite_accepted: boolean;
}

/**
 * @public
 */
export declare interface TenantCustomDomain {
    /**
     * Unique identifier of entity
     */
    id: string;
    domain: string;
    verified: boolean;
    verification_value: string;
    mx_record: {
        value: string;
        type: ('CNAME' | 'TXT');
        [k: string]: any;
    };
}

declare class TenantService extends HttpService {
    create(data: CreateTenant): Promise<Tenant>;
    remove(tenant_id: string): Promise<void>;
    inviteAdmin(tenant_id: string, data: Record<string, any>): Promise<void>;
    getAdministrators(tenant_id: string): Promise<TenantAdministrator[]>;
    removeAdministrators(tenant_id: string, email: string): Promise<void>;
    assignPermissionsToAdmin(tenant_id: string, admin_id: string, data: string[]): Promise<void>;
    unassignPermissionsFromAdmin(tenant_id: string, admin_id: string, data: string[]): Promise<void>;
    getStats(tenant_id: string): Promise<TenantAdministrator[]>;
    getSettings(tenant_id: string): Promise<TenantSettings>;
    updateSettings(tenant_id: string, data: UpdateTenantSettings): Promise<Tenant>;
    getSubscription(tenant_id: string): Promise<TenantSubscription>;
    updateSubscription(tenant_id: string, data: TenantSubscription): Promise<Tenant>;
}

/**
 * @public
 */
export declare interface TenantSettings {
    default_strategy: (string | null);
    auto_sign_in: boolean;
    register_enabled: boolean;
    forgot_password_enabled: boolean;
    environment_variables: {
        [k: string]: string;
    };
    expose_unsafe_errors: boolean;
    welcome_emails_enabled: boolean;
    force_email_verification: boolean;
    extra_params: string[];
    acr_values?: string[];
    extra_scopes: string[];
    api_version: ('2021-07-04' | null);
    tenant_login_url: (string | null);
    /**
     * PlusAuth Authenticator Application related settings
     */
    authenticator?: {
        /**
         * Should authenticator application logout if a SIM card change detected on device
         */
        bind_sim?: boolean;
        [k: string]: any;
    };
    ciba: {
        delivery_mode: ('ping' | 'poll');
        notifier_endpoint: string;
    };
    /**
     * Lifetime settings of generated tokens defined in seconds.
     */
    ttl: {
        access_token: number;
        authorization_code: number;
        backchannel_authentication_request: number;
        client_credentials: number;
        device_code: number;
        id_token: number;
        refresh_token: number;
        session?: number;
    };
    hash_function: ('bcrypt' | 'argon2' | 'pbkdf2');
    policies: {
        /**
         * Password policy settings to be enforced to your new users.
         */
        password: {
            /**
             * Minimum number of characters
             */
            min?: (number | null);
            /**
             * Maximum number of characters
             */
            max?: (number | null);
            /**
             * Require at least on of the given characters
             */
            custom_chars?: (string | null);
            /**
             * The system will maintain a password history for each user and prevent the reuse of passwords included in the history. The password history can be up to 10 in size. When provided, the system will maintain existing and new users' password history going forward.
             */
            history?: (number | null);
            /**
             * Require at least given value of uppercase letters
             */
            upper_case?: (number | null);
            /**
             * Require at least given value of lowercase letters
             */
            lower_case?: (number | null);
            /**
             * Require at least given value of numbers
             */
            number?: (number | null);
        };
        account_blocking: {
            enabled: boolean;
            /**
             * Send an email to user's email address about the activity.
             */
            notification: boolean;
            /**
             * Reset failed attempts count after successful login.
             */
            reset_after_success: boolean;
            /**
             * If `true`, users will be able to unblock their accounts by the link received in notification email.
             */
            allow_user_unblock: boolean;
            /**
             * Maximum failed login attempts to block user for specified duration.
             */
            allowed_attempts: number;
            /**
             * Number of seconds to block the account.
             */
            block_duration: number;
            /**
             * Number of seconds before attempts are reset
             */
            duration: number;
        };
        brute_force: {
            enabled: boolean;
            /**
             * Allowed consecutive login attempts
             */
            allowed_attempts: number;
            /**
             * Number of seconds before attempts are reset
             */
            duration: number;
            /**
             * Number of seconds to block the IP.
             */
            block_duration: number;
            /**
             * Send an email to user's email address about the activity.
             */
            notification: boolean;
            /**
             * Whitelisted IP addresses.
             */
            white_list: string[];
        };
    };
}

/**
 * Subscription details of tenant
 * @public
 */
export declare interface TenantSubscription {
    id?: string;
    user_id?: string;
    issued_at?: string;
    expires_at?: string;
    /**
     * Applied plan name
     */
    plan: ('free' | 'basic' | 'pro' | 'enterprise' | 'on-premise');
    /**
     * Details about the subscription usage
     */
    plan_details: {
        active_user?: (boolean | number | {
            max?: number;
            min?: number;
            step?: number;
            type?: 'range';
        });
        administrators?: (boolean | number);
        /**
         * Is feature enabled or not
         */
        ciba?: boolean;
        'connections.passwordless'?: (boolean | number);
        'connections.social'?: (boolean | number);
        'connections.saml'?: (boolean | number);
        'connections.e_devlet'?: (boolean | number);
        'connections.ldap'?: (boolean | number);
        /**
         * Is feature enabled or not
         */
        custom_algorithm?: boolean;
        custom_domain?: (boolean | number);
        /**
         * Is feature enabled or not
         */
        custom_password_policy?: boolean;
        /**
         * Is feature enabled or not
         */
        custom_token_ttl?: boolean;
        /**
         * Is feature enabled or not
         */
        fapi?: boolean;
        hooks?: (boolean | number);
        /**
         * Log retention period in days
         */
        log_retention?: number;
        /**
         * Is feature enabled or not
         */
        log_shipping?: boolean;
        /**
         * Is feature enabled or not
         */
        log_signing?: boolean;
        /**
         * Number of defined feature
         */
        max_clients?: number;
        /**
         * Number of defined feature
         */
        max_resources?: number;
        /**
         * Number of defined feature
         */
        max_tenants?: number;
        /**
         * Number of defined feature
         */
        max_users?: number;
        mfa?: (boolean | number);
        'mfa.sms'?: boolean;
        'mfa.otp'?: boolean;
        'mfa.fv'?: boolean;
        'mfa.push'?: boolean;
        'mfa.email'?: boolean;
        'mfa.e-sign'?: boolean;
        'mfa.webauthn'?: boolean;
        /**
         * Is feature enabled or not
         */
        password_history?: boolean;
        /**
         * Is feature enabled or not
         */
        rbac_management?: boolean;
        /**
         * Is feature enabled or not
         */
        user_management?: boolean;
    };
    metadata?: {
        [k: string]: any;
    };
}

/**
 * @public
 */
export declare interface ThreeGBilisimSmsProvider {
    type: 'sms';
    is_custom?: boolean;
    provider: '3gbilisim';
    /**
     * 3gBilisim configuration settings.
     */
    settings: {
        /**
         * If provided, sms requests will be made to this endpoint
         */
        endpoint?: string;
        /**
         * Username provided by your 3GBilisim dealer.
         */
        username: string;
        /**
         * Password provided by your 3GBilisim dealer.
         */
        password: string;
        /**
         * Dealer-specific code provided by your 3GBilisim dealer.
         */
        company_code?: string;
        /**
         * It is the message header defined in the NetGSM (your sender name). If you want your subscriber number to be your message header, write your subscriber number to this parameter without a leading zero. 8xxxxxxxxxx
         */
        from?: string;
    };
}

/**
 * @public
 */
export declare interface Ticket {
    id: string;
    expires_at: string;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at: string;
    type: ('verify-email' | 'forgot-password' | 'invite-admin' | 'unblock-ip' | 'unblock-account');
    token?: string;
    user_id?: string;
    email?: string;
    client_id?: string;
    details?: {
        [k: string]: string;
    };
    used?: boolean;
}

/**
 * Resource Object with name and description properties.
 * @public
 */
export declare interface TOTPAuthPlusAccount {
    category_id?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at: string;
    details: {
        secret: string;
        hash_alg: ('sha1' | 'sha256' | 'sha512');
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * Time to live of the OTP code in seconds.
         */
        ttl: number;
    };
    icon?: (string | null);
    /**
     * Unique identifier of entity
     */
    id: string;
    name?: (string | null);
    /**
     * Category order
     */
    order?: number;
    type: 'totp';
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
}

/**
 * @public
 */
export declare interface TOTPConnection {
    type: 'otp';
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    provider: 'totp';
    settings: {
        enabled_clients: string[];
        hash_alg: ('sha1' | 'sha256' | 'sha512');
        window: number;
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * Time to live of the OTP code in seconds.
         */
        ttl: number;
    };
}

/**
 * @public
 */
export declare interface TwilioSmsProvider {
    type: 'sms';
    is_custom?: boolean;
    provider: 'twilio';
    /**
     * Twilio SMS service configuration settings.
     */
    settings: {
        /**
         * Your Twilio auth token
         */
        auth_token: string;
        /**
         * Your Twilio account sid.
         */
        sid: string;
        strategy: ('copilot' | 'from');
        /**
         * If strategy is `copilot` than this value needs to be your Twilio messaging service SID. Otherwise it is phone number for originating your messages.
         */
        from: string;
    };
}

/**
 * @public
 */
export declare interface UpdateAuthPlusAccount {
    name?: (string | null);
    icon?: (string | null);
    /**
     * Category order
     */
    order?: number;
    category_id?: (string | null);
    details?: {
        [k: string]: any;
    };
}

/**
 * @public
 */
export declare interface UpdateAuthPlusCategory {
    /**
     * Category name
     */
    name?: (string | null);
    /**
     * Category order
     */
    order?: number;
}

/**
 * @public
 */
export declare interface UpdateAuthPlusDevice {
    name?: (string | null);
    details?: {
        [k: string]: any;
    };
    os?: string;
}

/**
 * @public
 */
export declare interface UpdateClient {
    /**
     * Client name for displaying purposes.
     */
    client_name?: string;
    /**
     * Additional description for the client
     */
    description?: (string | null);
    logo_uri?: (string | null);
    /**
     * Is client first party
     */
    first_party?: (boolean | null);
    token_endpoint_auth_method?: string;
    response_types?: string[];
    oidc_conformant?: (boolean | null);
    redirect_uris?: string[];
    logout_uris?: string[];
    grant_types?: string[];
    advanced?: {
        pkce_required?: boolean;
    };
    extra_metadata?: {
        [k: string]: (string | boolean | number | null);
    };
    connectors?: {
        saml?: {
            enabled?: boolean;
            entity_id?: string;
            /**
             * Your SAML SP's assertion consumer endpoint.
             */
            consumer_service?: string;
            /**
             * Application specific resource in an IDP initiated Single Sign-On scenario. In most instances this is blank.
             */
            relay_state?: string;
            mappings?: {
                /**
                 * This interface was referenced by `undefined`'s JSON-Schema definition
                 * via the `patternProperty` "^(.*)$".
                 */
                [k: string]: any;
            };
            /**
             * Your SAML SP's metadata URL.
             */
            metadata_url?: string;
            request_binding?: ('HTTP-POST' | 'HTTP-Redirect');
            sign_assertions?: boolean;
            sign_out_enabled?: boolean;
            sign_out_url?: string;
            signed_requests?: boolean;
            signature_algorithm?: ('sha512' | 'sha256' | 'sha1');
            signing_certificate?: (string | null);
        };
        wsfed?: {
            enabled?: boolean;
            /**
             * Your WS Fed application's callback uri.
             */
            callback_url?: string;
            /**
             * Application identifier (wtrealm parameter)
             */
            realm?: string;
            audiences?: string[];
            /**
             * Validity time in seconds
             */
            validity?: number;
        };
    };
    jwks?: {
        /**
         * @maxItems 4
         */
        keys?: Record<string, any>;
        [k: string]: any;
    };
}

/**
 * @public
 */
export declare type UpdateConnection = (({
    type: 'email';
    provider: 'aws_ses';
    settings?: {
        /**
         * `from` field for your emails
         */
        from?: string;
        /**
         * AWS SES access key id.
         */
        access_key_id?: string;
        /**
         * AWS SES secret access key.
         */
        secret_access_key?: string;
        /**
         * AWS SES region.
         */
        region?: string;
        use_magic_link?: boolean;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients?: string[];
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
} | {
    type: 'email';
    provider: 'postmark';
    /**
     * Postmark email service configuration settings.
     */
    settings?: {
        /**
         * `from` field for your emails
         */
        from?: string;
        /**
         * Postmark API Key
         */
        api_key?: string;
        use_magic_link?: boolean;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients?: string[];
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
} | {
    type: 'email';
    provider: 'sendgrid';
    /**
     * SendGrid email service configuration settings.
     */
    settings?: {
        /**
         * `from` field for your emails
         */
        from?: string;
        /**
         * SendGrid API Key
         */
        api_key?: string;
        /**
         * SendGrid API User
         */
        api_user?: (string | null);
        use_magic_link?: boolean;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients?: string[];
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
} | {
    type: 'email';
    provider: 'sparkpost';
    /**
     * SparkPost email service configuration settings.
     */
    settings?: {
        /**
         * `from` field for your emails
         */
        from?: string;
        /**
         * SparkPost API Key
         */
        api_key?: string;
        /**
         * SparkPost Endpoint
         */
        endpoint?: string;
        /**
         * SparkPost API Version
         */
        api_version?: string;
        use_magic_link?: boolean;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients?: string[];
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
} | {
    type: 'email';
    provider: 'smtp';
    /**
     * Your SMTP provider configuration settings.
     */
    settings?: {
        /**
         * `from` field for your emails
         */
        from?: string;
        /**
         * Hostname of your SMTP provider
         */
        host?: string;
        /**
         * Port of your SMTP provider
         */
        port?: number;
        /**
         * Username for SMTP authentication
         */
        username?: string;
        /**
         * Password for SMTP authentication
         */
        password?: string;
        secure?: boolean;
        use_magic_link?: boolean;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients?: string[];
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
}) | ({
    type: 'sms';
    provider: 'messagebird';
    /**
     * MessageBird configuration settings.
     */
    settings?: {
        /**
         * MessageBird API Key
         */
        api_key?: string;
        /**
         * MessageBird originator also known as Sender ID.
         */
        originator?: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients?: string[];
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
} | {
    type: 'sms';
    provider: 'twilio';
    /**
     * Twilio SMS service configuration settings.
     */
    settings?: {
        /**
         * Your Twilio auth token
         */
        auth_token?: string;
        /**
         * Your Twilio account sid.
         */
        sid?: string;
        strategy?: ('copilot' | 'from');
        /**
         * If strategy is `copilot` than this value needs to be your Twilio messaging service SID. Otherwise it is phone number for originating your messages.
         */
        from?: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients?: string[];
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
} | {
    type: 'sms';
    provider: 'vonage';
    /**
     * Vonage SMS service configuration settings.
     */
    settings?: {
        /**
         * Vonage API Key
         */
        api_key?: string;
        /**
         * Vonage API Secret
         */
        api_secret?: string;
        /**
         * Originating phone number
         */
        from?: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients?: string[];
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
} | {
    type: 'sms';
    provider: 'dataport';
    /**
     * DataPort configuration settings.
     */
    settings?: {
        /**
         * DataPort username
         */
        username?: string;
        /**
         * DataPort user credentials.
         */
        password?: string;
        /**
         * Account number used for token retrieval
         */
        account_id?: string;
        /**
         * Operator identifier
         */
        operator?: ('1' | '2' | '3' | '4');
        /**
         * Short code of operator used for sendind messages
         */
        short_number?: string;
        /**
         * Orginator value
         */
        from?: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients?: string[];
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
} | {
    type: 'sms';
    provider: 'custom';
    /**
     * Custom SMS provider configuration settings.
     */
    settings?: {
        /**
         * SMS provider's hook context
         */
        hook_context?: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients?: string[];
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
} | {
    type: 'sms';
    provider: 'netgsm';
    /**
     * NetGSM configuration settings.
     */
    settings?: {
        /**
         * Subscriber number obtained from Netgsm service. For ex: 850xxxxxxx, 312XXXXXXX
         */
        username?: string;
        /**
         * Sub-user password with defined API authorization.
         */
        password?: string;
        /**
         * If you are a dealer member, your dealer-specific code.
         */
        merchant_code?: string;
        /**
         * The ID information of the application published from your developer account.
         */
        app_key?: string;
        /**
         * It is the message header defined in the NetGSM (your sender name). If you want your subscriber number to be your message header, write your subscriber number to this parameter without a leading zero. 8xxxxxxxxxx
         */
        from?: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients?: string[];
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
} | {
    type: 'sms';
    provider: '3gbilisim';
    /**
     * 3gBilisim configuration settings.
     */
    settings?: {
        /**
         * If provided, sms requests will be made to this endpoint
         */
        endpoint?: string;
        /**
         * Username provided by your 3GBilisim dealer.
         */
        username?: string;
        /**
         * Password provided by your 3GBilisim dealer.
         */
        password?: string;
        /**
         * Dealer-specific code provided by your 3GBilisim dealer.
         */
        company_code?: string;
        /**
         * It is the message header defined in the NetGSM (your sender name). If you want your subscriber number to be your message header, write your subscriber number to this parameter without a leading zero. 8xxxxxxxxxx
         */
        from?: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients?: string[];
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
}) | ({
    type?: 'social';
    provider: 'apple';
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings?: {
        enabled_clients?: string[];
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
            [k: string]: any;
        };
        client_id?: string;
        key_id?: string;
        team_id?: string;
        scopes?: string[];
    };
    is_default?: boolean;
} | {
    type?: 'social';
    provider: 'e-devlet';
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings?: {
        enabled_clients?: string[];
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
            [k: string]: any;
        };
        client_id?: string;
        client_secret?: string;
        is_test?: boolean;
        scopes?: string[];
    };
    is_default?: boolean;
} | {
    type?: 'social';
    provider: ('amazon' | 'dribbble' | 'facebook' | 'github' | 'google' | 'linkedin' | 'microsoft' | 'slack' | 'spotify');
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings?: {
        enabled_clients?: string[];
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
            [k: string]: any;
        };
        client_id?: string;
        client_secret?: string;
        scopes?: string[];
    };
    is_default?: boolean;
} | {
    type?: 'social';
    provider: 'custom-oauth2';
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings?: {
        enabled_clients?: string[];
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
            [k: string]: any;
        };
        extra_params?: {
            [k: string]: string;
        };
        extra_headers?: {
            [k: string]: string;
        };
        client_id?: string;
        client_secret?: string;
        authorization_url?: string;
        token_url?: string;
        scopes?: string[];
    };
    is_default?: boolean;
} | {
    type?: 'social';
    provider: 'dropbox';
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings?: {
        enabled_clients?: string[];
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
            [k: string]: any;
        };
        app_key?: string;
        app_secret?: string;
        scopes?: string[];
    };
    is_default?: boolean;
} | {
    type?: 'social';
    provider: 'twitter';
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings?: {
        enabled_clients?: string[];
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
            [k: string]: any;
        };
        consumer_key?: string;
        consumer_secret?: string;
    };
    is_default?: boolean;
}) | ({
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type: 'enterprise';
    provider: 'ldap';
    settings?: {
        enabled_clients?: string[];
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
            [k: string]: any;
        };
        /**
         * Your LDAP server's URL in format `<ldap/s>://<host>:<port>`
         */
        url?: string;
        /**
         * Password of LDAP admin account which defined in `bind_dn`
         */
        bind_credentials?: string;
        /**
         * DN of LDAP admin, which will be used by PlusAuth to access LDAP server
         */
        bind_dn?: string;
        /**
         * Full DN of LDAP tree where your users are. This DN is the parent of LDAP users. Assuming that your typical user will have DN like `uid=john,ou=users,dc=example,dc=com`, this value would be `ou=users,dc=example,dc=com`
         */
        search_base?: string;
        /**
         * LDAP filter for user lookup. Make sure it is wrapped with parentheses. For ex: `(uid={{username}})`
         */
        search_filter?: string;
        /**
         * Specify the portion of the target subtree that should be considered
         */
        search_scope?: ('base' | 'one' | 'sub' | 'subordinate');
        /**
         * Encrypts the connection to LDAP using STARTTLS, which will disable connection pooling
         */
        start_tls?: boolean;
        /**
         * Enabling this option will reflect user updates and deletes to your LDAP connection. This means when user is deleted/updated from PlusAuth, it will be deleted from your LDAP too.
         */
        write_mode?: boolean;
        mappings?: {
            /**
             * @minItems 1
             *
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             */
            [k: string]: (string | [
            (string | {
                value?: (string | boolean | number);
                [k: string]: any;
            }),
            ...((string | {
                value?: (string | boolean | number);
                [k: string]: any;
            }))[]
            ] | {
                value?: (string | boolean | number);
                [k: string]: any;
            } | boolean);
        };
    };
} | {
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type: 'enterprise';
    provider: 'saml';
    settings?: {
        enabled_clients?: string[];
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
            [k: string]: any;
        };
        /**
         * Your SAML IDP's metadata URL.
         */
        metadata_url?: string;
        /**
         * Your SAML IdP's entity_id
         */
        entity_id?: string;
        /**
         * Your SAML IdP's login URL in format `<http/s>://<host>:<port?>`
         */
        sign_in_url?: string;
        /**
         * If enabled, when user logs out from PlusAuth a SAML logout request will be sent to SAML IdP.
         */
        sign_out_enabled?: boolean;
        /**
         * Your SAML IdP's sign out URL in format `<http/s>://<host>:<port?>`
         */
        sign_out_url?: (string | null);
        signing_certificate?: (string | null);
        /**
         * Enable/Disable the SAML authentication request signing.
         */
        sign_request?: boolean;
        sign_request_algorithm?: ('sha512' | 'sha256' | 'sha1');
        /**
         * SAML Request Binding
         */
        request_binding?: ('HTTP-POST' | 'HTTP-Redirect');
        mappings?: {
            /**
             * @minItems 1
             *
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             */
            [k: string]: (string | [
            (string | {
                value?: (string | boolean | number);
                [k: string]: any;
            }),
            ...((string | {
                value?: (string | boolean | number);
                [k: string]: any;
            }))[]
            ] | {
                value?: (string | boolean | number);
                [k: string]: any;
            } | boolean);
        };
    };
}) | ({
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type: 'otp';
    provider: 'totp';
    settings?: {
        enabled_clients?: string[];
        hash_alg?: ('sha1' | 'sha256' | 'sha512');
        window?: number;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * Time to live of the OTP code in seconds.
         */
        ttl?: number;
    };
} | {
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type: 'otp';
    provider: 'hotp';
    settings?: {
        enabled_clients?: string[];
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        hash_alg?: ('sha1' | 'sha256' | 'sha512');
        window?: number;
        initial_counter?: number;
    };
}) | ({
    type: 'push';
    provider: 'native';
    settings?: {
        /**
         * Firebase Cloud Messaging configuration settings.
         * To enable the FCM integration, you need to get your service account key from the [Firebase Console](https://console.firebase.google.com/).
         * - Select your project, and click the gear icon on the top of the sidebar.
         * - After opening "Project Settings", head to the "Service Accounts" tab.
         * - Click "Generate new private key", then confirm by clicking "Generate key".
         * - Clicking "Generate key" downloads the generated service account json file.
         */
        fcm?: {
            /**
             * `project_id` field located in your service account json
             */
            project_id?: string;
            /**
             * `client_email` field located in your service account json
             */
            client_email?: string;
            /**
             * `private_key` field located in your service account json
             */
            private_key?: string;
        };
        /**
         * Apple Push Notification Service configuration settings.
         */
        apns?: {
            /**
             * p8 of your Apple Developer account. To generate one follow these steps:
             * - Head over to Certificates, Identifiers & Profiles > Keys.
             * - Register a new key and give it a name.
             * - Enable the Apple Push Notifications service (APNs) checkbox by selecting it.
             * - Click the Continue button and on the next page, select Register.
             * - Download the .p8 key file.
             */
            key?: string;
            /**
             * This is a 10-character unique identifier for the authentication key. You can find it in the key details section of the newly created key in your Apple developer account.
             */
            key_id?: string;
            /**
             * This is available in your Apple developer account.
             */
            team_id?: string;
            /**
             * This is the ID of your app. You can find it in the app info section of your Apple developer account.
             */
            bundle_id?: string;
            production?: boolean;
        };
        enabled_clients?: string[];
        /**
         * Push notification strategy
         */
        strategy?: ('code' | 'prompt');
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
} | {
    type: 'push';
    provider: 'expo';
    /**
     * To enable Expo Push integration,
     *         you need to create an [Expo Application Services (EAS)](https://expo.dev/) account and generate an access token in the EAS dashboard.
     */
    settings?: {
        /**
         * Your Expo account's access token
         */
        access_token?: string;
        enabled_clients?: string[];
        /**
         * Push notification strategy
         */
        strategy?: ('code' | 'prompt');
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
} | {
    type: 'push';
    provider: 'one-signal';
    settings?: {
        /**
         * `OneSignal App ID` located in your [application's settings page](https://documentation.onesignal.com/docs/keys-and-ids)
         */
        app_id?: string;
        /**
         * `Rest API Key` located in your [application's settings page](https://documentation.onesignal.com/docs/keys-and-ids)
         */
        api_key?: string;
        enabled_clients?: string[];
        /**
         * Push notification strategy
         */
        strategy?: ('code' | 'prompt');
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
}));

/**
 * @public
 */
export declare type UpdateEmailConnection = ({
    type: 'email';
    [k: string]: any;
} & ({
    type: 'email';
    provider: 'aws_ses';
    settings?: {
        /**
         * `from` field for your emails
         */
        from?: string;
        /**
         * AWS SES access key id.
         */
        access_key_id?: string;
        /**
         * AWS SES secret access key.
         */
        secret_access_key?: string;
        /**
         * AWS SES region.
         */
        region?: string;
        use_magic_link?: boolean;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients?: string[];
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
} | {
    type: 'email';
    provider: 'postmark';
    /**
     * Postmark email service configuration settings.
     */
    settings?: {
        /**
         * `from` field for your emails
         */
        from?: string;
        /**
         * Postmark API Key
         */
        api_key?: string;
        use_magic_link?: boolean;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients?: string[];
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
} | {
    type: 'email';
    provider: 'sendgrid';
    /**
     * SendGrid email service configuration settings.
     */
    settings?: {
        /**
         * `from` field for your emails
         */
        from?: string;
        /**
         * SendGrid API Key
         */
        api_key?: string;
        /**
         * SendGrid API User
         */
        api_user?: (string | null);
        use_magic_link?: boolean;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients?: string[];
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
} | {
    type: 'email';
    provider: 'sparkpost';
    /**
     * SparkPost email service configuration settings.
     */
    settings?: {
        /**
         * `from` field for your emails
         */
        from?: string;
        /**
         * SparkPost API Key
         */
        api_key?: string;
        /**
         * SparkPost Endpoint
         */
        endpoint?: string;
        /**
         * SparkPost API Version
         */
        api_version?: string;
        use_magic_link?: boolean;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients?: string[];
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
} | {
    type: 'email';
    provider: 'smtp';
    /**
     * Your SMTP provider configuration settings.
     */
    settings?: {
        /**
         * `from` field for your emails
         */
        from?: string;
        /**
         * Hostname of your SMTP provider
         */
        host?: string;
        /**
         * Port of your SMTP provider
         */
        port?: number;
        /**
         * Username for SMTP authentication
         */
        username?: string;
        /**
         * Password for SMTP authentication
         */
        password?: string;
        secure?: boolean;
        use_magic_link?: boolean;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients?: string[];
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
}));

/**
 * @public
 */
export declare type UpdateEmailProvider = ({
    type: 'email';
    [k: string]: any;
} & ({
    type: 'email';
    is_custom?: boolean;
    provider: 'aws_ses';
    settings?: {
        /**
         * `from` field for your emails
         */
        from?: string;
        /**
         * AWS SES access key id.
         */
        access_key_id?: string;
        /**
         * AWS SES secret access key.
         */
        secret_access_key?: string;
        /**
         * AWS SES region.
         */
        region?: string;
    };
} | {
    type: 'email';
    is_custom?: boolean;
    provider: 'postmark';
    /**
     * Postmark email service configuration settings.
     */
    settings?: {
        /**
         * `from` field for your emails
         */
        from?: string;
        /**
         * Postmark API Key
         */
        api_key?: string;
    };
} | {
    type: 'email';
    is_custom?: boolean;
    provider: 'sendgrid';
    /**
     * SendGrid email service configuration settings.
     */
    settings?: {
        /**
         * `from` field for your emails
         */
        from?: string;
        /**
         * SendGrid API Key
         */
        api_key?: string;
        /**
         * SendGrid API User
         */
        api_user?: (string | null);
    };
} | {
    type: 'email';
    is_custom?: boolean;
    provider: 'sparkpost';
    /**
     * SparkPost email service configuration settings.
     */
    settings?: {
        /**
         * `from` field for your emails
         */
        from?: string;
        /**
         * SparkPost API Key
         */
        api_key?: string;
        /**
         * SparkPost Endpoint
         */
        endpoint?: string;
        /**
         * SparkPost API Version
         */
        api_version?: string;
    };
} | {
    type: 'email';
    is_custom?: boolean;
    provider: 'smtp';
    /**
     * Your SMTP provider configuration settings.
     */
    settings?: {
        /**
         * `from` field for your emails
         */
        from?: string;
        /**
         * Hostname of your SMTP provider
         */
        host?: string;
        /**
         * Port of your SMTP provider
         */
        port?: number;
        /**
         * Username for SMTP authentication
         */
        username?: string;
        /**
         * Password for SMTP authentication
         */
        password?: string;
        secure?: boolean;
    };
}));

/**
 * @public
 */
export declare type UpdateEnterpriseConnection = ({
    type: 'enterprise';
    [k: string]: any;
} & ({
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type: 'enterprise';
    provider: 'ldap';
    settings?: {
        enabled_clients?: string[];
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
            [k: string]: any;
        };
        /**
         * Your LDAP server's URL in format `<ldap/s>://<host>:<port>`
         */
        url?: string;
        /**
         * Password of LDAP admin account which defined in `bind_dn`
         */
        bind_credentials?: string;
        /**
         * DN of LDAP admin, which will be used by PlusAuth to access LDAP server
         */
        bind_dn?: string;
        /**
         * Full DN of LDAP tree where your users are. This DN is the parent of LDAP users. Assuming that your typical user will have DN like `uid=john,ou=users,dc=example,dc=com`, this value would be `ou=users,dc=example,dc=com`
         */
        search_base?: string;
        /**
         * LDAP filter for user lookup. Make sure it is wrapped with parentheses. For ex: `(uid={{username}})`
         */
        search_filter?: string;
        /**
         * Specify the portion of the target subtree that should be considered
         */
        search_scope?: ('base' | 'one' | 'sub' | 'subordinate');
        /**
         * Encrypts the connection to LDAP using STARTTLS, which will disable connection pooling
         */
        start_tls?: boolean;
        /**
         * Enabling this option will reflect user updates and deletes to your LDAP connection. This means when user is deleted/updated from PlusAuth, it will be deleted from your LDAP too.
         */
        write_mode?: boolean;
        mappings?: {
            /**
             * @minItems 1
             *
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             */
            [k: string]: (string | [
            (string | {
                value?: (string | boolean | number);
                [k: string]: any;
            }),
            ...((string | {
                value?: (string | boolean | number);
                [k: string]: any;
            }))[]
            ] | {
                value?: (string | boolean | number);
                [k: string]: any;
            } | boolean);
        };
    };
} | {
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type: 'enterprise';
    provider: 'saml';
    settings?: {
        enabled_clients?: string[];
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
            [k: string]: any;
        };
        /**
         * Your SAML IDP's metadata URL.
         */
        metadata_url?: string;
        /**
         * Your SAML IdP's entity_id
         */
        entity_id?: string;
        /**
         * Your SAML IdP's login URL in format `<http/s>://<host>:<port?>`
         */
        sign_in_url?: string;
        /**
         * If enabled, when user logs out from PlusAuth a SAML logout request will be sent to SAML IdP.
         */
        sign_out_enabled?: boolean;
        /**
         * Your SAML IdP's sign out URL in format `<http/s>://<host>:<port?>`
         */
        sign_out_url?: (string | null);
        signing_certificate?: (string | null);
        /**
         * Enable/Disable the SAML authentication request signing.
         */
        sign_request?: boolean;
        sign_request_algorithm?: ('sha512' | 'sha256' | 'sha1');
        /**
         * SAML Request Binding
         */
        request_binding?: ('HTTP-POST' | 'HTTP-Redirect');
        mappings?: {
            /**
             * @minItems 1
             *
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             */
            [k: string]: (string | [
            (string | {
                value?: (string | boolean | number);
                [k: string]: any;
            }),
            ...((string | {
                value?: (string | boolean | number);
                [k: string]: any;
            }))[]
            ] | {
                value?: (string | boolean | number);
                [k: string]: any;
            } | boolean);
        };
    };
}));

/**
 * @public
 */
export declare interface UpdateFvConnection {
    type: 'fv';
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    provider: 'hitachi-h1';
    settings?: {
        enabled_clients?: string[];
        /**
         * Hitachi H1 seed
         */
        seed?: string;
    };
}

/**
 * @public
 */
export declare interface UpdateHook {
    /**
     * Hook name
     */
    name?: string;
    /**
     * Additional information for the hook
     */
    description?: (string | null);
    /**
     * Execution order of the hook. It applies to hook types. Lower ordered hooks executed first.
     */
    order?: number;
    /**
     * Your hook code written in javascript.
     */
    content?: string;
    /**
     * Whether the hook is enabled or not.
     */
    enabled?: boolean;
}

/**
 * @public
 */
export declare interface UpdateLDAPConnection {
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type: 'enterprise';
    provider: 'ldap';
    settings?: {
        enabled_clients?: string[];
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
            [k: string]: any;
        };
        /**
         * Your LDAP server's URL in format `<ldap/s>://<host>:<port>`
         */
        url?: string;
        /**
         * Password of LDAP admin account which defined in `bind_dn`
         */
        bind_credentials?: string;
        /**
         * DN of LDAP admin, which will be used by PlusAuth to access LDAP server
         */
        bind_dn?: string;
        /**
         * Full DN of LDAP tree where your users are. This DN is the parent of LDAP users. Assuming that your typical user will have DN like `uid=john,ou=users,dc=example,dc=com`, this value would be `ou=users,dc=example,dc=com`
         */
        search_base?: string;
        /**
         * LDAP filter for user lookup. Make sure it is wrapped with parentheses. For ex: `(uid={{username}})`
         */
        search_filter?: string;
        /**
         * Specify the portion of the target subtree that should be considered
         */
        search_scope?: ('base' | 'one' | 'sub' | 'subordinate');
        /**
         * Encrypts the connection to LDAP using STARTTLS, which will disable connection pooling
         */
        start_tls?: boolean;
        /**
         * Enabling this option will reflect user updates and deletes to your LDAP connection. This means when user is deleted/updated from PlusAuth, it will be deleted from your LDAP too.
         */
        write_mode?: boolean;
        mappings?: {
            /**
             * @minItems 1
             *
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             */
            [k: string]: (string | [
            (string | {
                value?: (string | boolean | number);
                [k: string]: any;
            }),
            ...((string | {
                value?: (string | boolean | number);
                [k: string]: any;
            }))[]
            ] | {
                value?: (string | boolean | number);
                [k: string]: any;
            } | boolean);
        };
    };
}

/**
 * @public
 */
export declare type UpdateMFA = (({
    type: 'push';
    provider: 'native';
    settings?: {
        /**
         * Firebase Cloud Messaging configuration settings.
         * To enable the FCM integration, you need to get your service account key from the [Firebase Console](https://console.firebase.google.com/).
         * - Select your project, and click the gear icon on the top of the sidebar.
         * - After opening "Project Settings", head to the "Service Accounts" tab.
         * - Click "Generate new private key", then confirm by clicking "Generate key".
         * - Clicking "Generate key" downloads the generated service account json file.
         */
        fcm?: {
            /**
             * `project_id` field located in your service account json
             */
            project_id?: string;
            /**
             * `client_email` field located in your service account json
             */
            client_email?: string;
            /**
             * `private_key` field located in your service account json
             */
            private_key?: string;
        };
        /**
         * Apple Push Notification Service configuration settings.
         */
        apns?: {
            /**
             * p8 of your Apple Developer account. To generate one follow these steps:
             * - Head over to Certificates, Identifiers & Profiles > Keys.
             * - Register a new key and give it a name.
             * - Enable the Apple Push Notifications service (APNs) checkbox by selecting it.
             * - Click the Continue button and on the next page, select Register.
             * - Download the .p8 key file.
             */
            key?: string;
            /**
             * This is a 10-character unique identifier for the authentication key. You can find it in the key details section of the newly created key in your Apple developer account.
             */
            key_id?: string;
            /**
             * This is available in your Apple developer account.
             */
            team_id?: string;
            /**
             * This is the ID of your app. You can find it in the app info section of your Apple developer account.
             */
            bundle_id?: string;
            production?: boolean;
        };
        enabled_clients?: string[];
        /**
         * Push notification strategy
         */
        strategy?: ('code' | 'prompt');
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
} | {
    type: 'push';
    provider: 'expo';
    /**
     * To enable Expo Push integration,
     *         you need to create an [Expo Application Services (EAS)](https://expo.dev/) account and generate an access token in the EAS dashboard.
     */
    settings?: {
        /**
         * Your Expo account's access token
         */
        access_token?: string;
        enabled_clients?: string[];
        /**
         * Push notification strategy
         */
        strategy?: ('code' | 'prompt');
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
} | {
    type: 'push';
    provider: 'one-signal';
    settings?: {
        /**
         * `OneSignal App ID` located in your [application's settings page](https://documentation.onesignal.com/docs/keys-and-ids)
         */
        app_id?: string;
        /**
         * `Rest API Key` located in your [application's settings page](https://documentation.onesignal.com/docs/keys-and-ids)
         */
        api_key?: string;
        enabled_clients?: string[];
        /**
         * Push notification strategy
         */
        strategy?: ('code' | 'prompt');
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
}) | ({
    type: 'email';
    provider: 'aws_ses';
    settings?: {
        /**
         * `from` field for your emails
         */
        from?: string;
        /**
         * AWS SES access key id.
         */
        access_key_id?: string;
        /**
         * AWS SES secret access key.
         */
        secret_access_key?: string;
        /**
         * AWS SES region.
         */
        region?: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients?: string[];
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
} | {
    type: 'email';
    provider: 'postmark';
    /**
     * Postmark email service configuration settings.
     */
    settings?: {
        /**
         * `from` field for your emails
         */
        from?: string;
        /**
         * Postmark API Key
         */
        api_key?: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients?: string[];
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
} | {
    type: 'email';
    provider: 'sendgrid';
    /**
     * SendGrid email service configuration settings.
     */
    settings?: {
        /**
         * `from` field for your emails
         */
        from?: string;
        /**
         * SendGrid API Key
         */
        api_key?: string;
        /**
         * SendGrid API User
         */
        api_user?: (string | null);
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients?: string[];
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
} | {
    type: 'email';
    provider: 'sparkpost';
    /**
     * SparkPost email service configuration settings.
     */
    settings?: {
        /**
         * `from` field for your emails
         */
        from?: string;
        /**
         * SparkPost API Key
         */
        api_key?: string;
        /**
         * SparkPost Endpoint
         */
        endpoint?: string;
        /**
         * SparkPost API Version
         */
        api_version?: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients?: string[];
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
} | {
    type: 'email';
    provider: 'smtp';
    /**
     * Your SMTP provider configuration settings.
     */
    settings?: {
        /**
         * `from` field for your emails
         */
        from?: string;
        /**
         * Hostname of your SMTP provider
         */
        host?: string;
        /**
         * Port of your SMTP provider
         */
        port?: number;
        /**
         * Username for SMTP authentication
         */
        username?: string;
        /**
         * Password for SMTP authentication
         */
        password?: string;
        secure?: boolean;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients?: string[];
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
}) | ({
    type: 'sms';
    provider: 'messagebird';
    /**
     * MessageBird configuration settings.
     */
    settings?: {
        /**
         * MessageBird API Key
         */
        api_key?: string;
        /**
         * MessageBird originator also known as Sender ID.
         */
        originator?: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients?: string[];
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
} | {
    type: 'sms';
    provider: 'twilio';
    /**
     * Twilio SMS service configuration settings.
     */
    settings?: {
        /**
         * Your Twilio auth token
         */
        auth_token?: string;
        /**
         * Your Twilio account sid.
         */
        sid?: string;
        strategy?: ('copilot' | 'from');
        /**
         * If strategy is `copilot` than this value needs to be your Twilio messaging service SID. Otherwise it is phone number for originating your messages.
         */
        from?: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients?: string[];
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
} | {
    type: 'sms';
    provider: 'vonage';
    /**
     * Vonage SMS service configuration settings.
     */
    settings?: {
        /**
         * Vonage API Key
         */
        api_key?: string;
        /**
         * Vonage API Secret
         */
        api_secret?: string;
        /**
         * Originating phone number
         */
        from?: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients?: string[];
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
} | {
    type: 'sms';
    provider: 'dataport';
    /**
     * DataPort configuration settings.
     */
    settings?: {
        /**
         * DataPort username
         */
        username?: string;
        /**
         * DataPort user credentials.
         */
        password?: string;
        /**
         * Account number used for token retrieval
         */
        account_id?: string;
        /**
         * Operator identifier
         */
        operator?: ('1' | '2' | '3' | '4');
        /**
         * Short code of operator used for sendind messages
         */
        short_number?: string;
        /**
         * Orginator value
         */
        from?: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients?: string[];
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
} | {
    type: 'sms';
    provider: 'custom';
    /**
     * Custom SMS provider configuration settings.
     */
    settings?: {
        /**
         * SMS provider's hook context
         */
        hook_context?: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients?: string[];
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
} | {
    type: 'sms';
    provider: 'netgsm';
    /**
     * NetGSM configuration settings.
     */
    settings?: {
        /**
         * Subscriber number obtained from Netgsm service. For ex: 850xxxxxxx, 312XXXXXXX
         */
        username?: string;
        /**
         * Sub-user password with defined API authorization.
         */
        password?: string;
        /**
         * If you are a dealer member, your dealer-specific code.
         */
        merchant_code?: string;
        /**
         * The ID information of the application published from your developer account.
         */
        app_key?: string;
        /**
         * It is the message header defined in the NetGSM (your sender name). If you want your subscriber number to be your message header, write your subscriber number to this parameter without a leading zero. 8xxxxxxxxxx
         */
        from?: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients?: string[];
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
} | {
    type: 'sms';
    provider: '3gbilisim';
    /**
     * 3gBilisim configuration settings.
     */
    settings?: {
        /**
         * If provided, sms requests will be made to this endpoint
         */
        endpoint?: string;
        /**
         * Username provided by your 3GBilisim dealer.
         */
        username?: string;
        /**
         * Password provided by your 3GBilisim dealer.
         */
        password?: string;
        /**
         * Dealer-specific code provided by your 3GBilisim dealer.
         */
        company_code?: string;
        /**
         * It is the message header defined in the NetGSM (your sender name). If you want your subscriber number to be your message header, write your subscriber number to this parameter without a leading zero. 8xxxxxxxxxx
         */
        from?: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients?: string[];
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
}) | ({
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type: 'otp';
    provider: 'totp';
    settings?: {
        enabled_clients?: string[];
        hash_alg?: ('sha1' | 'sha256' | 'sha512');
        window?: number;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * Time to live of the OTP code in seconds.
         */
        ttl?: number;
    };
} | {
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type: 'otp';
    provider: 'hotp';
    settings?: {
        enabled_clients?: string[];
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        hash_alg?: ('sha1' | 'sha256' | 'sha512');
        window?: number;
        initial_counter?: number;
    };
}) | {
    type: 'fv';
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    provider: 'hitachi-h1';
    settings?: {
        enabled_clients?: string[];
        /**
         * Hitachi H1 seed
         */
        seed?: string;
    };
} | {
    provider?: 'plusauth';
    type: 'webauthn';
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings?: {
        enabled_clients?: string[];
    };
} | {
    provider: 'plusauth';
    type: 'e-sign';
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings?: {
        enabled_clients?: string[];
    };
});

/**
 * @public
 */
export declare type UpdateOTPConnection = ({
    type: 'otp';
    [k: string]: any;
} & ({
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type: 'otp';
    provider: 'totp';
    settings?: {
        enabled_clients?: string[];
        hash_alg?: ('sha1' | 'sha256' | 'sha512');
        window?: number;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * Time to live of the OTP code in seconds.
         */
        ttl?: number;
    };
} | {
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type: 'otp';
    provider: 'hotp';
    settings?: {
        enabled_clients?: string[];
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        hash_alg?: ('sha1' | 'sha256' | 'sha512');
        window?: number;
        initial_counter?: number;
    };
}));

/**
 * @public
 */
export declare type UpdateProvider = (({
    type: 'email';
    is_custom?: boolean;
    provider: 'aws_ses';
    settings?: {
        /**
         * `from` field for your emails
         */
        from?: string;
        /**
         * AWS SES access key id.
         */
        access_key_id?: string;
        /**
         * AWS SES secret access key.
         */
        secret_access_key?: string;
        /**
         * AWS SES region.
         */
        region?: string;
    };
} | {
    type: 'email';
    is_custom?: boolean;
    provider: 'postmark';
    /**
     * Postmark email service configuration settings.
     */
    settings?: {
        /**
         * `from` field for your emails
         */
        from?: string;
        /**
         * Postmark API Key
         */
        api_key?: string;
    };
} | {
    type: 'email';
    is_custom?: boolean;
    provider: 'sendgrid';
    /**
     * SendGrid email service configuration settings.
     */
    settings?: {
        /**
         * `from` field for your emails
         */
        from?: string;
        /**
         * SendGrid API Key
         */
        api_key?: string;
        /**
         * SendGrid API User
         */
        api_user?: (string | null);
    };
} | {
    type: 'email';
    is_custom?: boolean;
    provider: 'sparkpost';
    /**
     * SparkPost email service configuration settings.
     */
    settings?: {
        /**
         * `from` field for your emails
         */
        from?: string;
        /**
         * SparkPost API Key
         */
        api_key?: string;
        /**
         * SparkPost Endpoint
         */
        endpoint?: string;
        /**
         * SparkPost API Version
         */
        api_version?: string;
    };
} | {
    type: 'email';
    is_custom?: boolean;
    provider: 'smtp';
    /**
     * Your SMTP provider configuration settings.
     */
    settings?: {
        /**
         * `from` field for your emails
         */
        from?: string;
        /**
         * Hostname of your SMTP provider
         */
        host?: string;
        /**
         * Port of your SMTP provider
         */
        port?: number;
        /**
         * Username for SMTP authentication
         */
        username?: string;
        /**
         * Password for SMTP authentication
         */
        password?: string;
        secure?: boolean;
    };
}) | ({
    type: 'sms';
    is_custom?: boolean;
    provider: 'messagebird';
    /**
     * MessageBird configuration settings.
     */
    settings?: {
        /**
         * MessageBird API Key
         */
        api_key?: string;
        /**
         * MessageBird originator also known as Sender ID.
         */
        originator?: string;
    };
} | {
    type: 'sms';
    is_custom?: boolean;
    provider: 'twilio';
    /**
     * Twilio SMS service configuration settings.
     */
    settings?: {
        /**
         * Your Twilio auth token
         */
        auth_token?: string;
        /**
         * Your Twilio account sid.
         */
        sid?: string;
        strategy?: ('copilot' | 'from');
        /**
         * If strategy is `copilot` than this value needs to be your Twilio messaging service SID. Otherwise it is phone number for originating your messages.
         */
        from?: string;
    };
} | {
    type: 'sms';
    is_custom?: boolean;
    provider: 'vonage';
    /**
     * Vonage SMS service configuration settings.
     */
    settings?: {
        /**
         * Vonage API Key
         */
        api_key?: string;
        /**
         * Vonage API Secret
         */
        api_secret?: string;
        /**
         * Originating phone number
         */
        from?: string;
    };
} | {
    type: 'sms';
    is_custom?: boolean;
    provider: 'dataport';
    /**
     * DataPort configuration settings.
     */
    settings?: {
        /**
         * DataPort username
         */
        username?: string;
        /**
         * DataPort user credentials.
         */
        password?: string;
        /**
         * Account number used for token retrieval
         */
        account_id?: string;
        /**
         * Operator identifier
         */
        operator?: ('1' | '2' | '3' | '4');
        /**
         * Short code of operator used for sendind messages
         */
        short_number?: string;
        /**
         * Orginator value
         */
        from?: string;
    };
} | {
    type: 'sms';
    is_custom?: boolean;
    provider: 'custom';
    /**
     * Custom SMS provider configuration settings.
     */
    settings?: {
        /**
         * SMS provider's hook context
         */
        hook_context?: string;
    };
} | {
    type: 'sms';
    is_custom?: boolean;
    provider: 'netgsm';
    /**
     * NetGSM configuration settings.
     */
    settings?: {
        /**
         * Subscriber number obtained from Netgsm service. For ex: 850xxxxxxx, 312XXXXXXX
         */
        username?: string;
        /**
         * Sub-user password with defined API authorization.
         */
        password?: string;
        /**
         * If you are a dealer member, your dealer-specific code.
         */
        merchant_code?: string;
        /**
         * The ID information of the application published from your developer account.
         */
        app_key?: string;
        /**
         * It is the message header defined in the NetGSM (your sender name). If you want your subscriber number to be your message header, write your subscriber number to this parameter without a leading zero. 8xxxxxxxxxx
         */
        from?: string;
    };
} | {
    type: 'sms';
    is_custom?: boolean;
    provider: '3gbilisim';
    /**
     * 3gBilisim configuration settings.
     */
    settings?: {
        /**
         * If provided, sms requests will be made to this endpoint
         */
        endpoint?: string;
        /**
         * Username provided by your 3GBilisim dealer.
         */
        username?: string;
        /**
         * Password provided by your 3GBilisim dealer.
         */
        password?: string;
        /**
         * Dealer-specific code provided by your 3GBilisim dealer.
         */
        company_code?: string;
        /**
         * It is the message header defined in the NetGSM (your sender name). If you want your subscriber number to be your message header, write your subscriber number to this parameter without a leading zero. 8xxxxxxxxxx
         */
        from?: string;
    };
}) | ({
    type: 'push';
    is_custom?: boolean;
    provider: 'native';
    settings?: {
        /**
         * Firebase Cloud Messaging configuration settings.
         * To enable the FCM integration, you need to get your service account key from the [Firebase Console](https://console.firebase.google.com/).
         * - Select your project, and click the gear icon on the top of the sidebar.
         * - After opening "Project Settings", head to the "Service Accounts" tab.
         * - Click "Generate new private key", then confirm by clicking "Generate key".
         * - Clicking "Generate key" downloads the generated service account json file.
         */
        fcm?: {
            /**
             * `project_id` field located in your service account json
             */
            project_id?: string;
            /**
             * `client_email` field located in your service account json
             */
            client_email?: string;
            /**
             * `private_key` field located in your service account json
             */
            private_key?: string;
        };
        /**
         * Apple Push Notification Service configuration settings.
         */
        apns?: {
            /**
             * p8 of your Apple Developer account. To generate one follow these steps:
             * - Head over to Certificates, Identifiers & Profiles > Keys.
             * - Register a new key and give it a name.
             * - Enable the Apple Push Notifications service (APNs) checkbox by selecting it.
             * - Click the Continue button and on the next page, select Register.
             * - Download the .p8 key file.
             */
            key?: string;
            /**
             * This is a 10-character unique identifier for the authentication key. You can find it in the key details section of the newly created key in your Apple developer account.
             */
            key_id?: string;
            /**
             * This is available in your Apple developer account.
             */
            team_id?: string;
            /**
             * This is the ID of your app. You can find it in the app info section of your Apple developer account.
             */
            bundle_id?: string;
            production?: boolean;
        };
    };
} | {
    type: 'push';
    is_custom?: boolean;
    provider: 'expo';
    /**
     * To enable Expo Push integration,
     *         you need to create an [Expo Application Services (EAS)](https://expo.dev/) account and generate an access token in the EAS dashboard.
     */
    settings?: {
        /**
         * Your Expo account's access token
         */
        access_token?: string;
    };
} | {
    type: 'push';
    is_custom?: boolean;
    provider: 'one-signal';
    settings?: {
        /**
         * `OneSignal App ID` located in your [application's settings page](https://documentation.onesignal.com/docs/keys-and-ids)
         */
        app_id?: string;
        /**
         * `Rest API Key` located in your [application's settings page](https://documentation.onesignal.com/docs/keys-and-ids)
         */
        api_key?: string;
    };
}));

/**
 * @public
 */
export declare type UpdatePushConnection = ({
    type: 'push';
    [k: string]: any;
} & ({
    type: 'push';
    provider: 'native';
    settings?: {
        /**
         * Firebase Cloud Messaging configuration settings.
         * To enable the FCM integration, you need to get your service account key from the [Firebase Console](https://console.firebase.google.com/).
         * - Select your project, and click the gear icon on the top of the sidebar.
         * - After opening "Project Settings", head to the "Service Accounts" tab.
         * - Click "Generate new private key", then confirm by clicking "Generate key".
         * - Clicking "Generate key" downloads the generated service account json file.
         */
        fcm?: {
            /**
             * `project_id` field located in your service account json
             */
            project_id?: string;
            /**
             * `client_email` field located in your service account json
             */
            client_email?: string;
            /**
             * `private_key` field located in your service account json
             */
            private_key?: string;
        };
        /**
         * Apple Push Notification Service configuration settings.
         */
        apns?: {
            /**
             * p8 of your Apple Developer account. To generate one follow these steps:
             * - Head over to Certificates, Identifiers & Profiles > Keys.
             * - Register a new key and give it a name.
             * - Enable the Apple Push Notifications service (APNs) checkbox by selecting it.
             * - Click the Continue button and on the next page, select Register.
             * - Download the .p8 key file.
             */
            key?: string;
            /**
             * This is a 10-character unique identifier for the authentication key. You can find it in the key details section of the newly created key in your Apple developer account.
             */
            key_id?: string;
            /**
             * This is available in your Apple developer account.
             */
            team_id?: string;
            /**
             * This is the ID of your app. You can find it in the app info section of your Apple developer account.
             */
            bundle_id?: string;
            production?: boolean;
        };
        enabled_clients?: string[];
        /**
         * Push notification strategy
         */
        strategy?: ('code' | 'prompt');
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
} | {
    type: 'push';
    provider: 'expo';
    /**
     * To enable Expo Push integration,
     *         you need to create an [Expo Application Services (EAS)](https://expo.dev/) account and generate an access token in the EAS dashboard.
     */
    settings?: {
        /**
         * Your Expo account's access token
         */
        access_token?: string;
        enabled_clients?: string[];
        /**
         * Push notification strategy
         */
        strategy?: ('code' | 'prompt');
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
} | {
    type: 'push';
    provider: 'one-signal';
    settings?: {
        /**
         * `OneSignal App ID` located in your [application's settings page](https://documentation.onesignal.com/docs/keys-and-ids)
         */
        app_id?: string;
        /**
         * `Rest API Key` located in your [application's settings page](https://documentation.onesignal.com/docs/keys-and-ids)
         */
        api_key?: string;
        enabled_clients?: string[];
        /**
         * Push notification strategy
         */
        strategy?: ('code' | 'prompt');
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
}));

/**
 * @public
 */
export declare type UpdatePushNotificationProvider = ({
    type: 'push';
    [k: string]: any;
} & ({
    type: 'push';
    is_custom?: boolean;
    provider: 'native';
    settings?: {
        /**
         * Firebase Cloud Messaging configuration settings.
         * To enable the FCM integration, you need to get your service account key from the [Firebase Console](https://console.firebase.google.com/).
         * - Select your project, and click the gear icon on the top of the sidebar.
         * - After opening "Project Settings", head to the "Service Accounts" tab.
         * - Click "Generate new private key", then confirm by clicking "Generate key".
         * - Clicking "Generate key" downloads the generated service account json file.
         */
        fcm?: {
            /**
             * `project_id` field located in your service account json
             */
            project_id?: string;
            /**
             * `client_email` field located in your service account json
             */
            client_email?: string;
            /**
             * `private_key` field located in your service account json
             */
            private_key?: string;
        };
        /**
         * Apple Push Notification Service configuration settings.
         */
        apns?: {
            /**
             * p8 of your Apple Developer account. To generate one follow these steps:
             * - Head over to Certificates, Identifiers & Profiles > Keys.
             * - Register a new key and give it a name.
             * - Enable the Apple Push Notifications service (APNs) checkbox by selecting it.
             * - Click the Continue button and on the next page, select Register.
             * - Download the .p8 key file.
             */
            key?: string;
            /**
             * This is a 10-character unique identifier for the authentication key. You can find it in the key details section of the newly created key in your Apple developer account.
             */
            key_id?: string;
            /**
             * This is available in your Apple developer account.
             */
            team_id?: string;
            /**
             * This is the ID of your app. You can find it in the app info section of your Apple developer account.
             */
            bundle_id?: string;
            production?: boolean;
        };
    };
} | {
    type: 'push';
    is_custom?: boolean;
    provider: 'expo';
    /**
     * To enable Expo Push integration,
     *         you need to create an [Expo Application Services (EAS)](https://expo.dev/) account and generate an access token in the EAS dashboard.
     */
    settings?: {
        /**
         * Your Expo account's access token
         */
        access_token?: string;
    };
} | {
    type: 'push';
    is_custom?: boolean;
    provider: 'one-signal';
    settings?: {
        /**
         * `OneSignal App ID` located in your [application's settings page](https://documentation.onesignal.com/docs/keys-and-ids)
         */
        app_id?: string;
        /**
         * `Rest API Key` located in your [application's settings page](https://documentation.onesignal.com/docs/keys-and-ids)
         */
        api_key?: string;
    };
}));

/**
 * @public
 */
export declare interface UpdateResource {
    /**
     * Unique identifier of entity
     */
    id?: string;
    /**
     * Display name for the Resource.
     */
    name?: string;
    /**
     * Additional identifier to be stored with Resource.
     */
    description?: string;
    settings?: {
        access_token_ttl?: number;
    };
}

/**
 * @public
 */
export declare interface UpdateRole {
    /**
     * A name defining your role
     */
    name?: string;
    /**
     * Additional information for the role
     */
    description?: (string | null);
    /**
     * If `true` this role will be assigned to new users automatically.
     */
    assign_on_signup?: boolean;
}

/**
 * @public
 */
export declare interface UpdateRoleGroup {
    /**
     * A name defining your role group
     */
    name?: string;
    /**
     * Additional information for the role group
     */
    description?: (string | null);
    /**
     * If `true` this role group will be assigned to new users automatically.
     */
    assign_on_signup?: boolean;
}

/**
 * @public
 */
export declare interface UpdateSAMLConnection {
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type: 'enterprise';
    provider: 'saml';
    settings?: {
        enabled_clients?: string[];
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
            [k: string]: any;
        };
        /**
         * Your SAML IDP's metadata URL.
         */
        metadata_url?: string;
        /**
         * Your SAML IdP's entity_id
         */
        entity_id?: string;
        /**
         * Your SAML IdP's login URL in format `<http/s>://<host>:<port?>`
         */
        sign_in_url?: string;
        /**
         * If enabled, when user logs out from PlusAuth a SAML logout request will be sent to SAML IdP.
         */
        sign_out_enabled?: boolean;
        /**
         * Your SAML IdP's sign out URL in format `<http/s>://<host>:<port?>`
         */
        sign_out_url?: (string | null);
        signing_certificate?: (string | null);
        /**
         * Enable/Disable the SAML authentication request signing.
         */
        sign_request?: boolean;
        sign_request_algorithm?: ('sha512' | 'sha256' | 'sha1');
        /**
         * SAML Request Binding
         */
        request_binding?: ('HTTP-POST' | 'HTTP-Redirect');
        mappings?: {
            /**
             * @minItems 1
             *
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             */
            [k: string]: (string | [
            (string | {
                value?: (string | boolean | number);
                [k: string]: any;
            }),
            ...((string | {
                value?: (string | boolean | number);
                [k: string]: any;
            }))[]
            ] | {
                value?: (string | boolean | number);
                [k: string]: any;
            } | boolean);
        };
    };
}

/**
 * @public
 */
export declare type UpdateSmsConnection = ({
    type: 'sms';
    [k: string]: any;
} & ({
    type: 'sms';
    provider: 'messagebird';
    /**
     * MessageBird configuration settings.
     */
    settings?: {
        /**
         * MessageBird API Key
         */
        api_key?: string;
        /**
         * MessageBird originator also known as Sender ID.
         */
        originator?: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients?: string[];
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
} | {
    type: 'sms';
    provider: 'twilio';
    /**
     * Twilio SMS service configuration settings.
     */
    settings?: {
        /**
         * Your Twilio auth token
         */
        auth_token?: string;
        /**
         * Your Twilio account sid.
         */
        sid?: string;
        strategy?: ('copilot' | 'from');
        /**
         * If strategy is `copilot` than this value needs to be your Twilio messaging service SID. Otherwise it is phone number for originating your messages.
         */
        from?: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients?: string[];
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
} | {
    type: 'sms';
    provider: 'vonage';
    /**
     * Vonage SMS service configuration settings.
     */
    settings?: {
        /**
         * Vonage API Key
         */
        api_key?: string;
        /**
         * Vonage API Secret
         */
        api_secret?: string;
        /**
         * Originating phone number
         */
        from?: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients?: string[];
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
} | {
    type: 'sms';
    provider: 'dataport';
    /**
     * DataPort configuration settings.
     */
    settings?: {
        /**
         * DataPort username
         */
        username?: string;
        /**
         * DataPort user credentials.
         */
        password?: string;
        /**
         * Account number used for token retrieval
         */
        account_id?: string;
        /**
         * Operator identifier
         */
        operator?: ('1' | '2' | '3' | '4');
        /**
         * Short code of operator used for sendind messages
         */
        short_number?: string;
        /**
         * Orginator value
         */
        from?: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients?: string[];
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
} | {
    type: 'sms';
    provider: 'custom';
    /**
     * Custom SMS provider configuration settings.
     */
    settings?: {
        /**
         * SMS provider's hook context
         */
        hook_context?: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients?: string[];
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
} | {
    type: 'sms';
    provider: 'netgsm';
    /**
     * NetGSM configuration settings.
     */
    settings?: {
        /**
         * Subscriber number obtained from Netgsm service. For ex: 850xxxxxxx, 312XXXXXXX
         */
        username?: string;
        /**
         * Sub-user password with defined API authorization.
         */
        password?: string;
        /**
         * If you are a dealer member, your dealer-specific code.
         */
        merchant_code?: string;
        /**
         * The ID information of the application published from your developer account.
         */
        app_key?: string;
        /**
         * It is the message header defined in the NetGSM (your sender name). If you want your subscriber number to be your message header, write your subscriber number to this parameter without a leading zero. 8xxxxxxxxxx
         */
        from?: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients?: string[];
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
} | {
    type: 'sms';
    provider: '3gbilisim';
    /**
     * 3gBilisim configuration settings.
     */
    settings?: {
        /**
         * If provided, sms requests will be made to this endpoint
         */
        endpoint?: string;
        /**
         * Username provided by your 3GBilisim dealer.
         */
        username?: string;
        /**
         * Password provided by your 3GBilisim dealer.
         */
        password?: string;
        /**
         * Dealer-specific code provided by your 3GBilisim dealer.
         */
        company_code?: string;
        /**
         * It is the message header defined in the NetGSM (your sender name). If you want your subscriber number to be your message header, write your subscriber number to this parameter without a leading zero. 8xxxxxxxxxx
         */
        from?: string;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        enabled_clients?: string[];
    };
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
}));

/**
 * @public
 */
export declare type UpdateSmsProvider = ({
    type: 'sms';
    [k: string]: any;
} & ({
    type: 'sms';
    is_custom?: boolean;
    provider: 'messagebird';
    /**
     * MessageBird configuration settings.
     */
    settings?: {
        /**
         * MessageBird API Key
         */
        api_key?: string;
        /**
         * MessageBird originator also known as Sender ID.
         */
        originator?: string;
    };
} | {
    type: 'sms';
    is_custom?: boolean;
    provider: 'twilio';
    /**
     * Twilio SMS service configuration settings.
     */
    settings?: {
        /**
         * Your Twilio auth token
         */
        auth_token?: string;
        /**
         * Your Twilio account sid.
         */
        sid?: string;
        strategy?: ('copilot' | 'from');
        /**
         * If strategy is `copilot` than this value needs to be your Twilio messaging service SID. Otherwise it is phone number for originating your messages.
         */
        from?: string;
    };
} | {
    type: 'sms';
    is_custom?: boolean;
    provider: 'vonage';
    /**
     * Vonage SMS service configuration settings.
     */
    settings?: {
        /**
         * Vonage API Key
         */
        api_key?: string;
        /**
         * Vonage API Secret
         */
        api_secret?: string;
        /**
         * Originating phone number
         */
        from?: string;
    };
} | {
    type: 'sms';
    is_custom?: boolean;
    provider: 'dataport';
    /**
     * DataPort configuration settings.
     */
    settings?: {
        /**
         * DataPort username
         */
        username?: string;
        /**
         * DataPort user credentials.
         */
        password?: string;
        /**
         * Account number used for token retrieval
         */
        account_id?: string;
        /**
         * Operator identifier
         */
        operator?: ('1' | '2' | '3' | '4');
        /**
         * Short code of operator used for sendind messages
         */
        short_number?: string;
        /**
         * Orginator value
         */
        from?: string;
    };
} | {
    type: 'sms';
    is_custom?: boolean;
    provider: 'custom';
    /**
     * Custom SMS provider configuration settings.
     */
    settings?: {
        /**
         * SMS provider's hook context
         */
        hook_context?: string;
    };
} | {
    type: 'sms';
    is_custom?: boolean;
    provider: 'netgsm';
    /**
     * NetGSM configuration settings.
     */
    settings?: {
        /**
         * Subscriber number obtained from Netgsm service. For ex: 850xxxxxxx, 312XXXXXXX
         */
        username?: string;
        /**
         * Sub-user password with defined API authorization.
         */
        password?: string;
        /**
         * If you are a dealer member, your dealer-specific code.
         */
        merchant_code?: string;
        /**
         * The ID information of the application published from your developer account.
         */
        app_key?: string;
        /**
         * It is the message header defined in the NetGSM (your sender name). If you want your subscriber number to be your message header, write your subscriber number to this parameter without a leading zero. 8xxxxxxxxxx
         */
        from?: string;
    };
} | {
    type: 'sms';
    is_custom?: boolean;
    provider: '3gbilisim';
    /**
     * 3gBilisim configuration settings.
     */
    settings?: {
        /**
         * If provided, sms requests will be made to this endpoint
         */
        endpoint?: string;
        /**
         * Username provided by your 3GBilisim dealer.
         */
        username?: string;
        /**
         * Password provided by your 3GBilisim dealer.
         */
        password?: string;
        /**
         * Dealer-specific code provided by your 3GBilisim dealer.
         */
        company_code?: string;
        /**
         * It is the message header defined in the NetGSM (your sender name). If you want your subscriber number to be your message header, write your subscriber number to this parameter without a leading zero. 8xxxxxxxxxx
         */
        from?: string;
    };
}));

/**
 * @public
 */
export declare type UpdateSocialConnection = ({
    type: 'social';
    [k: string]: any;
} & ({
    type?: 'social';
    provider: 'apple';
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings?: {
        enabled_clients?: string[];
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
            [k: string]: any;
        };
        client_id?: string;
        key_id?: string;
        team_id?: string;
        scopes?: string[];
    };
    is_default?: boolean;
} | {
    type?: 'social';
    provider: 'e-devlet';
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings?: {
        enabled_clients?: string[];
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
            [k: string]: any;
        };
        client_id?: string;
        client_secret?: string;
        is_test?: boolean;
        scopes?: string[];
    };
    is_default?: boolean;
} | {
    type?: 'social';
    provider: ('amazon' | 'dribbble' | 'facebook' | 'github' | 'google' | 'linkedin' | 'microsoft' | 'slack' | 'spotify');
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings?: {
        enabled_clients?: string[];
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
            [k: string]: any;
        };
        client_id?: string;
        client_secret?: string;
        scopes?: string[];
    };
    is_default?: boolean;
} | {
    type?: 'social';
    provider: 'custom-oauth2';
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings?: {
        enabled_clients?: string[];
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
            [k: string]: any;
        };
        extra_params?: {
            [k: string]: string;
        };
        extra_headers?: {
            [k: string]: string;
        };
        client_id?: string;
        client_secret?: string;
        authorization_url?: string;
        token_url?: string;
        scopes?: string[];
    };
    is_default?: boolean;
} | {
    type?: 'social';
    provider: 'dropbox';
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings?: {
        enabled_clients?: string[];
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
            [k: string]: any;
        };
        app_key?: string;
        app_secret?: string;
        scopes?: string[];
    };
    is_default?: boolean;
} | {
    type?: 'social';
    provider: 'twitter';
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings?: {
        enabled_clients?: string[];
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
            [k: string]: any;
        };
        consumer_key?: string;
        consumer_secret?: string;
    };
    is_default?: boolean;
}));

/**
 * @public
 */
export declare type UpdateTemplate = ({
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    content?: string;
    is_default?: (boolean | null);
    type: 'email';
    name?: ('welcome' | 'verification-code' | 'magic-link' | 'verify-email' | 'reset-password' | 'invite-admin' | 'payment-failed' | 'plan-downgraded' | 'blocked-account' | 'blocked-ip' | 'test');
    details?: {
        /**
         * `from` field for your emails
         */
        from?: string;
        /**
         * `subject` field for your emails.
         */
        subject?: string;
    };
} | {
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    content?: string;
    is_default?: (boolean | null);
    type: 'sms';
    name?: ('verification-code' | 'test');
});

/**
 * @public
 */
export declare interface UpdateTenantSettings {
    default_strategy?: (string | null);
    auto_sign_in?: boolean;
    register_enabled?: boolean;
    forgot_password_enabled?: boolean;
    environment_variables?: {
        [k: string]: string;
    };
    expose_unsafe_errors?: boolean;
    welcome_emails_enabled?: boolean;
    force_email_verification?: boolean;
    extra_params?: string[];
    acr_values?: string[];
    extra_scopes?: string[];
    api_version?: ('2021-07-04' | null);
    tenant_login_url?: (string | null);
    /**
     * PlusAuth Authenticator Application related settings
     */
    authenticator?: {
        /**
         * Should authenticator application logout if a SIM card change detected on device
         */
        bind_sim?: boolean;
        [k: string]: any;
    };
    ciba?: {
        delivery_mode?: ('ping' | 'poll');
        notifier_endpoint?: string;
    };
    /**
     * Lifetime settings of generated tokens defined in seconds.
     */
    ttl?: {
        access_token?: number;
        authorization_code?: number;
        backchannel_authentication_request?: number;
        client_credentials?: number;
        device_code?: number;
        id_token?: number;
        refresh_token?: number;
        session?: number;
    };
    hash_function?: ('bcrypt' | 'argon2' | 'pbkdf2');
    policies?: {
        /**
         * Password policy settings to be enforced to your new users.
         */
        password?: {
            /**
             * Minimum number of characters
             */
            min?: (number | null);
            /**
             * Maximum number of characters
             */
            max?: (number | null);
            /**
             * Require at least on of the given characters
             */
            custom_chars?: (string | null);
            /**
             * The system will maintain a password history for each user and prevent the reuse of passwords included in the history. The password history can be up to 10 in size. When provided, the system will maintain existing and new users' password history going forward.
             */
            history?: (number | null);
            /**
             * Require at least given value of uppercase letters
             */
            upper_case?: (number | null);
            /**
             * Require at least given value of lowercase letters
             */
            lower_case?: (number | null);
            /**
             * Require at least given value of numbers
             */
            number?: (number | null);
        };
        account_blocking?: {
            enabled?: boolean;
            /**
             * Send an email to user's email address about the activity.
             */
            notification?: boolean;
            /**
             * Reset failed attempts count after successful login.
             */
            reset_after_success?: boolean;
            /**
             * If `true`, users will be able to unblock their accounts by the link received in notification email.
             */
            allow_user_unblock?: boolean;
            /**
             * Maximum failed login attempts to block user for specified duration.
             */
            allowed_attempts?: number;
            /**
             * Number of seconds to block the account.
             */
            block_duration?: number;
            /**
             * Number of seconds before attempts are reset
             */
            duration?: number;
        };
        brute_force?: {
            enabled?: boolean;
            /**
             * Allowed consecutive login attempts
             */
            allowed_attempts?: number;
            /**
             * Number of seconds before attempts are reset
             */
            duration?: number;
            /**
             * Number of seconds to block the IP.
             */
            block_duration?: number;
            /**
             * Send an email to user's email address about the activity.
             */
            notification?: boolean;
            /**
             * Whitelisted IP addresses.
             */
            white_list?: string[];
        };
    };
}

/**
 * @public
 */
export declare interface UpdateTicket {
    user_id?: string;
    email?: string;
    client_id?: string;
    /**
     * Ticket's validity in seconds. After specified time passed ticket will be expired.
     */
    ttl?: number;
    details?: {
        [k: string]: string;
    };
    used?: boolean;
}

/**
 * @public
 */
export declare interface UpdateUser {
    /**
     * End-User's username
     */
    username?: (string | null);
    /**
     * End-User's e-mail address.
     */
    email?: (string | null);
    /**
     * `true` if the End-User's e-mail address has been verified; otherwise `false`. If `force_email_verification` is enabled in your tenant's settings, it will check this value of user while performing email verification checks.
     */
    email_verified?: (boolean | null);
    /**
     * End-User's preferred phone number. It will be stored in [E.164](https://en.wikipedia.org/wiki/E.164) format.
     */
    phone_number?: (string | null);
    /**
     * `true` if the End-User's phone number has been verified; otherwise `false`. If SMS MFA is enabled this value will be used to determine whether End-User has verified it's phone or not.
     */
    phone_number_verified?: (boolean | null);
    /**
     * End-User's full name in displayable form including all name parts, possibly including titles and suffixes, ordered according to the End-User's locale and preferences.
     */
    name?: (string | null);
    /**
     * URI reference of the End-User's profile picture.
     */
    picture?: (string | null);
    /**
     * Whether this End-User is blocked or not. If `true` End-User will not be able to login.
     */
    blocked?: (boolean | null);
    /**
     * Failed login attempts of user. It will reset to `0` after successful login.
     */
    login_attempts?: number;
    profile?: {
        /**
         * Given name(s) or first name(s) of the End-User. Note that in some cultures, people can have multiple given names; all can be present, with the names being separated by space characters.
         */
        given_name?: (string | null);
        /**
         * Middle name(s) of the End-User. Note that in some cultures, people can have multiple middle names; all can be present, with the names being separated by space characters. Also note that in some cultures, middle names are not used.
         */
        middle_name?: (string | null);
        /**
         * Surname(s) or last name(s) of the End-User. Note that in some cultures, people can have multiple family names or no family name; all can be present, with the names being separated by space characters.
         */
        family_name?: (string | null);
        /**
         * Casual name of the End-User that may or may not be the same as the given_name. For instance, a nickname value of Mike might be returned alongside a given_name value of Michael.
         */
        nickname?: (string | null);
        /**
         * URI reference for the End-User's profile page.
         */
        profile_page?: (string | null);
        /**
         * URI reference for the End-User's Web page or blog.
         */
        website?: (string | null);
        /**
         * Short code of End-User's gender.
         */
        gender?: (string | number | null);
        /**
         * End-User's birthday. ISO 8601:2004 YYYY-MM-DD format. The year may be 0000, indicating that it is omitted. To represent only the year, YYYY format is preferred.
         */
        birthdate?: (string | null);
        /**
         * End-User's locale. For example, en-US or fr-CA.
         */
        locale?: (string | null);
        /**
         * String from zoneinfo time zone database representing the End-User's time zone. For example, Europe/Paris or America/Los_Angeles.
         */
        zoneinfo?: (string | null);
        addresses?: ({
            /**
             * Identifier for user address. Example: `Delivery Address`, `Billing Address` etc.
             */
            id?: (string | null);
            is_primary?: (boolean | null);
            first_name?: (string | null);
            last_name?: (string | null);
            /**
             * State, province, prefecture or region component.
             */
            state?: (string | null);
            /**
             * Country name component.
             */
            country?: (string | null);
            /**
             * City or locality component.
             */
            city?: (string | null);
            /**
             * Full street address component, which MAY include house number, street name, Post Office Box, and multi-line extended street address information. This field may contain multiple lines, separated by newline characters.
             */
            street_address?: (string | null);
            /**
             * Full street address component, which MAY include house number, street name, Post Office Box, and multi-line extended street address information. This field may contain multiple lines, separated by newline characters.
             */
            street_address_2?: (string | null);
            /**
             * Zip code or postal code component.
             */
            zip_code?: (string | null);
        }[] | null);
    };
    /**
     * Additional metadata for your End-User. It must be an object containing **10** fields at max with keys and values no more than 1024 characters. Values can be only one of the types `string`, `number` and `boolean`. You can also use `"null"` as value to make metadata consistent across other users.
     */
    metadata?: {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^(.*)$".
         */
        [k: string]: (string | boolean | number | null);
    };
    verify_email?: (boolean | null);
    /**
     * End-User's password in plaintext. Defined password policy rules will be enforced.
     */
    password?: (string | null);
    /**
     * [Salt](https://wikipedia.org/wiki/Salt_(cryptography)) value used in computing hash of password.
     */
    salt?: (string | null);
    /**
     * Used password hash function identifier.
     */
    hash_fn?: (('bcrypt' | 'argon2' | 'pbkdf2') | null);
}

/**
 * @public
 */
export declare interface UpdateWebAuthNConnection {
    provider?: 'plusauth';
    type: 'webauthn';
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings?: {
        enabled_clients?: string[];
    };
}

/**
 * @public
 */
export declare interface User {
    credentials: ({
        /**
         * Authenticator id
         */
        id: string;
        type: ('e-sign' | 'sms' | 'email' | 'custom');
        /**
         * Connection name
         */
        connection?: (string | null);
        /**
         * Raw user object from the connection
         */
        details: {
            [k: string]: any;
        };
        /**
         * Creation date in the ISO 8601 format according to universal time.
         */
        created_at: string;
        /**
         * Update date in the ISO 8601 format according to universal time.
         */
        updated_at?: (string | null);
    } | {
        /**
         * Authenticator id
         */
        id: string;
        type: 'password';
        /**
         * Connection name
         */
        connection?: (string | null);
        details: {
            /**
             * Hashed value of user's password.
             */
            hash: string;
            hash_fn: ('bcrypt' | 'argon2' | 'pbkdf2');
            /**
             * [Salt](https://wikipedia.org/wiki/Salt_(cryptography)) value used in computing hash of password.
             */
            salt: string;
        };
        /**
         * Creation date in the ISO 8601 format according to universal time.
         */
        created_at: string;
        /**
         * Update date in the ISO 8601 format according to universal time.
         */
        updated_at?: (string | null);
    } | {
        /**
         * Authenticator id
         */
        id: string;
        type: 'push';
        /**
         * Connection name
         */
        connection?: (string | null);
        details: {
            device: {
                type?: string;
                vendor?: string;
                model?: string;
            };
            os: {
                name?: string;
                version?: string;
            };
            ua: string;
            device_identifier: string;
            credentials: {
                private_key: {
                    [k: string]: any;
                };
                /**
                 * Public JWK. You can look at JWK specification from [here](https://www.rfc-editor.org/rfc/rfc7517)
                 */
                public_key: {
                    kty: string;
                    e: string;
                    key_ops?: ('sign' | 'verify' | 'encrypt' | 'decrypt' | 'wrapKey' | 'unwrapKey' | 'deriveKey' | 'deriveBits')[];
                    n: string;
                    use: string;
                    alg: string;
                    kid: string;
                    x5u?: string;
                    x5c?: string[];
                    x5t?: string;
                    'x5t#S256'?: string;
                    [k: string]: any;
                };
                service: string;
                device_token: string;
            };
            /**
             * Secret for recovering user's OTP credential
             */
            secret: string;
        };
        /**
         * Creation date in the ISO 8601 format according to universal time.
         */
        created_at: string;
        /**
         * Update date in the ISO 8601 format according to universal time.
         */
        updated_at?: (string | null);
    } | {
        /**
         * Authenticator id
         */
        id: string;
        type: 'otp';
        /**
         * Connection name
         */
        connection?: (string | null);
        details: {
            /**
             * Secret for recovering user's OTP credential
             */
            secret: string;
        };
        /**
         * Creation date in the ISO 8601 format according to universal time.
         */
        created_at: string;
        /**
         * Update date in the ISO 8601 format according to universal time.
         */
        updated_at?: (string | null);
    } | {
        /**
         * Authenticator id
         */
        id: string;
        type: 'fv';
        /**
         * Connection name
         */
        connection?: (string | null);
        details: {
            hash?: string;
            templates: {
                [k: string]: any;
            };
        };
        /**
         * Creation date in the ISO 8601 format according to universal time.
         */
        created_at: string;
        /**
         * Update date in the ISO 8601 format according to universal time.
         */
        updated_at?: (string | null);
    } | {
        /**
         * Authenticator id
         */
        id: string;
        type: 'webauthn';
        /**
         * Connection name
         */
        connection?: (string | null);
        details: {
            credentialID: string;
            credentialPublicKey: {
                /**
                 * This interface was referenced by `undefined`'s JSON-Schema definition
                 * via the `patternProperty` "^(0|[1-9][0-9]*)$".
                 */
                [k: string]: number;
            };
            counter: number;
            transports?: ('ble' | 'cable' | 'hybrid' | 'internal' | 'nfc' | 'smart-card' | 'usb')[];
        };
        /**
         * Creation date in the ISO 8601 format according to universal time.
         */
        created_at: string;
        /**
         * Update date in the ISO 8601 format according to universal time.
         */
        updated_at?: (string | null);
    })[];
    identities: {
        /**
         * External user's id coming from the connection.
         */
        id: string;
        /**
         * Creation date in the ISO 8601 format according to universal time.
         */
        created_at?: string;
        /**
         * Update date in the ISO 8601 format according to universal time.
         */
        updated_at?: (string | null);
        /**
         * Connection name
         */
        connection: string;
        /**
         * PlusAuth user's id
         */
        user_id: string;
        type: ('sms' | 'otp' | 'push' | 'email' | 'social' | 'enterprise');
        provider: ('twilio' | 'vonage' | 'netgsm' | '3gbilisim' | 'dataport' | 'messagebird' | 'custom' | 'hotp' | 'totp' | 'native' | 'expo' | 'one-signal' | 'aws_ses' | 'postmark' | 'sendgrid' | 'sparkpost' | 'smtp' | 'custom-oauth2' | 'amazon' | 'apple' | 'e-devlet' | 'dribbble' | 'dropbox' | 'facebook' | 'github' | 'google' | 'linkedin' | 'microsoft' | 'slack' | 'spotify' | 'twitter' | 'saml' | 'ldap');
        /**
         * Raw user object from the connection
         */
        details: {
            [k: string]: any;
        };
    }[];
    id: string;
    /**
     * End-User's username
     */
    username?: (string | null);
    /**
     * End-User's e-mail address.
     */
    email?: (string | null);
    /**
     * `true` if the End-User's e-mail address has been verified; otherwise `false`. If `force_email_verification` is enabled in your tenant's settings, it will check this value of user while performing email verification checks.
     */
    email_verified?: (boolean | null);
    /**
     * End-User's preferred phone number. It will be stored in [E.164](https://en.wikipedia.org/wiki/E.164) format.
     */
    phone_number?: (string | null);
    /**
     * `true` if the End-User's phone number has been verified; otherwise `false`. If SMS MFA is enabled this value will be used to determine whether End-User has verified it's phone or not.
     */
    phone_number_verified?: (boolean | null);
    /**
     * End-User's full name in displayable form including all name parts, possibly including titles and suffixes, ordered according to the End-User's locale and preferences.
     */
    name?: (string | null);
    /**
     * URI reference of the End-User's profile picture.
     */
    picture?: (string | null);
    /**
     * Whether this End-User is blocked or not. If `true` End-User will not be able to login.
     */
    blocked?: (boolean | null);
    /**
     * Failed login attempts of user. It will reset to `0` after successful login.
     */
    login_attempts?: number;
    last_ip: (string | null);
    /**
     * User's last login datetime in the ISO 8601 format according to universal time
     */
    last_login?: (string | null);
    profile?: {
        /**
         * Given name(s) or first name(s) of the End-User. Note that in some cultures, people can have multiple given names; all can be present, with the names being separated by space characters.
         */
        given_name?: (string | null);
        /**
         * Middle name(s) of the End-User. Note that in some cultures, people can have multiple middle names; all can be present, with the names being separated by space characters. Also note that in some cultures, middle names are not used.
         */
        middle_name?: (string | null);
        /**
         * Surname(s) or last name(s) of the End-User. Note that in some cultures, people can have multiple family names or no family name; all can be present, with the names being separated by space characters.
         */
        family_name?: (string | null);
        /**
         * Casual name of the End-User that may or may not be the same as the given_name. For instance, a nickname value of Mike might be returned alongside a given_name value of Michael.
         */
        nickname?: (string | null);
        /**
         * URI reference for the End-User's profile page.
         */
        profile_page?: (string | null);
        /**
         * URI reference for the End-User's Web page or blog.
         */
        website?: (string | null);
        /**
         * Short code of End-User's gender.
         */
        gender?: (string | number | null);
        /**
         * End-User's birthday. ISO 8601:2004 YYYY-MM-DD format. The year may be 0000, indicating that it is omitted. To represent only the year, YYYY format is preferred.
         */
        birthdate?: (string | null);
        /**
         * End-User's locale. For example, en-US or fr-CA.
         */
        locale?: (string | null);
        /**
         * String from zoneinfo time zone database representing the End-User's time zone. For example, Europe/Paris or America/Los_Angeles.
         */
        zoneinfo?: (string | null);
        addresses?: ({
            /**
             * Identifier for user address. Example: `Delivery Address`, `Billing Address` etc.
             */
            id?: (string | null);
            is_primary?: (boolean | null);
            first_name?: (string | null);
            last_name?: (string | null);
            /**
             * State, province, prefecture or region component.
             */
            state?: (string | null);
            /**
             * Country name component.
             */
            country?: (string | null);
            /**
             * City or locality component.
             */
            city?: (string | null);
            /**
             * Full street address component, which MAY include house number, street name, Post Office Box, and multi-line extended street address information. This field may contain multiple lines, separated by newline characters.
             */
            street_address?: (string | null);
            /**
             * Full street address component, which MAY include house number, street name, Post Office Box, and multi-line extended street address information. This field may contain multiple lines, separated by newline characters.
             */
            street_address_2?: (string | null);
            /**
             * Zip code or postal code component.
             */
            zip_code?: (string | null);
        }[] | null);
    };
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at: (string | null);
    /**
     * Additional metadata for your End-User. It must be an object containing **10** fields at max with keys and values no more than 1024 characters. Values can be only one of the types `string`, `number` and `boolean`. You can also use `"null"` as value to make metadata consistent across other users.
     */
    metadata?: {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^(.*)$".
         */
        [k: string]: (string | boolean | number | null);
    };
}

/**
 * @public
 */
export declare type UserCredential = ({
    /**
     * Authenticator id
     */
    id: string;
    type: ('e-sign' | 'sms' | 'email' | 'custom');
    /**
     * Connection name
     */
    connection?: (string | null);
    /**
     * Raw user object from the connection
     */
    details: {
        [k: string]: any;
    };
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
} | {
    /**
     * Authenticator id
     */
    id: string;
    type: 'password';
    /**
     * Connection name
     */
    connection?: (string | null);
    details: {
        /**
         * Hashed value of user's password.
         */
        hash: string;
        hash_fn: ('bcrypt' | 'argon2' | 'pbkdf2');
        /**
         * [Salt](https://wikipedia.org/wiki/Salt_(cryptography)) value used in computing hash of password.
         */
        salt: string;
    };
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
} | {
    /**
     * Authenticator id
     */
    id: string;
    type: 'push';
    /**
     * Connection name
     */
    connection?: (string | null);
    details: {
        device: {
            type?: string;
            vendor?: string;
            model?: string;
        };
        os: {
            name?: string;
            version?: string;
        };
        ua: string;
        device_identifier: string;
        credentials: {
            private_key: {
                [k: string]: any;
            };
            /**
             * Public JWK. You can look at JWK specification from [here](https://www.rfc-editor.org/rfc/rfc7517)
             */
            public_key: {
                kty: string;
                e: string;
                key_ops?: ('sign' | 'verify' | 'encrypt' | 'decrypt' | 'wrapKey' | 'unwrapKey' | 'deriveKey' | 'deriveBits')[];
                n: string;
                use: string;
                alg: string;
                kid: string;
                x5u?: string;
                x5c?: string[];
                x5t?: string;
                'x5t#S256'?: string;
                [k: string]: any;
            };
            service: string;
            device_token: string;
        };
        /**
         * Secret for recovering user's OTP credential
         */
        secret: string;
    };
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
} | {
    /**
     * Authenticator id
     */
    id: string;
    type: 'otp';
    /**
     * Connection name
     */
    connection?: (string | null);
    details: {
        /**
         * Secret for recovering user's OTP credential
         */
        secret: string;
    };
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
} | {
    /**
     * Authenticator id
     */
    id: string;
    type: 'fv';
    /**
     * Connection name
     */
    connection?: (string | null);
    details: {
        hash?: string;
        templates: {
            [k: string]: any;
        };
    };
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
} | {
    /**
     * Authenticator id
     */
    id: string;
    type: 'webauthn';
    /**
     * Connection name
     */
    connection?: (string | null);
    details: {
        credentialID: string;
        credentialPublicKey: {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(0|[1-9][0-9]*)$".
             */
            [k: string]: number;
        };
        counter: number;
        transports?: ('ble' | 'cable' | 'hybrid' | 'internal' | 'nfc' | 'smart-card' | 'usb')[];
    };
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
});

/**
 * @public
 */
export declare interface UserIdentity {
    /**
     * External user's id coming from the connection.
     */
    id: string;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Connection name
     */
    connection: string;
    /**
     * PlusAuth user's id
     */
    user_id: string;
    type: ('sms' | 'otp' | 'push' | 'email' | 'social' | 'enterprise');
    provider: ('twilio' | 'vonage' | 'netgsm' | '3gbilisim' | 'dataport' | 'messagebird' | 'custom' | 'hotp' | 'totp' | 'native' | 'expo' | 'one-signal' | 'aws_ses' | 'postmark' | 'sendgrid' | 'sparkpost' | 'smtp' | 'custom-oauth2' | 'amazon' | 'apple' | 'e-devlet' | 'dribbble' | 'dropbox' | 'facebook' | 'github' | 'google' | 'linkedin' | 'microsoft' | 'slack' | 'spotify' | 'twitter' | 'saml' | 'ldap');
    /**
     * Raw user object from the connection
     */
    details: {
        [k: string]: any;
    };
}

/**
 * @public
 */
export declare interface UserPasswordHistory {
    /**
     * Unique identifier of entity
     */
    id: string;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at: string;
    hash: string;
    hash_fn: ('bcrypt' | 'argon2' | 'pbkdf2');
    salt?: string;
    [k: string]: any;
}

/**
 * @public
 */
export declare interface UserRbacTree {
    role_groups: {
        /**
         * Unique identifier of entity
         */
        id: string;
        /**
         * A name defining your role group
         */
        name: string;
        /**
         * Additional information for the role group
         */
        description?: (string | null);
        /**
         * If `true` this role group will be assigned to new users automatically.
         */
        assign_on_signup?: boolean;
    };
    roles: {
        /**
         * Unique identifier of entity
         */
        id: string;
        /**
         * A name defining your role
         */
        name: string;
        /**
         * Additional information for the role
         */
        description?: (string | null);
        /**
         * If `true` this role will be assigned to new users automatically.
         */
        assign_on_signup?: boolean;
    };
    permissions: {
        /**
         * Unique identifier of entity
         */
        id: string;
        /**
         * Id of the resource which this permission belongs to
         */
        resource_id: string;
        /**
         * Permission identifier. This field is unique and cannot contain **spaces**. Ex. `read:user`
         */
        name: string;
        /**
         * Additional information for the permission
         */
        description?: (string | null);
    };
}

declare class UserService extends HttpService {
    getAll(queryParams?: {
        offset?: number;
        limit?: number;
        sort_by?: string;
        q?: string;
    }): Promise<PaginatedResult<User>>;
    create(data: CreateUser): Promise<User>;
    get(user_id: string): Promise<User>;
    update(user_id: string, data: CreateUser): Promise<User>;
    remove(user_id: string): Promise<void>;
    getRbac(user_id: string): Promise<UserRbacTree>;
    getPermissions(user_id: string): Promise<PaginatedResult<Permission>>;
    assignPermissions(user_id: string, data: string[]): Promise<void>;
    unassignPermissions(user_id: string, data: string[]): Promise<void>;
    getRoleGroups(user_id: string): Promise<PaginatedResult<RoleGroup>>;
    assignRoleGroups(user_id: string, data: string[]): Promise<RoleGroup>;
    unassignRoleGroups(user_id: string, data: string[]): Promise<void>;
    getRoles(user_id: string): Promise<PaginatedResult<Role>>;
    assignRoles(user_id: string, data: string[]): Promise<void>;
    unassignRoles(user_id: string, data: string[]): Promise<void>;
    getTenants(user_id: string): Promise<PaginatedResult<Tenant>>;
    getSessions(user_id: string): Promise<UserSession[]>;
    endAllSessions(user_id: string): Promise<void>;
    endSession(user_id: string, sid: string): Promise<void>;
    removeCredential(user_id: string, credential_id: string): Promise<void>;
}

/**
 * @public
 */
export declare interface UserSession {
    /**
     * Session identifier.
     */
    id: string;
    /**
     * End-User's IP address.
     */
    ip: (string | null);
    /**
     * End-User's User-Agent string.
     */
    ua: string;
    /**
     * Date time of session expiration in UTC milliseconds.
     */
    exp: number;
    /**
     * Date time of session creation in UTC milliseconds.
     */
    created_at: number;
    /**
     * Date time of session's last activity in UTC milliseconds.
     */
    last_activity: number;
    location: ({
        /**
         * English localized name for the city associated with the IP address.
         */
        city?: string;
        /**
         * A two-character ISO 3166-1 country code for the country associated with the IP address.
         */
        country?: string;
        /**
         * Resolved postal code.
         */
        postal_code?: string;
        pos?: {
            /**
             * The approximate WGS84 latitude of the postal code, city, subdivision or country associated with the IP address.
             */
            latitude: number;
            /**
             * The approximate WGS84 longitude of the postal code, city, subdivision or country associated with the IP address.
             */
            longitude: number;
            /**
             * The approximate accuracy radius, in kilometers, around the latitude and longitude for the geographical entity (country, subdivision, city or postal code).
             */
            accuracy_radius: number;
            /**
             * The time zone associated with location, as specified by the IANA Time Zone Database, e.g., “America/New_York”.
             */
            time_zone: string;
        };
    } | null);
}

/**
 * @public
 */
export declare interface View {
    is_default: boolean;
    content: string;
    type: ('consent' | 'fill-missing' | 'login' | 'logout-success' | 'logout-confirm' | 'mfa' | 'mfa-email' | 'mfa-fv' | 'mfa-otp' | 'mfa-push' | 'mfa-sms' | 'mfa-webauthn' | 'password-recovery' | 'passwordless-email' | 'passwordless-otp' | 'passwordless-push' | 'passwordless-sms' | 'register' | 'reset-password' | 'verify-email' | 'error');
}

declare class ViewService extends HttpService {
    get(type: ViewType): Promise<View>;
    update(type: ViewType, data: string): Promise<View>;
}

/**
 * @public
 */
export declare type ViewType = ('consent' | 'fill-missing' | 'login' | 'logout-success' | 'logout-confirm' | 'mfa' | 'mfa-email' | 'mfa-fv' | 'mfa-otp' | 'mfa-push' | 'mfa-sms' | 'mfa-webauthn' | 'password-recovery' | 'passwordless-email' | 'passwordless-otp' | 'passwordless-push' | 'passwordless-sms' | 'register' | 'reset-password' | 'verify-email' | 'error');

/**
 * @public
 */
export declare interface VonageSmsProvider {
    type: 'sms';
    is_custom?: boolean;
    provider: 'vonage';
    /**
     * Vonage SMS service configuration settings.
     */
    settings: {
        /**
         * Vonage API Key
         */
        api_key: string;
        /**
         * Vonage API Secret
         */
        api_secret: string;
        /**
         * Originating phone number
         */
        from: string;
    };
}

/**
 * @public
 */
export declare interface WebAuthNConnection {
    provider: 'plusauth';
    type: 'webauthn';
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        enabled_clients: string[];
    };
}

/**
 * @public
 */
export declare interface WebAuthNCredential {
    /**
     * Authenticator id
     */
    id: string;
    type: 'webauthn';
    /**
     * Connection name
     */
    connection?: (string | null);
    details: {
        credentialID: string;
        credentialPublicKey: {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(0|[1-9][0-9]*)$".
             */
            [k: string]: number;
        };
        counter: number;
        transports?: ('ble' | 'cable' | 'hybrid' | 'internal' | 'nfc' | 'smart-card' | 'usb')[];
    };
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: (string | null);
}

export { }
