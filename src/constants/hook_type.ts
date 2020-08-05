/**
 * @public
 */
export enum HookType {
  PRE_REGISTER = 'pre_register',
  POST_REGISTER = 'post_register',
  PRE_LOGIN = 'pre_login',
  POST_LOGIN = 'post_login',
  PRE_MFA = 'pre_mfa',
  PRE_ACCESS_TOKEN = 'pre_access_token',
  PRE_ID_TOKEN = 'pre_id_token'
}
