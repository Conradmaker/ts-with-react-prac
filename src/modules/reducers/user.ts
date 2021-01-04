import { produce } from 'immer';
import {
  LOG_IN_ERROR,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_REQUEST,
} from '../actions/user';
import { LoginData, UserActions, UserState } from '../types/user';

const initialState: UserState = {
  isLoggedIn: false,
  data: null,
  error: null,
};

const userReducer = (
  state: UserState = initialState,
  action: UserActions
): UserState => {
  return produce(state, draft => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.data = null;
        draft.isLoggedIn = true;
        break;
      case LOG_IN_SUCCESS:
        draft.isLoggedIn = false;
        draft.data = action.payload as LoginData;
        break;
      case LOG_IN_ERROR:
        draft.isLoggedIn = false;
        draft.data = null;
        draft.error = action.payload as Error;
        break;
      case LOG_OUT_REQUEST:
        draft.data = null;
        break;
      default:
        break;
    }
  });
};

export default userReducer;
