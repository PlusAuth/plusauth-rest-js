import { HasApi, HasId, HasTenant, Timestamped } from './common';

/**
 * @public
 */
export interface IBaseRoleGroup {
  name: string;
  description?: string;
  assignOnSignup?: boolean;
}

/**
 * @public
 */
export type IRoleGroup = IBaseRoleGroup & HasId & HasTenant & Timestamped;

/**
 * @public
 */
export interface IBaseRole {
  name: string;
  description?: string;
  assignOnSignup?: boolean;
}

/**
 * @public
 */
export type IRole = IBaseRole & HasId & HasTenant & Timestamped;

/**
 * @public
 */
export interface IBasePermission {
  name: string;
  description?: string;
}

/**
 * @public
 */
export type IPermission = IBasePermission & HasId & HasApi;

/**
 * @public
 */
export interface IRbac {
  role_groups: ( IRoleGroup & { roles: ( IRole & { permissions: IPermission[]} )[]} )[],
  roles: ( IRole & { permissions: IPermission[]} )[],
  permissions: IPermission[]
}
