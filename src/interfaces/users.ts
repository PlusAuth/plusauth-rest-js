import { HasId, HasTenant, HasUser, Timestamped } from './common';

/**
 * @public
 */
export interface IBaseUserDetails {
  name?: string;
  given_name?: string;
  family_name?: string;
  middle_name?: string;
  nickname?: string;
  preferred_username?: string;
  profile?: string;
  picture?: string;
  website?: string;
  email?: string;
  email_verified?: boolean;
  gender?: string;
  birthdate?: string; // YYYY-MM-DD
  zoneinfo?: string;
  locale?: string;
  phone_number?: string;
  phone_verified?: boolean;
  address?: {
    formatted?: string;
    street_address?: string;
    locality?: string;
    region?: string;
    postal_code?: number;
    country?: string;
  };
  metadata?: Record<string, string | number | boolean>;
}

/**
 * @public
 */
export type IUserDetails = IBaseUserDetails & HasUser;

/**
 * @public
 */
export interface IBaseUser {
  username?: string;
  password?: string;
  blocked?: boolean;
  user_details?: IBaseUserDetails;
}

/**
 * @public
 */
export type IUser = IBaseUser & HasId & HasTenant & Timestamped & { user_details: IUserDetails} & {
  salt: string;
  func: number;
};

/**
 * @public
 */
export interface IUserSession {
  id: string
  ip: string
  ua: string
  exp: number
  created_at: number
  last_activity: number
  location?: {
    city: string
    country: string
    postal_code: string,
    pos?: {
      latitude: number
      longitude: number
      accuracy_radius: number
      time_zone: string
    }
  }
}
