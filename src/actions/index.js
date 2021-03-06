// Action creators

export const showModal = (state) => {
  return {
    type: 'SHOW_MODAL',
    payload: state,
  };
};

export const addToCart = (amount) => {
  return {
    type: 'ADD_TO_CART',
    payload: amount,
  };
};

export const addMeal = (mealName, mealPrice, number) => {
  return {
    type: 'ADD_MEAL',
    payload: {
      name: mealName,
      price: mealPrice,
      number,
    },
  };
};

export const clearOrders = () => {
  return {
    type: 'CLEAR_ORDERS',
    payload: [],
  };
};

export const loginState = (state) => {
  return {
    type: 'LOGIN_STATE',
    payload: state,
  };
};
