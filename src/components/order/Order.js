import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { clearOrders, showModal } from '../../actions';

const Order = (props) => {
  const history = useHistory();

  const onFormSubmit = (e) => {
    e.preventDefault();
    props.clearOrders();
    props.showModal(false);
    history.push('/');
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

export default connect(null, {
  clearOrders: clearOrders,
  showModal: showModal,
})(Order);
