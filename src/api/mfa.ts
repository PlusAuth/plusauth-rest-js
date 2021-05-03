import { MFAType } from '../constants';
import { HttpService } from '../http';
import { IMfa } from '../interfaces';

/**
 * Service for interacting with API's defined in PlusAuth
 * @public
 */
export class MFAService extends HttpService{
  protected static prefix = '/mfa'

  /**
   * Get MFA settings
   *
   * @example
   * ```js
   * const settings = await plusAuth.mfa.getAll()
   * ```
   */
  async getAll(): Promise<Record<MFAType, IMfa>> {
    return this.http.get( '' );
  }


  /**
   * Get specific MFA settings
   *
   * @param type - MFA type
   * @example
   * ```js
   * const smsSettings = await plusAuth.mfa.get(MFAType.SMS)
   * ```
   */
  async get( type: MFAType ): Promise<IMfa> {
    return this.http.get( `/${ type }` );
  }


  /**
   * Update specific MFA settings
   *
   * @param type - MFA type
   * @param settings - Updated settings
   * @example
   * ```js
   * const newSmsSettings = await plusAuth.mfa.update(MFAType.SMS, { enabled: false })
   * ```
   */
  async update( type: MFAType, settings: Record<string, any> ): Promise<IMfa> {
    return this.http.patch( `/${ type }`, settings );
  }
}
