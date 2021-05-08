import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addMeal, addToCart } from '../../actions';

const ModalItem = (props) => {
  const [amount, setAmount] = useState(props.amount);

  const onAddClick = () => {
    props.addMeal(props.name, props.price, 1);

    setAmount((value) => value + 1);

    props.addToCart(1);
  };

  const onMinusClick = () => {
    setAmount((value) => {
      if (value > 0) {
        props.addMeal(props.name, props.price, -1);
        props.addToCart(-1);
        return value - 1;
      } else {
        return 0;
      }
    });
  };

  const convertPrice = () => {
    const priceArr = (Math.round(props.price * amount * 100) / 100)
      .toString()
      .split('.');
    if (!priceArr[1]) {
      return priceArr[0] + '.00';
    } else if (priceArr[1].length === 1) {
      return priceArr[0] + '.' + priceArr[1] + '0';
    } else {
      return priceArr.join('.');
    }
  };

  return (
    <div className='grid grid-cols-6 grid-rows-2 px-7 py-4'>
      <h3 className='col-start-1 row-start-1 text-xl font-semibold col-span-4 row-span-1 self-center'>
        {props.name}
      </h3>
      <p className='col-start-1 row-start-2 text-xl col-span-1 row-span-1 self-center'>
        ${convertPrice()}
      </p>
      <p className='col-start-2 row-start-2 text-xl border border-gray-500 p-1 rounded-lg col-span-1 row-span-1 w-12 text-center'>
        x{amount}
      </p>
      <div className='col-start-5 row-start-1 col-span-2 row-span-2 self-center justify-self-end'>
        <button onClick={onMinusClick} className='focus:outline-none'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8 inline-block ml-2 bg-yellow-800 rounded-lg'
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
        <button onClick={onAddClick} className='focus:outline-none'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8 inline-block ml-2 bg-yellow-800 rounded-lg'
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
      </div>
    </div>
  );
};

export default connect(null, { addToCart: addToCart, addMeal: addMeal })(
  ModalItem
);
