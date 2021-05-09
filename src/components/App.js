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
import Signup from './authentication/Signup';
import Login from './authentication/Login';
import ChangePassword from './authentication/ChangePassword';

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
      <Route path='/signup' exact>
        <Signup />
      </Route>
      <Route path='/login' exact>
        <Login />
      </Route>
      <Route path='/changepassword' exact>
        <ChangePassword />
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
