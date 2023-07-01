import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import '../../../styles/inventoryMain.css'
import { toggleRoomEdit } from '../../slices/interfaceSlice';
import { useAppDispatch } from '../../../app/hooks';
import { useAddResortCleaningMutation } from '../../slices/apiSlice';

interface OrderProps {
    content: any,
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
}

const RoomBookingForm: React.FC<OrderProps> = ({content, setIsEditing}) => {

    const [isSubmmited, setIsSubmitted] = useState(false)

    useEffect(() => {
        if (isSubmmited) {
            postData()
        }
    }, [isSubmmited])
  
    const [updateCleaning, {isLoading: isUpdating}] = useAddResortCleaningMutation()

    const dispatch = useAppDispatch()
    const [newCleanDate, setNewCleanDate] = useState('')

    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setNewCleanDate(event.target.value)
    }

    async function postData () {
        console.log(content._id)
        updateCleaning({id: content._id, lastCleanedDate: newCleanDate }).unwrap().then((result) => {
            console.log(result)
            setIsEditing(false)
            setIsSubmitted(false)
        })
    }

const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true)
  }

  return (
    <div className='bookingFormContainer'>
        <label className='cleaningFormTitle'>UPDATE BOOKING</label>
        <div className='bookingFormStatus'>
            <div className='bookingFormItem'>{content.guestName == 'Vacant' ? "Open" : content.guestName}</div>
            <div className='bookingFormItem'>{content.checkInDate ? content.checkIn_formatted : null}</div>
            <div className='bookingFormItem'>{content.checkOutDate ? content.checkOut_formatted : null}</div>
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
                    name='lastCleaned'  
                    value={newCleanDate} 
                    onChange={(event) => handleDateChange(event)}>
                </input>
            </label>
            <label className='cuiLabel'>Check Out Date:
                <input 
                    required
                    type='date' 
                    name='lastCleaned'  
                    value={newCleanDate} 
                    onChange={(event) => handleDateChange(event)}>
                </input>
            </label>
            <label className='cuiLabel'>Guest Name:
                <input 
                    required
                    type='text' 
                    name='lastCleaned'  
                    value={newCleanDate} 
                    onChange={(event) => handleDateChange(event)}>
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