import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { showModal } from '../../actions';

const Header = (props) => {
  const history = useHistory();

  return (
    <div
      className='sm:text-4xl text-2xl text-white font-semibold col-start-2 col-span-3 my-auto cursor-pointer'
      onClick={() => {
        history.push('/');
        props.showModal(false);
      }}
    >
      ReactMeals
    </div>
  );
};

export default connect(null, { showModal: showModal })(Header);
