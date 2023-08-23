import React from 'react';
import ReviewSlide from '../components/reviews/ReviewSlide';

const Review = () => {
  return (
    <section className='flex flex-col items-center w-full my-20'>
      <h2 className='text-[40px] lg:text-[50px] font-bold'>Reviews</h2>

      <ReviewSlide />

    </section>
  )
};

export default Review;