import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { changeOpen, changeContent, newPopup } from '../../slices/popupSlice';
import { useState, ChangeEvent, FormEvent } from 'react';
import { useGetRideListQuery, useUpdateRidesMutation  } from '../../slices/apiSlice';
import { formatDate } from '../getDate';

const RideUpdateForm = ({id} : {id: number}) => {

  const popUpArr = useAppSelector((state) => state.popup.PopupArr)
  const dispatch = useAppDispatch()
  const interfaceData = useAppSelector((state) => state.interface)
  const [updateRide, response] = useUpdateRidesMutation();

  const ride = useGetRideListQuery(undefined, {selectFromResult: ({data}) => ({
    ride: data?.find((ride: any) => ride.id === id)
  })})

  const [editFields, setEditFields] = useState({
    name: ride.ride.name,
    operational: ride.ride.operational,
    opening_date: formatDate(ride.ride.opening_date_formatted),
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setEditFields({...editFields, [event.target.name]: event.target.value})
  }

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    let bool = event.target.value
    if (bool === 'true') {
      setEditFields({...editFields, operational: true})
      return
    }
    else if (bool === 'false') {
      setEditFields({...editFields, operational: false})
      return
    }
  }

  async function handleSubmit (event: FormEvent<HTMLFormElement>)  {
    event.preventDefault()
    const serializedData = editFields;
    updateRide({id: ride.ride._id, ...serializedData}).unwrap().then((result) => {
      console.log(result)
      ride.refetch()
    })
  }

return (
  <div>
    <form className='vehicleForm' name='vehicleForm' method='POST' onSubmit={(event) =>handleSubmit(event)}>
      <div className="cuiFormSection">
        <label>NAME:</label>
            <input
              required
              type='text'
              placeholder='Name...'
              name='name'
              value={editFields.name}
              onChange={(event) => handleChange(event)}>
            </input>
      </div>
      <div className="cuiFormSection">
        <label className='cuiLabel'>OPENING DATE:</label>
        <input 
            type='date' 
            name='opening_date'  
            value={editFields.opening_date} 
            onChange={(event) => handleChange(event)}>
        </input>
      </div>
      <div className="cuiFormSection">
        <label className='cuiLabel'>OPERATIONAL STATUS:</label>
        <div className="cuiFormSubSection">
          <label className='cuiSubLabel'>OPERATIONAL
            <input 
              className='radioInput' 
              name='operationStatus' 
              type='radio' 
              value='true' 
              defaultChecked={editFields.operational} 
              onChange={(event) => handleRadioChange(event)}>
            </input>
          </label>
          <label className='cuiSubLabel'>UNDER CONSTRUCTION
            <input 
              className='radioInput' 
              name='operationStatus' 
              type='radio' 
              value='false' 
              defaultChecked={!editFields.operational} 
              onChange={(event) => handleRadioChange(event)}>
            </input>
          </label>
        </div>
      </div>
      <div className='cuiDropDownButtonContainer'>
        <button className='cuiDropDownButton' type='submit'>SUBMIT</button>
      </div>
    </form>
  </div>
)
}

export default RideUpdateForm