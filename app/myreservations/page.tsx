import Image from 'next/image';
import React from 'react'
import apiServices from '../services/apiServices';

async function MyReservations() {
    const reservations = await apiServices.get(`/api/auth/myreservations/`)
  return (
    <main className='px-6'>
        <h1 className='text-2xl my-3'>My Reservations</h1>
        {reservations.length > 0 && reservations.map((reservation: any) => {
            return (
                <div className='my-3 grid grid-cols-1 md:grid-cols-4 gap-5 border border-gray-300 shadow-md rounded-lg p-4'>
                <div className='col-span-1 rounded-lg'>
                    <div className=' overflow-hidden rounded-lg w-full h-full'>
                        <Image 
                            src={reservation.property.image_url}
                            width={200}
                            height={200}
                            className='object-cover w-full h-full hover:scale-110 transition'
                            alt='Property Image'
                            />
                    </div>
                </div>
                <div className='col-span-1 md:col-span-3'>
                    <h1 className='my-2 text-2xl'>{reservation.property.title}</h1>
                    <h1 className='my-2'><strong>Check In:</strong> {reservation.start_date}</h1>
                    <h1 className='my-2'><strong>Check Out:</strong> {reservation.end_date}</h1>
                    <h1 className='my-2'><strong>Price:</strong> ${reservation.total_price}</h1>
                    <button className='my-4 py-3 px-5 bg-airbnb hover:bg-airbnb-dark text-white rounded-xl'>View Property</button>
                </div>
            </div>
            )
        })}
    </main>
  )
}

export default MyReservations;