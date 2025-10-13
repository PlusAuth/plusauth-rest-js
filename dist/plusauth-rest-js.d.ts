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
    /**
     * Unique identifier of entity
     */
    id: string;
    name: string | null;
    details: {
        [k: string]: any;
    };
    icon: string | null;
    category_id?: string | null;
    /**
     * Category order
     */
    order?: number;
    type: "totp" | "hotp" | "push";
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
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
    updated_at?: string | null;
    /**
     * Category name
     */
    name: string | null;
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
    updated_at?: string | null;
    name?: string | null;
    device_identifier: string;
    model: string;
    os: string;
    details: {
        [k: string]: any;
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
     *
     * @maxItems 1000
     */
    white_list: string[];
}

/**
 * @public
 */
export declare interface Client {
    type: "web" | "server-to-server" | "single-page-application" | "financial" | "native";
    /**
     * Unique client identifier.
     */
    client_id: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
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
    description?: string | null;
    logo_uri?: string | null;
    /**
     * Is client first party
     */
    first_party?: boolean | null;
    token_endpoint_auth_method: string;
    response_types: ("code id_token token" | "code id_token" | "code token" | "code" | "id_token token" | "id_token" | "none")[];
    oidc_conformant?: boolean | null;
    /**
     * @maxItems 50
     */
    redirect_uris: string[];
    /**
     * @maxItems 50
     */
    logout_uris: string[];
    /**
     * @maxItems 20
     */
    grant_types: string[];
    advanced: {
        pkce_required?: boolean;
        devices?: {
            android?: {
                package_name?: string | null;
                sha256_fingerprints?: string;
            };
            ios?: {
                bundle_identifier?: string | null;
                team_id?: string | null;
            };
        };
    };
    extra_metadata: {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^(.*)$".
         */
        [k: string]: string | boolean | number | null;
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
            relay_state?: string | null;
            mappings: {
                /**
                 * This interface was referenced by `undefined`'s JSON-Schema definition
                 * via the `patternProperty` "^(.*)$".
                 */
                [k: string]: string | boolean | {
                    value?: string | boolean | number;
                    [k: string]: any;
                } | (string | {
                    value?: string | boolean | number;
                    [k: string]: any;
                })[];
            };
            /**
             * Your SAML SP's metadata URL.
             */
            metadata_url?: string;
            request_binding: "HTTP-POST" | "HTTP-Redirect";
            sign_assertions?: boolean;
            sign_out_enabled?: boolean;
            sign_out_url?: string;
            signed_requests?: boolean;
            signature_algorithm?: "sha512" | "sha256" | "sha1";
            signing_certificate?: string | null;
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
        keys: {
            [k: string]: any;
        }[];
    };
}

declare class ClientService extends HttpService {
    /**
     * @param queryParams Query parameters
     * @param queryParams.limit Limit the number of results returned
     * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
     * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
     * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
     * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
     */
    getAll(queryParams?: {
        limit?: number;
        offset?: number;
        q?: string;
        sort_by?: string | string[];
        fields?: string | string[];
    }): Promise<{
        total: number;
        results: Client[];
    }>;
    /**
     * @param data Client object
     */
    create(data: CreateClient): Promise<Client>;
    /**
     * @param clientId Client identifier
     */
    get(clientId: string): Promise<Client>;
    /**
     * @param clientId Client identifier
     * @param data Object containing to be updated values
     */
    update(clientId: string, data: UpdateClient): Promise<Client>;
    /**
     * @param clientId Client identifier
     */
    remove(clientId: string): Promise<void>;
}

/**
 * @public
 */
export declare interface CommonCredential {
    /**
     * Authenticator id
     */
    id: string;
    type: "e-sign" | "sms" | "email" | "custom";
    /**
     * Connection name
     */
    connection?: string | null;
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
    updated_at?: string | null;
}

/**
 * @public
 */
export declare type Connection = ({
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "email";
    provider: "aws_ses";
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
         * @maxItems 1000
         */
        enabled_clients: string[];
        branding: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl: number;
        use_magic_link: boolean;
    };
} | {
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "email";
    provider: "postmark";
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
         * @maxItems 1000
         */
        enabled_clients: string[];
        branding: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl: number;
        use_magic_link: boolean;
    };
} | {
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "email";
    provider: "sendgrid";
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
        api_user?: string | null;
        /**
         * @maxItems 1000
         */
        enabled_clients: string[];
        branding: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl: number;
        use_magic_link: boolean;
    };
} | {
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "email";
    provider: "smtp";
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
        secure?: boolean | null;
        /**
         * @maxItems 1000
         */
        enabled_clients: string[];
        branding: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl: number;
        use_magic_link: boolean;
    };
}) | ({
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "sms";
    provider: "dataport";
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
        operator: "1" | "2" | "3" | "4";
        /**
         * Short code of operator used for sendind messages
         */
        short_number: string;
        /**
         * Orginator value
         */
        from: string;
        /**
         * @maxItems 1000
         */
        enabled_clients: string[];
        branding: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl: number;
    };
} | {
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "sms";
    provider: "messagebird";
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
         * @maxItems 1000
         */
        enabled_clients: string[];
        branding: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl: number;
    };
} | {
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "sms";
    provider: "custom";
    settings: {
        /**
         * SMS provider's hook context
         */
        hook_context: string;
        /**
         * @maxItems 1000
         */
        enabled_clients: string[];
        branding: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl: number;
    };
} | {
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "sms";
    provider: "3gbilisim";
    settings: {
        /**
         * If provided, sms requests will be made to this endpoint
         */
        endpoint: string;
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
        company_code: string;
        /**
         * It is the message header defined in the NetGSM (your sender name). If you want your subscriber number to be your message header, write your subscriber number to this parameter without a leading zero. 8xxxxxxxxxx
         */
        from: string;
        /**
         * @maxItems 1000
         */
        enabled_clients: string[];
        branding: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl: number;
    };
} | {
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "sms";
    provider: "twilio";
    settings: {
        /**
         * Your Twilio auth token
         */
        auth_token: string;
        /**
         * Your Twilio account sid.
         */
        sid: string;
        strategy: "copilot" | "from";
        /**
         * If strategy is `copilot` than this value needs to be your Twilio messaging service SID. Otherwise it is phone number for originating your messages.
         */
        from: string;
        /**
         * @maxItems 1000
         */
        enabled_clients: string[];
        branding: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl: number;
    };
} | {
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "sms";
    provider: "netgsm";
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
        merchant_code: string;
        /**
         * The ID information of the application published from your developer account.
         */
        app_key: string;
        /**
         * It is the message header defined in the NetGSM (your sender name). If you want your subscriber number to be your message header, write your subscriber number to this parameter without a leading zero. 8xxxxxxxxxx
         */
        from: string;
        /**
         * @maxItems 1000
         */
        enabled_clients: string[];
        branding: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl: number;
    };
}) | ({
    type: "social";
    provider: "apple";
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        client_id: string;
        key_id: string;
        private_key: string;
        team_id: string;
        /**
         * @maxItems 50
         */
        scopes?: string[];
    };
} | {
    type: "social";
    provider: "amazon" | "dribbble" | "facebook" | "github" | "google" | "linkedin" | "microsoft" | "slack" | "spotify";
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        client_id: string;
        client_secret: string;
        /**
         * @maxItems 50
         */
        scopes?: string[];
    };
} | {
    type: "social";
    provider: "custom-oauth2";
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        extra_params: {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             */
            [k: string]: string;
        };
        extra_headers: {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             */
            [k: string]: string;
        };
        client_id: string;
        client_secret: string;
        authorization_url: string;
        token_url: string;
        /**
         * @maxItems 1000
         */
        scopes?: string[];
    };
} | {
    type: "social";
    provider: "dropbox";
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        app_key: string;
        app_secret: string;
        /**
         * @maxItems 50
         */
        scopes?: string[];
    };
} | {
    type: "social";
    provider: "twitter";
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        consumer_key: string;
        consumer_secret: string;
        /**
         * @maxItems 50
         */
        scopes?: string[];
    };
}) | ({
    type: "enterprise";
    provider: "ldap";
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
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
         * An LDAP filter used to retrieve all user entries for synchronization. Narrow the filter to exclude non-human accounts such as system or service users.
         */
        search_all_filter?: string;
        /**
         * Specify the portion of the target subtree that should be considered
         */
        search_scope?: "base" | "one" | "sub" | "subordinate";
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
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             *
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             */
            [k: string]: string | boolean | {
                value?: string | boolean | number;
                [k: string]: any;
            } | (string | {
                value?: string | boolean | number;
                [k: string]: any;
            })[];
        };
    };
} | {
    type: "enterprise";
    provider: "e-devlet";
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        client_id: string;
        client_secret: string;
        /**
         * @maxItems 50
         */
        scopes?: string[];
        is_test?: boolean;
    };
} | {
    type: "enterprise";
    provider: "saml";
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
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
        sign_out_url?: string | null;
        signing_certificate?: string | null;
        /**
         * Enable/Disable the SAML authentication request signing.
         */
        sign_request?: boolean;
        sign_request_algorithm: "sha512" | "sha256" | "sha1";
        /**
         * SAML Request Binding
         */
        request_binding: "HTTP-POST" | "HTTP-Redirect";
        /**
         * SAML Logout Request Binding
         */
        sign_out_binding?: "HTTP-POST" | "HTTP-Redirect";
        mappings: {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             *
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             */
            [k: string]: string | boolean | {
                value?: string | boolean | number;
                [k: string]: any;
            } | (string | {
                value?: string | boolean | number;
                [k: string]: any;
            })[];
        };
    };
}) | {
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "push";
    provider: "native";
    settings: {
        /**
         * Firebase Cloud Messaging configuration settings.
         * To enable the FCM integration, you need to get your service account key from the [Firebase Console](https://console.firebase.google.com/).
         * - Select your project, and click the gear icon on the top of the sidebar.
         * - After opening "Project Settings", head to the "Service Accounts" tab.
         * - Click "Generate new private key", then confirm by clicking "Generate key".
         * - Clicking "Generate key" downloads the generated service account json file.
         */
        fcm: {
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
        apns: {
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
        /**
         * @maxItems 1000
         */
        enabled_clients: string[];
        branding: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Push notification strategy
         */
        strategy: "code" | "prompt";
    };
} | {
    type: "webauthn";
    provider: "plusauth";
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
    };
};

declare class ConnectionService extends HttpService {
    /**
     * @param queryParams Query parameters
     * @param queryParams.limit Limit the number of results returned
     * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
     * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
     * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
     * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
     */
    getAll(queryParams?: {
        limit?: number;
        offset?: number;
        q?: string;
        sort_by?: string | string[];
        fields?: string | string[];
    }): Promise<{
        total: number;
        results: Connection[];
    }>;
    /**
     * @param data Connection object
     */
    create(data: CreateConnection): Promise<Connection>;
    /**
     * @param name Connection name
     */
    get(name: string): Promise<Connection>;
    /**
     * @param name Connection name
     * @param data Object containing to be updated values
     */
    update(name: string, data: UpdateConnection): Promise<Connection>;
    /**
     * @param name Connection name
     */
    remove(name: string): Promise<void>;
    /**
     * Only available for AD/LDAP connections

     * @param name Connection name
     */
    sync(name: string): Promise<void>;
}

/**
 * @public
 */
export declare type CreateAuthPlusAccount = {
    name: string | null;
    details: {
        secret: string;
        hash_alg: "sha1" | "sha256" | "sha512";
        /**
         * The length of the OTP code.
         */
        code_length: number;
        ttl: number;
    };
    icon: string | null;
    category_id?: string | null;
    /**
     * Category order
     */
    order?: number;
    type: "totp";
} | {
    name: string | null;
    details: {
        secret: string;
        counter: number;
        /**
         * The length of the OTP code.
         */
        code_length: number;
        hash_alg: "sha1" | "sha256" | "sha512";
    };
    icon: string | null;
    category_id?: string | null;
    /**
     * Category order
     */
    order?: number;
    type: "hotp";
} | {
    name: string | null;
    details: {
        secret: string;
        hash_alg: "sha1" | "sha256" | "sha512";
        /**
         * The length of the OTP code.
         */
        code_length: number;
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
    icon: string | null;
    category_id?: string | null;
    /**
     * Category order
     */
    order?: number;
    type: "push";
};

/**
 * Category definition to AuthPlus application
 * @public
 */
export declare interface CreateAuthPlusCategory {
    /**
     * Category name
     */
    name: string | null;
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
    name?: string | null;
    device_identifier: string;
    model: string;
    os: string;
    details: {
        [k: string]: any;
    };
}

/**
 * @public
 */
export declare interface CreateClient {
    type: "web" | "server-to-server" | "single-page-application" | "financial" | "native";
    /**
     * Unique client identifier.
     */
    client_id?: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
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
    description?: string | null;
    logo_uri?: string | null;
    /**
     * Is client first party
     */
    first_party?: boolean | null;
    token_endpoint_auth_method?: string;
    response_types?: ("code id_token token" | "code id_token" | "code token" | "code" | "id_token token" | "id_token" | "none")[];
    oidc_conformant?: boolean | null;
    /**
     * @maxItems 50
     */
    redirect_uris?: string[];
    /**
     * @maxItems 50
     */
    logout_uris?: string[];
    /**
     * @maxItems 20
     */
    grant_types?: string[];
    advanced?: {
        pkce_required?: boolean;
        devices?: {
            android?: {
                package_name?: string | null;
                sha256_fingerprints?: string;
            };
            ios?: {
                bundle_identifier?: string | null;
                team_id?: string | null;
            };
        };
    };
    extra_metadata?: {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^(.*)$".
         */
        [k: string]: string | boolean | number | null;
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
            relay_state?: string | null;
            mappings: {
                /**
                 * This interface was referenced by `undefined`'s JSON-Schema definition
                 * via the `patternProperty` "^(.*)$".
                 */
                [k: string]: string | boolean | {
                    value?: string | boolean | number;
                    [k: string]: any;
                } | (string | {
                    value?: string | boolean | number;
                    [k: string]: any;
                })[];
            };
            /**
             * Your SAML SP's metadata URL.
             */
            metadata_url?: string;
            request_binding: "HTTP-POST" | "HTTP-Redirect";
            sign_assertions?: boolean;
            sign_out_enabled?: boolean;
            sign_out_url?: string;
            signed_requests?: boolean;
            signature_algorithm?: "sha512" | "sha256" | "sha1";
            signing_certificate?: string | null;
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
        keys: {
            [k: string]: any;
        }[];
    };
}

/**
 * @public
 */
export declare type CreateConnection = ({
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "email";
    provider: "aws_ses";
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
         * @maxItems 1000
         */
        enabled_clients: string[];
        branding: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl: number;
        use_magic_link: boolean;
    };
} | {
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "email";
    provider: "postmark";
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
         * @maxItems 1000
         */
        enabled_clients: string[];
        branding: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl: number;
        use_magic_link: boolean;
    };
} | {
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "email";
    provider: "sendgrid";
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
        api_user?: string | null;
        /**
         * @maxItems 1000
         */
        enabled_clients: string[];
        branding: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl: number;
        use_magic_link: boolean;
    };
} | {
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "email";
    provider: "smtp";
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
        secure?: boolean | null;
        /**
         * @maxItems 1000
         */
        enabled_clients: string[];
        branding: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl: number;
        use_magic_link: boolean;
    };
}) | ({
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "sms";
    provider: "dataport";
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
        operator: "1" | "2" | "3" | "4";
        /**
         * Short code of operator used for sendind messages
         */
        short_number: string;
        /**
         * Orginator value
         */
        from: string;
        /**
         * @maxItems 1000
         */
        enabled_clients: string[];
        branding: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl: number;
    };
} | {
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "sms";
    provider: "messagebird";
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
         * @maxItems 1000
         */
        enabled_clients: string[];
        branding: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl: number;
    };
} | {
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "sms";
    provider: "custom";
    settings: {
        /**
         * SMS provider's hook context
         */
        hook_context: string;
        /**
         * @maxItems 1000
         */
        enabled_clients: string[];
        branding: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl: number;
    };
} | {
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "sms";
    provider: "3gbilisim";
    settings: {
        /**
         * If provided, sms requests will be made to this endpoint
         */
        endpoint: string;
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
        company_code: string;
        /**
         * It is the message header defined in the NetGSM (your sender name). If you want your subscriber number to be your message header, write your subscriber number to this parameter without a leading zero. 8xxxxxxxxxx
         */
        from: string;
        /**
         * @maxItems 1000
         */
        enabled_clients: string[];
        branding: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl: number;
    };
} | {
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "sms";
    provider: "twilio";
    settings: {
        /**
         * Your Twilio auth token
         */
        auth_token: string;
        /**
         * Your Twilio account sid.
         */
        sid: string;
        strategy: "copilot" | "from";
        /**
         * If strategy is `copilot` than this value needs to be your Twilio messaging service SID. Otherwise it is phone number for originating your messages.
         */
        from: string;
        /**
         * @maxItems 1000
         */
        enabled_clients: string[];
        branding: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl: number;
    };
} | {
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "sms";
    provider: "netgsm";
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
        merchant_code: string;
        /**
         * The ID information of the application published from your developer account.
         */
        app_key: string;
        /**
         * It is the message header defined in the NetGSM (your sender name). If you want your subscriber number to be your message header, write your subscriber number to this parameter without a leading zero. 8xxxxxxxxxx
         */
        from: string;
        /**
         * @maxItems 1000
         */
        enabled_clients: string[];
        branding: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl: number;
    };
}) | ({
    type: "social";
    provider: "apple";
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        client_id: string;
        key_id: string;
        private_key: string;
        team_id: string;
        /**
         * @maxItems 50
         */
        scopes?: string[];
    };
} | {
    type: "social";
    provider: "amazon" | "dribbble" | "facebook" | "github" | "google" | "linkedin" | "microsoft" | "slack" | "spotify";
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        client_id: string;
        client_secret: string;
        /**
         * @maxItems 50
         */
        scopes?: string[];
    };
} | {
    type: "social";
    provider: "custom-oauth2";
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        extra_params: {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             */
            [k: string]: string;
        };
        extra_headers: {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             */
            [k: string]: string;
        };
        client_id: string;
        client_secret: string;
        authorization_url: string;
        token_url: string;
        /**
         * @maxItems 1000
         */
        scopes?: string[];
    };
} | {
    type: "social";
    provider: "dropbox";
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        app_key: string;
        app_secret: string;
        /**
         * @maxItems 50
         */
        scopes?: string[];
    };
} | {
    type: "social";
    provider: "twitter";
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        consumer_key: string;
        consumer_secret: string;
        /**
         * @maxItems 50
         */
        scopes?: string[];
    };
}) | ({
    type: "enterprise";
    provider: "ldap";
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
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
         * An LDAP filter used to retrieve all user entries for synchronization. Narrow the filter to exclude non-human accounts such as system or service users.
         */
        search_all_filter?: string;
        /**
         * Specify the portion of the target subtree that should be considered
         */
        search_scope?: "base" | "one" | "sub" | "subordinate";
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
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             *
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             */
            [k: string]: string | boolean | {
                value?: string | boolean | number;
                [k: string]: any;
            } | (string | {
                value?: string | boolean | number;
                [k: string]: any;
            })[];
        };
    };
} | {
    type: "enterprise";
    provider: "e-devlet";
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        client_id: string;
        client_secret: string;
        /**
         * @maxItems 50
         */
        scopes?: string[];
        is_test?: boolean;
    };
} | {
    type: "enterprise";
    provider: "saml";
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
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
        sign_out_url?: string | null;
        signing_certificate?: string | null;
        /**
         * Enable/Disable the SAML authentication request signing.
         */
        sign_request?: boolean;
        sign_request_algorithm: "sha512" | "sha256" | "sha1";
        /**
         * SAML Request Binding
         */
        request_binding: "HTTP-POST" | "HTTP-Redirect";
        /**
         * SAML Logout Request Binding
         */
        sign_out_binding?: "HTTP-POST" | "HTTP-Redirect";
        mappings: {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             *
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             */
            [k: string]: string | boolean | {
                value?: string | boolean | number;
                [k: string]: any;
            } | (string | {
                value?: string | boolean | number;
                [k: string]: any;
            })[];
        };
    };
}) | {
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "push";
    provider: "native";
    settings: {
        /**
         * Firebase Cloud Messaging configuration settings.
         * To enable the FCM integration, you need to get your service account key from the [Firebase Console](https://console.firebase.google.com/).
         * - Select your project, and click the gear icon on the top of the sidebar.
         * - After opening "Project Settings", head to the "Service Accounts" tab.
         * - Click "Generate new private key", then confirm by clicking "Generate key".
         * - Clicking "Generate key" downloads the generated service account json file.
         */
        fcm: {
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
        apns: {
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
        /**
         * @maxItems 1000
         */
        enabled_clients: string[];
        branding: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Push notification strategy
         */
        strategy: "code" | "prompt";
    };
} | {
    type: "webauthn";
    provider: "plusauth";
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
    };
};

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
    type: "sms" | "link-account" | "pre-register" | "post-register" | "pre-login" | "post-login" | "pre-mfa" | "pre-access-token" | "pre-id-token" | "pre-fc-import" | "post-fc-import" | "pre-fc-export" | "ciba-auth-prompt" | "ciba-validate-r-c" | "ciba-validate-u-c";
    /**
     * Additional information for the hook
     */
    description?: string | null;
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
     * Additional information related with entity
     */
    description?: string | null;
}

