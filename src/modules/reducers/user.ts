import {
  LOG_IN_ERROR,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_REQUEST,
} from '../actions/user';
import { UserActions, UserState } from '../types/user';

const initialState: UserState = {
  isLoggedIn: false,
  data: null,
};

const userReducer = (
  state: UserState = initialState,
  action: UserActions
): UserState => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return { ...state };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        data: action.payload as {
          id: string;
          nickname: string;
        },
      };
    case LOG_IN_ERROR:
    case LOG_OUT_REQUEST:
      return { ...state, data: null };
    default:
      return state;
  }
};

export default userReducer;
