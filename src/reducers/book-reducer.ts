import { ActionType, ACTIONS } from '../actions/book-actions';
import { InitialStateI } from '../provider/dto';

export const bookReducer = (state: InitialStateI, action: ActionType) => {
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
