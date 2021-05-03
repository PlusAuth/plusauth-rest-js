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

/**
 * @public
 */
export interface IRbac {
  role_groups: ( IRoleGroup & { roles: ( IRole & { permissions: IPermission[]} )[]} )[],
  roles: ( IRole & { permissions: IPermission[]} )[],
  permissions: IPermission[]
}
