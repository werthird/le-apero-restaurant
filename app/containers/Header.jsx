'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import NavBar from '../components/header/NavBar';
import BurgerMenu from '../components/header/BurgerMenu';
import '../css/animation.css';



const Header = () => {

  const [width, setWidth] = useState(null);
  const breakpoint = 1024;

  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const headerBackground = {
    visible: { opacity: 1, scale: 1, transition:{duration: 2, ease: 'easeInOut'} },
    hidden: { opacity: 0, scale: 0 }
  }

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <header className='z-20 w-full h-[55px] lg:h-[70px] border-b-2 border-black fixed top-0'>
      <motion.div
        variants={headerBackground}
        animate={isScrolled ? 'visible' : 'hidden'}
        initial='hidden'
        className='absolute -z-10 top-0 w-full h-full bg-main-color'>
      </motion.div>

      {width < breakpoint ? <BurgerMenu /> : <NavBar />}

    </header>
  )
};

export default Header;