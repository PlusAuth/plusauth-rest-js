/**
 * @internal
 */
export function encodedQueryString( data?: { [key: string]: any }, appendable = true ): string {
  if ( !data ) return '';
  const ret: string[] = [];
  for ( const d in data ) {
    if ( data[d] != null ) ret.push( `${ encodeURIComponent( d ) }=${ data[d].toString() }` );
  }
  if ( appendable ) {
    return `?${ ret.join( '&' ) }`;
  } else {
    return ret.join( '&' );
  }
}
