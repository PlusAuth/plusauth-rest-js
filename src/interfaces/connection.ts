import { ConnectionStrategy, ConnectionType } from '../constants';

/**
 * @public
 */
export interface IConnection {
  name: string;
  enabled?: boolean;
  type?: ConnectionType;
  provider?: ConnectionStrategy;
  settings?: Record<string, any>;
}
