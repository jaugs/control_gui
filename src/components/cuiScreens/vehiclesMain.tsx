import '../../styles/vehiclesMain.css'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeOpen, changeContent, newPopup } from '../slices/popupSlice';
import { useEffect, useState, ChangeEvent, FormEvent, ComponentState } from 'react';
import { changeSection, toggleIsEditing, closeActiveObjectIndex, openActiveObjectIndex, selectInterface } from '../slices/interfaceSlice';
import { useGetVehicleListQuery, useUpdateVehicleMutation  } from '../slices/apiSlice';
import VehicleAccordion from './vehicleAccordion';
import VehicleForm from './changeVehicleForm';


const VehiclesMain: React.FC = () => {

    const popUpArr = useAppSelector((state) => state.popup.PopupArr)
    const dispatch = useAppDispatch()
    const interfaceData = useAppSelector((state) => state.interface)

    const [expandField, setExpandField] = useState(false);
    const [activeIndex, setActiveIndex] = useState('');
    const [editIndex, setEditIndex] = useState(0);
    

    const { data, error, isLoading } = useGetVehicleListQuery()

  

  
  const addVehicle = () => {
    console.log(data)
    console.log(interfaceData.active_object_index)
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
           
       

        {isLoading ? <div>Loading...</div> : error ? <div>Error: 102</div> : data ? data.map((item: any, index: number) => {
         return <div key={item._id}>
          <VehicleAccordion title={item.make} subTitle={item.badge} content={item} />
          <VehicleForm id={item._id} newForm={false} />
         </div>
        }) : null }

        </section>
        
    </div>
  )
}

export default VehiclesMain

            // {isLoading ? <div>Loading...</div> : error ? <div>Error: 102</div> : data ? data.map((item: any, index: number) => {
            //     return <div key={item._id} className='vehicleContainer'>
            //                     <div className='vehicleHeader'>
            //                         <div className='vehicleField'>{item.make}</div>
            //                         <div className='vehicleField'>{item.badge}</div>
            //                         <div>
            //                             <button className='animalImprintButton' onClick={() => toggleExpand(item._id)}>
            //                               {interfaceData.active_object_index.item_id ? "EXPAND" : "HIDE"}
            //                             </button>
            //                             <button className='animalImprintButton' onClick={() => toggleEditForm(index)}>EDIT</button>
            //                         </div>
            //                     </div>
            //                     {interfaceData.active_object_index ? <div>weadifoasdjfasdiofjasdofasdfoasd</div> : <>ddf</>}

            //                     <div className={interfaceData.active_object_index.item_id ? "vehicleListField" : "animalListFieldHidden"}>
            //                         <div className='vehiclelistItem'>
            //                             <div>STATUS: </div>
            //                             {item.useStatus ? <div>IN USE</div> : <div>IN GARAGE</div>}
            //                         </div>
            //                         <div className='vehiclelistItem'>
            //                             <div>ACTIVE: </div>
            //                             {item.maintenanceStatus ? <div> FUNCTIONAL</div> : <div> IN MAINTENANCE</div>}
            //                         </div>
            //                         <div className='vehiclelistItem'>
            //                             <div>MILAGE: </div>
            //                             <div> {item.milage}</div>
            //                         </div>
            //                         <div className='vehiclelistItem'>
            //                             <div>NEXT SERVICE:</div>
            //                             <div>{item.next_service_formatted}</div>
            //                         </div>
            //                         <div className='vehiclelistItem'>
            //                             <div>SERVICE HISTORY:</div>
            //                             {item.service_history.map((item:any, NewIndexex:number) => {
            //                                 return <div className='serviceHistoryContainer' key={NewIndexex}>
            //                                             <div>{item.service_type}</div>
            //                                             <div>{data[index].service_date_formatted[NewIndexex]}</div>
            //                                             <div>{item.service_notes}</div>
            //                                         </div>
            //                             })}
            //                         </div>
            //                     </div>
            //             </div>
            // }) : <div>No Vehicles Found</div> }
            