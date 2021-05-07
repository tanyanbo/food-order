import React from 'react';
import Cart from './Cart';
import Header from './Header';

const TopBar = () => {
  return (
    <div className='bg-red-400 grid grid-cols-10 h-28'>
      <Header />
      <Cart />
    </div>
  );
};

export default TopBar;
