import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from './modules/actions/user';
import { RootState } from './modules/reducers';
import { logIn } from './modules/thunk/user';

export default function App(): JSX.Element {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state);

  const onClick = () => {
    dispatch(logIn({ id: 'conrad', password: 'asd' }));
  };

  const onLogout = () => {
    dispatch(logOut());
  };
  return (
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
  );
}
