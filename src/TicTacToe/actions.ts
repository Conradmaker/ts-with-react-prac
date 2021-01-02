import { Actions } from './types';

export const SET_WINNER = 'SET_WINNER' as const;
export const CLICK_CELL = 'CLICK_CELL' as const;
export const CHANGE_TURN = 'CHANGE_TURN' as const;
export const RESET_GAME = 'RESET_GAME' as const;

export const setWinner = (winner: 'O' | 'X'): Actions => ({
  type: SET_WINNER,
  winner,
});
export const clickCell = (row: number, cell: number): Actions => ({
  type: CLICK_CELL,
  row,
  cell,
});
