import React from 'react';
import { ActionType } from '../actions/book-actions';
import { BookCardProps } from '../components/book-card';

export interface InitialStateI {
  loading: boolean;
  errorMessage: string;
  data: BookCardProps[];
}
export interface BookContextI {
  state: InitialStateI;
  dispatch: React.Dispatch<ActionType>;
}
