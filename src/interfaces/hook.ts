import { HookType } from '../constants';

/**
 * @public
 */
export type HookPackage = { name: string; version?: string }

/**
 * @public
 */
export interface IHook {
  readonly id: string;
  name: string;
  description?: string;
  order?: number;
  type?: HookType;
  content?: string;
  enabled?: boolean;
  packages?: HookPackage[];
}
