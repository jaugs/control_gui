import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import '../../../styles/inventoryMain.css'
import { useAddResortCleaningMutation } from '../../slices/apiSlice';

interface OrderProps {
    content: any,
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
}

const RoomCleaningForm: React.FC<OrderProps> = ({content, setIsEditing}) => {

    const [isSubmmited, setIsSubmitted] = useState(false)

    useEffect(() => {
        if (isSubmmited) {
            postData()
        }
    }, [isSubmmited])
  
    const [updateCleaning, {isLoading: isUpdating}] = useAddResortCleaningMutation()

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
    <form
        className='roomCleaningEditForm' 
        name='cleaningUpdateForm' 
        method='POST' 
        onSubmit={(event) =>handleSubmit(event)}>
        <label className='cleaningFormTitle'>UPDATE CLEANING {content.name}</label>
        <label className='cuiLabel'>Date:</label>
            <input 
                required
                type='date' 
                name='lastCleaned'  
                value={newCleanDate} 
                onChange={(event) => handleDateChange(event)}>
            </input>
        <div className='cuiDropDownButtonContainer'>
            <button className='roomUpdateButton' type='submit'>SUBMIT</button>
        </div>
    </form>
  );
};

export default RoomCleaningForm;