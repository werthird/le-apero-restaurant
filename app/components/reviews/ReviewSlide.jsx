import React from 'react';

const ReviewSlide = () => {
  return (
    <div className='flex flex-nowrap w-full lg:w-[90%] overflow-x-auto scroll'>

      {/* COMMENT 1 */}
      <article className='flex flex-col justify-evenly border border-black h-[300px] min-w-[300px] mx-2 p-2'>
        <h3 className='font-bold'>Review by Sophie Lefebvre</h3>
        <p className='italic'>- August 15, 2021</p>
        <p className='text-[14px]'>"A delightful culinary experience at Le Apero! The flavors in every dish, especially the 'Délicieux Plat de Parmentier,' transported me back to France. A charming ambiance and friendly service. Highly recommended!"</p>
      </article>

      {/* COMMENT 2 */}
      <article className='flex flex-col justify-evenly border border-black h-[300px] min-w-[300px] mx-2 p-2'>
        <h3 className='font-bold'>Review by Thomas Dupont</h3>
        <p className='italic'>- September 2, 2022</p>
        <p className='text-[14px]'>"A taste of France in every bite. 'Patates Douces au Four' was a revelation! The authenticity of the dishes and the cozy setting made my evening exceptional. An unforgettable dining venture."</p>
      </article>

      {/* COMMENT 3 */}
      <article className='flex flex-col justify-evenly border border-black h-[300px] min-w-[300px] mx-2 p-2'>
        <h3 className='font-bold'>Review by Isabelle Martin</h3>
        <p className='italic'> - October 9, 2021</p>
        <p className='text-[14px]'>"Le Apero truly captures the essence of French cuisine. The 'La Délicieuse Table' was a feast for the senses. The dedication to quality ingredients and impeccable service made our celebration memorable."</p>
      </article>

      {/* COMMENT 4 */}
      <article className='flex flex-col justify-evenly border border-black h-[300px] min-w-[300px] mx-2 p-2'>
        <h3 className='font-bold'>Review by Antoine Dubois </h3>
        <p className='italic'>- November 18, 2022</p>
        <p className='text-[14px]'>"An enchanting culinary voyage at Le Apero. The 'Petits Plats' and the wine pairing were divine. Each dish was a masterpiece, and the attentive staff added to the perfection. A must-visit gem!"</p>
      </article>

      {/* COMMENT 5 */}
      <article className='flex flex-col justify-evenly border border-black h-[300px] min-w-[300px] mx-2 p-2'>
        <h3 className='font-bold'>Review by Marie Dufresne</h3>
        <p className='italic'>- January 6, 2023</p>
        <p className='text-[14px]'>"Le Apero is a hidden treasure! The 'Délicieux Plat de Parmentier' was a comfort food dream. The ambiance, reminiscent of a Parisian bistro, along with the warm flavors, left a lasting impression."</p>
      </article>

      {/* COMMENT 6 */}
      <article className='flex flex-col justify-evenly border border-black h-[300px] min-w-[300px] mx-2 p-2'>
        <h3 className='font-bold'>Review by Paul Renault</h3>
        <p className='italic'>- January 21, 2023</p>
        <p className='text-[14px]'>"Le Apero offers an exquisite blend of tradition and innovation. 'Patates Douces au Four' was a delightful twist on classic French cuisine. An elegant setting, attentive service, and a culinary revelation."</p>
      </article>

    </div>
  )
};

export default ReviewSlide;