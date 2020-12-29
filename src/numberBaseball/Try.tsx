import * as React from 'react';
import { TryInfo } from './types';

type TryProps = {
  tryInfo: TryInfo;
};

function Try({ tryInfo }: TryProps): JSX.Element {
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
}
export default Try;
