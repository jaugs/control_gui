import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import '../../../styles/inventoryMain.css'
import { useAppDispatch } from '../../../app/hooks';
import { useAddResortBookingMutation, useAddResortCheckInMutation, useAddResortCheckOutMutation } from '../../slices/apiSlice';

interface OrderProps {
    content: {
        _id: String,
        roomNumber: Number,
        guestName: String,
        checkInDate: Date,
        checkOutDate: Date,
        status: String,
        createdAt: Date,
        lastCleanedDate: Date,
        checkIn_formatted: String,
        checkOut_formatted: String,
    },
    setShowFormIndex: React.Dispatch<React.SetStateAction<number | null>>
}

const RoomBookingForm: React.FC<OrderProps> = ({content, setShowFormIndex}) => {

    const [isSubmmited, setIsSubmitted] = useState(false)

    useEffect(() => {
        if (isSubmmited) {
            postData()
        }
    }, [isSubmmited])
  
    const [updateBooking, {isLoading: isUpdating}] = useAddResortBookingMutation()
    const [updateCheckin] = useAddResortCheckInMutation()
    const [updateCheckOut] = useAddResortCheckOutMutation()

    const dispatch = useAppDispatch()
    const [newCheckinDate, setNewCheckinDate] = useState('')
    const [newCheckoutDate, setNewCheckoutDate] = useState('')
    const [formType, setFormType] = useState('')
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
        if (formType == 'book') {
            updateBooking({id: content._id, checkInDate: newCheckinDate, checkOutDate: newCheckoutDate, guestName: newName}).unwrap().then((result) => {
                console.log(result)})
        } else if (formType == 'in') {
            updateCheckin({id: content._id, checkInDate: newCheckinDate, checkOutDate: newCheckoutDate, guestName: newName}).unwrap().then((result) => {
                console.log(result)})
        } else if (formType == 'out') {
            updateCheckOut({id: content._id, guestName: newName}).unwrap().then((result) => {
                console.log(result)})
        }
        setShowFormIndex(null)
        setIsSubmitted(false)
        
    }

const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true)
  }

const getData = () => {
    setShowFormIndex(null)
}

  return (
    <div className='bookingFormContainer'>
        <div className='bookingFormTitle'>
        <label className='bookingFormTitleItem'>{`UPDATE BOOKING:  ROOM ${content.roomNumber}`}</label>
        <button onClick={getData} className='resortToggleButton'>HIDE</button>
        </div>
        <div className='bookingFormStatus'>
            <div className='bookingFormCategory'>
                <div className='bookingFormItem'>Guest Name:</div>
                <div className='bookingFormItem'>{content.guestName == 'Vacant' ? "Vacant" : `${content.guestName}`}</div>
            </div>
            <div className='bookingFormCategory'>
                <div className='bookingFormItem'>Check-In Date:</div>
                <div className='bookingFormItem'>{content.checkInDate ? content.checkIn_formatted : ''}</div>
            </div>
            <div className='bookingFormCategory'>
                <div className='bookingFormItem'>Check-Out Date:</div>
                <div className='bookingFormItem'>{content.checkOutDate ? content.checkOut_formatted : ''}</div>
            </div>
        </div>

        <div className='bookingFormSelection'>
            <button onClick={() => setFormType('in')} className={formType == 'in' ? 'activeRoomButton' : 'roomUpdateButton'}>CHECK IN</button>
            <button onClick={() => setFormType('out')} className={formType == 'out' ? 'activeRoomButton' : 'roomUpdateButton'}>CHECK OUT</button>
            <button onClick={() => setFormType('book')} className={formType == 'book' ? 'activeRoomButton' : 'roomUpdateButton'}>CREATE BOOKING</button>
        </div>
        {formType == 'in' ?
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

        </form> : formType == 'out' ? 
        <form
        className='roomBookingForm' 
        name='roomBookingForm' 
        method='POST' 
        onSubmit={(event) =>handleSubmit(event)}>
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
        </form> : formType == 'book' ? 
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
        </form> : null}
        
    </div>
  );
};

export default RoomBookingForm;