"use client"
import React from 'react'

interface ModalProps {
    isOpen: boolean,
    title: string,
    content: React.ReactElement,
    close: ()=> void
}

const  Modal: React.FC<ModalProps> = ({
    title,
    content,
    isOpen,
    close
}) => {
  return isOpen && (
    <div className='flex justify-center items-center inset-0 bg-black/60 z-50 absolute'>
        <div className='bg-white p-5 rounded-xl w-full sm:w-[80%] md:w-[70%] lg:w-[50%] flex flex-col'>
            <div className='grid grid-cols-3 pb-3'>
                <div onClick={()=> close()} className='col-span-1 hover:bg-gray-300 transition rounded-full p-2 w-12 h-12 flex justify-center items-center'>
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className='col-span-1 flex justify-center items-center text-xl'>
                    {title}
                </div>
            </div>
            <hr/>
            <div className='pt-3'>
                {content}
            </div>
        </div>
    </div>
  )
}

export default Modal