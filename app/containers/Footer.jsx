import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaYelp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='flex flex-col lg:flex-row justify-between items-center bg-secondary-color text-main-color min-h-[200px]'>

      <Link href='#home' className='w-full lg:w-[20%]'>
        <h2 className='flex flex-col justify-center text-[25px] font-bold text-center'>
          <span className='text-[30px]'>Le Apéro</span>
          <span className='text-[20px]'>Restaurant</span> 
        </h2>
      </Link>

      <nav className='flex flex-col lg:flex-row items-center mt-[30px] lg:mt-[0] justify-between w-full lg:w-[50%]'>
        <Link href='#about'>About</Link>
        <Link href='#review'>Reviews</Link>
        <Link href='#question'>Questions</Link>
        <Link href='#contact'>Contact</Link>
        <Link href='./menu'>Menu</Link>
        <Link href='#reservations'>Reservations</Link>
      </nav>

      <nav className='flex justify-evenly my-[40px] lg:my-[0] w-[50%] lg:w-[10%] lg:mr-10'>
        <Link href='/'><FaFacebookF /></Link>
        <Link href='/'><FaYelp /></Link>
        <Link href='/'><FaInstagram /></Link>
      </nav>

    </footer>
  )
};

export default Footer;