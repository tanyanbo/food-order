import React from 'react';
import hero from './../hero.png';

const HeroImage = () => {
  return (
    <>
      <div>
        <img
          src={hero}
          className='object-cover w-full h-96'
          alt='ReactMeals'
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 100%)' }}
        />
      </div>
    </>
  );
};

export default HeroImage;