/**
 * Resource Object with name and description properties.
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
     * Additional information related with entity
     */
    description?: string | null;
    settings?: {
        access_token_ttl?: number;
        include_user_roles?: boolean;
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
     * Additional information related with entity
     */
    description?: string | null;
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
     * Additional information related with entity
     */
    description?: string | null;
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
    region: "tr-1";
    settings?: {
        branding?: {
            display_name?: string | null;
        };
        default_strategy?: string | null;
        user_self_deletion?: {
            /**
             * Allow end-users to delete their accounts. This enables the `delete-account` prompt which you can request to allow users delete their accounts.
             */
            enabled?: boolean;
            [k: string]: any;
        };
        auto_sign_in?: boolean;
        register_enabled?: boolean;
        forgot_password_enabled?: boolean;
        environment_variables?: {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             */
            [k: string]: string;
        };
        expose_unsafe_errors?: boolean;
        welcome_emails_enabled?: boolean;
        force_email_verification?: boolean;
        /**
         * @maxItems 50
         */
        extra_params?: string[];
        /**
         * @maxItems 50
         */
        acr_values?: string[];
        /**
         * @maxItems 50
         */
        extra_scopes?: string[];
        api_version?: "2021-07-04";
        tenant_login_url?: string | null;
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
            delivery_mode?: "ping" | "poll";
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
        hash_function?: "bcrypt" | "argon2";
        policies?: {
            /**
             * Password policy settings to be enforced to your new users.
             */
            password?: {
                /**
                 * Minimum number of characters
                 */
                min?: number | null;
                /**
                 * Maximum number of characters
                 */
                max?: number | null;
                /**
                 * Require at least on of the given characters
                 */
                custom_chars?: string | null;
                /**
                 * The system will maintain a password history for each user and prevent the reuse of passwords included in the history. The password history can be up to 10 in size. When provided, the system will maintain existing and new users' password history going forward.
                 */
                history?: number | null;
                /**
                 * Require at least given value of uppercase letters
                 */
                upper_case?: number | null;
                /**
                 * Require at least given value of lowercase letters
                 */
                lower_case?: number | null;
                /**
                 * Require at least given value of numbers
                 */
                number?: number | null;
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
                 *
                 * @maxItems 1000
                 */
                white_list?: string[];
            };
        };
    };
}

/**
 * @public
 */
export declare type CreateTenantAdministrator = {
    email: string;
    user_id?: string;
    permissions?: string[];
    [k: string]: any;
} | {
    email?: string;
    user_id: string;
    permissions?: string[];
    [k: string]: any;
};

/**
 * @public
 */
export declare interface CreateTenantCustomDomain {
    domain: string;
}

/**
 * @public
 */
export declare interface CreateTicket {
    user_id?: string;
    email?: string;
    client_id?: string;
    /**
     * Ticket's validity in seconds. After specified time passed ticket will be expired.
     */
    ttl?: number;
    details?: {
        [k: string]: string | number | boolean;
    };
    type: "verify-email" | "forgot-password" | "invite-admin" | "unblock-ip" | "unblock-account";
    token?: string;
}

/**
 * @public
 */
export declare interface CreateUser {
    /**
     * End-User's username
     */
    username?: string | null;
    /**
     * End-User's e-mail address.
     */
    email?: string | null;
    /**
     * `true` if the End-User's e-mail address has been verified; otherwise `false`. If `force_email_verification` is enabled in your tenant's settings, it will check this value of user while performing email verification checks.
     */
    email_verified?: boolean | null;
    /**
     * End-User's preferred phone number. It will be stored in [E.164](https://en.wikipedia.org/wiki/E.164) format.
     */
    phone_number?: string | null;
    /**
     * `true` if the End-User's phone number has been verified; otherwise `false`. If SMS MFA is enabled this value will be used to determine whether End-User has verified it's phone or not.
     */
    phone_number_verified?: boolean | null;
    /**
     * End-User's full name in displayable form including all name parts, possibly including titles and suffixes, ordered according to the End-User's locale and preferences.
     */
    name?: string | null;
    /**
     * URI reference of the End-User's profile picture.
     */
    picture?: string | null;
    /**
     * Whether this End-User is blocked or not. If `true` End-User will not be able to login.
     */
    blocked?: boolean | null;
    /**
     * Failed login attempts of user. It will reset to `0` after successful login.
     */
    login_attempts?: number;
    profile?: {
        /**
         * Given name(s) or first name(s) of the End-User. Note that in some cultures, people can have multiple given names; all can be present, with the names being separated by space characters.
         */
        given_name?: string | null;
        /**
         * Middle name(s) of the End-User. Note that in some cultures, people can have multiple middle names; all can be present, with the names being separated by space characters. Also note that in some cultures, middle names are not used.
         */
        middle_name?: string | null;
        /**
         * Surname(s) or last name(s) of the End-User. Note that in some cultures, people can have multiple family names or no family name; all can be present, with the names being separated by space characters.
         */
        family_name?: string | null;
        /**
         * Casual name of the End-User that may or may not be the same as the given_name. For instance, a nickname value of Mike might be returned alongside a given_name value of Michael.
         */
        nickname?: string | null;
        /**
         * URI reference for the End-User's profile page.
         */
        profile_page?: string | null;
        /**
         * URI reference for the End-User's Web page or blog.
         */
        website?: string | null;
        /**
         * Short code of End-User's gender.
         */
        gender?: string | null;
        /**
         * End-User's birthday. ISO 8601:2004 YYYY-MM-DD format. The year may be 0000, indicating that it is omitted. To represent only the year, YYYY format is preferred.
         */
        birthdate?: string | null;
        /**
         * End-User's locale. For example, en-US or fr-CA.
         */
        locale?: string | null;
        /**
         * String from zoneinfo time zone database representing the End-User's time zone. For example, Europe/Paris or America/Los_Angeles.
         */
        zoneinfo?: string | null;
        addresses?: {
            /**
             * Identifier for user address. Example: `Delivery Address`, `Billing Address` etc.
             */
            id: string | null;
            is_primary: boolean | null;
            first_name: string | null;
            last_name: string | null;
            /**
             * State, province, prefecture or region component.
             */
            state: string | null;
            /**
             * Country name component.
             */
            country: string | null;
            /**
             * City or locality component.
             */
            city: string | null;
            /**
             * Full street address component, which MAY include house number, street name, Post Office Box, and multi-line extended street address information. This field may contain multiple lines, separated by newline characters.
             */
            street_address: string | null;
            /**
             * Full street address component, which MAY include house number, street name, Post Office Box, and multi-line extended street address information. This field may contain multiple lines, separated by newline characters.
             */
            street_address_2: string | null;
            /**
             * Zip code or postal code component.
             */
            zip_code: string | null;
        }[];
    };
    /**
     * Additional metadata for your End-User. It must be an object containing **10** fields at max with keys and values no more than 1024 characters. Values can be only one of the types `string`, `number` and `boolean`. You can also use `null` as value to make metadata consistent across other users.
     */
    metadata?: {
        [k: string]: any;
    };
    verify_email?: boolean | null;
    /**
     * End-User's password in plaintext. Defined password policy rules will be enforced.
     */
    password?: string | null;
    /**
     * Used password hash function identifier.
     */
    hash_fn?: "bcrypt" | "argon2";
    identities?: {
        /**
         * External user's id coming from the connection.
         */
        id?: string;
        /**
         * Connection name
         */
        connection: string;
        type: "sms" | "push" | "webauthn" | "email" | "social" | "enterprise";
        provider: "twilio" | "netgsm" | "3gbilisim" | "dataport" | "messagebird" | "custom" | "native" | "plusauth" | "aws_ses" | "postmark" | "sendgrid" | "smtp" | "custom-oauth2" | "amazon" | "apple" | "dribbble" | "dropbox" | "facebook" | "github" | "google" | "linkedin" | "microsoft" | "slack" | "spotify" | "twitter" | "saml" | "e-devlet" | "ldap";
        /**
         * Raw user object from the connection
         */
        details: {
            [k: string]: any;
        };
    }[];
}

/**
 * @public
 */
export declare type CreateUserCredential = {
    type: "e-sign" | "sms" | "email" | "custom";
    /**
     * Connection name
     */
    connection?: string | null;
    /**
     * Raw user object from the connection
     */
    details: {
        [k: string]: any;
    };
} | {
    /**
     * Connection name
     */
    connection?: string | null;
    type: "password";
    details: {
        /**
         * Hashed value of user's password.
         */
        hash: string;
        hash_fn: "bcrypt" | "argon2";
    };
} | {
    /**
     * Connection name
     */
    connection?: string | null;
    type: "otp";
    details: {
        /**
         * Secret for recovering user's OTP credential
         */
        secret: string;
    };
} | {
    /**
     * Connection name
     */
    connection?: string | null;
    type: "push";
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
                key_ops?: ("sign" | "verify" | "encrypt" | "decrypt" | "wrapKey" | "unwrapKey" | "deriveKey" | "deriveBits")[];
                n: string;
                use: string;
                alg: string;
                kid: string;
                x5u?: string;
                x5c?: string[];
                x5t?: string;
                "x5t#S256"?: string;
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
    /**
     * Connection name
     */
    connection?: string | null;
    type: "fv";
    details: {
        hash?: string;
        templates: {
            [k: string]: any;
        };
    };
} | {
    /**
     * Connection name
     */
    connection?: string | null;
    type: "webauthn";
    details: {
        id: string;
        publicKey: {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(0|[1-9][0-9]*)$".
             */
            [k: string]: number;
        };
        counter: number;
        transports?: ("ble" | "cable" | "hybrid" | "internal" | "nfc" | "smart-card" | "usb")[];
    };
};

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
    type: "sms" | "push" | "webauthn" | "email" | "social" | "enterprise";
    provider: "twilio" | "netgsm" | "3gbilisim" | "dataport" | "messagebird" | "custom" | "native" | "plusauth" | "aws_ses" | "postmark" | "sendgrid" | "smtp" | "custom-oauth2" | "amazon" | "apple" | "dribbble" | "dropbox" | "facebook" | "github" | "google" | "linkedin" | "microsoft" | "slack" | "spotify" | "twitter" | "saml" | "e-devlet" | "ldap";
    /**
     * Raw user object from the connection
     */
    details: {
        [k: string]: any;
    };
}

declare class CustomDomainService extends HttpService {
    /**
     * @param queryParams Query parameters
     * @param queryParams.limit Limit the number of results returned
     * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
     * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
     * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
     * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
     */
    getAll(queryParams?: {
        limit?: number;
        offset?: number;
        q?: string;
        sort_by?: string | string[];
        fields?: string | string[];
    }): Promise<{
        total: number;
        results: TenantCustomDomain[];
    }>;
    /**
     * @param data Tenant Custom Domain object
     */
    register(data: CreateTenantCustomDomain): Promise<TenantCustomDomain>;
    /**
     * @param domain Custom Domain specifier
     */
    get(domain: string): Promise<TenantCustomDomain>;
    /**
     * @param domain Custom Domain specifier
     */
    remove(domain: string): Promise<void>;
    /**
     * @param domain Custom Domain specifier
     */
    verifyOwnership(domain: string): Promise<{
        verified: boolean;
        verification_value?: string;
    }>;
}

/**
 * @public
 */
declare type CustomRequestOptions = RequestInit & {
    responseType?: "stream" | "json";
};

/**
 * @public
 */
export declare interface CustomSmsProvider {
    type: "sms";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "custom";
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
    type: "sms";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "dataport";
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
        operator: "1" | "2" | "3" | "4";
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
export declare interface EDevletConnection {
    type: "enterprise";
    provider: "e-devlet";
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        client_id: string;
        client_secret: string;
        /**
         * @maxItems 50
         */
        scopes?: string[];
        is_test?: boolean;
    };
}

/**
 * @public
 */
export declare type EmailConnection = {
    type?: "email";
    [k: string]: any;
} & ({
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "email";
    provider: "aws_ses";
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
         * @maxItems 1000
         */
        enabled_clients: string[];
        branding: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl: number;
        use_magic_link: boolean;
    };
} | {
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "email";
    provider: "postmark";
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
         * @maxItems 1000
         */
        enabled_clients: string[];
        branding: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl: number;
        use_magic_link: boolean;
    };
} | {
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "email";
    provider: "sendgrid";
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
        api_user?: string | null;
        /**
         * @maxItems 1000
         */
        enabled_clients: string[];
        branding: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl: number;
        use_magic_link: boolean;
    };
} | {
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "email";
    provider: "smtp";
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
        secure?: boolean | null;
        /**
         * @maxItems 1000
         */
        enabled_clients: string[];
        branding: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl: number;
        use_magic_link: boolean;
    };
});

/**
 * @public
 */
