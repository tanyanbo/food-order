// Reducers

import { combineReducers } from 'redux';

const modalReducer = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({ modalState: modalReducer });
