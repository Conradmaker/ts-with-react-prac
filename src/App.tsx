import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { logInRequest, logOut } from './modules/actions/user';
import { RootState } from './modules/reducers';
import { LoginRequest, UserState } from './modules/types/user';

interface Props {
  user: UserState;
  dispatchLogIn: ({ id, password }: LoginRequest) => void;
  dispatchLogOut: () => void;
}
class App extends React.Component<Props> {
  onClick = () => {
    this.props.dispatchLogIn({
      id: 'conrad',
      password: '비밀번호',
    });
  };

  onLogout = () => {
    this.props.dispatchLogOut();
  };
  render() {
    const { user } = this.props;
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
          <button onClick={this.onClick}>로그인</button>
        ) : (
          <button onClick={this.onLogout}>로그아웃</button>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state: RootState) => ({
  user: state.user,
  posts: state.posts,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  dispatchLogIn: (data: LoginRequest) => dispatch(logInRequest(data)),
  dispatchLogOut: () => dispatch(logOut()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
