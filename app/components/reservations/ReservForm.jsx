'use client';
import Link from 'next/link';
import React from 'react';
import toast from 'react-hot-toast';
import { AiFillCloseCircle } from 'react-icons/ai';

const ReservForm = () => {
  
  function resSucess(e) {
    e.preventDefault();
    toast.success('Reservation Request Sent');
  }

  return (
    <section className='flex justify-center bg-black/75 py-[100px]'>

      <div className='flex justify-center w-full sm:w-[80%] h-[100%] bg-main-color py-[20px] relative'>

        <Link href='/' className='absolute top-4 right-4'>
          <AiFillCloseCircle className='h-8 w-8' />
        </Link>

        <form className='flex flex-col sm:flex-row flex-wrap px-4 sm:px-0 justify-between w-full lg:w-[500px]'>

          <h2 className='w-full text-[40px] lg:text-[50px] font-bold text-center my-4'>Reservations</h2>

          <div className='flex flex-col w-full sm:w-[48%]'>
            <label htmlFor='date'>Date: *</label>
            <input type='date' name='date' id='date' className='w-full h-[30px] pl-4 text-[12px] rounded' required/>
          </div>

          <div className='w-full sm:w-[48%]'>
            <label htmlFor='time'>Time: *</label>
            <select type='text' name='time' className='h-[30px] w-full pl-2 text-[12px] rounded' required>
              <option value='Please Choose'>Please Choose</option>
              <option value='4:30'>4:00</option>
              <option value='4:30'>4:30</option>
              <option value='4:30'>5:00</option>
              <option value='4:30'>5:30</option>
              <option value='4:30'>6:00</option>
              <option value='4:30'>6:30</option>
              <option value='4:30'>7:00</option>
              <option value='4:30'>7:30</option>
              <option value='4:30'>8:00</option>
              <option value='4:30'>8:30</option>
              <option value='4:30'>9:00</option>
              <option value='4:30'>9:30</option>
              <option value='4:30'>10:00</option>
              <option value='4:30'>10:30</option>
              <option value='4:30'>11:00</option>
            </select>
          </div>

          <div className='w-full sm:my-4'>
            <label htmlFor='people'>People:</label>
            <select type='text' name='people' id='people' className='w-full h-[30px] text-[12px] pl-4 rounded' autoComplete='email' required>
            <option value='Please Choose' className=''>Please Choose</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
            </select>
          </div>

          <div className='w-full sm:w-[48%]'>
            <label htmlFor='nameFirst'>First Name: *</label>
            <input type='text' name='nameFirst' id='nameFirst' className='w-full h-[30px] text-[12px] pl-4 rounded' autoComplete='given-first' required/>
          </div>

          <div className='w-full sm:w-[48%]'>
            <label htmlFor='nameLast'>Last Name: *</label>
            <input type='text' name='nameLast' id='nameLast' className='w-full h-[30px] text-[12px] pl-4 rounded' autoComplete='given-last' required/>
          </div>

          <div className='w-full sm:w-[48%] sm:my-4'>
            <label htmlFor='phone'>Phone: *</label>
            <input type='text' name='phone' id='phone' className='w-full h-[30px] text-[12px] pl-4 rounded' autoComplete='tel' required/>
          </div>

          <div className='w-full sm:w-[48%] sm:my-4'>
            <label htmlFor='email'>Email: *</label>
            <input type='text' name='email' id='email' className='w-full h-[30px] text-[12px] pl-4 rounded' autoComplete='email' required/>
          </div>

          <div className='w-full'>
            <label htmlFor='comments'>Comments<span className='text-[12px]'>(optional)</span>:</label>
            <textarea name='comments' id='comments' className='w-full pl-2 pt-2 text-[12px] rounded' rows='3'></textarea>
          </div>

          <div className='mt-4'>
            <button type='submit' className='bg-secondary-color text-main-color border border-secondary-color px-6 py-[3px] text-[20px] uppercase rounded-sm hover:bg-main-color hover:text-secondary-color transition'
              onClick={resSucess}>
              Submit
            </button>
          </div>

          <p className='mt-4 text-[12px]'>* Required</p>

        </form>
      </div>

      
    </section>
    
  )
};

export default ReservForm;