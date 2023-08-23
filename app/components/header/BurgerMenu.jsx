import Link from 'next/link';
import React, { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';

const BurgerMenu = () => {

  const [display, setDisplay] = useState(true);

  return (
    <nav className='flex justify-between h-full mx-2'>

      <h2 className='flex font-bold items-center text-center'>
        <span className='text-[30px]'>Le Apéro&nbsp;</span>
        <span className='hidden sm:inline text-[20px] ml-2'>Restaurant</span> 
      </h2>

      {/* OPEN MENU LIST*/}
      <button onClick={() => setDisplay(!display)}><FiMenu className='h-10 w-10'/></button>

      


      <section className='absolute right-0 top-0 z-20 flex flex-col h-[600px] w-fit bg-[#f6efe4] rounded-bl-[400px] px-4' 
        style={{ display: display ? "none" : "block" }}>

        <div className='flex justify-end items-center mt-4'>
          <button className='' 
            onClick={() => setDisplay(!display)}>
            <AiFillCloseCircle className='h-8 w-8' />
          </button>
        </div>
        

        <div className='flex flex-col text-[26px] mt-[8px] ml-[10px] p-2'>
          <Link href={'../category/men'} className='py-2 font-semibold' onClick={() => setDisplay(!display)}>Menu</Link>
          <Link href={'../category/women'} className='py-2 font-semibold' onClick={() => setDisplay(!display)}>About</Link>
          <Link href={'../category/kids'} className='py-2 font-semibold' onClick={() => setDisplay(!display)}>Contact</Link>
        </div>

        <button 
          type='button'
          className='flex text-[26px] mt-20' 
          onClick={() => {
            setDisplay(!display)
          }}>
          <p>Reservations</p>
        </button>

      </section>
    </nav>
  )
};

export default BurgerMenu;