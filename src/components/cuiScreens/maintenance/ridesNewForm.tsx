import '../../../styles/vehiclesMain.css'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { changeOpen, changeContent, newPopup } from '../../slices/popupSlice';
import { useEffect, useState, ChangeEvent, FormEvent, ComponentState } from 'react';
import { changeSection, toggleAddForm } from '../../slices/interfaceSlice';
import { useAddRidesMutation } from '../../slices/apiSlice';



const NewRideForm = () => {

  const [isSubmmited, setIsSubmitted] = useState(false)

  useEffect(() => {
    if (isSubmmited) {
    postData()
    }
  }, [isSubmmited])
  
  
  const popUpArr = useAppSelector((state) => state.popup.PopupArr)
  const dispatch = useAppDispatch()
  const interfaceData = useAppSelector((state) => state.interface)
  const [addRide, {isLoading: isUpdating}] = useAddRidesMutation();

  const [newRide, setNewRide] = useState({
      name: '',
      operational: false,
      opening_date: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      event.preventDefault()
      setNewRide({...newRide, [event.target.name]: event.target.value})
  }

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
      let bool = event.target.value
      if (bool === 'true') {
        setNewRide({...newRide, [event.target.name]: true})
          return
      }
      else if (bool === 'false') {
        setNewRide({...newRide, [event.target.name]: false})
          return
      }
  }

  async function postData () {
      try { 
          await addRide({...newRide}).then(res => {console.log(res)})
          }
          catch {
              error: console.log(Error)
          }
          finally {
              setIsSubmitted(false)
              dispatch(toggleAddForm())
          }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true)
  }

  return (
  <div className='newVehicleForm'>
    <form className='vehicleForm' name='vehicleForm' method='POST' onSubmit={(event) =>handleSubmit(event)}>
      <div className="cuiFormSection">
      <div className='cuiFormSubSection'>
        <label>NAME:
            <input
              required
              type='text'
              placeholder='Name...'
              name='name'
              value={newRide.name}
              onChange={(event) => handleChange(event)}>
            </input>
          </label>
      </div>
        <label className='cuiLabel'>OPERATIONAL STATUS:</label>
        <div className="cuiFormSubSection">
          <label className='cuiSubLabel'>OPERATIONAL
            <input 
              className='radioInput' 
              name='operationStatus' 
              type='radio' 
              value='true' 
              defaultChecked={newRide.operational} 
              onChange={(event) => handleRadioChange(event)}>
            </input>
          </label>
          <label className='cuiSubLabel'>UNDER CONSTRUCTION
            <input 
              className='radioInput' 
              name='operationStatus' 
              type='radio' 
              value='false' 
              defaultChecked={!newRide.operational} 
              onChange={(event) => handleRadioChange(event)}>
            </input>
          </label>
        </div>
      </div>
      <div className="cuiFormSection">
        <label className='cuiLabel'>OPENING DAtE:</label>
        <input 
            type='date' 
            name='opening_date'  
            value={newRide.opening_date} 
            onChange={(event) => handleChange(event)}>
        </input>
      </div>
      <div className='cuiDropDownButtonContainer'>
        <button className='cuiDropDownButton' type='submit'>SUBMIT</button>
      </div>
    </form>
  </div>
  )
}
export default NewRideForm