'use client'

import useLoginDisplay from '@/app/hooks/useLoginDisplay'
import { differenceInDays, eachDayOfInterval } from 'date-fns';
import React, { useEffect, useState } from 'react'
import {Range} from 'react-date-range';
import DatePicker from './DatePicker';
import format from 'date-fns/format';
import apiServices from '@/app/services/apiServices';

const initialDateRange = {
    startDate : new Date(),
    endDate : new Date(),
    key : 'selection'
}
export type Property = {
    id: string,
    guests: number,
    price_per_night: number
}
interface propertyProps {
    userID : string | null,
    property: Property
}

const Reservation: React.FC<propertyProps> = ({property, userID}) => {
    const loginModal = useLoginDisplay()
    const [fee, setFee] = useState<number>(0)
    const [nights, setNights] = useState<number>(1)
    const [totalPrice, setTotalPrice] = useState<number>(0)
    const [dateRange, setDateRange] = useState<Range>(initialDateRange);
    const [minDate, setMinDate] = useState<Date>(new Date())
    const [guests, setGuests] = useState<string>('1')
    const guestsRange = Array.from({length: property.guests}, (_, index) => index + 1)
    const [bookedDates, setBookedDates] = useState<Date>()
    const i = useLoginDisplay()
    const perform_booking = async () => {
        if (userID) {
            if (dateRange.startDate && dateRange.endDate){
                const form = new FormData()
                form.append('guests', guests)
                form.append('start_date', format(dateRange.startDate, 'yyyy-MM-dd'));
                form.append('end_date', format(dateRange.endDate, 'yyyy-MM-dd'));
                form.append('number_of_nights', nights.toString());
                form.append('total_price', totalPrice.toString());
                const response = await apiServices.post(`/api/properties/${property.id}/book/`, form)
                if (response.success){
                    console.log("booking...");
                }else{
                    console.log("something went wrong while booking...");
                    
                }
            }
        } else {
            i.open()
        }
    }
    const _setDateRange = (selection: any) => {
        const newStartDate = new Date(selection.startDate)
        const newEndDate = new Date(selection.endDate)
        if (newEndDate <= newStartDate) {
            newEndDate.setDate(newStartDate.getDate() + 1)
        }
        setDateRange({
            ...dateRange,
            startDate: newStartDate,
            endDate: newEndDate
        })
    }
    const getReservations = async () => {
        const reservations = await apiServices.get(`/api/properties/${property.id}/reservations/`)
        let dates: Date[] = [];
        reservations.forEach((reservation: any) => {
            const range = eachDayOfInterval({
                start: new Date(reservation.start_date),
                end: new Date(reservation.end_date)
            })
            dates = [...dates, ...range];
            setBookedDates(dates)
        })
    }
    useEffect(()=> {
        getReservations()
        if (dateRange.startDate && dateRange.endDate) {
            const dayCount = differenceInDays(
                dateRange.endDate,
                dateRange.startDate,
            )
            if (dayCount && property.price_per_night){
                const _fee = ((property.price_per_night * dayCount) / 100 ) * 5
                setFee(_fee)
                setTotalPrice((property.price_per_night * dayCount) + _fee)
                setNights(dayCount)
            } else {
                setFee((property.price_per_night / 100) * 5)
                setTotalPrice(((property.price_per_night / 100) * 5) + property.price_per_night)
                setNights(1)
            }
        }
    }, [dateRange])
    return (
    <div className='border border-gray-300 rounded-xl p-5 mb-4'>
        <div className='text-xl'>${property.price_per_night} Per night</div>
        <div className='border border-gray-300 rounded-xl p-4 my-4'>
            <label htmlFor="guestnumber">Guests</label>
            <select value={guests} onChange={(e)=>setGuests(e.target.value)} name="guestnumber" id="" className='w-full mt-2'>
                {guestsRange.map(num => (
                <option value={num} key={num}>{num}</option>
                ))}
            </select>
        </div>
        <DatePicker value={dateRange} onChange={(value)=> _setDateRange(value.selection)} bookedDates={bookedDates}/>
        <button onClick={perform_booking} className='w-full bg-airbnb hover:bg-airbnb-dark rounded-xl text-white text-xl p-4'>Book</button>
        <div className='my-4 flex justify-between'>
            <span>${property.price_per_night} * {nights}</span>
            <span>${property.price_per_night * nights}</span>
        </div>
        <div className='my-4 flex justify-between'>
            <span>Airbnb fee</span>
            <span>${fee}</span>
        </div>
        <hr/>
        <div className='my-4 flex justify-between'>
            <span>Total</span>
            <span>${totalPrice}</span>
        </div>
    </div>
  )
}

export default Reservation;