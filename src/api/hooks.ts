import { HttpService } from '../http';
import { PaginatedResult, IPagination, HookPackage, IHook } from '../interfaces';

import { encodedQueryString } from '../utils';

/**
 * Service for interacting PlusAuth hooks.
 *
 * @public
 */
export class HookService extends HttpService {
  protected static prefix = '/hooks'

  /**
   * Retrieve or filter created hooks.
   *
   * @param pagination - Object containing pagination options
   *
   * @example
   * Retrieve all Hooks
   * ```js
   * const hooks = hooks.getAll()
   * ```
   *
   * @example
   * Retrieve first 5 hooks
   * ```js
   * const hooks = await plusAuth.hooks.getAll({ itemsPerPage: 5 })
   * ```
   */
  async getAll( pagination?: IPagination ): Promise<PaginatedResult<IHook>> {
    return this.http.get( `${ encodedQueryString( pagination ) }` );
  }

  /**
   * Get hook with id
   *
   * @param hookId - Hook id
   *
   * @example
   * ```js
   * const hook = await plusAuth.hooks.get('HOOK_ID')
   * ```
   */
  async get( hookId: string ): Promise<IHook> {
    return this.http.get( `/${ hookId }` );
  }

  /**
   * Create a hook
   * @param hookObject - Hook object
   *
   * @example
   * ```js
   * const hook = await plusAuth.hooks.create({ name: 'myHook', type: HookType.PRE_REGISTER })
   * ```
   */
  async create( hookObject: Partial<IHook> ): Promise<IHook> {
    return this.http.post( '', hookObject );
  }

  /**
   * Update an existing hook
   *
   * @param hookId - Id of hook to be updated
   * @param hook - Object containing to be updated field with values
   * @example
   * ```js
   * const updatedHook = await plusAuth.hooks.update('HOOK_ID', { name: 'updatedName' })
   * ```
   */
  async update( hookId: string, hook: Partial<IHook> ): Promise<IHook> {
    if ( !hookId && !hook.id ){
      throw new Error( 'hook id is required' )
    }
    return this.http.patch( `/${ hookId || hook.id }`, hook );
  }


  /**
   * Remove an existing hook
   *
   * @param hookId - Hook Id to be removed
   *
   * @example
   * ```js
   * if( await plusAuth.hooks.remove('HOOK_ID') ){
   *  console.log('hook removed')
   * }
   * ```
   */
  async remove( hookId: string ): Promise<void> {
    return this.http.delete( `/${ hookId }` );
  }

  /**
   * Add npm packages to hook. Added packages will use exact versions to prevent inconsistencies in the future. Even you pass 'latest' as version, the resolved version will be the latest exact version at that time.
   *
   * @param hookId - Id of the hook to add packages into
   * @param packages - Array containing packages
   * @param stream - If `true` the response will be a stream, streaming the output of install command
   *
   * @example
   * ```js
   * const output = await plusAuth.hooks.addPackages('HOOK_ID', [ { name: 'axios', version: '0.19.1' } ])
   * console.log(output) // prints whole npm install output
   * ```
   *
   * @example
   * Stream response
   * ```js
   * const stream = await plusAuth.hooks.addPackages('HOOK_ID', [ { name: 'axios', version: '0.19.1' } ], true)
   * stream.on('data', function( data ){
   *   console.log(data)
   * })
   * stream.on('end', function(){
   *   console.log('END')
   * })
   * ```
   */
  async addPackages( hookId: string,
    packages: HookPackage[],
    stream: true ): Promise<any>

  async addPackages( hookId: string,
    packages: HookPackage[],
    stream: false | undefined ): Promise<string>

  async addPackages(
    hookId: string,
    packages: HookPackage[],
    stream = false
  ): Promise<string | any> {
    return this.http.post( `/${ hookId }/packages`, packages, {
      responseType: stream ? 'stream' : undefined
    } );
  }

  /**
   * Remove packages from the hook
   *
   * @param hookId - Id of the hook to remove packages from
   * @param packages - Array containing package objects. You can omit "version" from packages.
   * @param stream - If `true` the response will be a stream, streaming the output of remove command
   *
   * @example
   * ```js
   * const output = await plusAuth.hooks.deletePackages('HOOK_ID', [ { name: 'axios' } ])
   * console.log(output) // prints whole npm uninstall output
   * ```
   *
   * @example
   * Stream response
   * ```js
   * const stream = await plusAuth.hooks.deletePackages('HOOK_ID', [ { name: 'axios' } ], true)
   * stream.on('data', function( data ){
   *   console.log(data)
   * })
   * stream.on('end', function(){
   *   console.log('END')
   * })
   * ```
   */
  async deletePackages( hookId: string,
    packages: HookPackage[],
    stream: true ): Promise<any>

  async deletePackages( hookId: string,
    packages: HookPackage[],
    stream: false | undefined ): Promise<string>

  async deletePackages(
    hookId: string,
    packages: HookPackage[],
    stream = false
  ): Promise<string | any> {
    return this.http.delete( `/${ hookId }/packages`, packages, {
      responseType: stream ? 'stream' : undefined
    } );
  }
}
