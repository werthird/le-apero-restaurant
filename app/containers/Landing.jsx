import React from 'react';
import LandingContent from '../components/landing/LandingContent';
import LandingNav from '../components/landing/LandingNav';
import LandingArrow from '../components/landing/LandingArrow';

const Landing = () => (
  <div className='bg-landing-image bg-cover bg-no-repeat lg:bg-bottom h-screen lg:h-[600px] flex jusitfy-center items-end lg:items-center pb-10 lg:pb-0'>
    
    <section className='flex flex-col items-center m-auto text-main-color'>
      <LandingContent />
      <LandingNav />
      <LandingArrow />
    </section>
    
  </div>
)

export default Landing;