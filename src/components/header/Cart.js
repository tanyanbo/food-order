import React from 'react';

const Cart = () => {
  return (
    <div className='col-start-8 col-span-2 bg-yellow-900 rounded-full h-4/6 my-auto flex items-center px-16'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6 mr-4'
        fill='none'
        viewBox='0 0 24 24'
        stroke='#FFFFFF'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
        />
      </svg>
      <div className='text-white font-semibold text-2xl my-auto'>Your cart</div>
      <div className='ml-auto rounded-full bg-red-700 px-4 py-1 text-white font-semibold'>
        2
      </div>
    </div>
  );
};

export default Cart;