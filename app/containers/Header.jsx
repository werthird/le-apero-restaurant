'use client';
import React, { useEffect, useState } from 'react';
import NavBar from '../components/header/NavBar';
import BurgerMenu from '../components/header/BurgerMenu';
import '../css/animation.css';



const Header = () => {

  const [width, setWidth] = useState(null);
  const breakpoint = 1024;


  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  return (
    <header className='z-20 w-full h-[55px] lg:h-[70px] border-b-2 border-black fixed top-0'>
      <div className='absolute -z-10 top-0 w-full h-full bg-main-color animated lg:fadeInDown' />

      {width < breakpoint ? <BurgerMenu /> : <NavBar />}

    </header>
  )
};

export default Header;