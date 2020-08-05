import { ConnectionStrategy } from '../constants';

/**
 * @public
 */
export interface IConnection {
  name: string;
  type?: ConnectionStrategy;
  settings?: any;
}
