/**
 * @public
 */
export interface IRoleGroup {
  name: string;
  description?: string;
  assignOnSignup?: boolean;
}

/**
 * @public
 */
export interface IRole {
  name: string;
  description?: string;
  assignOnSignup?: boolean;
}

/**
 * @public
 */
export interface IPermission {
  api_id: string;
  name: string;
  description?: string;
}
