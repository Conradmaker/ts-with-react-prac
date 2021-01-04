import * as React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import GameMatcher from './GameMatcher';

export default function Games(): JSX.Element {
  return (
    <BrowserRouter>
      <div>
        <Link to="/game/number-baseball">숫자야구</Link>&nbsp;
        <Link to="/game/rock-scissors-paper">가위바위보</Link>&nbsp;
        <Link to="/game/lotto-generator">로또생성기</Link>&nbsp;
        <Link to="/game/">게임매쳐</Link>
      </div>
      <div>
        <Switch>
          <Route exact path="/" component={GameMatcher} />
          <Route path="/game/:name" component={GameMatcher} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
