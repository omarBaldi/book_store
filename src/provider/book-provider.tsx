import { createContext, useEffect, useReducer } from 'react';
import axios, { AxiosError } from 'axios';
import { BookContextI, InitialStateI, ActionType, ACTIONS } from './dto';

const BookContext = createContext<BookContextI>({});

const initialState: InitialStateI = {
  loading: true,
  errorMessage: '',
  data: [],
};

const bookReducer = (state: InitialStateI, action: ActionType) => {
  switch (action.type) {
    case ACTIONS.SET_BOOKS_DATA: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case ACTIONS.SET_ERROR_MESSAGE: {
      return {
        ...state,
        errorMessage: action.message,
      };
    }
    case ACTIONS.SET_LOADING_STATE: {
      return {
        ...state,
        loading: action.value,
      };
    }

    default: {
      return state;
    }
  }
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
        //TODO: move the below message to constant file
        const defaultMessage = 'An error occureed for following';
        const errorMessage = message || defaultMessage;
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
