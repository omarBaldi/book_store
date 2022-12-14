import { BookCardProps } from '../components/book-card';

export enum ACTIONS {
  SET_BOOKS_DATA,
  SET_LOADING_STATE,
  SET_ERROR_MESSAGE,
  INCREASE_BOOK_QUANTITY,
  DECREASE_BOOK_QUANTITY,
  DELETE_BOOK_SELECTED,
}

export type ActionType =
  | {
      type: ACTIONS.SET_BOOKS_DATA;
      payload: BookCardProps[];
    }
  | {
      type: ACTIONS.SET_LOADING_STATE;
      value: boolean;
    }
  | {
      type: ACTIONS.SET_ERROR_MESSAGE;
      message: string;
    }
  | {
      type: ACTIONS.INCREASE_BOOK_QUANTITY;
      id: number;
    }
  | {
      type: ACTIONS.DECREASE_BOOK_QUANTITY;
      id: number;
    }
  | {
      type: ACTIONS.DELETE_BOOK_SELECTED;
      id: number;
    };
