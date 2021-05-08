import React from 'react';
import ReactDOM from 'react-dom';

const Modal = () => {
  return (
    <div>
      {ReactDOM.createPortal(
        <div
          className='fixed top-0 left-0 h-full w-full z-10'
          style={{ background: 'rgba(0,0,0,0.75)' }}
        ></div>,
        document.getElementById('overlay')
      )}
      {ReactDOM.createPortal(
        <div className='fixed top-1/3 left-1/3 w-4/12 h-2/6 bg-white text-black z-30 rounded-2xl'>
          testing
        </div>,
        document.querySelector('#modal')
      )}
    </div>
  );
};

export default Modal;