export declare type EmailProvider = {
    type?: "email";
    [k: string]: any;
} & ({
    type: "email";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "aws_ses";
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
    type: "email";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "postmark";
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
    type: "email";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "sendgrid";
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
        api_user?: string | null;
    };
} | {
    type: "email";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "smtp";
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
        secure?: boolean | null;
    };
});

/**
 * @public
 */
export declare interface EmailTemplate {
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    content: string;
    is_default?: boolean | null;
    type: "email";
    name: "welcome" | "verification-code" | "magic-link" | "verify-email" | "reset-password" | "invite-admin" | "payment-failed" | "plan-downgraded" | "blocked-account" | "blocked-ip" | "test";
    details: {
        /**
         * `from` field for your emails
         */
        from: string;
        /**
         * `subject` field for your emails.
         */
        subject: string;
        [k: string]: any;
    };
}

/**
 * @public
 */
export declare type EnterpriseConnection = {
    type?: "enterprise";
    [k: string]: any;
} & ({
    type: "enterprise";
    provider: "ldap";
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
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
         * An LDAP filter used to retrieve all user entries for synchronization. Narrow the filter to exclude non-human accounts such as system or service users.
         */
        search_all_filter?: string;
        /**
         * Specify the portion of the target subtree that should be considered
         */
        search_scope?: "base" | "one" | "sub" | "subordinate";
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
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             *
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             */
            [k: string]: string | boolean | {
                value?: string | boolean | number;
                [k: string]: any;
            } | (string | {
                value?: string | boolean | number;
                [k: string]: any;
            })[];
        };
    };
} | {
    type: "enterprise";
    provider: "e-devlet";
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        client_id: string;
        client_secret: string;
        /**
         * @maxItems 50
         */
        scopes?: string[];
        is_test?: boolean;
    };
} | {
    type: "enterprise";
    provider: "saml";
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
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
        sign_out_url?: string | null;
        signing_certificate?: string | null;
        /**
         * Enable/Disable the SAML authentication request signing.
         */
        sign_request?: boolean;
        sign_request_algorithm: "sha512" | "sha256" | "sha1";
        /**
         * SAML Request Binding
         */
        request_binding: "HTTP-POST" | "HTTP-Redirect";
        /**
         * SAML Logout Request Binding
         */
        sign_out_binding?: "HTTP-POST" | "HTTP-Redirect";
        mappings: {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             *
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             */
            [k: string]: string | boolean | {
                value?: string | boolean | number;
                [k: string]: any;
            } | (string | {
                value?: string | boolean | number;
                [k: string]: any;
            })[];
        };
    };
});

/**
 * @public
 */
export declare interface ESignConnection {
    type: "e-sign";
    provider: "plusauth";
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
    };
}

/**
 * @public
 */
export declare interface FvConnection {
    type: "fv";
    provider: "hitachi-h1";
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        /**
         * @maxItems 1000
         */
        enabled_clients: string[];
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
    /**
     * Connection name
     */
    connection?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    type: "fv";
    details: {
        hash?: string;
        templates: {
            [k: string]: any;
        };
    };
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
    type: "sms" | "link-account" | "pre-register" | "post-register" | "pre-login" | "post-login" | "pre-mfa" | "pre-access-token" | "pre-id-token" | "pre-fc-import" | "post-fc-import" | "pre-fc-export" | "ciba-auth-prompt" | "ciba-validate-r-c" | "ciba-validate-u-c";
    /**
     * Additional information for the hook
     */
    description: string | null;
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
    created_at: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
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
            webauthn?: {
                enabled?: boolean;
                required?: boolean;
                verified?: boolean;
                [k: string]: any;
            };
            push?: {
                enabled?: boolean;
                required?: boolean;
                verified?: boolean;
                [k: string]: any;
            };
            [k: string]: any;
        };
        response: {
            body: {
                [k: string]: any;
            } | string | any[];
            headers: {
                /**
                 * This interface was referenced by `undefined`'s JSON-Schema definition
                 * via the `patternProperty` "^(.*)$".
                 */
                [k: string]: string | null;
            };
        };
        [k: string]: any;
    };
    client: {
        [k: string]: any;
    };
    user: {
        [k: string]: any;
    };
}

declare class HookService extends HttpService {
    /**
     * @param queryParams Query parameters
     * @param queryParams.limit Limit the number of results returned
     * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
     * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
     * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
     * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
     */
    getAll(queryParams?: {
        limit?: number;
        offset?: number;
        q?: string;
        sort_by?: string | string[];
        fields?: string | string[];
    }): Promise<{
        total: number;
        results: Hook[];
    }>;
    /**
     * @param data Hook object
     */
    create(data: CreateHook): Promise<Hook>;
    /**
     * @param hookId Hook identifier
     */
    get(hookId: string): Promise<Hook>;
    /**
     * @param hookId Hook identifier
     * @param data Object containing to be updated values
     */
    update(hookId: string, data: UpdateHook): Promise<Hook>;
    /**
     * @param hookId Hook identifier
     */
    remove(hookId: string): Promise<void>;
}

/**
 * Resource Object with name and description properties.
 * @public
 */
export declare interface HOTPAuthPlusAccount {
    /**
     * Unique identifier of entity
     */
    id: string;
    name: string | null;
    details: {
        secret: string;
        counter: number;
        /**
         * The length of the OTP code.
         */
        code_length: number;
        hash_alg: "sha1" | "sha256" | "sha512";
    };
    icon: string | null;
    category_id?: string | null;
    /**
     * Category order
     */
    order?: number;
    type: "hotp";
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
}

/**
 * @public
 */
export declare interface HOTPConnection {
    type: "otp";
    provider: "hotp";
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        /**
         * The length of the OTP code.
         */
        code_length: number;
        hash_alg: "sha1" | "sha256" | "sha512";
        window: number;
        initial_counter: number;
    };
}

/**
 * @public
 */
declare interface HttpClient {
    get: (uri: string, options?: CustomRequestOptions) => Promise<any>;
    post: (uri: string, body?: BodyType | null, options?: CustomRequestOptions) => Promise<any>;
    patch: (uri: string, body?: BodyType | null, options?: CustomRequestOptions) => Promise<any>;
    delete: (uri: string, body?: BodyType | null, options?: CustomRequestOptions) => Promise<any>;
}

/**
 * @public
 */
declare class HttpService {
    protected http: HttpClient;
    protected static prefix: string;
    private _baseUrl;
    ["constructor"]: typeof HttpService;
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
    key_ops?: ("sign" | "verify" | "encrypt" | "decrypt" | "wrapKey" | "unwrapKey" | "deriveKey" | "deriveBits")[];
    n: string;
    use: string;
    alg: string;
    kid: string;
    x5u?: string;
    x5c?: string[];
    x5t?: string;
    "x5t#S256"?: string;
    [k: string]: any;
}

declare class KeyService extends HttpService {
    /**
     * @param type
     */
    get(type: "signing" | "encryption"): Promise<PublicKey[]>;
    /**
     * @param type
     */
    rotate(type: "signing" | "encryption"): Promise<PublicKey>;
    /**
     * @param type
     * @param kid
     */
    revoke(type: "signing" | "encryption", kid: string): Promise<void>;
}

/**
 * @public
 */
declare type KeyType_2 = "signing" | "encryption";
export { KeyType_2 as KeyType }

/**
 * @public
 */
export declare interface LDAPConnection {
    type: "enterprise";
    provider: "ldap";
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
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
         * An LDAP filter used to retrieve all user entries for synchronization. Narrow the filter to exclude non-human accounts such as system or service users.
         */
        search_all_filter?: string;
        /**
         * Specify the portion of the target subtree that should be considered
         */
        search_scope?: "base" | "one" | "sub" | "subordinate";
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
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             */
            [k: string]: string | boolean | {
                value?: string | boolean | number;
                [k: string]: any;
            } | (string | {
                value?: string | boolean | number;
                [k: string]: any;
            })[];
        };
    };
}

/**
 * Complete log entry representing a single event in the application
 * @public
 */
export declare interface LogEntry {
    /**
     * Timestamp when the log event occurred in ISO format
     */
    time: string;
    /**
     * Log level indicating the severity of the event
     */
    level: "debug" | "info" | "warn" | "error";
    /**
     * Numeric code identifying the specific type of event that occurred
     */
    event_type: string;
    /**
     * Human-readable message describing the event (may be empty)
     */
    message: string;
    /**
     * Unique identifier for the user associated with this event
     */
    user_id: string;
    /**
     * UUID identifying the specific request that generated this log entry
     */
    request_id: string;
    /**
     * IP address of the client that initiated the request
     */
    client_address: string;
    /**
     * Additional details specific to the log event
     */
    details: {
        [k: string]: any;
    };
    [k: string]: any;
}

declare class LogService extends HttpService {
    /**
     * Query over every log generated by PlusAuth belongs to your tenant.
     ### DateMath Reference[](#datemath-reference):
     If you are used to ElasticSearch, Kibana or Grafana date math queries, than you can ignore this section as PlusAuth includes  same characteristics with them.
     The expression starts with an anchor date, which can either be `now`, or a date string ending with `||`. This anchor date can optionally be followed by one or more maths expressions:
     - `+1h`: Add one hour
     - `-1d`: Subtract one day
     - `/d`: Round down to the nearest day
     The supported units are:

     | Time Unit | Duration |
     | --- | --- |
     | `y` | Years |
     | `M` | Months |
     | `w` | Weeks |
     | `d` | Days |
     | `h` | Hours |
     | `H` | Hours |
     | `m` | Minutes |
     | `s` | Seconds |

     Assuming `now` is `2001-01-01 12:00:00`, some examples are:

     | Expression | Description | Resolves To |
     | --- | --- | --- |
     | `now+1h` | `now` in milliseconds plus one hour |  `2001-01-01 13:00:00` |
     | `now-1h` | `now` in milliseconds minus one hour | `2001-01-01 11:00:00` |
     | `now-1h/d` | `now` in milliseconds minus one hour, rounded down to UTC 00:00 | `2001-01-01 00:00:00` |

     * @param queryParams Query parameters
     * @param queryParams.limit Limit the number of results returned
     * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
     * @param queryParams.from Filter logs occurred after this date. This can be a datetime string or date math expression.
     * @param queryParams.to Filter logs occurred until this date. This can be a datetime string or date math expression.
     * @param queryParams.q Filter logs occurred until this date. This can be a datetime string or date math expression.
     * @param queryParams.type Type/s of logs to be retrieved. Comma separated. Comma separated.
     Ex.: error,warning,info
     * @param queryParams.operation Retrieve logs belongs to one or more operation. Comma separated.
     Ex.: authorization.error,create.user
     * @param queryParams.include_api Set `true` to include REST API logs
     */
    getAll(queryParams?: {
        limit?: number;
        offset?: number;
        from?: string;
        to?: string;
        q?: string;
        type?: "error" | "warning" | "info";
        operation?: string;
        include_api?: boolean;
    }): Promise<{
        logs: LogEntry[];
        interval?: string | number;
        stacked?: {
            interval: string;
            level: string;
            count: string | number;
        }[];
    }>;
}

/**
 * @public
 */
export declare interface MessagebirdSmsProvider {
    type: "sms";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "messagebird";
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
export declare type MFA = {
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "push";
    provider: "native";
    settings: {
        /**
         * Firebase Cloud Messaging configuration settings.
         * To enable the FCM integration, you need to get your service account key from the [Firebase Console](https://console.firebase.google.com/).
         * - Select your project, and click the gear icon on the top of the sidebar.
         * - After opening "Project Settings", head to the "Service Accounts" tab.
         * - Click "Generate new private key", then confirm by clicking "Generate key".
         * - Clicking "Generate key" downloads the generated service account json file.
         */
        fcm: {
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
        apns: {
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
        /**
         * Push notification strategy
         */
        strategy: "code" | "prompt";
    };
} | ({
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "email";
    provider: "aws_ses";
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
        code_length: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl: number;
    };
} | {
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "email";
    provider: "postmark";
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
        code_length: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl: number;
    };
} | {
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "email";
    provider: "sendgrid";
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
        api_user?: string | null;
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl: number;
    };
} | {
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "email";
    provider: "smtp";
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
        secure?: boolean | null;
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl: number;
    };
}) | ({
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "sms";
    provider: "dataport";
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
        operator: "1" | "2" | "3" | "4";
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
        code_length: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl: number;
    };
} | {
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "sms";
    provider: "messagebird";
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
        code_length: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl: number;
    };
} | {
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "sms";
    provider: "custom";
    settings: {
        /**
         * SMS provider's hook context
         */
        hook_context: string;
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl: number;
    };
} | {
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "sms";
    provider: "3gbilisim";
    settings: {
        /**
         * If provided, sms requests will be made to this endpoint
         */
        endpoint: string;
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
        company_code: string;
        /**
         * It is the message header defined in the NetGSM (your sender name). If you want your subscriber number to be your message header, write your subscriber number to this parameter without a leading zero. 8xxxxxxxxxx
         */
        from: string;
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl: number;
    };
} | {
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "sms";
    provider: "twilio";
    settings: {
        /**
         * Your Twilio auth token
         */
        auth_token: string;
        /**
         * Your Twilio account sid.
         */
        sid: string;
        strategy: "copilot" | "from";
        /**
         * If strategy is `copilot` than this value needs to be your Twilio messaging service SID. Otherwise it is phone number for originating your messages.
         */
        from: string;
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl: number;
    };
} | {
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "sms";
    provider: "netgsm";
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
        merchant_code: string;
        /**
         * The ID information of the application published from your developer account.
         */
        app_key: string;
        /**
         * It is the message header defined in the NetGSM (your sender name). If you want your subscriber number to be your message header, write your subscriber number to this parameter without a leading zero. 8xxxxxxxxxx
         */
        from: string;
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl: number;
    };
}) | ({
    type: "otp";
    provider: "hotp";
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        /**
         * The length of the OTP code.
         */
        code_length: number;
        hash_alg: "sha1" | "sha256" | "sha512";
        window: number;
        initial_counter: number;
    };
} | {
    type: "otp";
    provider: "totp";
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        /**
         * The length of the OTP code.
         */
        code_length: number;
        hash_alg: "sha1" | "sha256" | "sha512";
        window: number;
        ttl: number;
    };
}) | {
    type: "fv";
    provider: "hitachi-h1";
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        seed: string;
    };
} | {
    type: "webauthn";
    provider: "plusauth";
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {};
} | {
    type: "e-sign";
    provider: "plusauth";
    enabled: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {};
};

declare class MfaService extends HttpService {
    /**
     * @param queryParams Query parameters
     * @param queryParams.limit Limit the number of results returned
     * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
     * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
     * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
     * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
     */
    getAll(queryParams?: {
        limit?: number;
        offset?: number;
        q?: string;
        sort_by?: string | string[];
        fields?: string | string[];
    }): Promise<{
        total: number;
        results: MFA[];
    }>;
    /**
     * @param data
     */
    create(data: MFA): Promise<MFA>;
    /**
     * @param type MFA Type
     */
    get(type: MFAType): Promise<MFA>;
    /**
     * @param type MFA Type
     * @param data Object containing to be updated values
     */
    update(type: MFAType, data: UpdateMFA): Promise<MFA>;
    /**
     * @param type MFA Type
     */
    remove(type: MFAType): Promise<void>;
}

/**
 * MFA Type
 * @public
 */
export declare type MFAType = "sms" | "otp" | "push" | "webauthn" | "email" | "e-sign" | "fv";

/**
 * @public
 */
export declare type ModuleSettings = {
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    name: "radius";
    metadata: {
        port: number;
        secret: string;
    };
    settings: {
        enabled?: boolean;
        /**
         * Only users of the selected connection will be able to authenticate through RADIUS. Leave empty if you would like to allow any user in your tenant.
         */
        connection?: string | null;
        /**
         * If true RADIUS server expects both a password and an MFA factor in the same login request from your radiusclient For Eg - If radius client sends Password + MFA token in same string e.g. password123456
         */
        use_inline_factor_challenge?: boolean;
        challenge_separator?: string;
        /**
         * The attribute name for the client IP address lookup. It could be multiple attributes separated by semicolon.
         */
        client_ip_attr?: string;
        address_allow_list?: string[];
    };
    [k: string]: any;
};

declare class ModuleSettingService extends HttpService {
    /**
     * @param name
     */
    get(name: "radius"): Promise<ModuleSettings>;
    /**
     * @param name
     * @param data Object containing to be updated values
     */
    update(name: "radius", data: UpdateModuleSettings): Promise<ModuleSettings>;
}

/**
 * @public
 */
