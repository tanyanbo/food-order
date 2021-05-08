import React from 'react';
import { connect } from 'react-redux';

import Description from './header/Description';
import Footer from './Footer';
import TopBar from './header/TopBar';
import HeroImage from './header/HeroImage';
import MealList from './meals/MealList';
import Modal from './modal/Modal';

import { showModal } from '../actions';

const App = (props) => {
  return (
    <div className='h-full '>
      <TopBar />
      <HeroImage />
      <Description />
      <MealList />
      <Footer />
      {props.modalState ? <Modal /> : ''}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    modalState: state.modalState,
  };
};

export default connect(mapStateToProps, { showModal })(App);
