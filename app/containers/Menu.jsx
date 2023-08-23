import React from 'react'
import MenuHeader from '../components/menu/MenuHeader'
import MenuContent from '../components/menu/MenuContent'

const Menu = () => {
  return (
    <section className='flex justify-center min-w-[100%] min-h-screen absolute z-[50] top-0 hidden'>
      <div className='min-h-screen min-w-[100%] bg-black/75 absolute'></div>
      <section className='flex flex-col items-center min-h-screen w-full lg:w-[80%] bg-main-color z-[60]'>

        <MenuHeader />

        <MenuContent />

      </section>
    </section>
  )
}

export default Menu