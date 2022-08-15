import { createContext, useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import { BookContextI, InitialStateI } from './dto';
import { DEFAULT_ERROR_MESSAGE } from '../constant';
import { bookReducer } from '../reducers/book-reducer';
import { ACTIONS } from '../actions/book-actions';
import { useLocalStorage } from '../hooks/useLocalStorage';

const BookContext: React.Context<BookContextI> = createContext<BookContextI>(
  {} as BookContextI
);

const initialState: InitialStateI = {
  loading: true,
  errorMessage: '',
  books: [],
  selectedBooks: new Map(),
};

export const BookProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(bookReducer, initialState);

  const [apiResponsesStorage, cacheResponseData] = useLocalStorage(
    'apiResponses',
    {}
  );

  useEffect(() => {
    const getData = async () => {
      try {
        const url = `${process.env.REACT_APP_BASE_API_URL}/items`;
        const previouslyStoredResponse = apiResponsesStorage[url];

        /* 
          If the parsed storage value previously stored
          is a Map and the API response based on current URL had been
          already saved then proceed with get that and dispatch action.
        */
        if (previouslyStoredResponse) {
          console.log('GET STORAGE VALUE');
          dispatch({
            type: ACTIONS.SET_BOOKS_DATA,
            payload: previouslyStoredResponse,
          });
        } else {
          /* 
          Otherwise proceed with call new API endpoint
          and store the URL as well as the response in the local storage.
        */
          console.log('CALL API ENDPOINT');
          const { data } = await axios({
            method: 'GET',
            url,
          });

          dispatch({ type: ACTIONS.SET_BOOKS_DATA, payload: data });
          cacheResponseData({ ...apiResponsesStorage, [url]: data });
        }
      } catch (err: any) {
        let errorMessage = DEFAULT_ERROR_MESSAGE;

        if (axios.isAxiosError(err)) {
          const { message: axiosErrorMessage } = err;
          errorMessage = axiosErrorMessage;
        }

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

const useBooks = () => useContext(BookContext);
export default useBooks;
