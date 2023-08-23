import React from 'react';
import ProdBanVideo from '../components/productBanner/ProdBanVideo';
import ProdBanContent from '../components/productBanner/ProdBanContent';

const ProductBanner = () => {
  return (
    <section className='w-full lg:min-h-[500px] relative overflow-hidden mt-20'>
      <ProdBanVideo />
      <ProdBanContent />
    </section>
  )
};

export default ProductBanner;