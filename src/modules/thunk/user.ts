import { LoginRequest } from '../types/user';
import { logInRequest, logInSuccess, logInError } from '../actions/user';
import { Dispatch } from 'redux';

// Thunk함수

export const logIn = (data: LoginRequest) => async (
  dispatch: Dispatch
): Promise<void> => {
  try {
    dispatch(logInRequest(data));
    await setTimeout(() => {
      dispatch(logInSuccess({ nickname: 'conrad', id: 'asd' }));
    }, 1000);
    // dispatch(addPost(''));
  } catch (e) {
    dispatch(logInError(e));
  }
};
