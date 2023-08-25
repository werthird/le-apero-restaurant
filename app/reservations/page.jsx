import React from 'react';
import ReservForm from '../components/reservations/ReservForm';
import Link from 'next/link';
import { AiFillCloseCircle } from 'react-icons/ai';


export default function ReservationPage() {
  return (
    <main className='w-full'>
      <ReservForm />
    </main>
  )
};