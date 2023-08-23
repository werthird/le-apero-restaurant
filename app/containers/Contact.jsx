import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

const Contact = () => {
  return (
    <section className='flex flex-col items-center w-full my-20 lg:mt-[200px] mb-[200px]'>
      <h2 className='text-[40px] lg:text-[50px] font-bold text-center'>Get in Touch</h2>
      <section className='mt-4 lg:mt-12 flex flex-col lg:flex-row justify-center lg:justify-evenly w-full px-2'>

        <ContactForm />

        <ContactInfo />

      </section>
    </section>
  )
};

export default Contact;