export declare interface NativePushProvider {
    type: "push";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "native";
    settings: {
        /**
         * Firebase Cloud Messaging configuration settings.
         * To enable the FCM integration, you need to get your service account key from the [Firebase Console](https://console.firebase.google.com/).
         * - Select your project, and click the gear icon on the top of the sidebar.
         * - After opening "Project Settings", head to the "Service Accounts" tab.
         * - Click "Generate new private key", then confirm by clicking "Generate key".
         * - Clicking "Generate key" downloads the generated service account json file.
         */
        fcm: {
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
        apns: {
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
    type: "sms";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "netgsm";
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

declare interface Options {
    httpClient?: (uri: string, options: RequestInit) => Promise<any>;
    token?: string | (() => string);
    version?: string;
}

/**
 * @public
 */
export declare type OTPConnection = {
    type?: "otp";
    [k: string]: any;
} & ({
    type: "otp";
    provider: "hotp";
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        /**
         * The length of the OTP code.
         */
        code_length: number;
        hash_alg: "sha1" | "sha256" | "sha512";
        window: number;
        initial_counter: number;
    };
} | {
    type: "otp";
    provider: "totp";
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        /**
         * The length of the OTP code.
         */
        code_length: number;
        hash_alg: "sha1" | "sha256" | "sha512";
        window: number;
        ttl: number;
    };
});

/**
 * @public
 */
export declare interface OTPCredential {
    /**
     * Authenticator id
     */
    id: string;
    /**
     * Connection name
     */
    connection?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    type: "otp";
    details: {
        /**
         * Secret for recovering user's OTP credential
         */
        secret: string;
    };
}

/**
 * @public
 */
export declare interface PaginatedResult {
    [k: string]: any;
}

/**
 * @public
 */
export declare interface Pagination {
    /**
     * Limit the number of results returned
     */
    limit?: number;
    /**
     * Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
     */
    offset?: number;
    /**
     * Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
     */
    q?: string;
    /**
     * Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
     */
    sort_by?: string | string[];
    /**
     * Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
     */
    fields?: string | string[];
    [k: string]: any;
}

/**
 * @public
 */
export declare interface PasswordCredential {
    /**
     * Authenticator id
     */
    id: string;
    /**
     * Connection name
     */
    connection?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    type: "password";
    details: {
        /**
         * Hashed value of user's password.
         */
        hash: string;
        hash_fn: "bcrypt" | "argon2";
    };
}

/**
 * Password policy settings to be enforced to your new users.
 * @public
 */
export declare interface PasswordPolicy {
    /**
     * Minimum number of characters
     */
    min?: number | null;
    /**
     * Maximum number of characters
     */
    max?: number | null;
    /**
     * Require at least on of the given characters
     */
    custom_chars?: string | null;
    /**
     * The system will maintain a password history for each user and prevent the reuse of passwords included in the history. The password history can be up to 10 in size. When provided, the system will maintain existing and new users' password history going forward.
     */
    history?: number | null;
    /**
     * Require at least given value of uppercase letters
     */
    upper_case?: number | null;
    /**
     * Require at least given value of lowercase letters
     */
    lower_case?: number | null;
    /**
     * Require at least given value of numbers
     */
    number?: number | null;
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
     * Additional information related with entity
     */
    description: string | null;
}

/**
 * Applied plan name
 * @public
 */
export declare type PlanType = "free" | "basic" | "pro" | "enterprise" | "on-premise";

/**
 *
 * Entrypoint and main class of the library.
 * @example
 * ```js
 * const pa = new PlusAuthRestClient("https://mytenant.plusauth.com");
 * pa.options.token = "ACCESS_TOKEN";
 * ```
 * @example
 * Initialize with token
 * ```js
 * const pa = new PlusAuthRestClient("https://mytenant.plusauth.com", { token: "ACCESS_TOKEN" });
 * ```
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
    readonly administrators: InstanceType<typeof TenantAdministratorService>;
    readonly clients: InstanceType<typeof ClientService>;
    readonly connections: InstanceType<typeof ConnectionService>;
    readonly customDomains: InstanceType<typeof CustomDomainService>;
    readonly hooks: InstanceType<typeof HookService>;
    readonly keys: InstanceType<typeof KeyService>;
    readonly logs: InstanceType<typeof LogService>;
    readonly mfa: InstanceType<typeof MfaService>;
    readonly moduleSettings: InstanceType<typeof ModuleSettingService>;
    readonly providers: InstanceType<typeof ProviderService>;
    readonly resources: InstanceType<typeof ResourceService>;
    readonly roleGroups: InstanceType<typeof RoleGroupService>;
    readonly roles: InstanceType<typeof RoleService>;
    readonly templates: InstanceType<typeof TemplateService>;
    readonly tenants: InstanceType<typeof TenantService>;
    readonly users: InstanceType<typeof UserService>;
    readonly views: InstanceType<typeof ViewService>;
    options: Options;
    set token(token: string);
    /**
     * @param apiUri  Your PlusAuth tenant url. It must be a valid url.
     * @param options Object containing Authorization token to put in requests
     */
    constructor(apiUri: string, options?: Options);
}

/**
 * @public
 */
export declare class PlusAuthRestError extends Error {
    error?: string;
    error_description?: string;
    status?: number;
    constructor(error: Error | any);
}

/**
 * @public
 */
export declare type Provider = ({
    type: "email";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "aws_ses";
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
    type: "email";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "postmark";
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
    type: "email";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "sendgrid";
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
        api_user?: string | null;
    };
} | {
    type: "email";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "smtp";
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
        secure?: boolean | null;
    };
}) | ({
    type: "sms";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "dataport";
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
        operator: "1" | "2" | "3" | "4";
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
    type: "sms";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "messagebird";
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
    type: "sms";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "custom";
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
    type: "sms";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "3gbilisim";
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
    type: "sms";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "twilio";
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
        strategy: "copilot" | "from";
        /**
         * If strategy is `copilot` than this value needs to be your Twilio messaging service SID. Otherwise it is phone number for originating your messages.
         */
        from: string;
    };
} | {
    type: "sms";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "netgsm";
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
}) | {
    type: "push";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "native";
    settings: {
        /**
         * Firebase Cloud Messaging configuration settings.
         * To enable the FCM integration, you need to get your service account key from the [Firebase Console](https://console.firebase.google.com/).
         * - Select your project, and click the gear icon on the top of the sidebar.
         * - After opening "Project Settings", head to the "Service Accounts" tab.
         * - Click "Generate new private key", then confirm by clicking "Generate key".
         * - Clicking "Generate key" downloads the generated service account json file.
         */
        fcm: {
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
        apns: {
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
};

declare class ProviderService extends HttpService {
    /**
     */
    getEmailSettings(): Promise<EmailProvider>;
    /**
     * @param data Object containing to be updated values
     */
    updateEmailSettings(data: UpdateEmailProvider): Promise<EmailProvider>;
}

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
        key_ops?: ("sign" | "verify" | "encrypt" | "decrypt" | "wrapKey" | "unwrapKey" | "deriveKey" | "deriveBits")[];
        n: string;
        use: string;
        alg: string;
        kid: string;
        x5u?: string;
        x5c?: string[];
        x5t?: string;
        "x5t#S256"?: string;
        [k: string]: any;
    };
    /**
     * Key creation date in milliseconds since the epoch
     */
    created_at: number;
    /**
     * Rotation time in milliseconds since the epoch
     */
    rotated_at?: number | null;
    /**
     * Revocation time in milliseconds since the epoch
     */
    revoked_at?: number | null;
    [k: string]: any;
}

/**
 * Resource Object with name and description properties.
 * @public
 */
export declare interface PushAuthPlusAccount {
    /**
     * Unique identifier of entity
     */
    id: string;
    name: string | null;
    details: {
        secret: string;
        hash_alg: "sha1" | "sha256" | "sha512";
        /**
         * The length of the OTP code.
         */
        code_length: number;
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
    icon: string | null;
    category_id?: string | null;
    /**
     * Category order
     */
    order?: number;
    type: "push";
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
}

/**
 * @public
 */
export declare type PushConnection = {
    type?: "push";
    [k: string]: any;
} & {
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "push";
    provider: "native";
    settings: {
        /**
         * Firebase Cloud Messaging configuration settings.
         * To enable the FCM integration, you need to get your service account key from the [Firebase Console](https://console.firebase.google.com/).
         * - Select your project, and click the gear icon on the top of the sidebar.
         * - After opening "Project Settings", head to the "Service Accounts" tab.
         * - Click "Generate new private key", then confirm by clicking "Generate key".
         * - Clicking "Generate key" downloads the generated service account json file.
         */
        fcm: {
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
        apns: {
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
        /**
         * @maxItems 1000
         */
        enabled_clients: string[];
        branding: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Push notification strategy
         */
        strategy: "code" | "prompt";
    };
};

/**
 * @public
 */
export declare interface PushCredential {
    /**
     * Authenticator id
     */
    id: string;
    /**
     * Connection name
     */
    connection?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    type: "push";
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
                key_ops?: ("sign" | "verify" | "encrypt" | "decrypt" | "wrapKey" | "unwrapKey" | "deriveKey" | "deriveBits")[];
                n: string;
                use: string;
                alg: string;
                kid: string;
                x5u?: string;
                x5c?: string[];
                x5t?: string;
                "x5t#S256"?: string;
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
}

/**
 * @public
 */
export declare type PushNotificationProvider = {
    type?: "push";
    [k: string]: any;
} & {
    type: "push";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "native";
    settings: {
        /**
         * Firebase Cloud Messaging configuration settings.
         * To enable the FCM integration, you need to get your service account key from the [Firebase Console](https://console.firebase.google.com/).
         * - Select your project, and click the gear icon on the top of the sidebar.
         * - After opening "Project Settings", head to the "Service Accounts" tab.
         * - Click "Generate new private key", then confirm by clicking "Generate key".
         * - Clicking "Generate key" downloads the generated service account json file.
         */
        fcm: {
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
        apns: {
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
};

/**
 * @public
 */
export declare interface RadiusSettings {
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    name: "radius";
    metadata: {
        port: number;
        secret: string;
    };
    settings: {
        enabled?: boolean;
        /**
         * Only users of the selected connection will be able to authenticate through RADIUS. Leave empty if you would like to allow any user in your tenant.
         */
        connection?: string | null;
        /**
         * If true RADIUS server expects both a password and an MFA factor in the same login request from your radiusclient For Eg - If radius client sends Password + MFA token in same string e.g. password123456
         */
        use_inline_factor_challenge?: boolean;
        challenge_separator?: string;
        /**
         * The attribute name for the client IP address lookup. It could be multiple attributes separated by semicolon.
         */
        client_ip_attr?: string;
        address_allow_list?: string[];
    };
    [k: string]: any;
}

/**
 * Resource Object with name and description properties.
 * @public
 */
export declare interface Resource {
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
     * Additional information related with entity
     */
    description: string | null;
    system: boolean;
    settings?: {
        access_token_ttl?: number;
        include_user_roles?: boolean;
    };
}

/**
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
    [k: string]: any;
}

declare class ResourceService extends HttpService {
    /**
     * @param resourceId Resource identifier
     * @param queryParams Query parameters
     * @param queryParams.limit Limit the number of results returned
     * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
     * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
     * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
     * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
     */
    getPermissions(resourceId: string, queryParams?: {
        limit?: number;
        offset?: number;
        q?: string;
        sort_by?: string | string[];
        fields?: string | string[];
    }): Promise<{
        total: number;
        results: Permission[];
    }>;
    /**
     * @param resourceId Resource identifier
     * @param data Permission object
     */
    createPermission(resourceId: string, data: CreatePermission): Promise<Permission>;
    /**
     * @param resourceId Resource identifier
     * @param permissionId Permission identifier
     */
    removePermission(resourceId: string, permissionId: string): Promise<void>;
    /**
     * @param resourceId Resource identifier
     * @param queryParams Query parameters
     * @param queryParams.limit Limit the number of results returned
     * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
     * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
     * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
     * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
     */
    getAuthorizedClients(resourceId: string, queryParams?: {
        limit?: number;
        offset?: number;
        q?: string;
        sort_by?: string | string[];
        fields?: string | string[];
    }): Promise<{
        total: number;
        results: ResourceAuthorizedClient[];
    }>;
    /**
     * @param resourceId Resource identifier
     * @param clientIdList List of client ID's to be authorized
     */
    authorizeClients(resourceId: string, clientIdList: string[]): Promise<void>;
    /**
     * @param resourceId Resource identifier
     * @param clientIdList List of client ID's to be unauthorized
     */
    unauthorizeClients(resourceId: string, clientIdList: string[]): Promise<void>;
    /**
     * @param resourceId Resource identifier
     * @param clientId Client identifier
     */
    getAssignedPermissionsToClient(resourceId: string, clientId: string): Promise<Permission[]>;
    /**
     * @param resourceId Resource identifier
     * @param clientId Client identifier
     * @param permissionIdList List of permission ID's to be authorized
     */
    authorizePermissionsToClient(resourceId: string, clientId: string, permissionIdList: string[]): Promise<void>;
    /**
     * @param resourceId Resource identifier
     * @param clientId Client identifier
     * @param permissionIdList List of permission ID's to be unauthorized
     */
    unauthorizePermissionsFromClient(resourceId: string, clientId: string, permissionIdList: string[]): Promise<void>;
    /**
     * @param queryParams Query parameters
     * @param queryParams.limit Limit the number of results returned
     * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
     * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
     * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
     * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
     */
    getAll(queryParams?: {
        limit?: number;
        offset?: number;
        q?: string;
        sort_by?: string | string[];
        fields?: string | string[];
    }): Promise<{
        total: number;
        results: Resource[];
    }>;
    /**
     * @param data Resource Object with name and description properties.
     */
    create(data: CreateResource): Promise<Resource>;
    /**
     * @param resourceId Resource identifier
     */
    get(resourceId: string): Promise<Resource>;
    /**
     * @param resourceId Resource identifier
     * @param data Resource Object with name and description properties.
     */
    update(resourceId: string, data: UpdateResource): Promise<Resource>;
    /**
     * @param resourceId Resource identifier
     */
    remove(resourceId: string): Promise<void>;
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
     * Additional information related with entity
     */
    description: string | null;
    /**
     * If `true` this role will be assigned to new users automatically.
     */
    assign_on_signup: boolean;
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
     * Additional information related with entity
     */
    description: string | null;
    /**
     * If `true` this role group will be assigned to new users automatically.
     */
    assign_on_signup: boolean;
}

declare class RoleGroupService extends HttpService {
    /**
     * @param queryParams Query parameters
     * @param queryParams.limit Limit the number of results returned
     * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
     * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
     * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
     * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
     */
    getAll(queryParams?: {
        limit?: number;
        offset?: number;
        q?: string;
        sort_by?: string | string[];
        fields?: string | string[];
    }): Promise<{
        total: number;
        results: RoleGroup[];
    }>;
    /**
     * @param data Role Group object
     */
    create(data: CreateRoleGroup): Promise<RoleGroup>;
    /**
     * @param roleGroupId Role Group identifier
     */
    get(roleGroupId: string): Promise<RoleGroup>;
    /**
     * @param roleGroupId Role Group identifier
     * @param data Object containing to be updated values
     */
    update(roleGroupId: string, data: UpdateRoleGroup): Promise<RoleGroup>;
    /**
     * @param roleGroupId Role Group identifier
     */
    remove(roleGroupId: string): Promise<void>;
    /**
     * @param roleGroupId Role Group identifier
     */
    getRoles(roleGroupId: string): Promise<{
        total: number;
        results: Role[];
    }>;
    /**
     * @param roleGroupId Role Group identifier
     * @param roleIdList List of role ID's to be assigned to the role group
     */
    assignRoles(roleGroupId: string, roleIdList: string[]): Promise<void>;
    /**
     * @param roleGroupId Role Group identifier
     * @param roleIdList List of role ID's to be unassigned from the role group
     */
    unassignRoles(roleGroupId: string, roleIdList: string[]): Promise<void>;
    /**
     * @param roleGroupId Role Group identifier
     * @param queryParams Query parameters
     * @param queryParams.limit Limit the number of results returned
     * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
     * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
     * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
     * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
     */
    getUsers(roleGroupId: string, queryParams?: {
        limit?: number;
        offset?: number;
        q?: string;
        sort_by?: string | string[];
        fields?: string | string[];
    }): Promise<{
        total: number;
        results: User[];
    }>;
}

declare class RoleService extends HttpService {
    /**
     * @param queryParams Query parameters
     * @param queryParams.limit Limit the number of results returned
     * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
     * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
     * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
     * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
     */
    getAll(queryParams?: {
        limit?: number;
        offset?: number;
        q?: string;
        sort_by?: string | string[];
        fields?: string | string[];
    }): Promise<{
        total: number;
        results: Role[];
    }>;
    /**
     * @param data Role object
     */
    create(data: CreateRole): Promise<Role>;
    /**
     * @param roleId Role identifier
     */
    get(roleId: string): Promise<Role>;
    /**
     * @param roleId Role identifier
     * @param data Object containing to be updated values
     */
    update(roleId: string, data: UpdateRole): Promise<Role>;
    /**
     * @param roleId Role identifier
     */
    remove(roleId: string): Promise<void>;
    /**
     * @param roleId Role identifier
     * @param queryParams Query parameters
     * @param queryParams.limit Limit the number of results returned
     * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
     * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
     * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
     * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
     */
    getPermissions(roleId: string, queryParams?: {
        limit?: number;
        offset?: number;
        q?: string;
        sort_by?: string | string[];
        fields?: string | string[];
    }): Promise<{
        total: number;
        results: Permission[];
    }>;
    /**
     * @param roleId Role identifier
     * @param permissionIdList List of permission ID's to be assigned to the role
     */
    assignPermissions(roleId: string, permissionIdList: string[]): Promise<void>;
    /**
     * @param roleId Role identifier
     * @param permissionIdList List of permission ID's to be unassigned from the role
     */
    unassignPermissions(roleId: string, permissionIdList: string[]): Promise<void>;
    /**
     * @param roleId Role identifier
     * @param queryParams Query parameters
     * @param queryParams.limit Limit the number of results returned
     * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
     * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
     * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
     * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
     */
    getUsers(roleId: string, queryParams?: {
        limit?: number;
        offset?: number;
        q?: string;
        sort_by?: string | string[];
        fields?: string | string[];
    }): Promise<{
        total: number;
        results: User[];
    }>;
}

/**
 * @public
 */
export declare interface SAMLConnection {
    type: "enterprise";
    provider: "saml";
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
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
        sign_out_url?: string | null;
        signing_certificate?: string | null;
        /**
         * Enable/Disable the SAML authentication request signing.
         */
        sign_request?: boolean;
        sign_request_algorithm: "sha512" | "sha256" | "sha1";
        /**
         * SAML Request Binding
         */
        request_binding: "HTTP-POST" | "HTTP-Redirect";
        /**
         * SAML Logout Request Binding
         */
        sign_out_binding?: "HTTP-POST" | "HTTP-Redirect";
        mappings: {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             */
            [k: string]: string | boolean | {
                value?: string | boolean | number;
                [k: string]: any;
            } | (string | {
                value?: string | boolean | number;
                [k: string]: any;
            })[];
        };
    };
}

/**
 * @public
 */
export declare type SmsConnection = {
    type?: "sms";
    [k: string]: any;
} & ({
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "sms";
    provider: "dataport";
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
        operator: "1" | "2" | "3" | "4";
        /**
         * Short code of operator used for sendind messages
         */
        short_number: string;
        /**
         * Orginator value
         */
        from: string;
        /**
         * @maxItems 1000
         */
        enabled_clients: string[];
        branding: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl: number;
    };
} | {
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "sms";
    provider: "messagebird";
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
         * @maxItems 1000
         */
        enabled_clients: string[];
        branding: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl: number;
    };
} | {
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "sms";
    provider: "custom";
    settings: {
        /**
         * SMS provider's hook context
         */
        hook_context: string;
        /**
         * @maxItems 1000
         */
        enabled_clients: string[];
        branding: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl: number;
    };
} | {
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "sms";
    provider: "3gbilisim";
    settings: {
        /**
         * If provided, sms requests will be made to this endpoint
         */
        endpoint: string;
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
        company_code: string;
        /**
         * It is the message header defined in the NetGSM (your sender name). If you want your subscriber number to be your message header, write your subscriber number to this parameter without a leading zero. 8xxxxxxxxxx
         */
        from: string;
        /**
         * @maxItems 1000
         */
        enabled_clients: string[];
        branding: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl: number;
    };
} | {
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "sms";
    provider: "twilio";
    settings: {
        /**
         * Your Twilio auth token
         */
        auth_token: string;
        /**
         * Your Twilio account sid.
         */
        sid: string;
        strategy: "copilot" | "from";
        /**
         * If strategy is `copilot` than this value needs to be your Twilio messaging service SID. Otherwise it is phone number for originating your messages.
         */
        from: string;
        /**
         * @maxItems 1000
         */
        enabled_clients: string[];
        branding: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl: number;
    };
} | {
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type: "sms";
    provider: "netgsm";
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
        merchant_code: string;
        /**
         * The ID information of the application published from your developer account.
         */
        app_key: string;
        /**
         * It is the message header defined in the NetGSM (your sender name). If you want your subscriber number to be your message header, write your subscriber number to this parameter without a leading zero. 8xxxxxxxxxx
         */
        from: string;
        /**
         * @maxItems 1000
         */
        enabled_clients: string[];
        branding: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl: number;
    };
});

/**
 * @public
 */
export declare type SmsProvider = {
    type?: "sms";
    [k: string]: any;
} & ({
    type: "sms";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "dataport";
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
        operator: "1" | "2" | "3" | "4";
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
    type: "sms";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "messagebird";
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
    type: "sms";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "custom";
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
    type: "sms";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "3gbilisim";
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
    type: "sms";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "twilio";
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
        strategy: "copilot" | "from";
        /**
         * If strategy is `copilot` than this value needs to be your Twilio messaging service SID. Otherwise it is phone number for originating your messages.
         */
        from: string;
    };
} | {
    type: "sms";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "netgsm";
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
});

/**
 * @public
 */
export declare interface SmsTemplate {
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    content: string;
    is_default?: boolean | null;
    type: "sms";
    name: "verification-code" | "test";
}

/**
 * @public
 */
export declare type SocialConnection = {
    type?: "social";
    [k: string]: any;
} & ({
    type: "social";
    provider: "apple";
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        client_id: string;
        key_id: string;
        private_key: string;
        team_id: string;
        /**
         * @maxItems 50
         */
        scopes?: string[];
    };
} | {
    type: "social";
    provider: "amazon" | "dribbble" | "facebook" | "github" | "google" | "linkedin" | "microsoft" | "slack" | "spotify";
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        client_id: string;
        client_secret: string;
        /**
         * @maxItems 50
         */
        scopes?: string[];
    };
} | {
    type: "social";
    provider: "custom-oauth2";
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        extra_params: {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             */
            [k: string]: string;
        };
        extra_headers: {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             */
            [k: string]: string;
        };
        client_id: string;
        client_secret: string;
        authorization_url: string;
        token_url: string;
        /**
         * @maxItems 1000
         */
        scopes?: string[];
    };
} | {
    type: "social";
    provider: "dropbox";
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        app_key: string;
        app_secret: string;
        /**
         * @maxItems 50
         */
        scopes?: string[];
    };
} | {
    type: "social";
    provider: "twitter";
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        consumer_key: string;
        consumer_secret: string;
        /**
         * @maxItems 50
         */
        scopes?: string[];
    };
});

