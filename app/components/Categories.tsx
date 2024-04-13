import Image from 'next/image'
import React from 'react'

function Categories() {
  return (
    <div className='flex flex-row justify-start items-center space-x-5'>
      <div className=' cursor-pointer flex flex-col justify-center items-center opacity-60 hover:opacity-100 border-b-4 border-white hover:border-gray-200'>
        <Image 
          src={'/icons8-beach-80.png'}
          alt='Beach Image'
          width={35}
          height={35}
        />
        <span>Beach</span>
      </div>
      <div className=' cursor-pointer flex flex-col justify-center items-center opacity-60 hover:opacity-100 border-b-4 border-white hover:border-gray-200'>
        <Image 
          src={'/icons8-beach-80.png'}
          alt='Beach Image'
          width={35}
          height={35}
        />
        <span>Beach</span>
      </div>
      <div className=' cursor-pointer flex flex-col justify-center items-center opacity-60 hover:opacity-100 border-b-4 border-white hover:border-gray-200'>
        <Image 
          src={'/icons8-beach-80.png'}
          alt='Beach Image'
          width={35}
          height={35}
        />
        <span>Beach</span>
      </div>
      <div className=' cursor-pointer flex flex-col justify-center items-center opacity-60 hover:opacity-100 border-b-4 border-white hover:border-gray-200'>
        <Image 
          src={'/icons8-beach-80.png'}
          alt='Beach Image'
          width={35}
          height={35}
        />
        <span>Beach</span>
      </div>
      <div className=' cursor-pointer flex flex-col justify-center items-center opacity-60 hover:opacity-100 border-b-4 border-white hover:border-gray-200'>
        <Image 
          src={'/icons8-beach-80.png'}
          alt='Beach Image'
          width={35}
          height={35}
        />
        <span>Beach</span>
      </div>
    </div>
  )
}

export default Categories