/**
 * @public
 */
export class PlusAuthRestError extends Error {
  _raw?: Error

  constructor( error: any ) {
    super( error.message || error.error || error.name );
    if ( !( error instanceof Error ) ) {
      Object.assign( this, error )
    } else {
      this._raw = error
    }
  }
}