/**
 * Details about the subscription usage
 * @public
 */
export declare interface SubscriptionUsage {
    active_user?: boolean | number | {
        max: number;
        min: number;
        step: number;
        type: "range";
    };
    administrators?: boolean | number;
    /**
     * Is feature enabled or not
     */
    ciba?: boolean;
    "connections.passwordless"?: boolean | number;
    "connections.social"?: boolean | number;
    "connections.enterprise.saml"?: boolean | number;
    "connections.enterprise.e_devlet"?: boolean | number;
    "connections.enterprise.ldap"?: boolean | number;
    /**
     * Is feature enabled or not
     */
    custom_algorithm?: boolean;
    custom_domain?: boolean | number;
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
    hooks?: boolean | number;
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
    mfa?: boolean | number;
    "mfa.sms"?: boolean;
    "mfa.otp"?: boolean;
    "mfa.fv"?: boolean;
    "mfa.push"?: boolean;
    "mfa.email"?: boolean;
    "mfa.e_sign"?: boolean;
    "mfa.webauthn"?: boolean;
    /**
     * Is feature enabled or not
     */
    password_history?: boolean;
    /**
     * Is feature enabled or not
     */
    radius?: boolean;
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
export declare type Template = {
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    content: string;
    is_default?: boolean | null;
    type: "email";
    name: "welcome" | "verification-code" | "magic-link" | "verify-email" | "reset-password" | "invite-admin" | "payment-failed" | "plan-downgraded" | "blocked-account" | "blocked-ip" | "test";
    details: {
        /**
         * `from` field for your emails
         */
        from: string;
        /**
         * `subject` field for your emails.
         */
        subject: string;
        [k: string]: any;
    };
} | {
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    content: string;
    is_default?: boolean | null;
    type: "sms";
    name: "verification-code" | "test";
};

declare class TemplateService extends HttpService {
    /**
     * @param type
     * @param name
     */
    get(type: "sms" | "email", name: "welcome" | "verification-code" | "magic-link" | "verify-email" | "reset-password" | "invite-admin" | "payment-failed" | "plan-downgraded" | "blocked-account" | "blocked-ip" | "test"): Promise<Template>;
    /**
     * @param type
     * @param name
     * @param data Object containing to be updated values
     */
    update(type: "sms" | "email", name: "welcome" | "verification-code" | "magic-link" | "verify-email" | "reset-password" | "invite-admin" | "payment-failed" | "plan-downgraded" | "blocked-account" | "blocked-ip" | "test", data: UpdateTemplate): Promise<Template>;
    /**
     * @param type
     * @param name
     */
    reset(type: "sms" | "email", name: "welcome" | "verification-code" | "magic-link" | "verify-email" | "reset-password" | "invite-admin" | "payment-failed" | "plan-downgraded" | "blocked-account" | "blocked-ip" | "test"): Promise<void>;
}

/**
 * @public
 */
export declare type TemplateType = "email" | "sms";

/**
 * @public
 */
export declare interface Tenant {
    /**
     * Your tenant's identifier.
     */
    tenant_id: string;
    region: "tr-1";
    settings: {
        branding?: {
            display_name?: string | null;
        };
        default_strategy?: string | null;
        user_self_deletion?: {
            /**
             * Allow end-users to delete their accounts. This enables the `delete-account` prompt which you can request to allow users delete their accounts.
             */
            enabled?: boolean;
            [k: string]: any;
        };
        auto_sign_in: boolean;
        register_enabled: boolean;
        forgot_password_enabled: boolean;
        environment_variables: {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             */
            [k: string]: string;
        };
        expose_unsafe_errors: boolean;
        welcome_emails_enabled: boolean;
        force_email_verification: boolean;
        /**
         * @maxItems 50
         */
        extra_params: string[];
        /**
         * @maxItems 50
         */
        acr_values: string[];
        /**
         * @maxItems 50
         */
        extra_scopes: string[];
        api_version?: "2021-07-04";
        tenant_login_url: string | null;
        /**
         * PlusAuth Authenticator Application related settings
         */
        authenticator: {
            /**
             * Should authenticator application logout if a SIM card change detected on device
             */
            bind_sim: boolean;
            [k: string]: any;
        };
        ciba: {
            delivery_mode: "ping" | "poll";
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
            session: number;
        };
        hash_function: "bcrypt" | "argon2";
        policies: {
            /**
             * Password policy settings to be enforced to your new users.
             */
            password: {
                /**
                 * Minimum number of characters
                 */
                min?: number | null;
                /**
                 * Maximum number of characters
                 */
                max?: number | null;
                /**
                 * Require at least on of the given characters
                 */
                custom_chars?: string | null;
                /**
                 * The system will maintain a password history for each user and prevent the reuse of passwords included in the history. The password history can be up to 10 in size. When provided, the system will maintain existing and new users' password history going forward.
                 */
                history?: number | null;
                /**
                 * Require at least given value of uppercase letters
                 */
                upper_case?: number | null;
                /**
                 * Require at least given value of lowercase letters
                 */
                lower_case?: number | null;
                /**
                 * Require at least given value of numbers
                 */
                number?: number | null;
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
                 *
                 * @maxItems 1000
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
    updated_at?: string | null;
    keystore: {
        /**
         * Public JWK. You can look at JWK specification from [here](https://www.rfc-editor.org/rfc/rfc7517)
         */
        key: {
            kty: string;
            e: string;
            key_ops?: ("sign" | "verify" | "encrypt" | "decrypt" | "wrapKey" | "unwrapKey" | "deriveKey" | "deriveBits")[];
            n: string;
            use: string;
            alg: string;
            kid: string;
            x5u?: string;
            x5c?: string[];
            x5t?: string;
            "x5t#S256"?: string;
            [k: string]: any;
        };
        /**
         * Key creation date in milliseconds since the epoch
         */
        created_at: number;
        /**
         * Rotation time in milliseconds since the epoch
         */
        rotated_at?: number | null;
        /**
         * Revocation time in milliseconds since the epoch
         */
        revoked_at?: number | null;
        [k: string]: any;
    }[];
    /**
     * Subscription details of tenant
     */
    subscription: {
        issued_at?: string | null;
        expires_at?: string | null;
        /**
         * Applied plan name
         */
        plan: "free" | "basic" | "pro" | "enterprise" | "on-premise";
        /**
         * Details about the subscription usage
         */
        plan_details: {
            active_user?: boolean | number | {
                max: number;
                min: number;
                step: number;
                type: "range";
            };
            administrators?: boolean | number;
            /**
             * Is feature enabled or not
             */
            ciba?: boolean;
            "connections.passwordless"?: boolean | number;
            "connections.social"?: boolean | number;
            "connections.enterprise.saml"?: boolean | number;
            "connections.enterprise.e_devlet"?: boolean | number;
            "connections.enterprise.ldap"?: boolean | number;
            /**
             * Is feature enabled or not
             */
            custom_algorithm?: boolean;
            custom_domain?: boolean | number;
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
            hooks?: boolean | number;
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
            mfa?: boolean | number;
            "mfa.sms"?: boolean;
            "mfa.otp"?: boolean;
            "mfa.fv"?: boolean;
            "mfa.push"?: boolean;
            "mfa.email"?: boolean;
            "mfa.e_sign"?: boolean;
            "mfa.webauthn"?: boolean;
            /**
             * Is feature enabled or not
             */
            password_history?: boolean;
            /**
             * Is feature enabled or not
             */
            radius?: boolean;
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

declare class TenantAdministratorService extends HttpService {
    /**
     * @param tenantId Tenant identifier
     * @param invitationDetails Invitation details
     */
    invite(tenantId: string, invitationDetails: {
        email: string;
        permissions?: string[];
    }): Promise<void>;
    /**
     * @param tenantId Tenant identifier
     */
    getAll(tenantId: string): Promise<TenantAdministrator[]>;
    /**
     * @param tenantId Tenant identifier
     * @param adminId Administrator identifier
     */
    remove(tenantId: string, adminId: string): Promise<void>;
    /**
     * @param tenantId Tenant identifier
     * @param adminId Administrator identifier
     * @param permissionIdList List of permission IDs to be assigned
     */
    assignPermissions(tenantId: string, adminId: string, permissionIdList: string[]): Promise<void>;
    /**
     * @param tenantId Tenant identifier
     * @param adminId Administrator identifier
     * @param permissionIdList List of permission IDs to be unassigned
     */
    unassignPermissions(tenantId: string, adminId: string, permissionIdList: string[]): Promise<void>;
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
    enabled: boolean;
    verification_value?: string;
    mx_record: {
        value: string;
        type: "CNAME" | "TXT";
        [k: string]: any;
    };
}

declare class TenantService extends HttpService {
    /**
     * @param data Tenant object
     */
    create(data: CreateTenant): Promise<Tenant>;
    /**
     * @param tenantId Tenant identifier
     */
    remove(tenantId: string): Promise<void>;
    /**
     * @param tenantId Tenant identifier
     */
    getStats(tenantId: string): Promise<TenantStats>;
    /**
     * @param tenantId Tenant identifier
     */
    getSettings(tenantId: string): Promise<TenantSettings>;
    /**
     * @param tenantId Tenant identifier
     * @param data Object containing to be updated values
     */
    updateSettings(tenantId: string, data: UpdateTenantSettings): Promise<TenantSettings>;
    /**
     * @param tenantId Tenant identifier
     */
    getSubscription(tenantId: string): Promise<TenantSubscription>;
}

/**
 * @public
 */
export declare interface TenantSettings {
    branding?: {
        display_name?: string | null;
    };
    default_strategy?: string | null;
    user_self_deletion?: {
        /**
         * Allow end-users to delete their accounts. This enables the `delete-account` prompt which you can request to allow users delete their accounts.
         */
        enabled?: boolean;
        [k: string]: any;
    };
    auto_sign_in: boolean;
    register_enabled: boolean;
    forgot_password_enabled: boolean;
    environment_variables: {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^(.*)$".
         */
        [k: string]: string;
    };
    expose_unsafe_errors: boolean;
    welcome_emails_enabled: boolean;
    force_email_verification: boolean;
    /**
     * @maxItems 50
     */
    extra_params: string[];
    /**
     * @maxItems 50
     */
    acr_values: string[];
    /**
     * @maxItems 50
     */
    extra_scopes: string[];
    api_version?: "2021-07-04";
    tenant_login_url: string | null;
    /**
     * PlusAuth Authenticator Application related settings
     */
    authenticator: {
        /**
         * Should authenticator application logout if a SIM card change detected on device
         */
        bind_sim: boolean;
        [k: string]: any;
    };
    ciba: {
        delivery_mode: "ping" | "poll";
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
        session: number;
    };
    hash_function: "bcrypt" | "argon2";
    policies: {
        /**
         * Password policy settings to be enforced to your new users.
         */
        password: {
            /**
             * Minimum number of characters
             */
            min?: number | null;
            /**
             * Maximum number of characters
             */
            max?: number | null;
            /**
             * Require at least on of the given characters
             */
            custom_chars?: string | null;
            /**
             * The system will maintain a password history for each user and prevent the reuse of passwords included in the history. The password history can be up to 10 in size. When provided, the system will maintain existing and new users' password history going forward.
             */
            history?: number | null;
            /**
             * Require at least given value of uppercase letters
             */
            upper_case?: number | null;
            /**
             * Require at least given value of lowercase letters
             */
            lower_case?: number | null;
            /**
             * Require at least given value of numbers
             */
            number?: number | null;
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
             *
             * @maxItems 1000
             */
            white_list: string[];
        };
    };
}

/**
 * @public
 */
export declare interface TenantStats {
    usage: {
        data: {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             */
            [k: string]: string;
        };
        date: string;
        monthly: boolean;
    }[];
    total_clients: number;
    total_hooks: number;
    total_users: number;
    total_resources: number;
}

/**
 * Subscription details of tenant
 * @public
 */
export declare interface TenantSubscription {
    issued_at?: string | null;
    expires_at?: string | null;
    /**
     * Applied plan name
     */
    plan: "free" | "basic" | "pro" | "enterprise" | "on-premise";
    /**
     * Details about the subscription usage
     */
    plan_details: {
        active_user?: boolean | number | {
            max: number;
            min: number;
            step: number;
            type: "range";
        };
        administrators?: boolean | number;
        /**
         * Is feature enabled or not
         */
        ciba?: boolean;
        "connections.passwordless"?: boolean | number;
        "connections.social"?: boolean | number;
        "connections.enterprise.saml"?: boolean | number;
        "connections.enterprise.e_devlet"?: boolean | number;
        "connections.enterprise.ldap"?: boolean | number;
        /**
         * Is feature enabled or not
         */
        custom_algorithm?: boolean;
        custom_domain?: boolean | number;
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
        hooks?: boolean | number;
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
        mfa?: boolean | number;
        "mfa.sms"?: boolean;
        "mfa.otp"?: boolean;
        "mfa.fv"?: boolean;
        "mfa.push"?: boolean;
        "mfa.email"?: boolean;
        "mfa.e_sign"?: boolean;
        "mfa.webauthn"?: boolean;
        /**
         * Is feature enabled or not
         */
        password_history?: boolean;
        /**
         * Is feature enabled or not
         */
        radius?: boolean;
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
    type: "sms";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "3gbilisim";
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
    used?: boolean;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at: string;
    user_id?: string;
    email?: string;
    client_id?: string;
    details?: {
        [k: string]: string | number | boolean;
    };
    type: "verify-email" | "forgot-password" | "invite-admin" | "unblock-ip" | "unblock-account";
    token?: string;
}

/**
 * Resource Object with name and description properties.
 * @public
 */
export declare interface TOTPAuthPlusAccount {
    /**
     * Unique identifier of entity
     */
    id: string;
    name: string | null;
    details: {
        secret: string;
        hash_alg: "sha1" | "sha256" | "sha512";
        /**
         * The length of the OTP code.
         */
        code_length: number;
        ttl: number;
    };
    icon: string | null;
    category_id?: string | null;
    /**
     * Category order
     */
    order?: number;
    type: "totp";
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
}

/**
 * @public
 */
export declare interface TOTPConnection {
    type: "otp";
    provider: "totp";
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        /**
         * The length of the OTP code.
         */
        code_length: number;
        hash_alg: "sha1" | "sha256" | "sha512";
        window: number;
        ttl: number;
    };
}

/**
 * @public
 */
export declare interface TwilioSmsProvider {
    type: "sms";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "twilio";
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
        strategy: "copilot" | "from";
        /**
         * If strategy is `copilot` than this value needs to be your Twilio messaging service SID. Otherwise it is phone number for originating your messages.
         */
        from: string;
    };
}

/**
 * Resource Object with name and description properties.
 * @public
 */
export declare interface UpdateAuthPlusAccount {
    name: string | null;
    icon: string | null;
    /**
     * Category order
     */
    order?: number;
    category_id?: string | null;
    details: {
        [k: string]: any;
    };
}

/**
 * Category definition to AuthPlus application
 * @public
 */
export declare interface UpdateAuthPlusCategory {
    /**
     * Category name
     */
    name: string | null;
    /**
     * Category order
     */
    order?: number;
}

/**
 * Registered device to AuthPlus application
 * @public
 */
export declare interface UpdateAuthPlusDevice {
    name?: string | null;
    details: {
        [k: string]: any;
    };
    os: string;
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
    description?: string | null;
    logo_uri?: string | null;
    /**
     * Is client first party
     */
    first_party?: boolean | null;
    token_endpoint_auth_method?: string;
    response_types?: ("code id_token token" | "code id_token" | "code token" | "code" | "id_token token" | "id_token" | "none")[];
    oidc_conformant?: boolean | null;
    /**
     * @maxItems 50
     */
    redirect_uris?: string[];
    /**
     * @maxItems 50
     */
    logout_uris?: string[];
    /**
     * @maxItems 20
     */
    grant_types?: string[];
    advanced?: {
        pkce_required?: boolean;
        devices?: {
            android?: {
                package_name?: string | null;
                sha256_fingerprints?: string;
            };
            ios?: {
                bundle_identifier?: string | null;
                team_id?: string | null;
            };
        };
    };
    extra_metadata?: {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^(.*)$".
         */
        [k: string]: string | boolean | number | null;
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
            relay_state?: string | null;
            mappings?: {
                /**
                 * This interface was referenced by `undefined`'s JSON-Schema definition
                 * via the `patternProperty` "^(.*)$".
                 */
                [k: string]: string | boolean | {
                    value?: string | boolean | number;
                    [k: string]: any;
                } | (string | {
                    value?: string | boolean | number;
                    [k: string]: any;
                })[];
            };
            /**
             * Your SAML SP's metadata URL.
             */
            metadata_url?: string;
            request_binding?: "HTTP-POST" | "HTTP-Redirect";
            sign_assertions?: boolean;
            sign_out_enabled?: boolean;
            sign_out_url?: string;
            signed_requests?: boolean;
            signature_algorithm?: "sha512" | "sha256" | "sha1";
            signing_certificate?: string | null;
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
        keys?: {
            [k: string]: any;
        }[];
    };
}

/**
 * @public
 */
export declare type UpdateConnection = ({
    enabled?: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name?: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type?: "email";
    provider?: "aws_ses";
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
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        use_magic_link?: boolean;
    };
} | {
    enabled?: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name?: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type?: "email";
    provider?: "postmark";
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
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        use_magic_link?: boolean;
    };
} | {
    enabled?: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name?: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type?: "email";
    provider?: "sendgrid";
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
        api_user?: string | null;
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        use_magic_link?: boolean;
    };
} | {
    enabled?: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name?: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type?: "email";
    provider?: "smtp";
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
        secure?: boolean | null;
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        use_magic_link?: boolean;
    };
}) | ({
    enabled?: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name?: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type?: "sms";
    provider?: "dataport";
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
        operator?: "1" | "2" | "3" | "4";
        /**
         * Short code of operator used for sendind messages
         */
        short_number?: string;
        /**
         * Orginator value
         */
        from?: string;
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
    };
} | {
    enabled?: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name?: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type?: "sms";
    provider?: "messagebird";
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
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
    };
} | {
    enabled?: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name?: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type?: "sms";
    provider?: "custom";
    settings?: {
        /**
         * SMS provider's hook context
         */
        hook_context?: string;
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
    };
} | {
    enabled?: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name?: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type?: "sms";
    provider?: "3gbilisim";
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
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
    };
} | {
    enabled?: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name?: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type?: "sms";
    provider?: "twilio";
    settings?: {
        /**
         * Your Twilio auth token
         */
        auth_token?: string;
        /**
         * Your Twilio account sid.
         */
        sid?: string;
        strategy?: "copilot" | "from";
        /**
         * If strategy is `copilot` than this value needs to be your Twilio messaging service SID. Otherwise it is phone number for originating your messages.
         */
        from?: string;
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
    };
} | {
    enabled?: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name?: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type?: "sms";
    provider?: "netgsm";
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
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
    };
}) | ({
    is_default?: boolean;
    type: "social";
    provider?: "apple";
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings?: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        client_id?: string;
        key_id?: string;
        private_key?: string;
        team_id?: string;
        /**
         * @maxItems 50
         */
        scopes?: string[];
    };
} | {
    is_default?: boolean;
    type: "social";
    provider?: "amazon" | "dribbble" | "facebook" | "github" | "google" | "linkedin" | "microsoft" | "slack" | "spotify";
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings?: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        client_id?: string;
        client_secret?: string;
        /**
         * @maxItems 50
         */
        scopes?: string[];
    };
} | {
    is_default?: boolean;
    type: "social";
    provider?: "custom-oauth2";
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings?: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        extra_params?: {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             */
            [k: string]: string;
        };
        extra_headers?: {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             */
            [k: string]: string;
        };
        client_id?: string;
        client_secret?: string;
        authorization_url?: string;
        token_url?: string;
        /**
         * @maxItems 1000
         */
        scopes?: string[];
    };
} | {
    is_default?: boolean;
    type: "social";
    provider?: "dropbox";
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings?: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        app_key?: string;
        app_secret?: string;
        /**
         * @maxItems 50
         */
        scopes?: string[];
    };
} | {
    is_default?: boolean;
    type: "social";
    provider?: "twitter";
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings?: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        consumer_key?: string;
        consumer_secret?: string;
        /**
         * @maxItems 50
         */
        scopes?: string[];
    };
}) | ({
    enabled?: boolean;
    updated_at?: string | null;
    created_at?: string;
    is_default?: boolean;
    type: "enterprise";
    provider: "ldap";
    settings?: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
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
         * An LDAP filter used to retrieve all user entries for synchronization. Narrow the filter to exclude non-human accounts such as system or service users.
         */
        search_all_filter?: string;
        /**
         * Specify the portion of the target subtree that should be considered
         */
        search_scope?: "base" | "one" | "sub" | "subordinate";
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
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             *
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             */
            [k: string]: string | boolean | {
                value?: string | boolean | number;
                [k: string]: any;
            } | (string | {
                value?: string | boolean | number;
                [k: string]: any;
            })[];
        };
    };
} | {
    enabled?: boolean;
    updated_at?: string | null;
    created_at?: string;
    is_default?: boolean;
    type: "enterprise";
    provider: "saml";
    settings?: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
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
        sign_out_url?: string | null;
        signing_certificate?: string | null;
        /**
         * Enable/Disable the SAML authentication request signing.
         */
        sign_request?: boolean;
        sign_request_algorithm?: "sha512" | "sha256" | "sha1";
        /**
         * SAML Request Binding
         */
        request_binding?: "HTTP-POST" | "HTTP-Redirect";
        /**
         * SAML Logout Request Binding
         */
        sign_out_binding?: "HTTP-POST" | "HTTP-Redirect";
        mappings?: {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             *
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             */
            [k: string]: string | boolean | {
                value?: string | boolean | number;
                [k: string]: any;
            } | (string | {
                value?: string | boolean | number;
                [k: string]: any;
            })[];
        };
    };
} | {
    enabled?: boolean;
    updated_at?: string | null;
    created_at?: string;
    is_default?: boolean;
    type: "enterprise";
    provider: "e-devlet";
    settings?: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        client_id?: string;
        client_secret?: string;
        /**
         * @maxItems 50
         */
        scopes?: string[];
        is_test?: boolean;
    };
}) | {
    enabled?: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name?: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type?: "push";
    provider?: "native";
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
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Push notification strategy
         */
        strategy?: "code" | "prompt";
    };
} | {
    type?: "webauthn";
    provider?: "plusauth";
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings?: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
    };
};

