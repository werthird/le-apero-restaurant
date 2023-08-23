import React from 'react';

const MenuHeader = () => {
  return (
    <section className='flex justify-between items-center w-[90%] h-[200px] border-b-[1px] border-secondary-color'>

      <div className='flex flex-col justify-center items-center h-full w-[50%]'>
        <h3 className=''>French Cuisine</h3>
        <h2 className='text-[50px] font-bold'>Le Apero</h2>
        <h3 className='text-[25px]'>Restaurant</h3>
      </div>

      <div className='h-[150px] w-[40%] border-l-[1px] border-secondary-color px-10'>
        <h3 className='text-[25px]'>Hours</h3>
        <p className='text-[14px] mb-6'>Mon-Sat 4pm-11:30pm</p>
        <h3 className='text-[25px]'>Happy Hour</h3>
        <p className='text-[14px]'>6pm-7:30pm</p>
      </div>

    </section>
  )
};

export default MenuHeader;