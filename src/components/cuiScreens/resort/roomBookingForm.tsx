import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import '../../../styles/inventoryMain.css'
import { toggleRoomEdit } from '../../slices/interfaceSlice';
import { useAppDispatch } from '../../../app/hooks';
import { useAddResortCheckInMutation } from '../../slices/apiSlice';

interface OrderProps {
    content: {
        _id: String,
        roomNumer: Number,
        guestName: String,
        checkInDate: Date,
        checkOutDate: Date,
        status: String,
        createdAt: Date,
        lastCleanedDate: Date,
        checkIn_formatted: String,
        checkOut_formatted: String,
    },
}

const RoomBookingForm: React.FC<OrderProps> = ({content}) => {

    const [isSubmmited, setIsSubmitted] = useState(false)

    useEffect(() => {
        if (isSubmmited) {
            postData()
        }
    }, [isSubmmited])
  
    const [updateBooking, {isLoading: isUpdating}] = useAddResortCheckInMutation()

    const dispatch = useAppDispatch()
    const [newCheckinDate, setNewCheckinDate] = useState('')
    const [newCheckoutDate, setNewCheckoutDate] = useState('')
    const [newName, setNewName] = useState('')

    const handleCheckinChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setNewCheckinDate(event.target.value)
    }

    const handleCheckoutChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setNewCheckoutDate(event.target.value)
    }

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setNewName(event.target.value)
    }

    async function postData () {
        updateBooking({id: content._id, checkInDate: newCheckinDate, checkOutDate: newCheckoutDate, guestName: newName}).unwrap().then((result) => {
            console.log(result)
            //setIsEditing(false);
            setIsSubmitted(false)
        })
    }

const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true)
  }

const getData = () => {
    console.log(content)
}

  return (
    <div className='bookingFormContainer'>
        <div className='bookingFormTitle'>
        <label className='bookingFormItem'>UPDATE BOOKING</label>
        <button onClick={getData} className='roomUpdateButton'>HIDE</button>
        </div>
        <div className='bookingFormStatus'>
            <div className='bookingFormItem'>{content.guestName == 'Vacant' ? "Open" : `ss${content.guestName}`}</div>
            <div className='bookingFormItem'>{content.checkInDate ? content.checkIn_formatted : 'dd'}</div>
            <div className='bookingFormItem'>{content.checkOutDate ? content.checkOut_formatted : ''}</div>
        </div>
        <form
            className='roomBookingForm' 
            name='roomBookingForm' 
            method='POST' 
            onSubmit={(event) =>handleSubmit(event)}>
            <label className='cuiLabel'>Check In Date:
                <input 
                    required
                    type='date' 
                    name='checkin'  
                    value={newCheckinDate} 
                    onChange={(event) => handleCheckinChange(event)}>
                </input>
            </label>
            <label className='cuiLabel'>Check Out Date:
                <input 
                    required
                    type='date' 
                    name='checkout'  
                    value={newCheckoutDate} 
                    onChange={(event) => handleCheckoutChange(event)}>
                </input>
            </label>
            <label className='cuiLabel'>Guest Name:
                <input 
                    required
                    type='text' 
                    name='name'  
                    value={newName} 
                    onChange={(event) => handleNameChange(event)}>
                </input>
            </label>
            <div className='cuiDropDownButtonContainer'>
                <button className='roomUpdateButton' type='submit'>SUBMIT</button>
            </div>
        </form>
    </div>
  );
};

export default RoomBookingForm;