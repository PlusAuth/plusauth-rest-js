import { MFAType } from '../constants';

/**
 * @public
 */
export interface IMFASettings {
  enabled?: boolean
  settings?: Record<string, any>
}

/**
 * @public
 */
export interface IMfa extends IMFASettings{
  type: MFAType;
}
