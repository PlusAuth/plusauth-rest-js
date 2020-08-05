/**
 * @public
 */
export interface IApi {
  name: string;
  description?: string;
  audience?: string;
  system?: boolean;
}

/**
 * @public
 */
export interface IApiPatch {
  name?: string;
  description?: string;
}
