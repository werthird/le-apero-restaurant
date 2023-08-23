import React from 'react';

const MenuHeader = () => {

  return (
    <section className='flex flex-col sm:flex-row justify-between items-center w-[90%] min-h-[200px] sm:border-b-[1px] border-secondary-color'>

      <div className='flex flex-col justify-center items-center h-full w-[90%] sm:w-[50%]'>
        <h3 className=''>French Cuisine</h3>
        <h2 className='text-[40px] lg:text-[50px] font-bold'>Le Apero</h2>
        <h3 className='text-[25px]'>Restaurant</h3>
      </div>

      <div className='h-[150px] w-[90%] sm:w-[40%] border-y-[1px] sm:border-y-[0px] sm:border-l-[1px] border-secondary-color px-10 text-center sm:text-start pb-4 sm:pb-0'>
        <h3 className='text-[25px]'>Hours</h3>
        <p className='text-[14px] mb-2 sm:mb-6'>Mon-Sun - 4pm-11:30pm</p>
        <h3 className='text-[25px]'>Happy Hour</h3>
        <p className='text-[14px]'>6pm-7:30pm</p>
      </div>
    </section>
  )
};

export default MenuHeader;