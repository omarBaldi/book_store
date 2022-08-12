import React from 'react';
import { ActionType } from '../actions/book-actions';

export interface BookI {
  id: number;
  image_url: string;
  price: number;
  stock_quantity: number;
  title: string;
  discount_set?: string;
}

export interface InitialStateI {
  loading: boolean;
  errorMessage: string;
  data: BookI[];
}
export interface BookContextI {
  state: InitialStateI;
  dispatch: React.Dispatch<ActionType>;
}