/**
 * @public
 */
export declare interface UpdateEDevletConnection {
    enabled?: boolean;
    updated_at?: string | null;
    created_at?: string;
    is_default?: boolean;
    type: "enterprise";
    provider: "e-devlet";
    settings?: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        client_id?: string;
        client_secret?: string;
        /**
         * @maxItems 50
         */
        scopes?: string[];
        is_test?: boolean;
    };
}

/**
 * @public
 */
export declare type UpdateEmailConnection = {
    type?: "email";
    [k: string]: any;
} & ({
    enabled?: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name?: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type?: "email";
    provider?: "aws_ses";
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
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        use_magic_link?: boolean;
    };
} | {
    enabled?: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name?: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type?: "email";
    provider?: "postmark";
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
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        use_magic_link?: boolean;
    };
} | {
    enabled?: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name?: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type?: "email";
    provider?: "sendgrid";
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
        api_user?: string | null;
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        use_magic_link?: boolean;
    };
} | {
    enabled?: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name?: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type?: "email";
    provider?: "smtp";
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
        secure?: boolean | null;
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
        use_magic_link?: boolean;
    };
});

/**
 * @public
 */
export declare type UpdateEmailProvider = {
    type?: "email";
    [k: string]: any;
} & ({
    type: "email";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "aws_ses";
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
    type: "email";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "postmark";
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
    type: "email";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "sendgrid";
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
        api_user?: string | null;
    };
} | {
    type: "email";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "smtp";
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
        secure?: boolean | null;
    };
});

/**
 * @public
 */
export declare type UpdateEnterpriseConnection = {
    type?: "enterprise";
    [k: string]: any;
} & ({
    enabled?: boolean;
    updated_at?: string | null;
    created_at?: string;
    is_default?: boolean;
    type: "enterprise";
    provider: "ldap";
    settings?: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
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
         * An LDAP filter used to retrieve all user entries for synchronization. Narrow the filter to exclude non-human accounts such as system or service users.
         */
        search_all_filter?: string;
        /**
         * Specify the portion of the target subtree that should be considered
         */
        search_scope?: "base" | "one" | "sub" | "subordinate";
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
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             *
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             */
            [k: string]: string | boolean | {
                value?: string | boolean | number;
                [k: string]: any;
            } | (string | {
                value?: string | boolean | number;
                [k: string]: any;
            })[];
        };
    };
} | {
    enabled?: boolean;
    updated_at?: string | null;
    created_at?: string;
    is_default?: boolean;
    type: "enterprise";
    provider: "saml";
    settings?: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
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
        sign_out_url?: string | null;
        signing_certificate?: string | null;
        /**
         * Enable/Disable the SAML authentication request signing.
         */
        sign_request?: boolean;
        sign_request_algorithm?: "sha512" | "sha256" | "sha1";
        /**
         * SAML Request Binding
         */
        request_binding?: "HTTP-POST" | "HTTP-Redirect";
        /**
         * SAML Logout Request Binding
         */
        sign_out_binding?: "HTTP-POST" | "HTTP-Redirect";
        mappings?: {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             *
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             */
            [k: string]: string | boolean | {
                value?: string | boolean | number;
                [k: string]: any;
            } | (string | {
                value?: string | boolean | number;
                [k: string]: any;
            })[];
        };
    };
} | {
    enabled?: boolean;
    updated_at?: string | null;
    created_at?: string;
    is_default?: boolean;
    type: "enterprise";
    provider: "e-devlet";
    settings?: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        client_id?: string;
        client_secret?: string;
        /**
         * @maxItems 50
         */
        scopes?: string[];
        is_test?: boolean;
    };
});

/**
 * @public
 */
export declare interface UpdateESignConnection {
    type?: "e-sign";
    provider?: "plusauth";
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings?: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
    };
}

/**
 * @public
 */
export declare interface UpdateFvConnection {
    type?: "fv";
    provider?: "hitachi-h1";
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings?: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
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
    description?: string | null;
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
    updated_at?: string | null;
    created_at?: string;
    is_default?: boolean;
    type: "enterprise";
    provider: "ldap";
    settings?: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
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
         * An LDAP filter used to retrieve all user entries for synchronization. Narrow the filter to exclude non-human accounts such as system or service users.
         */
        search_all_filter?: string;
        /**
         * Specify the portion of the target subtree that should be considered
         */
        search_scope?: "base" | "one" | "sub" | "subordinate";
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
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             */
            [k: string]: string | boolean | {
                value?: string | boolean | number;
                [k: string]: any;
            } | (string | {
                value?: string | boolean | number;
                [k: string]: any;
            })[];
        };
    };
}

/**
 * @public
 */
export declare type UpdateMFA = {
    enabled?: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type?: "push";
    provider?: "native";
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
        /**
         * Push notification strategy
         */
        strategy?: "code" | "prompt";
    };
} | ({
    enabled?: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type?: "email";
    provider?: "aws_ses";
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
    };
} | {
    enabled?: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type?: "email";
    provider?: "postmark";
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
    };
} | {
    enabled?: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type?: "email";
    provider?: "sendgrid";
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
        api_user?: string | null;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
    };
} | {
    enabled?: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type?: "email";
    provider?: "smtp";
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
        secure?: boolean | null;
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
    };
}) | ({
    enabled?: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type?: "sms";
    provider?: "dataport";
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
        operator?: "1" | "2" | "3" | "4";
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
    };
} | {
    enabled?: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type?: "sms";
    provider?: "messagebird";
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
    };
} | {
    enabled?: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type?: "sms";
    provider?: "custom";
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
    };
} | {
    enabled?: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type?: "sms";
    provider?: "3gbilisim";
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
    };
} | {
    enabled?: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type?: "sms";
    provider?: "twilio";
    settings?: {
        /**
         * Your Twilio auth token
         */
        auth_token?: string;
        /**
         * Your Twilio account sid.
         */
        sid?: string;
        strategy?: "copilot" | "from";
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
    };
} | {
    enabled?: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type?: "sms";
    provider?: "netgsm";
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
    };
}) | ({
    enabled?: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type?: "otp";
    provider?: "hotp";
    settings?: {
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        hash_alg?: "sha1" | "sha256" | "sha512";
        window?: number;
        initial_counter?: number;
    };
} | {
    enabled?: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type?: "otp";
    provider?: "totp";
    settings?: {
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        hash_alg?: "sha1" | "sha256" | "sha512";
        window?: number;
        ttl?: number;
    };
}) | {
    type?: "fv";
    provider?: "hitachi-h1";
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings?: {
        seed?: string;
    };
} | {
    type?: "webauthn";
    provider?: "plusauth";
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings?: {};
} | {
    type?: "e-sign";
    provider?: "plusauth";
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings?: {};
};

