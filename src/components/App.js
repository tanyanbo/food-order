import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import Description from './header/Description';
import Footer from './Footer';
import TopBar from './header/TopBar';
import HeroImage from './header/HeroImage';
import MealList from './meals/MealList';
import Modal from './modal/Modal';

import { showModal } from '../actions';
import Order from './order/Order';

const App = (props) => {
  return (
    <>
      <TopBar />
      <Route path='/' exact>
        <div className='h-full '>
          <HeroImage />
          <Description />
          <MealList />
          <Footer />
          {props.modalState ? <Modal /> : ''}
        </div>
      </Route>
      <Route path='/order' exact>
        <Order />
      </Route>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    modalState: state.modalState,
  };
};

export default connect(mapStateToProps, { showModal })(App);
