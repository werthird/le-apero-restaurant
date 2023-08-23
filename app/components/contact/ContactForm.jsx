import React from 'react';

const ContactForm = () => {
  return (
    <form className='flex flex-col w-full lg:w-[500px]'>
      <h2 className='hidden lg:inline text-[20px] font-bold self-center'>Contact Form</h2>

      <div className=''>
        <label htmlFor='name'>Name: *</label>
        <input type='text' name='name' id='name' className='w-full pl-4' autoComplete='given-name' required />
      </div>

      <div className=''>
        <label htmlFor='email'>Email:</label>
        <input type='email' name='email' id='email' className='w-full pl-4' autoComplete='email' required />
      </div>

      <div className=''>
        <label htmlFor='phone'>Phone: *</label>
        <input type='text' name='phone' id='phone' className='w-full pl-4' autoComplete='tel' required/>
      </div>

      <div className=''>
        <label htmlFor='message'>Message: *</label>
        <textarea name='message' id='message' className='w-full pl-2' rows='5' required></textarea>
      </div>

      <div className='self-center'>
        <button className='bg-secondary-color text-main-color border border-secondary-color px-6 py-[3px] text-[20px] uppercase rounded-sm hover:bg-main-color hover:text-secondary-color transition'>
          Submit
        </button>
      </div>

      <p>* Required</p>

    </form>
  )
};

export default ContactForm;