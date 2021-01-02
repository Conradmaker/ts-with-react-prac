import { CHANGE_TURN, CLICK_CELL, RESET_GAME, SET_WINNER } from './actions';

export type Actions =
  | { type: typeof SET_WINNER; winner: 'O' | 'X' }
  | { type: typeof CLICK_CELL; row: number; cell: number }
  | { type: typeof CHANGE_TURN }
  | { type: typeof RESET_GAME };

export interface ReducerState {
  winner: 'O' | 'X' | '';
  turn: 'O' | 'X';
  tableData: string[][];
  recentCell: [number, number];
}
