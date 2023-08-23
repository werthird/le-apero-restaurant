import React from 'react'
import MenuHeader from '../components/menu/MenuHeader'
import MenuContent from '../components/menu/MenuContent'
import { AiFillCloseCircle } from 'react-icons/ai';
import Link from 'next/link';

const Menu = () => {

  return (
    <section className='flex justify-center w-full h-full bg-black/75'>
      <section className='my-[100px] flex flex-col items-center min-h-full w-full lg:w-[80%] bg-main-color relative'>

        <Link href='/' className='absolute top-4 right-4'>
          <AiFillCloseCircle className='h-8 w-8' />
        </Link>

        <MenuHeader />

        <MenuContent />

      </section>
      
    </section>
  )
}

export default Menu