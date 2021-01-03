/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { LoginData, LoginRequest } from '../types/user';

export const LOG_IN_REQUEST = 'user/LOG_IN_REQUEST' as const;
export const LOG_IN_SUCCESS = 'user/LOG_IN_SUCCESS' as const;
export const LOG_IN_ERROR = 'user/LOG_IN_SUCCESS' as const;

export const LOG_OUT_REQUEST = 'user/LOG_OUT_REQUEST' as const;
export const LOG_OUT_SUCCESS = 'user/LOG_OUT_SUCCESS' as const;
export const LOG_OUT_ERROR = 'user/LOG_OUT_ERROR' as const;

export const logInRequest = (data: LoginRequest) => ({
  type: LOG_IN_REQUEST,
  payload: data,
});
export const logInSuccess = (data: LoginData) => ({
  type: LOG_IN_SUCCESS,
  payload: data,
});
export const logInError = (error: Error) => ({
  type: LOG_IN_ERROR,
  payload: error,
});
export const logOut = () => ({ type: LOG_OUT_REQUEST });
