import React from 'react';
import { connect } from 'react-redux';
import ModalItem from './ModalItem';

const ModalList = (props) => {
  const renderedList = props.mealsList.map((meal) => {
    return (
      <ModalItem name={meal.name} price={meal.price} amount={meal.number} />
    );
  });

  return <div>{renderedList}</div>;
};

const mapStateToProps = (state) => {
  return {
    mealsList: state.mealListInCart,
  };
};

export default connect(mapStateToProps)(ModalList);
