// store.js
import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  name: '',
  bookTypeCounts: {
    Fiction: 0,
    'Non-fiction': 0,
    Mystery: 0,
    'Historical Fiction': 0,
    'Science fiction': 0,
    'Short story': 0,
    Poetry: 0,
    Novel: 0,
    'Graphic novel': 0,
  },
};

export const incrementCount = () => {
  return {
    type: 'counter/increment',
  };
};

export const updateName = (name) => {
  return {
    type: 'name/update',
    payload: name,
  };
};

export const incrementBookTypeCount = (bookType) => {
  return {
    type: 'bookType/increment',
    payload: bookType,
  };
};

function counterReducer(state = initialState, action) {
  if (action.type === 'counter/increment') {
    return {
      ...state,
      value: state.value + 1,
    };
  } else if (action.type === 'name/update') {
    return {
      ...state,
      name: action.payload,
    };
  } else if (action.type === 'bookType/increment') {
    if (state.bookTypeCounts.hasOwnProperty(action.payload)) {
      return {
        ...state,
        bookTypeCounts: {
          ...state.bookTypeCounts,
          [action.payload]: state.bookTypeCounts[action.payload] + 1,
        },
      };
    }
  }

  return state;
}

const store = configureStore({ reducer: counterReducer });

export default store;
