"use client"
import React, { useEffect, useState } from 'react'
import PropertyItem from './PropertyItem'
import apiServices from '@/app/services/apiServices'

export type PropertyType = {
  id: string,
  title: string,
  price_per_night: number,
  image_url: string
}
interface PropertyListProps {
  landlord_id: string | null
}
const PropertyList: React.FC<PropertyListProps> = ({landlord_id}) => {
  const [properties, setProperties] = useState<PropertyType[]>([])
  const getProperties = async () => {
    let url = '/api/properties/'
    if (landlord_id){
      url += `?landlord_id=${landlord_id}`
    }
    const tmpProperties = await apiServices.get(url)
    setProperties(tmpProperties.data)
  }
  useEffect(()=> {
    apiServices.get('/api/properties/')
    getProperties()
  }, [])
  return (
    <>
        {properties.map((property)=> {
          return (
            <PropertyItem key={property.id} property={property}/>
          )
        })}
    </>
  )
}

export default PropertyList