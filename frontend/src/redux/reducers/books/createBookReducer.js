import { CREATE_BOOK_REQUEST, CREATE_BOOK_SUCCESS, CREATE_BOOK_FAIL } from '../../actions/actionTypes';

const createBookReducer = (state={}, action) => {
  const { type, payload } = action;
  switch(type) {
    case CREATE_BOOK_REQUEST:
      return {
        loading: true,
      };
    case CREATE_BOOK_SUCCESS:
      return {
        loading: false,
        book: payload,
      };
    case CREATE_BOOK_FAIL:
      return {
        loading: false,
        error: payload,
      };

    default: 
      return state; 
  };
};

export {createBookReducer};