/**
 * @public
 */
export declare type UpdateModuleSettings = {
    name: "radius";
    settings: {
        enabled?: boolean;
        /**
         * Only users of the selected connection will be able to authenticate through RADIUS. Leave empty if you would like to allow any user in your tenant.
         */
        connection?: string | null;
        /**
         * If true RADIUS server expects both a password and an MFA factor in the same login request from your radiusclient For Eg - If radius client sends Password + MFA token in same string e.g. password123456
         */
        use_inline_factor_challenge?: boolean;
        challenge_separator?: string;
        /**
         * The attribute name for the client IP address lookup. It could be multiple attributes separated by semicolon.
         */
        client_ip_attr?: string;
        address_allow_list?: string[];
    };
    [k: string]: any;
};

/**
 * @public
 */
export declare type UpdateOTPConnection = {
    type?: "otp";
    [k: string]: any;
} & ({
    enabled?: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name?: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type?: "otp";
    provider?: "hotp";
    settings?: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        hash_alg?: "sha1" | "sha256" | "sha512";
        window?: number;
        initial_counter?: number;
    };
} | {
    enabled?: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name?: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type?: "otp";
    provider?: "totp";
    settings?: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        hash_alg?: "sha1" | "sha256" | "sha512";
        window?: number;
        ttl?: number;
    };
});

/**
 * @public
 */
export declare type UpdateProvider = ({
    type: "email";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "aws_ses";
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
    type: "email";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "postmark";
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
    type: "email";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "sendgrid";
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
        api_user?: string | null;
    };
} | {
    type: "email";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "smtp";
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
        secure?: boolean | null;
    };
}) | ({
    type: "sms";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "dataport";
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
        operator?: "1" | "2" | "3" | "4";
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
    type: "sms";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "messagebird";
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
    type: "sms";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "custom";
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
    type: "sms";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "3gbilisim";
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
} | {
    type: "sms";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "twilio";
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
        strategy?: "copilot" | "from";
        /**
         * If strategy is `copilot` than this value needs to be your Twilio messaging service SID. Otherwise it is phone number for originating your messages.
         */
        from?: string;
    };
} | {
    type: "sms";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "netgsm";
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
}) | {
    type: "push";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "native";
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
};

/**
 * @public
 */
export declare type UpdatePushConnection = {
    type?: "push";
    [k: string]: any;
} & {
    enabled?: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name?: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    type?: "push";
    provider?: "native";
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
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Push notification strategy
         */
        strategy?: "code" | "prompt";
    };
};

/**
 * @public
 */
export declare type UpdatePushNotificationProvider = {
    type?: "push";
    [k: string]: any;
} & {
    type: "push";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "native";
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
};

/**
 * Resource Object with name and description properties.
 * @public
 */
export declare interface UpdateResource {
    /**
     * Display name for the Resource.
     */
    name?: string;
    /**
     * Additional information related with entity
     */
    description?: string | null;
    settings?: {
        access_token_ttl?: number;
        include_user_roles?: boolean;
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
     * Additional information related with entity
     */
    description?: string | null;
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
     * Additional information related with entity
     */
    description?: string | null;
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
    updated_at?: string | null;
    created_at?: string;
    is_default?: boolean;
    type: "enterprise";
    provider: "saml";
    settings?: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
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
        sign_out_url?: string | null;
        signing_certificate?: string | null;
        /**
         * Enable/Disable the SAML authentication request signing.
         */
        sign_request?: boolean;
        sign_request_algorithm?: "sha512" | "sha256" | "sha1";
        /**
         * SAML Request Binding
         */
        request_binding?: "HTTP-POST" | "HTTP-Redirect";
        /**
         * SAML Logout Request Binding
         */
        sign_out_binding?: "HTTP-POST" | "HTTP-Redirect";
        mappings?: {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             */
            [k: string]: string | boolean | {
                value?: string | boolean | number;
                [k: string]: any;
            } | (string | {
                value?: string | boolean | number;
                [k: string]: any;
            })[];
        };
    };
}

/**
 * @public
 */
export declare type UpdateSmsConnection = {
    type?: "sms";
    [k: string]: any;
} & ({
    enabled?: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name?: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type?: "sms";
    provider?: "dataport";
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
        operator?: "1" | "2" | "3" | "4";
        /**
         * Short code of operator used for sendind messages
         */
        short_number?: string;
        /**
         * Orginator value
         */
        from?: string;
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
    };
} | {
    enabled?: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name?: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type?: "sms";
    provider?: "messagebird";
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
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
    };
} | {
    enabled?: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name?: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type?: "sms";
    provider?: "custom";
    settings?: {
        /**
         * SMS provider's hook context
         */
        hook_context?: string;
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
    };
} | {
    enabled?: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name?: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type?: "sms";
    provider?: "3gbilisim";
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
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
    };
} | {
    enabled?: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name?: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type?: "sms";
    provider?: "twilio";
    settings?: {
        /**
         * Your Twilio auth token
         */
        auth_token?: string;
        /**
         * Your Twilio account sid.
         */
        sid?: string;
        strategy?: "copilot" | "from";
        /**
         * If strategy is `copilot` than this value needs to be your Twilio messaging service SID. Otherwise it is phone number for originating your messages.
         */
        from?: string;
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
    };
} | {
    enabled?: boolean;
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    /**
     * Connection name
     */
    name?: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    is_default?: boolean;
    type?: "sms";
    provider?: "netgsm";
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
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * The length of the OTP code.
         */
        code_length?: number;
        /**
         * The expiration of the generated code in seconds
         */
        code_ttl?: number;
    };
});

/**
 * @public
 */
export declare type UpdateSmsProvider = {
    type?: "sms";
    [k: string]: any;
} & ({
    type: "sms";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "dataport";
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
        operator?: "1" | "2" | "3" | "4";
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
    type: "sms";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "messagebird";
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
    type: "sms";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "custom";
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
    type: "sms";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "3gbilisim";
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
} | {
    type: "sms";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "twilio";
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
        strategy?: "copilot" | "from";
        /**
         * If strategy is `copilot` than this value needs to be your Twilio messaging service SID. Otherwise it is phone number for originating your messages.
         */
        from?: string;
    };
} | {
    type: "sms";
    /**
     * Is connection using custom scripts
     */
    is_custom?: boolean;
    provider: "netgsm";
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
});

/**
 * @public
 */
export declare type UpdateSocialConnection = {
    type?: "social";
    [k: string]: any;
} & ({
    is_default?: boolean;
    type: "social";
    provider?: "apple";
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings?: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        client_id?: string;
        key_id?: string;
        private_key?: string;
        team_id?: string;
        /**
         * @maxItems 50
         */
        scopes?: string[];
    };
} | {
    is_default?: boolean;
    type: "social";
    provider?: "amazon" | "dribbble" | "facebook" | "github" | "google" | "linkedin" | "microsoft" | "slack" | "spotify";
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings?: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        client_id?: string;
        client_secret?: string;
        /**
         * @maxItems 50
         */
        scopes?: string[];
    };
} | {
    is_default?: boolean;
    type: "social";
    provider?: "custom-oauth2";
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings?: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        extra_params?: {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             */
            [k: string]: string;
        };
        extra_headers?: {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             */
            [k: string]: string;
        };
        client_id?: string;
        client_secret?: string;
        authorization_url?: string;
        token_url?: string;
        /**
         * @maxItems 1000
         */
        scopes?: string[];
    };
} | {
    is_default?: boolean;
    type: "social";
    provider?: "dropbox";
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings?: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        app_key?: string;
        app_secret?: string;
        /**
         * @maxItems 50
         */
        scopes?: string[];
    };
} | {
    is_default?: boolean;
    type: "social";
    provider?: "twitter";
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings?: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
        /**
         * Enable/Disable user profile synchronization on each login
         */
        sync_user_profile?: boolean;
        consumer_key?: string;
        consumer_secret?: string;
        /**
         * @maxItems 50
         */
        scopes?: string[];
    };
});

/**
 * @public
 */
export declare type UpdateTemplate = {
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    content?: string;
    type: "email";
    name?: "welcome" | "verification-code" | "magic-link" | "verify-email" | "reset-password" | "invite-admin" | "payment-failed" | "plan-downgraded" | "blocked-account" | "blocked-ip" | "test";
    details?: {
        /**
         * `from` field for your emails
         */
        from: string;
        /**
         * `subject` field for your emails.
         */
        subject: string;
        [k: string]: any;
    };
} | {
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    content?: string;
    type: "sms";
    name?: "verification-code" | "test";
};

/**
 * @public
 */
export declare interface UpdateTenantSettings {
    branding?: {
        display_name?: string | null;
    };
    default_strategy?: string | null;
    user_self_deletion?: {
        /**
         * Allow end-users to delete their accounts. This enables the `delete-account` prompt which you can request to allow users delete their accounts.
         */
        enabled?: boolean;
        [k: string]: any;
    };
    auto_sign_in?: boolean;
    register_enabled?: boolean;
    forgot_password_enabled?: boolean;
    environment_variables?: {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^(.*)$".
         */
        [k: string]: string;
    };
    expose_unsafe_errors?: boolean;
    welcome_emails_enabled?: boolean;
    force_email_verification?: boolean;
    /**
     * @maxItems 50
     */
    extra_params?: string[];
    /**
     * @maxItems 50
     */
    acr_values?: string[];
    /**
     * @maxItems 50
     */
    extra_scopes?: string[];
    api_version?: "2021-07-04";
    tenant_login_url?: string | null;
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
        delivery_mode?: "ping" | "poll";
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
    hash_function?: "bcrypt" | "argon2";
    policies?: {
        /**
         * Password policy settings to be enforced to your new users.
         */
        password?: {
            /**
             * Minimum number of characters
             */
            min?: number | null;
            /**
             * Maximum number of characters
             */
            max?: number | null;
            /**
             * Require at least on of the given characters
             */
            custom_chars?: string | null;
            /**
             * The system will maintain a password history for each user and prevent the reuse of passwords included in the history. The password history can be up to 10 in size. When provided, the system will maintain existing and new users' password history going forward.
             */
            history?: number | null;
            /**
             * Require at least given value of uppercase letters
             */
            upper_case?: number | null;
            /**
             * Require at least given value of lowercase letters
             */
            lower_case?: number | null;
            /**
             * Require at least given value of numbers
             */
            number?: number | null;
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
             *
             * @maxItems 1000
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
        [k: string]: string | number | boolean;
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
    username?: string | null;
    /**
     * End-User's e-mail address.
     */
    email?: string | null;
    /**
     * `true` if the End-User's e-mail address has been verified; otherwise `false`. If `force_email_verification` is enabled in your tenant's settings, it will check this value of user while performing email verification checks.
     */
    email_verified?: boolean | null;
    /**
     * End-User's preferred phone number. It will be stored in [E.164](https://en.wikipedia.org/wiki/E.164) format.
     */
    phone_number?: string | null;
    /**
     * `true` if the End-User's phone number has been verified; otherwise `false`. If SMS MFA is enabled this value will be used to determine whether End-User has verified it's phone or not.
     */
    phone_number_verified?: boolean | null;
    /**
     * End-User's full name in displayable form including all name parts, possibly including titles and suffixes, ordered according to the End-User's locale and preferences.
     */
    name?: string | null;
    /**
     * URI reference of the End-User's profile picture.
     */
    picture?: string | null;
    /**
     * Whether this End-User is blocked or not. If `true` End-User will not be able to login.
     */
    blocked?: boolean | null;
    /**
     * Failed login attempts of user. It will reset to `0` after successful login.
     */
    login_attempts?: number;
    profile?: {
        /**
         * Given name(s) or first name(s) of the End-User. Note that in some cultures, people can have multiple given names; all can be present, with the names being separated by space characters.
         */
        given_name?: string | null;
        /**
         * Middle name(s) of the End-User. Note that in some cultures, people can have multiple middle names; all can be present, with the names being separated by space characters. Also note that in some cultures, middle names are not used.
         */
        middle_name?: string | null;
        /**
         * Surname(s) or last name(s) of the End-User. Note that in some cultures, people can have multiple family names or no family name; all can be present, with the names being separated by space characters.
         */
        family_name?: string | null;
        /**
         * Casual name of the End-User that may or may not be the same as the given_name. For instance, a nickname value of Mike might be returned alongside a given_name value of Michael.
         */
        nickname?: string | null;
        /**
         * URI reference for the End-User's profile page.
         */
        profile_page?: string | null;
        /**
         * URI reference for the End-User's Web page or blog.
         */
        website?: string | null;
        /**
         * Short code of End-User's gender.
         */
        gender?: string | null;
        /**
         * End-User's birthday. ISO 8601:2004 YYYY-MM-DD format. The year may be 0000, indicating that it is omitted. To represent only the year, YYYY format is preferred.
         */
        birthdate?: string | null;
        /**
         * End-User's locale. For example, en-US or fr-CA.
         */
        locale?: string | null;
        /**
         * String from zoneinfo time zone database representing the End-User's time zone. For example, Europe/Paris or America/Los_Angeles.
         */
        zoneinfo?: string | null;
        addresses?: {
            /**
             * Identifier for user address. Example: `Delivery Address`, `Billing Address` etc.
             */
            id: string | null;
            is_primary: boolean | null;
            first_name: string | null;
            last_name: string | null;
            /**
             * State, province, prefecture or region component.
             */
            state: string | null;
            /**
             * Country name component.
             */
            country: string | null;
            /**
             * City or locality component.
             */
            city: string | null;
            /**
             * Full street address component, which MAY include house number, street name, Post Office Box, and multi-line extended street address information. This field may contain multiple lines, separated by newline characters.
             */
            street_address: string | null;
            /**
             * Full street address component, which MAY include house number, street name, Post Office Box, and multi-line extended street address information. This field may contain multiple lines, separated by newline characters.
             */
            street_address_2: string | null;
            /**
             * Zip code or postal code component.
             */
            zip_code: string | null;
        }[];
    };
    /**
     * Additional metadata for your End-User. It must be an object containing **10** fields at max with keys and values no more than 1024 characters. Values can be only one of the types `string`, `number` and `boolean`. You can also use `null` as value to make metadata consistent across other users.
     */
    metadata?: {
        [k: string]: any;
    };
    verify_email?: boolean | null;
    /**
     * End-User's password in plaintext. Defined password policy rules will be enforced.
     */
    password?: string | null;
    /**
     * Used password hash function identifier.
     */
    hash_fn?: "bcrypt" | "argon2";
}

/**
 * @public
 */
export declare interface UpdateWebAuthNConnection {
    type?: "webauthn";
    provider?: "plusauth";
    enabled?: boolean;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings?: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
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
        type: "e-sign" | "sms" | "email" | "custom";
        /**
         * Connection name
         */
        connection?: string | null;
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
        updated_at?: string | null;
    } | {
        /**
         * Authenticator id
         */
        id: string;
        /**
         * Connection name
         */
        connection?: string | null;
        /**
         * Creation date in the ISO 8601 format according to universal time.
         */
        created_at: string;
        /**
         * Update date in the ISO 8601 format according to universal time.
         */
        updated_at?: string | null;
        type: "password";
        details: {
            /**
             * Hashed value of user's password.
             */
            hash: string;
            hash_fn: "bcrypt" | "argon2";
        };
    } | {
        /**
         * Authenticator id
         */
        id: string;
        /**
         * Connection name
         */
        connection?: string | null;
        /**
         * Creation date in the ISO 8601 format according to universal time.
         */
        created_at: string;
        /**
         * Update date in the ISO 8601 format according to universal time.
         */
        updated_at?: string | null;
        type: "push";
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
                    key_ops?: ("sign" | "verify" | "encrypt" | "decrypt" | "wrapKey" | "unwrapKey" | "deriveKey" | "deriveBits")[];
                    n: string;
                    use: string;
                    alg: string;
                    kid: string;
                    x5u?: string;
                    x5c?: string[];
                    x5t?: string;
                    "x5t#S256"?: string;
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
        /**
         * Authenticator id
         */
        id: string;
        /**
         * Connection name
         */
        connection?: string | null;
        /**
         * Creation date in the ISO 8601 format according to universal time.
         */
        created_at: string;
        /**
         * Update date in the ISO 8601 format according to universal time.
         */
        updated_at?: string | null;
        type: "otp";
        details: {
            /**
             * Secret for recovering user's OTP credential
             */
            secret: string;
        };
    } | {
        /**
         * Authenticator id
         */
        id: string;
        /**
         * Connection name
         */
        connection?: string | null;
        /**
         * Creation date in the ISO 8601 format according to universal time.
         */
        created_at: string;
        /**
         * Update date in the ISO 8601 format according to universal time.
         */
        updated_at?: string | null;
        type: "fv";
        details: {
            hash?: string;
            templates: {
                [k: string]: any;
            };
        };
    } | {
        /**
         * Authenticator id
         */
        id: string;
        /**
         * Connection name
         */
        connection?: string | null;
        /**
         * Creation date in the ISO 8601 format according to universal time.
         */
        created_at: string;
        /**
         * Update date in the ISO 8601 format according to universal time.
         */
        updated_at?: string | null;
        type: "webauthn";
        details: {
            id: string;
            publicKey: {
                /**
                 * This interface was referenced by `undefined`'s JSON-Schema definition
                 * via the `patternProperty` "^(0|[1-9][0-9]*)$".
                 */
                [k: string]: number;
            };
            counter: number;
            transports?: ("ble" | "cable" | "hybrid" | "internal" | "nfc" | "smart-card" | "usb")[];
        };
    })[];
    identities: {
        /**
         * External user's id coming from the connection.
         */
        id: string;
        /**
         * Creation date in the ISO 8601 format according to universal time.
         */
        created_at: string;
        /**
         * Update date in the ISO 8601 format according to universal time.
         */
        updated_at?: string | null;
        /**
         * Connection name
         */
        connection: string;
        /**
         * PlusAuth user's id
         */
        user_id: string;
        type: "sms" | "push" | "webauthn" | "email" | "social" | "enterprise";
        provider: "twilio" | "netgsm" | "3gbilisim" | "dataport" | "messagebird" | "custom" | "native" | "plusauth" | "aws_ses" | "postmark" | "sendgrid" | "smtp" | "custom-oauth2" | "amazon" | "apple" | "dribbble" | "dropbox" | "facebook" | "github" | "google" | "linkedin" | "microsoft" | "slack" | "spotify" | "twitter" | "saml" | "e-devlet" | "ldap";
        /**
         * Raw user object from the connection
         */
        details: {
            [k: string]: any;
        };
    }[];
    roles?: string[];
    role_groups?: string[];
    sessions?: {
        /**
         * Session identifier.
         */
        id: string;
        /**
         * End-User's IP address.
         */
        ip?: string | null;
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
        /**
         * Location details associated with the IP address.
         */
        location: null | {
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
                latitude?: number;
                /**
                 * The approximate WGS84 longitude of the postal code, city, subdivision or country associated with the IP address.
                 */
                longitude?: number;
                /**
                 * The approximate accuracy radius, in kilometers, around the latitude and longitude for the geographical entity (country, subdivision, city or postal code).
                 */
                accuracy_radius?: number;
                /**
                 * The time zone associated with location, as specified by the IANA Time Zone Database, e.g., “America/New_York”.
                 */
                time_zone?: string;
            };
        };
    }[];
    password_history?: {
        /**
         * Unique identifier of entity
         */
        id: string;
        /**
         * Creation date in the ISO 8601 format according to universal time.
         */
        created_at: string;
        hash: string;
        hash_fn: "bcrypt" | "argon2";
        salt: string;
    }[];
    id: string;
    /**
     * End-User's username
     */
    username?: string | null;
    /**
     * End-User's e-mail address.
     */
    email?: string | null;
    /**
     * `true` if the End-User's e-mail address has been verified; otherwise `false`. If `force_email_verification` is enabled in your tenant's settings, it will check this value of user while performing email verification checks.
     */
    email_verified?: boolean | null;
    /**
     * End-User's preferred phone number. It will be stored in [E.164](https://en.wikipedia.org/wiki/E.164) format.
     */
    phone_number?: string | null;
    /**
     * `true` if the End-User's phone number has been verified; otherwise `false`. If SMS MFA is enabled this value will be used to determine whether End-User has verified it's phone or not.
     */
    phone_number_verified?: boolean | null;
    /**
     * End-User's full name in displayable form including all name parts, possibly including titles and suffixes, ordered according to the End-User's locale and preferences.
     */
    name?: string | null;
    /**
     * URI reference of the End-User's profile picture.
     */
    picture?: string | null;
    /**
     * Whether this End-User is blocked or not. If `true` End-User will not be able to login.
     */
    blocked?: boolean | null;
    /**
     * Failed login attempts of user. It will reset to `0` after successful login.
     */
    login_attempts?: number;
    last_ip: string | null;
    /**
     * User's last login datetime in the ISO 8601 format according to universal time
     */
    last_login?: string | null;
    profile?: {
        /**
         * Given name(s) or first name(s) of the End-User. Note that in some cultures, people can have multiple given names; all can be present, with the names being separated by space characters.
         */
        given_name?: string | null;
        /**
         * Middle name(s) of the End-User. Note that in some cultures, people can have multiple middle names; all can be present, with the names being separated by space characters. Also note that in some cultures, middle names are not used.
         */
        middle_name?: string | null;
        /**
         * Surname(s) or last name(s) of the End-User. Note that in some cultures, people can have multiple family names or no family name; all can be present, with the names being separated by space characters.
         */
        family_name?: string | null;
        /**
         * Casual name of the End-User that may or may not be the same as the given_name. For instance, a nickname value of Mike might be returned alongside a given_name value of Michael.
         */
        nickname?: string | null;
        /**
         * URI reference for the End-User's profile page.
         */
        profile_page?: string | null;
        /**
         * URI reference for the End-User's Web page or blog.
         */
        website?: string | null;
        /**
         * Short code of End-User's gender.
         */
        gender?: string | null;
        /**
         * End-User's birthday. ISO 8601:2004 YYYY-MM-DD format. The year may be 0000, indicating that it is omitted. To represent only the year, YYYY format is preferred.
         */
        birthdate?: string | null;
        /**
         * End-User's locale. For example, en-US or fr-CA.
         */
        locale?: string | null;
        /**
         * String from zoneinfo time zone database representing the End-User's time zone. For example, Europe/Paris or America/Los_Angeles.
         */
        zoneinfo?: string | null;
        addresses?: {
            /**
             * Identifier for user address. Example: `Delivery Address`, `Billing Address` etc.
             */
            id: string | null;
            is_primary: boolean | null;
            first_name: string | null;
            last_name: string | null;
            /**
             * State, province, prefecture or region component.
             */
            state: string | null;
            /**
             * Country name component.
             */
            country: string | null;
            /**
             * City or locality component.
             */
            city: string | null;
            /**
             * Full street address component, which MAY include house number, street name, Post Office Box, and multi-line extended street address information. This field may contain multiple lines, separated by newline characters.
             */
            street_address: string | null;
            /**
             * Full street address component, which MAY include house number, street name, Post Office Box, and multi-line extended street address information. This field may contain multiple lines, separated by newline characters.
             */
            street_address_2: string | null;
            /**
             * Zip code or postal code component.
             */
            zip_code: string | null;
        }[];
    };
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at: string | null;
    /**
     * Additional metadata for your End-User. It must be an object containing **10** fields at max with keys and values no more than 1024 characters. Values can be only one of the types `string`, `number` and `boolean`. You can also use `null` as value to make metadata consistent across other users.
     */
    metadata?: {
        [k: string]: any;
    };
}

