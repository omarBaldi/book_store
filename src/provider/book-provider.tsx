import { createContext, useEffect, useReducer } from 'react';
import axios, { AxiosError } from 'axios';
import { BookContextI, InitialStateI } from './dto';
import { DEFAULT_ERROR_MESSAGE } from '../constant';
import { bookReducer } from '../reducers/book-reducer';
import { ACTIONS } from '../actions/book-actions';

const BookContext = createContext<BookContextI>({});

const initialState: InitialStateI = {
  loading: true,
  errorMessage: '',
  data: [],
};

export const BookProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(bookReducer, initialState);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios({
          method: 'GET',
          url: `${process.env.REACT_APP_BASE_API_URL}/items`,
        });

        dispatch({ type: ACTIONS.SET_BOOKS_DATA, payload: data });
      } catch (err: any) {
        const { message } = err as AxiosError;
        const errorMessage = message || DEFAULT_ERROR_MESSAGE;
        dispatch({ type: ACTIONS.SET_ERROR_MESSAGE, message: errorMessage });
      } finally {
        dispatch({ type: ACTIONS.SET_LOADING_STATE, value: false });
      }
    };

    getData();
  }, []);

  return (
    <BookContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
