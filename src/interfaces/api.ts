import { HasId, HasTenant, Timestamped } from './common';

/**
 * @public
 */
export interface IBaseApi {
  name: string;
  description?: string;
  readonly audience: string;
}

/**
 * @public
 */
export type IApi = IBaseApi & HasId & HasTenant & Timestamped & { readonly system: boolean };

/**
 * @public
 */
export interface IAuthorizedClients {
  client_id: string;
  permissions: string[]
}
