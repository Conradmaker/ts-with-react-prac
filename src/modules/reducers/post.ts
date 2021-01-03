import { ADD_POST } from '../actions/post';
import { PostActions } from '../types/post';

type PostsState = string[];

const initialState: string[] = [];

const postReducer = (
  state: PostsState = initialState,
  action: PostActions
): PostsState => {
  switch (action.type) {
    case ADD_POST:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default postReducer;
