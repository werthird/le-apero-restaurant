import Link from 'next/link';
import React from 'react';

const ProdBanContent = () => {
  return (
    <article className='flex flex-col w-full min-h-[200px] sm:min-h-[300px] lg:h-[500px] justify-center items-center text-main-color'>
      
      <h2 className='text-[25px] sm:text-[40px] lg:text-[50px] bg-secondary-color/80 px-6 rounded'>- Patates Douces au Four -</h2>
      
      <p className='lg:text-[20px] bg-secondary-color/80 px-6 rounded text-center'>Checkout our Oven Baked Sweet Potato Dish</p>

      <Link href='/'>
        <button className='mt-2 
        sm:mt-10 lg:mt-20 bg-main-color text-secondary-color border border-main-color px-6 py-[3px] text-[30px] uppercase rounded-sm hover:bg-secondary-color hover:text-main-color transition'>
          Menu
        </button>
      </Link>
    </article>
  )
};

export default ProdBanContent;