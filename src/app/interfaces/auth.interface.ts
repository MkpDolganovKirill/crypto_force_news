export interface Auth {
  login: string;
  password: string;
}

export interface AuthResponse {
  username: string;
  accesstoken: string;
  refreshtoken: string;
}
