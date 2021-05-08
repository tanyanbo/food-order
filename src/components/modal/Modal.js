import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import showModal from '../../actions';
import ModalList from './ModalList';

const ModalScreen = (props) => {
  return (
    <div
      className='fixed top-1/3 left-1/3 w-4/12 h-2/6 bg-white text-black z-30 rounded-2xl'
      onClick={(e) => e.stopPropagation()}
    >
      <ModalList />
      <button
        className='bg-yellow-900 border border-yellow-900 text-white rounded-full 
      py-2 px-9 absolute bottom-4 right-40 focus:outline-none'
      >
        Order
      </button>
      <button
        className='bg-white border border-yellow-900 rounded-full py-2 px-9 absolute 
        bottom-4 right-8 text-yellow-900 focus:outline-none'
        onClick={() => props.showModal(false)}
      >
        Close
      </button>
    </div>
  );
};

const Modal = (props) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <div
          className='fixed top-0 left-0 h-full w-full z-10'
          style={{ background: 'rgba(0,0,0,0.75)' }}
          onClick={() => props.showModal(false)}
        ></div>,
        document.getElementById('overlay')
      )}
      {ReactDOM.createPortal(
        <ModalScreen showModal={props.showModal} />,
        document.querySelector('#modal')
      )}
    </div>
  );
};

export default connect(null, { showModal: showModal })(Modal);
