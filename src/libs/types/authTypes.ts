export interface AccessTokenResponse {
  /** The access token string. */
  access_token: string;
  /** The expiration time in milliseconds. */
  expires_in: number;
  /** Issuance date in milliseconds. */
  issued_at: number;
  /** Token type, always `Bearer`. */
  token_type: 'Bearer';
  /** One time password identifier for unverified accounts */
  otp_id?: string;
}
