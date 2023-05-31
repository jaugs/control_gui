import '../../styles/vehiclesMain.css'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeOpen, changeContent, newPopup } from '../slices/popupSlice';
import { useEffect, useState, ChangeEvent, FormEvent, ComponentState } from 'react';
import { changeSection, toggleAddForm, closeActiveObjectIndex, openActiveObjectIndex, selectInterface } from '../slices/interfaceSlice';
import { useGetVehicleListQuery, useUpdateVehicleMutation  } from '../slices/apiSlice';
import VehicleAccordion from './vehicleAccordion';
import VehicleForm from './changeVehicleForm';
import NewVehicleForm from './newVehicleForm';


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
          <button className='cuiHeaderButton' onClick={() => dispatch(toggleAddForm())}>ORDER</button>
          <button className='cuiHeaderButton'>MONITOR</button>
          <button className='cuiHeaderButton'>DELETE</button>
          <button className='cuiHeaderButton'>REPORT</button>
          <button className='cuiHeaderButton' onClick={() => addVehicle()}>OPTIONS</button>
          <button className='cuiHeaderButton' onClick={() => dispatch(changeSection('MAINTENANCE'))}>GO BACK</button>
        </header>
        
        <section className='vehicleGrid'>
        {interfaceData.addFormOpen?  <NewVehicleForm /> : null}
       
       

        {isLoading ? <div>Loading...</div> : error ? <div>Error: 102</div> : data ? data.map((item: any, index: number) => {
         return <div key={item._id}>
          <VehicleAccordion title={item.make} subTitle={item.badge} content={item} />
          <VehicleForm id={item._id} />
         </div>
        }) : null }

        </section>
        
    </div>
  )
}

export default VehiclesMain