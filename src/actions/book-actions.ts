export enum ACTIONS {
  SET_BOOKS_DATA,
  SET_LOADING_STATE,
  SET_ERROR_MESSAGE,
}

export type ActionType =
  | {
      type: ACTIONS.SET_BOOKS_DATA;
      payload: any;
    }
  | {
      type: ACTIONS.SET_LOADING_STATE;
      value: boolean;
    }
  | {
      type: ACTIONS.SET_ERROR_MESSAGE;
      message: string;
    };
