import React from 'react'
import PropertyList from '../components/properties/PropertyList'
import { getUserID } from '../lib/actions'

async function MyProperties() {
  const landlord_id = await getUserID()
  return (
    <main className='px-6 py-6'>
        <h1 className='text-2xl my-4'>My Properties</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            <PropertyList landlord_id={landlord_id}/>
        </div>
    </main>
  )
}

export default MyProperties;