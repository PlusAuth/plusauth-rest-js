/**
 * @public
 */
export declare class PlusAuthRestError extends Error {
  _raw?: Error;
  constructor( error: Error | any );
}