/**
 * @public
 */
export declare type UserCredential = {
    /**
     * Authenticator id
     */
    id: string;
    type: "e-sign" | "sms" | "email" | "custom";
    /**
     * Connection name
     */
    connection?: string | null;
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
    updated_at?: string | null;
} | {
    /**
     * Authenticator id
     */
    id: string;
    /**
     * Connection name
     */
    connection?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    type: "password";
    details: {
        /**
         * Hashed value of user's password.
         */
        hash: string;
        hash_fn: "bcrypt" | "argon2";
    };
} | {
    /**
     * Authenticator id
     */
    id: string;
    /**
     * Connection name
     */
    connection?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    type: "push";
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
                key_ops?: ("sign" | "verify" | "encrypt" | "decrypt" | "wrapKey" | "unwrapKey" | "deriveKey" | "deriveBits")[];
                n: string;
                use: string;
                alg: string;
                kid: string;
                x5u?: string;
                x5c?: string[];
                x5t?: string;
                "x5t#S256"?: string;
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
    /**
     * Authenticator id
     */
    id: string;
    /**
     * Connection name
     */
    connection?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    type: "otp";
    details: {
        /**
         * Secret for recovering user's OTP credential
         */
        secret: string;
    };
} | {
    /**
     * Authenticator id
     */
    id: string;
    /**
     * Connection name
     */
    connection?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    type: "fv";
    details: {
        hash?: string;
        templates: {
            [k: string]: any;
        };
    };
} | {
    /**
     * Authenticator id
     */
    id: string;
    /**
     * Connection name
     */
    connection?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    type: "webauthn";
    details: {
        id: string;
        publicKey: {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(0|[1-9][0-9]*)$".
             */
            [k: string]: number;
        };
        counter: number;
        transports?: ("ble" | "cable" | "hybrid" | "internal" | "nfc" | "smart-card" | "usb")[];
    };
};

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
    created_at: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    /**
     * Connection name
     */
    connection: string;
    /**
     * PlusAuth user's id
     */
    user_id: string;
    type: "sms" | "push" | "webauthn" | "email" | "social" | "enterprise";
    provider: "twilio" | "netgsm" | "3gbilisim" | "dataport" | "messagebird" | "custom" | "native" | "plusauth" | "aws_ses" | "postmark" | "sendgrid" | "smtp" | "custom-oauth2" | "amazon" | "apple" | "dribbble" | "dropbox" | "facebook" | "github" | "google" | "linkedin" | "microsoft" | "slack" | "spotify" | "twitter" | "saml" | "e-devlet" | "ldap";
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
    hash_fn: "bcrypt" | "argon2";
    salt: string;
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
         * Additional information related with entity
         */
        description: string | null;
        /**
         * If `true` this role group will be assigned to new users automatically.
         */
        assign_on_signup: boolean;
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
         * Additional information related with entity
         */
        description: string | null;
        /**
         * If `true` this role will be assigned to new users automatically.
         */
        assign_on_signup: boolean;
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
         * Additional information related with entity
         */
        description: string | null;
    };
}

declare class UserService extends HttpService {
    /**
     * @param queryParams Query parameters
     * @param queryParams.limit Limit the number of results returned
     * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
     * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
     * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
     * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
     */
    getAll(queryParams?: {
        limit?: number;
        offset?: number;
        q?: string;
        sort_by?: string | string[];
        fields?: string | string[];
    }): Promise<{
        total: number;
        results: User[];
    }>;
    /**
     * For user creation at least one of identifier is required. Available identifiers are `username`, `email` and `phone_number`.

     * @param data User object
     */
    create(data: CreateUser): Promise<User>;
    /**
     * @param userId User identifier
     */
    get(userId: string): Promise<User>;
    /**
     * @param userId User identifier
     * @param data Object containing to be updated values
     */
    update(userId: string, data: UpdateUser): Promise<User>;
    /**
     * @param userId User identifier
     */
    remove(userId: string): Promise<void>;
    /**
     * @param userId User identifier
     */
    getRbac(userId: string): Promise<UserRbacTree>;
    /**
     * @param userId User identifier
     * @param credentialId Credential identifier
     */
    removeCredential(userId: string, credentialId: string): Promise<void>;
    /**
     * @param userId User identifier
     * @param data
     */
    linkIdentity(userId: string, data: {
        user_id: string;
    } | {
        id_token: string;
        connection?: string;
    }): Promise<void>;
    /**
     * @param userId User identifier
     * @param queryParams Query parameters
     * @param queryParams.limit Limit the number of results returned
     * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
     * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
     * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
     * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
     */
    getPermissions(userId: string, queryParams?: {
        limit?: number;
        offset?: number;
        q?: string;
        sort_by?: string | string[];
        fields?: string | string[];
    }): Promise<{
        total: number;
        results: Permission[];
    }>;
    /**
     * @param userId User identifier
     * @param permissionIdList List of permission IDs to be assigned
     */
    assignPermissions(userId: string, permissionIdList: string[]): Promise<void>;
    /**
     * @param userId User identifier
     * @param permissionIdList List of permission IDs to be unassigned
     */
    unassignPermissions(userId: string, permissionIdList: string[]): Promise<void>;
    /**
     * @param userId User identifier
     * @param queryParams Query parameters
     * @param queryParams.limit Limit the number of results returned
     * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
     * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
     * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
     * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
     */
    getRoles(userId: string, queryParams?: {
        limit?: number;
        offset?: number;
        q?: string;
        sort_by?: string | string[];
        fields?: string | string[];
    }): Promise<{
        total: number;
        results: Role[];
    }>;
    /**
     * @param userId User identifier
     * @param roleIdList List of role IDs to be assigned
     */
    assignRoles(userId: string, roleIdList: string[]): Promise<void>;
    /**
     * @param userId User identifier
     * @param roleIdList List of role IDs to be unassigned
     */
    unassignRoles(userId: string, roleIdList: string[]): Promise<void>;
    /**
     * @param userId User identifier
     * @param queryParams Query parameters
     * @param queryParams.limit Limit the number of results returned
     * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
     * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
     * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
     * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
     */
    getRoleGroups(userId: string, queryParams?: {
        limit?: number;
        offset?: number;
        q?: string;
        sort_by?: string | string[];
        fields?: string | string[];
    }): Promise<{
        total: number;
        results: RoleGroup[];
    }>;
    /**
     * @param userId User identifier
     * @param roleGroupIdList List of role group IDs to be assigned
     */
    assignRoleGroups(userId: string, roleGroupIdList: string[]): Promise<void>;
    /**
     * @param userId User identifier
     * @param roleGroupIdList List of role groups IDs to be unassigned
     */
    unassignRoleGroups(userId: string, roleGroupIdList: string[]): Promise<void>;
    /**
     * @param userId User identifier
     */
    getSessions(userId: string): Promise<UserSession[]>;
    /**
     * @param userId User identifier
     */
    endSessions(userId: string): Promise<void>;
    /**
     * @param userId User identifier
     * @param sessionId Session identifier
     */
    endSession(userId: string, sessionId: string): Promise<void>;
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
    ip?: string | null;
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
    /**
     * Location details associated with the IP address.
     */
    location: null | {
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
            latitude?: number;
            /**
             * The approximate WGS84 longitude of the postal code, city, subdivision or country associated with the IP address.
             */
            longitude?: number;
            /**
             * The approximate accuracy radius, in kilometers, around the latitude and longitude for the geographical entity (country, subdivision, city or postal code).
             */
            accuracy_radius?: number;
            /**
             * The time zone associated with location, as specified by the IANA Time Zone Database, e.g., “America/New_York”.
             */
            time_zone?: string;
        };
    };
}

/**
 * @public
 */
export declare interface View {
    is_default: boolean;
    content: string;
    type: "account-linking" | "account-deletion" | "consent" | "fill-missing" | "login" | "logout-success" | "logout-confirm" | "mfa" | "mfa-email" | "mfa-fv" | "mfa-otp" | "mfa-push" | "mfa-sms" | "mfa-webauthn" | "password-recovery" | "passwordless-email" | "passwordless-otp" | "passwordless-push" | "passwordless-sms" | "register" | "reset-password" | "verify-email" | "error";
}

declare class ViewService extends HttpService {
    /**
     * @param type
     */
    get(type: "account-linking" | "account-deletion" | "consent" | "fill-missing" | "login" | "logout-success" | "logout-confirm" | "mfa" | "mfa-email" | "mfa-fv" | "mfa-otp" | "mfa-push" | "mfa-sms" | "mfa-webauthn" | "password-recovery" | "passwordless-email" | "passwordless-otp" | "passwordless-push" | "passwordless-sms" | "register" | "reset-password" | "verify-email" | "error"): Promise<View>;
    /**
     * @param type
     * @param data View content. Pass null or empty to reset to default
     */
    update(type: "account-linking" | "account-deletion" | "consent" | "fill-missing" | "login" | "logout-success" | "logout-confirm" | "mfa" | "mfa-email" | "mfa-fv" | "mfa-otp" | "mfa-push" | "mfa-sms" | "mfa-webauthn" | "password-recovery" | "passwordless-email" | "passwordless-otp" | "passwordless-push" | "passwordless-sms" | "register" | "reset-password" | "verify-email" | "error", data: string | null): Promise<View>;
}

/**
 * @public
 */
export declare interface WebAuthNConnection {
    type: "webauthn";
    provider: "plusauth";
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
    updated_at?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at?: string;
    settings: {
        /**
         * @maxItems 1000
         */
        enabled_clients?: string[];
        branding?: {
            show_in_login?: boolean;
            logo_url?: string;
            display_name?: string;
        };
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
    /**
     * Connection name
     */
    connection?: string | null;
    /**
     * Creation date in the ISO 8601 format according to universal time.
     */
    created_at: string;
    /**
     * Update date in the ISO 8601 format according to universal time.
     */
    updated_at?: string | null;
    type: "webauthn";
    details: {
        id: string;
        publicKey: {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(0|[1-9][0-9]*)$".
             */
            [k: string]: number;
        };
        counter: number;
        transports?: ("ble" | "cable" | "hybrid" | "internal" | "nfc" | "smart-card" | "usb")[];
    };
}

export { }
