import React, { useEffect, useState } from 'react';
import MealItem from './MealItem';
import axios from 'axios';

const MealList = () => {
  const [mealsList, setmealsList] = useState([]);

  useEffect(() => {
    async function getMeals() {
      const meals = await axios.get('http://127.0.0.1:3000/meals');
      setmealsList(meals.data.meals);
    }
    getMeals();
    // console.log('check');
  }, []);

  const renderedMeals = mealsList.map((meal) => {
    return (
      <MealItem
        key={meal.name}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });
  return (
    <div className='bg-white lg:w-6/12 mx-8 lg:mx-auto rounded-lg  relative -top-16 py-3 px-5'>
      {renderedMeals}
    </div>
  );
};

export default MealList;
