import axios from 'axios';
import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { clearOrders, showModal } from '../../actions';

const Order = (props) => {
  const history = useHistory();
  const nameRef = useRef();
  const addressRef = useRef();
  const postalCodeRef = useRef();
  const contactNumberRef = useRef();

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (
      nameRef.current.value &&
      addressRef.current.value &&
      postalCodeRef.current.value &&
      contactNumberRef.current.value
    ) {
      axios
        .post('http://127.0.0.1:3000/order', {
          name: nameRef.current.value,
          address: `${addressRef.current.value}, ${postalCodeRef.current.value}`,
          contactNumber: contactNumberRef.current.value,
          orders: props.orders,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((e) => console.log(e));

      props.clearOrders();
      props.showModal(false);
      history.push('/');
    } else {
      alert('Please enter all required fields');
    }
  };

  return (
    <div className={`h-full w-full flex justify-center bg-white`}>
      <form className='h-1/2 w-3/12 rounded-xl p-5 flex items-center flex-col mt-16'>
        <p className='mb-12 font-semibold text-3xl'>Enter your infomation</p>
        <div className='w-full flex flex-col mb-4'>
          <label htmlFor='name' className='font-semibold text-sm mb-3'>
            Name <span className='text-red-600'>*</span>
          </label>
          <input
            ref={nameRef}
            type='text'
            id='name'
            className='border rounded-lg border-gray-300 w-full h-8'
          />
        </div>
        <div className='w-full flex flex-col mb-4'>
          <label htmlFor='Address' className='font-semibold text-sm mb-3'>
            Address <span className='text-red-600'>*</span>
          </label>
          <input
            ref={addressRef}
            type='text'
            id='Address'
            className='border rounded-lg border-gray-300 w-full h-8'
          />
        </div>
        <div className='w-full flex flex-col mb-4'>
          <label htmlFor='PostalCode' className='font-semibold text-sm mb-3'>
            Postal Code <span className='text-red-600'>*</span>
          </label>
          <input
            ref={postalCodeRef}
            type='text'
            id='PostalCode'
            className='border rounded-lg border-gray-300 w-full h-8'
          />
        </div>
        <div className='w-full flex flex-col mb-8'>
          <label htmlFor='ContactNumber' className='font-semibold text-sm mb-3'>
            Contact Number <span className='text-red-600'>*</span>
          </label>
          <input
            ref={contactNumberRef}
            type='text'
            id='ContactNumber'
            className='border rounded-lg border-gray-300 w-full h-8'
          />
        </div>
        <button
          className='bg-green-600 text-center w-full h-10 pb-3 pt-2 rounded-md text-white'
          onClick={onFormSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { orders: state.mealListInCart };
};

export default connect(mapStateToProps, {
  clearOrders: clearOrders,
  showModal: showModal,
})(Order);
