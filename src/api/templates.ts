import { EmailTemplate } from '../constants';
import { HttpService } from '../http';
import { PaginatedResult, ITemplate } from '../interfaces';

/**
 * Service for interacting with PlusAuth templates
 *
 * @public
 */
export class TemplateService extends HttpService{
  protected static prefix = '/templates'

  /**
   * Get a template by its Id
   *
   * @param templateId - Template Id
   *
   * @example
   * ```js
   * const template = await plusAuth.templates.get('TEMPLATE_ID')
   * ```
   */
  async get( templateId: string ): Promise<PaginatedResult<ITemplate>> {
    return this.http.get( `/${ templateId }` );
  }

  /**
   * Update a template
   *
   * @param type - Template type to update
   * @param template - Template object containing updated fields with values
   *
   * @example
   * ```js
   * const updatedTemplate = await plusAuth.templates.update(EmailTemplate.WELCOME, {  from: 'john@doe.example.com' })
   * ```
   *
   * @example
   * ```js
   * const updatedTemplate = await plusAuth.templates.update(EmailTemplate.WELCOME, { engine: TemplateEngine.MUSTACHE, content: "Welcome {{user.username}}"})
   * ```
   */
  async update( type: EmailTemplate, template: Partial<ITemplate> ): Promise<ITemplate> {
    return this.http.patch( `/${ type }`, template );
  }
}
