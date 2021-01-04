import * as React from 'react';
import NumberBaseBall from './numberBaseball/NumberBaseball';
import RSP from './RSP/RSP';
import Lotto from './lotto/Lotto';
import { RouteComponentProps } from 'react-router-dom';

// interface Props extends RouteComponentProps {
//   hello: string;
// }
export default function GameMatcher({
  location,
  match,
}: RouteComponentProps<{ name: string }>): JSX.Element {
  const urlSearchParams = new URLSearchParams(location.search.slice(1));
  console.log(urlSearchParams);
  if (match.params.name === 'number-baseball') {
    return <NumberBaseBall />;
  } else if (match.params.name === 'rock-scissors-paper') {
    return <RSP />;
  } else if (match.params.name === 'lotto-generator') {
    return <Lotto />;
  }
  return <div>일치하는 게임이 없어요</div>;
}
