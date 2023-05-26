import '../../styles/cuiStyle.css'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeOpen, changeContent, newPopup } from '../slices/popupSlice';
import { useEffect, useState, ChangeEvent, FormEvent, ComponentState } from 'react';
import { changeSection, toggleIsEditing } from '../slices/interfaceSlice';
import { useGetVehicleListQuery, useUpdateVehicleMutation  } from '../slices/apiSlice';


const VehiclesMain: React.FC = () => {

    const popUpArr = useAppSelector((state) => state.popup.PopupArr)
    const dispatch = useAppDispatch()
    const interfaceData = useAppSelector((state) => state.interface)

    const [expandField, setExpandField] = useState(false)
    const [activeIndex, setActiveIndex] = useState('')
    const [editIndex, setEditIndex] = useState(0)
    const [editFields, setEditFields] = useState({
      make: '',
      badge: '',
      useStatus: false,
      maintenanceStatus: false,
      milage: 0,
      service_history: [{
        service_type: '',
        service_date: '',
        service_notes: '',
      },],
      next_service: '',
    })
    const [newServiceWork, setNewServiceWork] = useState({
      service_type: '',
      service_date: '',
      service_notes: '',
    })

    const { data, error, isLoading } = useGetVehicleListQuery()
    const [updatePost, { isLoading: isUpdating }] = useUpdateVehicleMutation()

  const toggleEditForm = (id: number) => {
    setEditFields({
        make: data[id].make,
        badge: data[id].badge,
        useStatus: data[id].useStatus,
        maintenanceStatus: data[id].maintenanceStatus,
        milage: data[id].milage,
        service_history: data[id].service_history,
        next_service: data[id].next_service,
    })
    dispatch(toggleIsEditing())
    setEditIndex(id)
  }

  const toggleExpand = (id: string) => {
    setActiveIndex(id)
    setExpandField(!expandField)
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

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setEditFields({...editFields, [event.target.name]: event.target.value})
  }
  
  const addVehicle = () => {
    console.log(data)
  }

  const handleServiceWorkChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setNewServiceWork({...newServiceWork, [event.target.name]: event.target.value})
  }

  const handleSubmitWork = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setEditFields({...editFields, service_history: [...editFields.service_history, newServiceWork]});  
  }

  async function handleSubmit (event: FormEvent<HTMLFormElement>)  {
    event.preventDefault()
    const serializedData = editFields;
    console.log(serializedData)
    try { 
      await updatePost({id: activeIndex, ...serializedData}).then(res => {console.log(res)})
        }
    catch {
      error: console.log(error)
    }
    finally {
        dispatch(toggleIsEditing())
    }
  }

  return (
    <div className="masterContainer">

        <header className='masterHeader'> 
          <button className='cuiHeaderButton'>FIND</button>
          <button className='cuiHeaderButton' onClick={() => addVehicle()}>ORDER</button>
          <button className='cuiHeaderButton'>MONITOR</button>
          <button className='cuiHeaderButton'>DELETE</button>
          <button className='cuiHeaderButton'>REPORT</button>
          <button className='cuiHeaderButton'>OPTIONS</button>
          <button className='cuiHeaderButton' onClick={() => dispatch(changeSection('MAINTENANCE'))}>GO BACK</button>
        </header>
        
        <section className='vehicleGrid'>
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

                    <label>ADD SERVICE WORK:</label>

                    <div className='serviceWork'>
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
                    </div>

                    <button type='submit'>SUBMIT</button>
                </form> : null}

                
            {isLoading ? <div>Loading...</div> : error ? <div>Error: 102</div> : data ? data.map((item: any, index: number) => {
                return <div key={item._id} className='vehicleContainer'>
                                <div className='vehicleHeader'>
                                    <div className='vehicleField'>{item.make}</div>
                                    <div className='vehicleField'>{item.badge}</div>
                                    <div>
                                        <button className='animalImprintButton' onClick={() => toggleExpand(item._id)}>
                                          {activeIndex === item._id ? (expandField ? 'HIDE' : "EXPAND") : "EXPAND"}
                                        </button>
                                        <button className='animalImprintButton' onClick={() => toggleEditForm(index)}>EDIT</button>
                                    </div>
                                </div>
                                <div className={activeIndex === item._id ? (expandField ? 'vehicleListField' : "animalListFieldHidden") : "animalListFieldHidden"}>
                                    <div className='vehiclelistItem'>
                                        <div>STATUS: </div>
                                        {item.useStatus ? <div>IN USE</div> : <div>IN GARAGE</div>}
                                    </div>
                                    <div className='vehiclelistItem'>
                                        <div>ACTIVE: </div>
                                        {item.maintenanceStatus ? <div> FUNCTIONAL</div> : <div> IN MAINTENANCE</div>}
                                    </div>
                                    <div className='vehiclelistItem'>
                                        <div>MILAGE: </div>
                                        <div> {item.milage}</div>
                                    </div>
                                    <div className='vehiclelistItem'>
                                        <div>NEXT SERVICE:</div>
                                        <div>{item.next_service}</div>
                                    </div>
                                    <div className='vehiclelistItem'>
                                        <div>SERVICE HISTORY:</div>
                                        {item.service_history.map((item:any, index:number) => {
                                            return <div className='serviceHistoryContainer' key={index}>
                                                        <div>{item.service_type}</div>
                                                        <div>{item.service_date}</div>
                                                        <div>{item.service_notes}</div>
                                                    </div>
                                        })}
                                    </div>
                                </div>
                        </div>
            }) : <div>No Vehicles Found</div> }
            
       
        </section>
    </div>
  )
}

export default VehiclesMain