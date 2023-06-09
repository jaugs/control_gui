import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import '../../../styles/vehiclesMain.css'
import { changeOpen, changeContent, newPopup } from '../../slices/popupSlice';
import { useState, ChangeEvent, FormEvent } from 'react';
import { useGetRideListQuery, useUpdateRidesMutation  } from '../../slices/apiSlice';
import { formatDate } from '../getDate';

const InventoryEditForm = ({id} : {id: number}) => {

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
    <form className='inventoryForm' name='inventoryForm' method='POST' onSubmit={(event) =>handleSubmit(event)}>
      <div className="cuiFormSection">
        <label>CATEGORY:</label>
            <input
              required
              type='text'
              placeholder='Category...'
              name='category'
              value={editFields.category}
              onChange={(event) => handleChange(event)}>
            </input>
      </div>
      <div className="cuiFormSection">
        <label className='cuiLabel'>SUB-CATEGORY:</label>
        <input 
            type='text' 
            name='sub_category'  
            value={editFields.sub_category} 
            onChange={(event) => handleChange(event)}>
        </input>
      </div>
      <div className="cuiFormSection">
        <label className='cuiLabel'>DESCRIPTION:</label>
        <input 
            type='text' 
            name='description'  
            value={editFields.description} 
            onChange={(event) => handleChange(event)}>
        </input>
      </div>
      <div className="cuiFormSection">
        <label className='cuiLabel'>LOT SIZE:</label>
        <input 
            type='number' 
            name='lotSize'  
            value={editFields.lotSize} 
            onChange={(event) => handleChange(event)}>
        </input>
      </div>
      <div className="cuiFormSection">
        <label className='cuiLabel'>PRICE:</label>
        <input 
            type='number' 
            name='price'  
            value={editFields.price} 
            onChange={(event) => handleChange(event)}>
        </input>
      </div>
      <div className="cuiFormSection">
        <label className='cuiLabel'>AVAILABILITY:</label>
        <div className="cuiFormSubSection">
          <label className='cuiSubLabel'>IN STOCK
            <input 
              className='radioInput' 
              name='isAvailable' 
              type='radio' 
              value='true' 
              defaultChecked={editFields.isAvailable} 
              onChange={(event) => handleRadioChange(event)}>
            </input>
          </label>
          <label className='cuiSubLabel'>OUT OF STOCK
            <input 
              className='radioInput' 
              name='isAvailable' 
              type='radio' 
              value='false' 
              defaultChecked={!editFields.isAvailable} 
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

export default InventoryEditForm