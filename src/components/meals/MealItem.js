import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addMeal, addToCart } from '../../actions';

const MealItem = (props) => {
  const [value, setValue] = useState(0);

  const onAddClick = (e) => {
    e.preventDefault();
    setValue((value) => +value + 1);
  };

  const onMinusClick = (e) => {
    e.preventDefault();
    setValue((value) => {
      if (value > 0) {
        return +value - 1;
      } else {
        return 0;
      }
    });
    console.log('clicked');
  };

  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  const convertPrice = () => {
    const arr = props.price.toString().split('.');
    if (!arr[1]) {
      return props.price.toString() + '.00';
    } else if (arr[1].length === 1) {
      return props.price.toString() + '0';
    } else {
      return props.price.toString();
    }
  };

  const onAddCart = () => {
    props.addToCart(value);
    props.addMeal(props.name, props.price, value);
    setValue(0);
  };

  return (
    <div className='grid grid-cols-4 grid-rows-3 p-4 border-b'>
      <p className='text-lg row-start-1 col-start-1 col-span-3'>{props.name}</p>
      <p className='text-lg row-start-2 col-start-1 col-span-3'>
        {props.description}
      </p>
      <p className='text-lg row-start-3 col-start-1 col-span-3'>
        ${convertPrice()}
      </p>
      <form className='col-start-4 row-start-1 row-span-2 my-auto justify-self-end'>
        <label htmlFor='amount' className='font-semibold inline-block'>
          Amount
        </label>
        <button onClick={onMinusClick} className='focus:outline-none'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 inline-block ml-2 bg-yellow-800 rounded-lg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='#FFFFFF'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M20 12H4'
            />
          </svg>
        </button>
        <input
          type='text'
          className='border  rounded-md focus: outline-none ml-2 w-14 text-center inline-block'
          value={value || ''}
          onChange={onInputChange}
        />
        <button onClick={onAddClick} className='focus:outline-none'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 inline-block ml-2 bg-yellow-800 rounded-lg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='#FFFFFF'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 6v6m0 0v6m0-6h6m-6 0H6'
            />
          </svg>
        </button>
      </form>
      <button
        className='row-start-3 col-start-4 bg-yellow-900 rounded-full w-48 text-white justify-self-end h-8 focus:outline-none shadow-2xl focus:shadow-sm'
        onClick={onAddCart}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default connect(null, { addToCart: addToCart, addMeal: addMeal })(
  MealItem
);
