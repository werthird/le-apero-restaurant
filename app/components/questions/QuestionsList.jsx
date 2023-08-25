'use client';
import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const Questions = () => {

  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);

  function handleToggle1(e) {
    e.preventDefault();
    setExpanded1(!expanded1);
    console.log(expanded1);
  };
  function handleToggle2(e) {
    e.preventDefault();
    setExpanded2(!expanded2);
    console.log(expanded2);
  };
  function handleToggle3(e) {
    e.preventDefault();
    setExpanded3(!expanded3);
    console.log(expanded3);
  };

  


  return (
    <section className='flex flex-col items-center w-full mt-10'>

      <article className={'border border-black w-[90%] lg:w-[600px] px-4 overflow-hidden'}
        style={{ height: expanded1 ? 'auto' : '40px' }}>
        <div className='flex justify-between items-center pt-2'>
          <h3 className='font-bold'>Allergins Concerns</h3>
          <button type='button' onClick={handleToggle1}>
            <AiOutlinePlus className='w-6 h-6' />
          </button>
        </div>
        <p className='m-4 text-[14px]'>At Le Apero, your well-being is paramount. We accommodate allergen concerns with care. Kindly inform us of any allergies when reserving or ordering. Our skilled chefs strive to cater to your needs. While precautions are taken, please note our kitchen handles various ingredients. Your safety and satisfaction matter most.</p>
      </article>

      <article className={'border border-black w-[90%] lg:w-[600px] px-4 overflow-hidden'}
        style={{ height: expanded2 ? 'auto' : '40px' }}>
        <div className='flex justify-between items-center pt-2'>
          <h3 className='font-bold'>Can I Place My Order Online?</h3>
          <button type='button' onClick={handleToggle2}>
            <AiOutlinePlus className='w-6 h-6' />
          </button>
        </div>
        <p className='m-4 text-[14px]'>Currently, we don't offer online orders. Please give us a call to place your order. We look forward to assisting you!</p>
      </article>

      <article className={'border border-black w-[90%] lg:w-[600px] px-4 overflow-hidden'}
        style={{ height: expanded3 ? 'auto' : '40px' }}>
        <div className='flex justify-between items-center pt-2'>
          <h3 className='font-bold'>Are Pets Allowed Inside?</h3>
          <button type='button' onClick={handleToggle3}>
            <AiOutlinePlus className='w-6 h-6' />
          </button>
        </div>
        <p className='m-4 text-[14px]'>While we appreciate your furry friends, only service dogs are allowed inside Le Apero. Thank you for your understanding.</p>
      </article>

    </section>
  )
};

export default Questions;