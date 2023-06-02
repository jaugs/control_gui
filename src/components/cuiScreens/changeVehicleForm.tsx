import '../../styles/vehiclesMain.css'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeOpen, changeContent, newPopup } from '../slices/popupSlice';
import { useEffect, useState, ChangeEvent, FormEvent, ComponentState } from 'react';
import { changeSection, toggleAddForm } from '../slices/interfaceSlice';
import { useGetVehicleListQuery, useUpdateVehicleMutation  } from '../slices/apiSlice';


const VehicleForm = ({id} : {id: number}) => {

  const formatDate = (userDate:any) => {
    userDate = new Date(userDate);
    let y = userDate.getFullYear().toString();
    let m = userDate.getMonth() + 1;
    m= (('0' + m.toString()).slice(-2))
    let d =(('0' + userDate.getDate().toString()).slice(-2));
    let result = `${y}-${m}-${d}`
    return result
  }
  
  const popUpArr = useAppSelector((state) => state.popup.PopupArr)
  const dispatch = useAppDispatch()
  const interfaceData = useAppSelector((state) => state.interface)
  const [updatePost, { isLoading: isUpdating }] = useUpdateVehicleMutation();
  const vehicle = useGetVehicleListQuery(undefined, {selectFromResult: ({data}) => ({
    vehicle: data?.find((vehicle: any) => vehicle.id === id)
  })})

  const [isEditing, setIsEditing] = useState(false);
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

  
const openForm = () => {
  setIsEditing(!isEditing)
}

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
  console.log(bool)
  if (bool === 'true') {
    setEditFields({...editFields, maintenanceStatus: true})
    console.log(editFields.maintenanceStatus)
    return
  }
  else if (bool === 'false') {
    setEditFields({...editFields, maintenanceStatus: false})
    console.log(editFields.maintenanceStatus)
    return
  }
}

const handleServiceWorkChange = (event: ChangeEvent<HTMLInputElement>) => {
  event.preventDefault()
  setNewServiceWork({...newServiceWork, [event.target.name]: event.target.value})
}

const handleSubmitWork = (event: React.MouseEvent<HTMLButtonElement>) => {
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
      setIsEditing(false)
      vehicle.refetch()
  }
}


return (
  <div>
 
  <button className='cuiDropDownLink' onClick={openForm}>{isEditing ? "STOP EDITING" : "EDIT"}</button>
  {isEditing ? 
    <form className='vehicleForm' name='vehicleForm' method='POST' onSubmit={(event) =>handleSubmit(event)}>
        <label className='radioLabel'>USE STATUS:
          <label>IN USE</label>
            <input className='radioInput' name='useStatus' type='radio' value='true' defaultChecked={editFields.useStatus} onChange={(event) => handleRadioChange(event)}></input>
          <label>IN GARAGE</label>
            <input className='radioInput' name='useStatus' type='radio' value='false' defaultChecked={!editFields.useStatus} onChange={(event) => handleRadioChange(event)}></input>
        </label>
       
        <label className='radioLabel'>OPERATIONAL STATUS:
          <label>FUNCTIONAL</label>
            <input className='radioInput' name='operationStatus' type='radio' value='true' defaultChecked={editFields.maintenanceStatus} onChange={(event) => handleRadioChange(event)}></input>
          <label>IN MAINTENANCE</label>
            <input className='radioInput' name='operationStatus' type='radio' value='false' defaultChecked={!editFields.maintenanceStatus} onChange={(event) => handleRadioChange(event)}></input>
        </label>
        <label>MILAGE:</label>
        <input 
            type='number' 
            placeholder = '0'
            name='milage'  
            value={editFields.milage} 
            onChange={(event) => handleChange(event)}>
        </input>
        <label>NEXT SERVICE:</label>
        <input 
            type='date' 
            name='next_service'  
            value={editFields.next_service} 
            onChange={(event) => handleChange(event)}>
        </input>
        <button className='vehicleButton' onClick={(event) => addServiceWork(event)}>{addServiceWorkToggle ? "HIDE SERVICE WORK FORM" : "ADD SERVICE WORK"}</button>

        {addServiceWorkToggle ? 
        <div className='serviceWork'>
        <label>ADD SERVICE WORK:</label>
          <input
            type='text'
            placeholder='Service Type...'
            name='service_type'
            value={newServiceWork.service_type}
            onChange={(event) => handleServiceWorkChange(event)}>
          </input>
          <input
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
          <button className='vehicleButton' onClick={(event) => handleSubmitWork(event)}>ADD WORK</button>
        </div> :
        <div className='serviceWorkAdded'>
          <div className='serviceItem'>{editFields.service_history[(editFields.service_history.length - 1)].service_type}</div>
        </div>}
        <button type='submit'>SUBMIT</button>
    </form> : null }
    </div>
)
}

export default VehicleForm