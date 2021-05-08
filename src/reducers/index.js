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

const mealReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return action.payload + state;
    default:
      return state;
  }
};

const mealModalReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MEAL':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default combineReducers({
  modalState: modalReducer,
  mealsInCart: mealReducer,
  mealListInCart: mealModalReducer,
});
