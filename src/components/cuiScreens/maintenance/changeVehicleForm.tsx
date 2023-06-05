import '../../../styles/vehiclesMain.css'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { changeOpen, changeContent, newPopup } from '../../slices/popupSlice';
import { useEffect, useState, ChangeEvent, FormEvent, ComponentState } from 'react';
import { useGetVehicleListQuery, useUpdateVehicleMutation  } from '../../slices/apiSlice';
import { formatDate } from '../getDate';

const VehicleForm = ({id} : {id: number}) => {

  const popUpArr = useAppSelector((state) => state.popup.PopupArr)
  const dispatch = useAppDispatch()
  const interfaceData = useAppSelector((state) => state.interface)
  const [updatePost, { isLoading: isUpdating }] = useUpdateVehicleMutation();

  const vehicle = useGetVehicleListQuery(undefined, {selectFromResult: ({data}) => ({
    vehicle: data?.find((vehicle: any) => vehicle.id === id)
  })})

  const [addServiceWorkToggle, setAddServiceWorkToggle] = useState(false);

  const [editFields, setEditFields] = useState({
    make: vehicle.vehicle.make,
    badge: vehicle.vehicle.badge,
    useStatus: vehicle.vehicle.useStatus,
    maintenanceStatus: vehicle.vehicle.maintenanceStatus,
    milage: vehicle.vehicle.milage,
    service_history: vehicle.vehicle.service_history,
    next_service: formatDate(vehicle.vehicle.next_service_formatted),
  });

  const [newServiceWork, setNewServiceWork] = useState({
    service_type: '',
    service_date: '',
    service_notes: '',
  });

  const addServiceWork = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setAddServiceWorkToggle(!addServiceWorkToggle)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setEditFields({...editFields, [event.target.name]: event.target.value})
  }

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    let bool = event.target.value
    if (bool === 'true') {
      setEditFields({...editFields, [event.target.name]: true})
      return
    }
    else if (bool === 'false') {
      setEditFields({...editFields, [event.target.name]: false})
      return
    }
  }

  const handleServiceWorkChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setNewServiceWork({...newServiceWork, [event.target.name]: event.target.value})
  }

  const handleSubmitWork = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (newServiceWork.service_type.length < 2) {
      return
    }
    event.preventDefault()
    setEditFields({...editFields, service_history: [...editFields.service_history, newServiceWork]});  
    setAddServiceWorkToggle(false);
  }

  async function handleSubmit (event: FormEvent<HTMLFormElement>)  {
    event.preventDefault()
    const serializedData = editFields;
    console.log(serializedData)
    try { 
      await updatePost({id: vehicle.vehicle._id, ...serializedData}).then(res => {console.log(res)})
        }
    catch {
      error: console.log(Error)
    }
    finally {
        setAddServiceWorkToggle(false)
        vehicle.refetch()
    }
  }


return (
  <div>
    <form className='vehicleForm' name='vehicleForm' method='POST' onSubmit={(event) =>handleSubmit(event)}>
      <div className="cuiFormSection">
        <label className='cuiLabel'>OPERATIONAL STATUS:</label>
        <div className="cuiFormSubSection">
          <label className='cuiSubLabel'>FUNCTIONAL
            <input 
              className='radioInput' 
              name='operationStatus' 
              type='radio' 
              value='true' 
              defaultChecked={editFields.maintenanceStatus} 
              onChange={(event) => handleRadioChange(event)}>
            </input>
          </label>
          <label className='cuiSubLabel'>IN MAINTENANCE
            <input 
              className='radioInput' 
              name='operationStatus' 
              type='radio' 
              value='false' 
              defaultChecked={!editFields.maintenanceStatus} 
              onChange={(event) => handleRadioChange(event)}>
            </input>
          </label>
        </div>
      </div>
      <div className="cuiFormSection">
        <label className='cuiLabel'>MILAGE:</label>
        <input 
            type='number' 
            placeholder = '0'
            name='milage'  
            value={editFields.milage} 
            onChange={(event) => handleChange(event)}>
        </input>
      </div>
      <div className="cuiFormSection">
        <label className='cuiLabel'>USE STATUS:</label>
        <div className="cuiFormSubSection">
          <label className='cuiSubLabel'>IN USE
            <input 
              className='radioInput' 
              name='useStatus' 
              type='radio' 
              value='true' 
              defaultChecked={editFields.useStatus} 
              onChange={(event) => handleRadioChange(event)}>
            </input>
          </label>
          <label className='cuiSubLabel'>IN GARAGE
            <input 
              className='radioInput' 
              name='useStatus' 
              type='radio' 
              value='false' 
              defaultChecked={!editFields.useStatus} 
              onChange={(event) => handleRadioChange(event)}>
            </input>
          </label>
        </div>
      </div>
      <div className="cuiFormSection">
        <label className='cuiLabel'>NEXT SERVICE:</label>
        <input 
            type='date' 
            name='next_service'  
            value={editFields.next_service} 
            onChange={(event) => handleChange(event)}>
        </input>
      </div>
      <div className='cuiDropDownButtonContainer'>
        <button 
          className='cuiDropDownButton' 
          onClick={(event) => addServiceWork(event)}>
            {addServiceWorkToggle ? "HIDE SERVICE WORK FORM" : "ADD SERVICE WORK"}
        </button>
      </div>
      {addServiceWorkToggle ? 
        <div className='serviceWork'>
          <label>ADD SERVICE WORK:</label>
            <input
              required
              type='text'
              placeholder='Service Type...'
              name='service_type'
              value={newServiceWork.service_type}
              onChange={(event) => handleServiceWorkChange(event)}>
            </input>
            <input
              required
              type='date'
              placeholder='Service Date...'
              name='service_date'
              value={newServiceWork.service_date}
              onChange={(event) => handleServiceWorkChange(event)}>
            </input>
            <input
              type='text'
              placeholder='Service Notes...'
              name='service_notes'
              value={newServiceWork.service_notes}
              onChange={(event) => handleServiceWorkChange(event)}>
            </input>
          <button 
            className='cuiDropDownButton' 
            onClick={(event) => handleSubmitWork(event)}>ADD WORK
          </button>
        </div> : null
      }
      <div className='cuiDropDownButtonContainer'>
        <button className='cuiDropDownButton' type='submit'>SUBMIT</button>
      </div>
    </form>
  </div>
)
}

export default VehicleForm