import Image from 'next/image'
import React from 'react'

function SearchFilter() {
  return (
    <div className='h-[48px]  lg:h-[67px] flex flex-row justify-center items-center border rounded-full shadow-md'>
        <div className='hidden lg:block px-1'>
            <div className='flex'>
                <div className='hover:bg-gray-200 py-2 lg:py-3 px-2 lg:px-4 rounded-full cursor-pointer'>
                    <p className='text-sm font-semibold'>Where?</p>
                    <p className='text-xs font-semibold'>Wanted location</p>
                </div>
                <div className='hover:bg-gray-200 py-3 px-4 rounded-full cursor-pointer'>
                    <p className='text-sm font-semibold'>Check In</p>
                    <p className='text-xs font-semibold'>From Date</p>
                </div>
                <div className='hover:bg-gray-200 py-3 px-4 rounded-full cursor-pointer'>
                    <p className='text-sm font-semibold'>Check Out</p>
                    <p className='text-xs font-semibold'>To Date</p>
                </div>
                <div className='hover:bg-gray-200 py-3 px-4 rounded-full cursor-pointer'>
                    <p className='text-sm font-semibold'>Who?</p>
                    <p className='text-xs font-semibold'>How many Guests?</p>
                </div>
            </div>
        </div>
        <div className='px-1'>
            <div className='hover:bg-airbnb-dark bg-airbnb h-10 w-10 lg:h-14 lg:w-14 rounded-full flex justify-center items-center'>
                <Image 
                    src={'/search.png'}
                    alt='Search icon'
                    width={25}
                    height={25}
                />
            </div>
        </div>
    </div>
  )
}

export default SearchFilter