import Image from 'next/image';
import React from 'react';


const AboutImage = () => {
  return (
    <figure className='relative w-[400px] h-[400px] rounded-full'>
      <Image src='/images/dining-room.jpg' fill alt={'Dining room image'} className='object-cover rounded-full -z-10' />
    </figure>
  )
};

export default AboutImage;