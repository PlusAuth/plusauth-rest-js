import { HttpService } from '../http';
/**
 * Service for interacting with signing and encryption keys of your tenant in PlusAuth
 * @public
 */
export class KeyService extends HttpService{
  protected static prefix = '/keys'

  /**
   * Retrieve signing keys of your tenant.
   *
   * @example
   * ```js
   * const signingKeys = await plusAuth.keys.getSigningKeys()
   * ```
   */
  async getSigningKeys( ): Promise<JsonWebKey[]> {
    return this.http.get( '/signing' );
  }

  /**
   * Rotate your signing keys. If keys are not provided,
   * a new key will be auto generated for each key type and algorithm in current key set.
   *
   * @example
   * ```js
   * Let PlusAuth generate new keys
   * if(await plusAuth.keys.rotateSigningKeys()){
   *   console.log('signing keys rotated')
   * }
   * ```
   *
   * @example
   * With your own key set
   * ```js
   * const keys = generateJWKS() // implement this according to your needs
   * if(await plusAuth.keys.rotateSigningKeys(keys)){
   *   console.log('signing keys rotated')
   * }
   * ```
   */
  async rotateSigningKeys( keys?: JsonWebKey[] ): Promise<void> {
    return this.http.post( '/signing/rotate', { keys } );
  }

  /**
   * Revoke an existing signing key in your tenant's signing key set.
   *
   * @param kid - Key's id to be revoked
   *
   * @example
   * ```js
   * if(await plusAuth.keys.revokeSigningKey('KEY_ID')){
   *   console.log('signing key revoked')
   * }
   * ```
   */
  async revokeSigningKey( kid: string ): Promise<void> {
    return this.http.get( `/signing/revoke/${ kid }` );
  }

  /**
   * Retrieve encryption keys of your tenant.
   *
   * @example
   * ```js
   * const encryptionKeys = await plusAuth.keys.getEncryptionKeys()
   * ```
   */
  async getEncryptionKeys( ): Promise<JsonWebKey[]> {
    return this.http.get( '/encryption' );
  }

  /**
   * Rotate your encryption keys. If keys are not provided,
   * a new key will be auto generated for each key type and algorithm in current key set.
   *
   * @example
   * ```js
   * Let PlusAuth generate new keys
   * if(await plusAuth.keys.rotateEncryptionKeys()){
   *   console.log('signing keys rotated')
   * }
   * ```
   *
   * @example
   * With your own key set
   * ```js
   * const keys = generateJWKS() // implement this according to your needs
   * if(await plusAuth.keys.rotateEncryptionKeys(keys)){
   *   console.log('encryption keys rotated')
   * }
   * ```
   */
  async rotateEncryptionKeys( keys?: JsonWebKey[] ): Promise<void> {
    return this.http.post( '/encryption/rotate', { keys } );
  }

  /**
   * Revoke an existing encryption key in your tenant's encryption key set.
   *
   * @param kid - Key's id to be revoked
   *
   * @example
   * ```js
   * if(await plusAuth.keys.revokeEncryptionKey('KEY_ID')){
   *   console.log('encryption key revoked')
   * }
   * ```
   */
  async revokeEncryptionKey( kid: string ): Promise<void> {
    return this.http.get( `/encryption/revoke/${ kid }` );
  }
}
