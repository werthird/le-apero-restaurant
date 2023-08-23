import React from 'react';
import AboutImage from '../components/about/AboutImage';
import AboutContent from '../components/about/AboutContent';


const About = () => {
  return (
    <section className='flex flex-col lg:flex-row justify-between items-center lg:items-start my-[50px] lg:my-[150px] lg:px-10'>
      <AboutImage />
      <AboutContent />
    </section>
  )
};

export default About;