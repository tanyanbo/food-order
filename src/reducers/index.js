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

    case 'CLEAR_ORDERS':
      return 0;

    default:
      return state;
  }
};

const mealModalReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MEAL':
      let x = 0;
      const newState = [...state];
      newState.forEach((meal) => {
        if (meal.name === action.payload.name) {
          meal.number += action.payload.number;
          x++;
        }
      });
      if (x > 0) {
        return newState;
      }
      return [...state, action.payload];

    case 'CLEAR_ORDERS':
      return action.payload;

    default:
      return state;
  }
};

const loginStateReducer = (state = 'LOGIN', action) => {
  switch (action.type) {
    case 'LOGIN_STATE':
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  modalState: modalReducer,
  mealsInCart: mealReducer,
  mealListInCart: mealModalReducer,
  loginState: loginStateReducer,
});
