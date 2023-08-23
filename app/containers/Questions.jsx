import React from 'react';
import QuestionsList from '../components/questions/QuestionsList';

const Questions = () => {
  return (
    <section className='flex flex-col items-center w-full my-20'>
      <h3 className='text-[20px]'>Frequenty Asked Questions</h3>
      <h2 className='text-[40px] lg:text-[50px] font-bold text-center'>Have a Question?</h2>
      <p className='mt-2 lg:mt-6 text-center'>Here are a few answers to some common questions.</p>
      
      <QuestionsList />

    </section>
  )
};

export default Questions;