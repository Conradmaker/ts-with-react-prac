import * as React from 'react';
import { Dispatch } from 'react';
import { Actions } from './types';

type TdProps = {
  rowIndex: number;
  cellIndex: number;
  dispatch: Dispatch<Actions>;
  children: React.ReactNode;
};
export default function Td({
  dispatch,
  cellIndex,
  children,
  rowIndex,
}: TdProps): React.ReactNode {
  return <div></div>;
}
