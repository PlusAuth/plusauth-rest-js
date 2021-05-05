import { Response } from 'cross-fetch';
import deepmerge from 'deepmerge'

import { PlusAuthRestError } from './error';
import { fetchPn } from './utils/fetch_wrapper'


/**
 * @internal
 */
async function parseFetchResponse( response: Response, options: CustomRequestOptions ) {
  const contentType = response.headers.get( 'content-type' )
  if ( options.responseType === 'stream' && response.ok ) {
    return response.body?.getReader()
  } else if ( options.responseType === 'json' || contentType &&
    contentType.indexOf( 'application/json' ) > -1 ) {
    return await response.json()
  } else {
    return await response.text()
  }
}

function wrapInError( reject: ( ...args: any ) => void ){
  return function ( err: Error ) {
    reject( new PlusAuthRestError( err ) )
  }
}

/**
 * @internal
 */
function fetchAsPromise( url: string, options: CustomRequestOptions ) {
  return new Promise( function ( resolve, reject ) {
    fetchPn( url, options ).then( ( rawResponse: Response ) => {
      const clone = rawResponse.clone()
      if ( rawResponse.ok ) {
        parseFetchResponse( clone, options ).then( resolve ).catch( wrapInError( reject ) )
      } else if ( rawResponse.status === 400 ) {
        parseFetchResponse( clone, options ).then( value => {
          if ( value.error === 'xhr_request'
            && value.location ) {
            window?.location?.replace( value.location );
            return false;
          } else {
            reject( value )
          }
        } ).catch( wrapInError( reject ) )
      } else {
        parseFetchResponse( clone, options )
          .then( wrapInError( reject ) )
          .catch( wrapInError( reject ) )
      }
    } ).catch( wrapInError( reject ) )
  } )
}

/**
 * @public
 */
export type CustomRequestOptions = RequestInit & { responseType?: 'stream' | 'json' }

/**
 * @public
 */
export type BodyType = Record<string, any> | string;

/**
 * @public
 */
export interface HttpClient {
  get: ( uri: string, options?: CustomRequestOptions ) => Promise<any>;
  post: ( uri: string, body: BodyType, options?: CustomRequestOptions ) => Promise<any>;
  patch: ( uri: string, body: BodyType, options?: CustomRequestOptions ) => Promise<any>;
  delete: ( uri: string, body?: BodyType, options?: CustomRequestOptions ) => Promise<any>;
}

/**
 * @public
 */
export class HttpService {
  protected http: HttpClient;

  protected static prefix = '';

  private _baseUrl: string;

  ['constructor']!: typeof HttpService

  constructor( apiURL: string, options: Record<string, any> = {} ) {
    if ( !apiURL ) {
      throw new Error( "'apiURL' must be provided" )
    }
    try {
      new URL( apiURL )
    } catch ( e ) {
      throw new Error( "'apiUrl' must be a valid uri" )
    }

    if ( typeof options !== 'object' ) {
      throw new Error( "'options' must be an object" )
    }

    if ( options.httpClient && typeof options.httpClient !== 'function' ) {
      throw new Error( '"httpClient" must be function' )
    }
    const finalUri = apiURL + ( /\/api\/v\d(\/)?$/.test( apiURL ) ? ''
      : `${ apiURL.endsWith( '/' ) ? '' : '/' }api/v1` )

    const _baseUrl = finalUri + this.constructor.prefix;

    const httpClient = options.httpClient || fetchAsPromise
    const http: any = {};
    ['get', 'post', 'patch', 'delete'].forEach( method => {
      http[method] = function ( ...args: any[] ) {
        let token
        if ( options && typeof options.token === 'function' ) {
          token = options.token.call( undefined )
        } else {
          token = options.token
        }
        let fetchOptions: RequestInit = {
          method:  method.toUpperCase(),
          mode:    'cors',
          headers: {
            'Accept':           'application/json',
            'Content-Type':     'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            ...token ? { 'Authorization': `Bearer ${ token }` } : {}
          }
        }
        if ( args.length > 1 ) {
          method !== 'get' ?
            fetchOptions.body = typeof args[1] === 'object' ? JSON.stringify( args[1] ) : args[1]
            : null
        }
        if ( !!args[2] && typeof args[2] === 'object' ) {
          fetchOptions = deepmerge( fetchOptions, args[2] )
        }
        return httpClient.call( null, _baseUrl + args[0], fetchOptions )
      }
    } )

    this._baseUrl = _baseUrl
    this.http = http
  }
}
