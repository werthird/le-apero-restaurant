import React from 'react';

const ProdBanVideo = () => {
  return (
    <video muted loop width='100%' height='100%' className='object-cover absolute top-0 lg:bottom-0 -z-10'>         
      <source src="./videos/food-video.mp4" type="video/mp4"/>       
    </video>
  )
};

export default ProdBanVideo;