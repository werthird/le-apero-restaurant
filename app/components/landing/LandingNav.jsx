import Link from 'next/link';
import React from 'react';

const LandingNav = () => {
  return (
    <nav className='flex flex-col items-center'>
      <Link href='./menu'>
        <button className='mt-2 lg:mt-20 bg-main-color text-secondary-color border border-main-color px-6 py-[3px] text-[20px] lg:text-[20px] uppercase rounded-sm hover:bg-secondary-color hover:text-main-color transition'>
          Menu
        </button>
      </Link>
      <Link href='/reservations'>
        <button className='lg:hidden mt-4 lg:mt-20 bg-main-color text-secondary-color border border-main-color px-6 py-[3px] text-[20px] lg:text-[30px] uppercase rounded-sm hover:bg-secondary-color hover:text-main-color transition'>
          Reservations
        </button>
      </Link>
    </nav>
  )
};

export default LandingNav;