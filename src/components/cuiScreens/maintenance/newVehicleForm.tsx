import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { changeOpen, changeContent, newPopup } from '../../slices/popupSlice';
import { useEffect, useState, ChangeEvent, FormEvent, ComponentState } from 'react';
import { changeSection, toggleAddForm } from '../../slices/interfaceSlice';
import { useAddVehicleMutation } from '../../slices/apiSlice';

interface FormProps {
  getBadges(make: string): string;
}

const NewVehicleForm: React.FC<FormProps> = (props) => {

  const [isSubmmited, setIsSubmitted] = useState(false)

  useEffect(() => {
    if (isSubmmited) {
    postData()
    }
  }, [isSubmmited])
  
  const popUpArr = useAppSelector((state) => state.popup.PopupArr)
  const dispatch = useAppDispatch()
  const interfaceData = useAppSelector((state) => state.interface)
  const [addVehicle, {isLoading: isUpdating}] = useAddVehicleMutation();

  const [newVehicle, setNewVehicle] = useState({
      make: '',
      badge: '',
      useStatus: false,
      maintenanceStatus: false,
      milage: '',
      next_service: '',
  });

  const handleMakeChange = (event: ChangeEvent<HTMLInputElement>) => {
      setNewVehicle({...newVehicle, [event.target.name]: event.target.value})
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      event.preventDefault()
      setNewVehicle({...newVehicle, [event.target.name]: event.target.value})
  }

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
      let bool = event.target.value
      if (bool === 'true') {
          setNewVehicle({...newVehicle, [event.target.name]: true})
          return
      }
      else if (bool === 'false') {
          setNewVehicle({...newVehicle, [event.target.name]: false})
          return
      }
  }

  function getBadge () {
    let number = props.getBadges(newVehicle.make)
    setNewVehicle((prevState) => ({...prevState, badge: number}))
  }

  async function postData () {
      try { 
          await addVehicle({...newVehicle}).then(res => {console.log(res)})
          }
          catch {
              error: console.log(Error)
          }
          finally {
              setIsSubmitted(false)
              dispatch(toggleAddForm())
          }
  }

  const handleNewVehicleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getBadge()
    setIsSubmitted(true)
  }

  return (
  <div className='newVehicleForm'>
    <form className='vehicleForm' name='addVehicle' method='POST' onSubmit={(event) => handleNewVehicleSubmit(event)}>
      <label className='cuiFormTitle'>ADD NEW VEHICLE</label>
      <div className='cuiFormSection' id='vehicleMakeForm'>
        <label className='cuiLabel'>VEHICLE MAKE:</label>
        <div className='cuiFormSubSection'>
          <label className='cuiSubLabel'>JEEP
            <input
              className='radioInput' 
              type='radio'
              name='make'
              value='Jeep'
              onChange={(event) => handleMakeChange(event)}>
            </input>
          </label>
          <label className='cuiSubLabel'>LAND CRUISER
            <input
              className='radioInput' 
              type='radio'
              name='make'
              value='Land Cruiser'
              onChange={(event) => handleMakeChange(event)}>
            </input>
          </label>
          <label className='cuiSubLabel'>UTILITY TRUCK
            <input
              className='radioInput' 
              type='radio'
              name='make'
              value='Utility'
              onChange={(event) => handleMakeChange(event)}>
            </input>
          </label>
        </div>
      </div>
      <div className='cuiFormSection'>
        <label className='radioLabel'>USE STATUS:</label>
          <label className='cuiSubLabel'>IN USE
            <input 
              className='radioInput' 
              name='useStatus' 
              type='radio' 
              value='true' 
              defaultChecked={newVehicle.useStatus} 
              onChange={(event) => handleRadioChange(event)}>
            </input>
          </label>
          <label className='cuiSubLabel'>IN GARAGE
            <input 
              className='radioInput' 
              name='useStatus' 
              type='radio' 
              value='false' 
              defaultChecked={!newVehicle.useStatus} 
              onChange={(event) => handleRadioChange(event)}>
            </input>
          </label>
      </div>
    <div className="cuiFormSection">
      <label className='cuiLabel'>NEXT SERVICE:</label>
      <input 
          type='date' 
          name='next_service'  
          value={newVehicle.next_service} 
          onChange={(event) => handleChange(event)}>
      </input>
    </div>
    <div className='cuiFormSection'>
      <label className='cuiLabel'>OPERATIONAL STATUS:</label>
        <label className='cuiSubLabel'>FUNCTIONAL
          <input 
            className='radioInput' 
            name='maintenanceStatus' 
            type='radio' 
            value='true' 
            defaultChecked={newVehicle.maintenanceStatus} 
            onChange={(event) => handleRadioChange(event)}>
          </input>
        </label>
        <label className='cuiSubLabel'>IN MAINTENANCE
          <input 
            className='radioInput' 
            name='maintenanceStatus' 
            type='radio' 
            value='false' 
            defaultChecked={!newVehicle.maintenanceStatus} 
            onChange={(event) => handleRadioChange(event)}>
          </input>
        </label>
    </div>
    <div className='cuiFormSection'>
      <label>MILAGE:</label>
      <input 
          type='number' 
          placeholder = '0'
          name='milage'  
          value={newVehicle.milage} 
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

export default NewVehicleForm