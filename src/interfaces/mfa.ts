import { MFAType } from '../constants';

export interface IMFASettings {
  enabled?: boolean
  settings?: Record<string, any>
}

export interface IMfa extends IMFASettings{
  type: MFAType;
}
