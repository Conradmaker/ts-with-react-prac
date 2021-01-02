import * as React from 'react';
import { useCallback, useReducer } from 'react';
import {
  CHANGE_TURN,
  CLICK_CELL,
  RESET_GAME,
  setWinner,
  SET_WINNER,
} from './actions';
import Table from './Table';
import { Actions, ReducerState } from './types';

const initialState: ReducerState = {
  winner: '',
  turn: 'O',
  tableData: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
  recentCell: [-1, -1],
};

const reducer = (
  state: ReducerState = initialState,
  action: Actions
): ReducerState => {
  switch (action.type) {
    case SET_WINNER:
      return {
        ...state,
        winner: action.winner,
      };
    case CLICK_CELL: {
      const tableData = [...state.tableData];
      tableData[action.row] = [...tableData[action.row]];
      tableData[action.row][action.cell] = state.turn;
      return {
        ...state,
        tableData,
        recentCell: [action.row, action.cell],
      };
    }
    case CHANGE_TURN: {
      return { ...state, turn: state.turn === 'O' ? 'X' : 'O' };
    }
    case RESET_GAME: {
      return {
        ...initialState,
        winner: state.winner,
      };
    }
    default:
      throw new Error('unhandled action type');
  }
};

export default function TicTacToe(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { tableData, turn, recentCell, winner } = state;

  const onClickTable = useCallback(() => {
    dispatch(setWinner('O'));
  }, []);
  return (
    <>
      <Table
        onClick={onClickTable}
        tableData={tableData}
        dispatch={dispatch}
      ></Table>
    </>
  );
}
