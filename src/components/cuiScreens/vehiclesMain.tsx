import '../../styles/cuiStyle.css'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeOpen, changeContent, newPopup } from '../slices/popupSlice';
import { useEffect, useState, ChangeEvent, FormEvent, ComponentState } from 'react';
import { changeSection, toggleIsEditing } from '../slices/interfaceSlice';
import { useGetAnimalInstanceQuery, useGetVehicleListQuery, useUpdateAnimalMutation  } from '../slices/apiSlice';


const VehiclesMain: React.FC = () => {

    const popUpArr = useAppSelector((state) => state.popup.PopupArr)
    const dispatch = useAppDispatch()
    const interfaceData = useAppSelector((state) => state.interface)

    const [expandField, setExpandField] = useState(false)
    const [activeIndex, setActiveIndex] = useState('')
    const [editIndex, setEditIndex] = useState(0)
    const [editFields, setEditFields] = useState({
      badge: '',
      useStatus: false,
      maintenanceStatus: false,
      milage: 0,
      service_history: {
        service_type: '',
        service_date: '',
        service_notes: '',
      },
      next_service: '',
    })
    const { data, error, isLoading } = useGetVehicleListQuery()
    const [updatePost, { isLoading: isUpdating }] = useUpdateAnimalMutation()

  const toggleEditForm = (id: number) => {
    setEditFields({
        badge: data[id]._id,
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


  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setEditFields({...editFields, [event.target.name]: event.target.value})

    // setEditFields({state[event.target.name]: event.target.value } as ComponentState)
  }
  
  const addVehicle = () => {
    console.log(data)
  }

  async function handleSubmit (event: FormEvent<HTMLFormElement>)  {
    event.preventDefault()
    const serializedData = editFields;
    console.log(serializedData)
    try { 
      await updatePost({id: activeIndex, ...serializedData}) 
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
                    <label>In Use:</label>
                   
                    <label>Operational Status:</label>
                   
                    <label>Milage:</label>
                    <input 
                        type='number' 
                        placeholder = '0'
                        name='milage'  
                        value={editFields.milage} 
                        onChange={(event) => handleChange(event)} >
                    </input>
                    <label>Add Service Work:</label>
                    <input 
                        type='date' 
                        placeholder='Date of Death...' 
                        name='death_date'  
                        value={undefined}
                        onChange={(event) => handleChange(event)} >
                    </input>
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