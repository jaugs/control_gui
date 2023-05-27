import '../../styles/vehiclesMain.css'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeOpen, changeContent, newPopup } from '../slices/popupSlice';
import { useEffect, useState, ChangeEvent, FormEvent, ComponentState } from 'react';
import { changeSection, toggleIsEditing } from '../slices/interfaceSlice';
import { useGetVehicleListQuery, useUpdateVehicleMutation  } from '../slices/apiSlice';






const ChangeVehicleForm: React.FC = () => {

    const popUpArr = useAppSelector((state) => state.popup.PopupArr)
    const dispatch = useAppDispatch()
    const interfaceData = useAppSelector((state) => state.interface)


return (
<div className='VehicleForm'>
{interfaceData.isEditing ? 
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
          <button onClick={(event) => handleSubmitWork(event)} className='addWork'>ADD WORK</button>
        </div> :
        <div className='serviceWorkAdded'>
          <div className='serviceItem'>{editFields.service_history[0].service_type}</div>
        </div>}


        <button type='submit'>SUBMIT</button>
    </form> : null}
    </div>
)}

export default ChangeVehicleForm