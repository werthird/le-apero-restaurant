import React from 'react';
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';
import { MdMarkEmailRead } from 'react-icons/md';
import { BiSolidDirectionRight } from 'react-icons/bi';

const ContactInfo = () => {
  return (
    <section className='flex flex-col w-full lg:w-[500px] h-full mt-10 lg:mt-0'>
      <h2 className='text-[20px] font-bold self-center'>Contact Info</h2>
      <div className='flex justify-evenly flex-wrap'>

        <article className='flex flex-col justify-center w-[150px] h-[150px] m-4'>
          <figure><BsFillTelephoneOutboundFill className='w-8 h-8' /></figure>
          <p className='my-2 text-[20px] font-bold'>Phone</p>
          <p className='text-[14px]'>555-123-4567</p>
        </article>

        <article className='flex flex-col justify-center w-[150px] h-[150px] m-4'>
          <figure><MdMarkEmailRead className='w-8 h-8' /></figure>
          <p className='my-2 text-[20px] font-bold'>Email</p>
          <p className='text-[14px]'>emailus@leapero.com</p>
        </article>

        <article className='flex flex-col justify-center w-[150px] h-[150px] m-4'>
          <figure><BiSolidDirectionRight className='w-8 h-8' /></figure>
          <p className='my-2 text-[20px] font-bold'>Address</p>
          <p className='text-[14px]'>123 Pleasent St</p>
          <p className='text-[14px]'>Arbor, NC 12345</p>
        </article>

        <article className='flex flex-col justify-center w-[150px] h-[150px] m-4'>
          <figure><BsFillTelephoneOutboundFill className='w-8 h-8' /></figure>
          <p className='my-2 text-[20px] font-bold'>Phone</p>
          <p className='text-[14px]'>555-123-4567</p>
        </article>

      </div>
    </section>
  )
};

export default ContactInfo;