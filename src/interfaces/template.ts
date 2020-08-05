import { EmailTemplate, TemplateEngine, TemplateType } from '../constants';

/**
 * @public
 */
export interface ITemplate {
  readonly name: EmailTemplate;
  from?: string;
  subject?: string;
  content?: string;
  type?: TemplateType;
  engine?: TemplateEngine;
}
