import produce from 'immer';
import { ADD_POST } from '../actions/post';
import { PostActions } from '../types/post';

type PostsState = string[];

const initialState: string[] = [];

const postReducer = (
  state: PostsState = initialState,
  action: PostActions
): PostsState => {
  return produce(state, draft => {
    switch (action.type) {
      case ADD_POST:
        draft.push(action.payload);
        break;
      default:
        break;
    }
  });
};

export default postReducer;
