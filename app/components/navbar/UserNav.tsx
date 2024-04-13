"use client"
import useLoginDisplay from '@/app/hooks/useLoginDisplay'
import useSignupDisplay from '@/app/hooks/useSignupDisplay'
import React, { useState } from 'react'
import LogoutButton from '../LogoutButton'
import { useRouter } from 'next/navigation'

interface usernavprop {
  userID?: string | null
}

const UserNav: React.FC<usernavprop> = ({ userID }) => {
  const [isOpen, setIsOpen] = useState(false)
  const loginStore = useLoginDisplay()
  const signUpStore = useSignupDisplay()
  const router = useRouter()
  return (
    <div>
        <button onClick={()=> setIsOpen(!isOpen)} className='flex rounded-full border p-2 space-x-2'>
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>

        </button>
        {isOpen && (
          <div className='absolute rounded-lg border mt-2 right-0 mr-8 shadow-md bg-white'>
            {userID ? (
              <>
                <div onClick={() => router.push(`/myproperties/`)} className='py-3 px-4 hover:bg-slate-100 cursor-pointer w-full'>My Properties</div>
                <div onClick={() => router.push(`/myreservations/`)} className='py-3 px-4 hover:bg-slate-100 cursor-pointer w-full'>My Reservations</div>
                <LogoutButton/>
              </>
            ):(
              <>
                <div onClick={loginStore.open} className='py-3 px-4 hover:bg-slate-100 cursor-pointer w-full'>Log In</div>
                <div onClick={signUpStore.open} className='py-3 px-4 hover:bg-slate-100 cursor-pointer w-full'>Sign Up</div>
              </>
            )}
          </div>
        )}
    </div>
  )
}

export default UserNav;