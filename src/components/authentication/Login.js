import axios from 'axios';
import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { loginState } from '../../actions';

const Login = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  const [wrongPassword, setWrongPassword] = useState('');

  const onFormSubmit = async (e) => {
    e.preventDefault();
    axios
      .post('http://127.0.0.1:3000/login', {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((res) => {
        props.loginState('LOG OUT');
        history.replace('/');
      })
      .catch((err) => {
        setWrongPassword('Incorrect username or password');
      });
  };

  const onSignupClick = (e) => {
    e.preventDefault();
    history.push('/signup');
  };

  const onForgotPassword = (e) => {
    e.preventDefault();
  };

  return (
    <div className='w-full h-3/4 flex items-center flex-col'>
      <div className='text-white text-5xl mt-36 tracking-widest mb-8'>
        LOGIN
      </div>
      <form className='flex flex-col'>
        <input
          type='text'
          placeholder='email'
          className='mb-5 bg-gray-800 border-b border-white w-80 focus:outline-none pb-2 text-white text-lg'
          ref={emailRef}
        />
        <input
          type='password'
          placeholder='password'
          className=' bg-gray-800 border-b focus:outline-none border-white w-80 pb-2 text-white text-lg'
          ref={passwordRef}
        />
        {wrongPassword ? (
          <div className='text-sm text-red-600 mt-2'>{wrongPassword}</div>
        ) : (
          <div></div>
        )}
        <button
          className='mt-8 border border-green-600 w-80 text-center text-white py-2 bg-green-600 focus:outline-none'
          onClick={onFormSubmit}
        >
          Submit
        </button>
        <div className='flex justify-between'>
          <button
            className='text-base text-white mt-4 focus:outline-none'
            onClick={onSignupClick}
          >
            Sign up
          </button>
          <button
            className='text-base text-white mt-4 focus:outline-none'
            onClick={onForgotPassword}
          >
            Forgot password?
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect(null, { loginState: loginState })(Login);
