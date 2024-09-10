/**
 * @internal
 */
export function encodedQueryString( data?: Record<string, any>, appendable = true ): string {
  if ( !data ) { return ''; }
  const ret: string[] = [];
  for ( const d in data ) {
    if ( data[d] != null ) { ret.push( `${ d }=${ encodeURIComponent( data[d].toString() ) }` ); }
  }
  if ( appendable ) {
    return `?${ ret.join( '&' ) }`;
  } else {
    return ret.join( '&' );
  }
}
