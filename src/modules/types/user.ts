import {
  logInError,
  logInRequest,
  logInSuccess,
  logOut,
} from '../actions/user';

export interface LoginRequest {
  id: string;
  password: string;
}
export interface LoginData {
  id: string;
  nickname: string;
}
export type UserState = {
  isLoggedIn: boolean;
  data: LoginData | null;
  error: Error | null;
};
export type UserActions =
  | ReturnType<typeof logInRequest>
  | ReturnType<typeof logInSuccess>
  | ReturnType<typeof logInError>
  | ReturnType<typeof logOut>;
