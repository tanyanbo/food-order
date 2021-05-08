import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { showModal } from '../../actions';
import ModalList from './ModalList';
import { useHistory } from 'react-router-dom';

const ModalScreen = (props) => {
  const history = useHistory();

  const onOrderClick = () => {
    console.log(props.meals);
    history.push('/order');
  };

  return (
    <div
      className='fixed top-1/4 left-1/3 w-4/12 h-3/6 bg-white text-black z-30 rounded-2xl overflow-auto'
      onClick={(e) => e.stopPropagation()}
    >
      <ModalList />
      <button
        className='bg-yellow-900 border border-yellow-900 text-white rounded-full 
      py-2 px-9 bottom-4 absolute right-40 focus:outline-none'
        onClick={onOrderClick}
      >
        Order
      </button>
      <button
        className='bg-white border border-yellow-900 rounded-full py-2 px-9 absolute 
        right-8 bottom-4 text-yellow-900 focus:outline-none'
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
        <ModalScreen showModal={props.showModal} meals={props.meals} />,
        document.querySelector('#modal')
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { meals: state.mealListInCart };
};

export default connect(mapStateToProps, { showModal: showModal })(Modal);
