import * as React from 'react';
import { useMemo } from 'react';
import Tr from './Tr';
import { Actions } from './types';

type TableProps = {
  tableData: string[][];
  dispatch: React.Dispatch<Actions>;
  onClick: () => void;
};
export default function Table({
  tableData,
  dispatch,
}: TableProps): JSX.Element {
  return (
    <table>
      {Array(tableData.length)
        .fill(null)
        .map((tr, i) =>
          useMemo(
            () => (
              <Tr
                key={i}
                dispatch={dispatch}
                rowIndex={i}
                rowData={tableData[i]}
              ></Tr>
            ),
            [tableData[i]]
          )
        )}
    </table>
  );
}
