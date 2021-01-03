export const ADD_POST = 'post/ADD_POST' as const;

export const addPost = (
  data: string
): {
  type: 'post/ADD_POST';
  payload: string;
} => ({ type: ADD_POST, payload: data });
