export interface BookContextI {}

export interface InitialStateI {}

export enum Actions {
  SET_BOOKS,
}

export type ActionType = {
  type: Actions.SET_BOOKS;
  payload: any;
};
