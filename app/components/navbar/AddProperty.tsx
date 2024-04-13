"use client"
import useAddProperty from '@/app/hooks/useAddProperty'
import useLoginDisplay from '@/app/hooks/useLoginDisplay'
import React from 'react'

interface addpropertyprop {
  userID?: string | null
}

const AddProperty: React.FC<addpropertyprop> = ({userID}) => {
  const store = useAddProperty()
  const login = useLoginDisplay()
  const addProperty = () => {
    if (userID) {
      store.open()
    } else {
      login.open()
    }
    
  }
  return (
    <div onClick={addProperty} className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
        Airbnb your home
    </div>
  )
}

export default AddProperty;