import React, { useRef } from 'react';
import bcrypt from 'bcryptjs';
import axios from 'axios';
import { useHistory } from 'react-router';

const Signup = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const addressRef = useRef();
  const contactNumberRef = useRef();

  const history = useHistory();

  const onFormSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return alert('Password does not match');
    }
    const hashedPassword = await bcrypt.hash(passwordRef.current.value, 12);

    const data = JSON.stringify({
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: hashedPassword,
      address: addressRef.current.value,
      contactNumber: contactNumberRef.current.value,
    });

    await axios.post('http://127.0.0.1:3000/user', data, {
      headers: { 'Content-Type': 'application/json' },
    });

    history.replace('/');
  };

  return (
    <div className='w-full h-3/4 flex items-center flex-col'>
      <div className='text-white text-5xl mt-36 tracking-widest mb-8'>
        SIGN UP
      </div>
      <form className='flex flex-col' onSubmit={onFormSubmit}>
        <input
          type='text'
          placeholder='name'
          className='mb-5 bg-gray-800 border-b border-white w-80 focus:outline-none pb-2 text-white text-lg'
          ref={nameRef}
        />
        <input
          type='text'
          placeholder='email'
          className='mb-5 bg-gray-800 border-b border-white w-80 focus:outline-none pb-2 text-white text-lg'
          ref={emailRef}
        />
        <input
          type='password'
          placeholder='password'
          className='mb-5 bg-gray-800 border-b focus:outline-none border-white w-80 pb-2 text-white text-lg'
          ref={passwordRef}
        />
        <input
          type='password'
          placeholder='confirm password'
          className='mb-5 bg-gray-800 border-b focus:outline-none border-white w-80 pb-2 text-white text-lg'
          ref={passwordConfirmRef}
        />
        <input
          type='text'
          placeholder='address'
          className='mb-5 bg-gray-800 border-b focus:outline-none border-white w-80 pb-2 text-white text-lg'
          ref={addressRef}
        />
        <input
          type='text'
          placeholder='contact number'
          className='mb-8 bg-gray-800 border-b focus:outline-none border-white w-80 pb-2 text-white text-lg'
          ref={contactNumberRef}
        />
        <button
          className='border border-green-600 w-40 rounded-lg self-center text-center text-white py-2 bg-green-600 focus:outline-none'
          type='submit'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
