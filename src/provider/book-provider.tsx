import { createContext, useReducer } from 'react';
import { BookContextI, InitialStateI, ActionType } from './dto';

const BookContext = createContext<BookContextI>({});

const initialState: InitialStateI = {};

const bookReducer = (state: InitialStateI, action: ActionType) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export const BookProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(bookReducer, initialState);

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
