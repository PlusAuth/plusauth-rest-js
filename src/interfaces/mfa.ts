import { MFAType } from '../constants';

export interface IMfa {
  type: MFAType;
  enabled: boolean;
  settings: Record<string, any>
}
