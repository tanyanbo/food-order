import React from 'react';

const ModalItem = () => {
  return (
    <div className='grid-cols-6 grid-rows-2'>
      <h3 className='col-start-1 row-start-1 text-xl font-semibold col-span-1 row-span-1'>
        Sushi
      </h3>
      <p className='col-start-1 row-start-2 text-xl  col-span-1 row-span-1'>
        $22.99
      </p>
      <p className='col-start-2 row-start-2 text-xl border rounded-lg  col-span-1 row-span-1'>
        x1
      </p>
    </div>
  );
};

export default ModalItem;
