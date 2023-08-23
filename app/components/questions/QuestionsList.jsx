'use client';
import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const Questions = () => {

  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
    console.log(expanded);
  };
  const articleHeight = expanded ? 'auto' : '40px';


  return (
    <section className='flex flex-col items-center w-full mt-10'>

      <article className={`border border-black w-[90%] lg:w-[600px] h-[${articleHeight}] px-4 overflow-hidden`}>
        <div className='flex justify-between items-center pt-2'>
          <h3 className='font-bold'>Allergins Concerns</h3>
          <button type='button' onClick={handleToggle}>
            <AiOutlinePlus className='w-6 h-6' />
          </button>
        </div>
        <p className='m-4 text-[14px]'>At Le Apero, your well-being is paramount. We accommodate allergen concerns with care. Kindly inform us of any allergies when reserving or ordering. Our skilled chefs strive to cater to your needs. While precautions are taken, please note our kitchen handles various ingredients. Your safety and satisfaction matter most.</p>
      </article>

      <article className={`border border-black w-[90%] lg:w-[600px] h-[${articleHeight}] px-4 overflow-hidden`}>
        <div className='flex justify-between items-center pt-2'>
          <h3 className='font-bold'>Can I Place My Order Online?</h3>
          <button type='button' onClick={handleToggle}>
            <AiOutlinePlus className='w-6 h-6' />
          </button>
        </div>
        <p className='m-4 text-[14px]'>Currently, we don't offer online orders. Please give us a call to place your order. We look forward to assisting you!</p>
      </article>

      <article className={`border border-black w-[90%] lg:w-[600px] h-[${articleHeight}] px-4 overflow-hidden`}>
        <div className='flex justify-between items-center pt-2'>
          <h3 className='font-bold'>Are Pets Allowed Inside?</h3>
          <button type='button' onClick={handleToggle}>
            <AiOutlinePlus className='w-6 h-6' />
          </button>
        </div>
        <p className='m-4 text-[14px]'>While we appreciate your furry friends, only service dogs are allowed inside Le Apero. Thank you for your understanding.</p>
      </article>

    </section>
  )
};

export default Questions;