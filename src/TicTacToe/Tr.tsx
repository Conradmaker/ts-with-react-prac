import * as React from 'react';
import { Actions } from './types';

type TrProps = {
  rowData: string[];
  rowIndex: number;
  dispatch: React.Dispatch<Actions>;
};
export default function Tr({
  dispatch,
  rowData,
  rowIndex,
}: TrProps): JSX.Element {
  return (
    <tr>
      {Array(rowData.length)
        .fill(null)
        .map((td, i) =>
          React.useMemo(
            () => (
              <Td
                key={i}
                dispatch={dispatch}
                rowIndex={rowIndex}
                cellIndex={i}
                cellData={rowData[i]}
              >
                {''}
              </Td>
            ),
            [rowData[i]]
          )
        )}
    </tr>
  );
}
