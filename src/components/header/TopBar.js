import React from 'react';
import Cart from './Cart';
import Header from './Header';
import SignupLogin from './SignupLogin';

const TopBar = () => {
  return (
    <div className='bg-red-400 grid grid-cols-10 h-20'>
      <Header />
      <Cart />
      <SignupLogin />
    </div>
  );
};

export default TopBar;
