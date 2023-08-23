'use client';
import React, { useCallback, useEffect } from 'react';
import Link from 'next/link';
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';



// const handleScroll = (e) => {
//   console.log('scrolling...');

//   window.onscroll = null;
// };

  

const NavBar = () => {

// useEffect(() => {
//   window.onscroll = handleScroll;
// }, []);

  return (
    <nav className='w-full h-full flex justify-between items-center px-10'>

      <ul className='flex w-[40%] text-[18px]'>
        <li className='mx-2 px-6 py-[3px] hover:bg-accent-color transition'><Link href='/'>About</Link></li>
        <li className='mx-2 px-6 py-[3px] hover:bg-accent-color transition'><Link href='/'>Menu</Link></li>
        <li className='mx-2 px-6 py-[3px] hover:bg-accent-color transition'><Link href='/'>Contact</Link></li>
      </ul>

      <h2 className='flex flex-col w-[20%] text-[25px] font-bold text-center'>
        <span className='text-[30px]'>Le Apéro</span>
        <span className='text-[20px]'>Restaurant</span> 
      </h2>

      <ul className='flex justify-end items-center w-[40%]'>
        <li className='mx-2'><BsFillTelephoneOutboundFill className='w-[20px] h-[20px]'/></li>
        <li className='mx-2 px-4 py-[1px] bg-secondary-color text-main-color border border-secondary-color hover:bg-main-color hover:text-secondary-color transition'>
          <Link href='/' className=''>Reservations</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar