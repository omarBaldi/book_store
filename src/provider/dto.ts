import React from 'react';
import { ActionType } from '../actions/book-actions';
import { BookCardProps } from '../components/book-card';

export interface InitialStateI {
  loading: boolean;
  errorMessage: string;
  books: BookCardProps[];
  selectedBooks: Map<string, number | undefined>;
}
export interface BookContextI {
  state: InitialStateI;
  dispatch: React.Dispatch<ActionType>;
}
