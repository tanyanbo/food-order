import React from 'react';
import Description from './Description';
import Footer from './Footer';
import TopBar from './header/TopBar';
import HeroImage from './HeroImage';
import MealList from './MealList';

const App = () => {
  return (
    <div className='h-full '>
      <TopBar />
      <HeroImage />
      <Description />
      <MealList />
      <Footer />
    </div>
  );
};

export default App;
