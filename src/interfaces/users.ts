/**
 * @public
 */
export interface BaseModel {
  id: string;
}

/**
 * @public
 */
export interface IUserDetails extends BaseModel {
  user_id?: string;
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
    formatted: string;
    street_address: string;
    locality: string;
    region: string;
    postal_code: number;
    country: string;
  };
  metadata?: Record<string, string | number>;
}

/**
 * @public
 */
export interface IUser {
  salt?: string;
  func: number;
  username?: string;
  password?: string;
  blocked?: boolean;
  user_details?: IUserDetails;
}
