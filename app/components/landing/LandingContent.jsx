import React from 'react';
import { GiKnifeFork } from 'react-icons/gi';

const LandingContent = () => {
  return (
    <section className='flex flex-col items-center'>
      <h1 className='font-extrabold text-[50px]'>Le Apéro</h1>
      <h2 className='text-[35px]'>Restaurant</h2>
      <section className='flex items-center text-[16px]'>
        <p className='border-y border-main-color'>French</p>
        <GiKnifeFork className='w-[60px] h-[60px]' />
        <p className='border-y border-main-color'>Cuisine</p>
      </section>
    </section>
  )
};

export default LandingContent;