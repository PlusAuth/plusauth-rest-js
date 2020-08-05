import { ViewTemplate } from '../constants';

/**
 * @public
 */
export interface IView {
  type: ViewTemplate;
  content?: string;
}
