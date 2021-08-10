/**
 * @public
 */
export interface IRoleGroup {
  id: string;
  name: string;
  description?: string;
  assignOnSignup?: boolean;
}

/**
 * @public
 */
export interface IRole {
  id: string;
  name: string;
  description?: string;
  assignOnSignup?: boolean;
}

/**
 * @public
 */
export interface IPermission {
  id: string;
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
