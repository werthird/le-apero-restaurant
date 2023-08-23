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
        <li className='mx-2 px-6 py-[3px] hover:bg-accent-color transition'><Link href='#about'>About</Link></li>
        <li className='mx-2 px-6 py-[3px] hover:bg-accent-color transition'><Link href='#menu'>Menu</Link></li>
        <li className='mx-2 px-6 py-[3px] hover:bg-accent-color transition'><Link href='#contact'>Contact</Link></li>
      </ul>

      <Link href='#home' className='w-[20%]'>
        <h2 className='flex flex-col justify-center text-[25px] font-bold text-center'>
          <span className='text-[30px]'>Le Apéro</span>
          <span className='text-[20px]'>Restaurant</span> 
        </h2>
      </Link>
      

      <ul className='flex justify-end items-center w-[40%]'>
        <li className='mx-2'>
          <Link href='tel:5551234567'><BsFillTelephoneOutboundFill className='w-[20px] h-[20px]'/></Link>
        </li>
        <li className='mx-2 px-4 py-[1px] bg-secondary-color text-main-color border border-secondary-color hover:bg-main-color hover:text-secondary-color transition'>
          <Link href='/' className=''>Reservations</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar