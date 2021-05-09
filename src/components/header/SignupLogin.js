import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { loginState } from '../../actions';

const SignupLogin = (props) => {
  const history = useHistory();

  const onButtonClick = (e) => {
    if (props.state === 'LOG OUT') {
      props.loginState('LOGIN');
      return;
    }
    history.push('/login');
  };

  return (
    <div className='flex'>
      <button
        className='text-white items-center text-3xl ml-5 focus:outline-none'
        onClick={onButtonClick}
      >
        {props.state}
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { state: state.loginState };
};

export default connect(mapStateToProps, { loginState: loginState })(
  SignupLogin
);
