/**
 * @public
 */
export type CustomRequestOptions = RequestInit & {
  responseType?: 'stream' | 'json';
};
/**
 * @public
 */
export type BodyType = Record<string, any> | string;
/**
 * @public
 */
export interface HttpClient {
  get: ( uri: string, options?: CustomRequestOptions ) => Promise<any>;
  post: ( uri: string, body?: BodyType, options?: CustomRequestOptions ) => Promise<any>;
  patch: ( uri: string, body?: BodyType, options?: CustomRequestOptions ) => Promise<any>;
  delete: ( uri: string, body?: BodyType, options?: CustomRequestOptions ) => Promise<any>;
}
/**
 * @public
 */
export declare class HttpService {
  protected http: HttpClient;
  protected static prefix: string;
  private _baseUrl;
  ['constructor']: typeof HttpService;
  constructor( apiURL: string, options?: Record<string, any> );
  get baseUrl(): string;
}
