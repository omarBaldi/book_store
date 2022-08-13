import { ActionType, ACTIONS } from '../actions/book-actions';
import { BookCardProps } from '../components/book-card';
import { InitialStateI } from '../provider/dto';

export const bookReducer = (state: InitialStateI, action: ActionType) => {
  switch (action.type) {
    case ACTIONS.INCREASE_BOOK_QUANTITY: {
      /* 
        As soon as the user dispatch the action for increasing
        by 1 the quantity, I need to check if the previous quantity chosen
        is either greater or lesser than the stock quantity.

        If less, then proceed with adding 1 to the book,
        otherwise do not and return the previous value.

        NOTE: I need to get the stock quantity first based on current ID passed.
      */
      const { id: currentSelectedBookID } = action;
      const bookData: BookCardProps | undefined = state.books.find(
        ({ id }) => id === currentSelectedBookID
      );

      if (bookData) {
        const { stock_quantity: quantityAvailable } = bookData;
        const previousCurrentBookQuantity: number =
          state.selectedBooks.get(currentSelectedBookID.toString()) ?? 0;

        return {
          ...state,
          selectedBooks: state.selectedBooks.set(
            currentSelectedBookID.toString(),
            previousCurrentBookQuantity < quantityAvailable
              ? previousCurrentBookQuantity + 1
              : previousCurrentBookQuantity
          ),
        };
      } else {
        return state;
      }
    }
    case ACTIONS.DECREASE_BOOK_QUANTITY: {
      const { id: currentSelectedBookID } = action;

      const previousCurrentBookQuantity: number =
        state.selectedBooks.get(currentSelectedBookID.toString()) ?? 0;

      /* 
        If the previous selected quantity is equal to 1, that means with this operation
        the quanity will be 0, therefore filter the map by removing the book id.
      */

      const updatedBooks =
        previousCurrentBookQuantity <= 1
          ? new Map(
              [...state.selectedBooks].filter(
                ([id, _]) => id !== currentSelectedBookID.toString()
              )
            )
          : state.selectedBooks.set(
              currentSelectedBookID.toString(),
              previousCurrentBookQuantity - 1
            );

      return {
        ...state,
        selectedBooks: updatedBooks,
      };
    }
    case ACTIONS.SET_BOOKS_DATA: {
      const key: keyof InitialStateI = 'books';

      const { payload: books } = action;

      const updatedBooks = books.map((book) => ({
        ...book,
        discount_set: book.discount_set || 'other',
      }));

      return {
        ...state,
        [key]: updatedBooks,
      };
    }
    case ACTIONS.SET_ERROR_MESSAGE: {
      const key: keyof InitialStateI = 'errorMessage';

      return {
        ...state,
        [key]: action.message,
      };
    }
    case ACTIONS.SET_LOADING_STATE: {
      const key: keyof InitialStateI = 'loading';

      return {
        ...state,
        [key]: action.value,
      };
    }

    default: {
      return state;
    }
  }
};
