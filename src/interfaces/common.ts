/**
 * @public
 */
export interface HasId {
  readonly id: string;
}

/**
 * @public
 */
export interface HasApi {
  readonly api_id: string;
}

/**
 * @public
 */
export interface HasUser {
  readonly user_id: string;
}

/**
 * @public
 */
export interface HasTenant {
  readonly tenant_id: string
}

/**
 * @public
 */
export interface Timestamped {
  readonly created_at: string;
  readonly updated_at: string;
}
