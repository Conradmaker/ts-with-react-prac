import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from './modules/actions/post';
import { logOut } from './modules/actions/user';
import { RootState } from './modules/reducers';
import { logIn } from './modules/thunk/user';

export default function App(): JSX.Element {
  const dispatch = useDispatch();
  const [text, setText] = React.useState('');
  const { user } = useSelector((state: RootState) => state);
  const { posts } = useSelector((state: RootState) => state);

  const onClick = () => {
    dispatch(logIn({ id: 'conrad', password: 'asd' }));
  };

  const onLogout = () => {
    dispatch(logOut());
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const onAddPost = () => {
    dispatch(addPost(text));
  };
  return (
    <>
      <div>
        {user.isLoggedIn ? (
          <div>로그인중</div>
        ) : user.data ? (
          <div>{user.data.nickname}</div>
        ) : (
          '로그인해주세요'
        )}
        {!user.data ? (
          <button onClick={onClick}>로그인</button>
        ) : (
          <button onClick={onLogout}>로그아웃</button>
        )}
      </div>
      <div>
        <input type="text" placeholder="게시글 입력" onChange={onChange} />
        <button onClick={onAddPost}>등록</button>
        <ul>
          {posts.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
