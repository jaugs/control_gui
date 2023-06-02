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

  const getBadges = (make: string) => {
    let maxNumber = 0;
    console.log(make)
    data.forEach((vehicle: any) => {
     // const { badge } = vehicle;
      if (make === "Jeep" && vehicle.badge.startsWith('JP')) {
        const number = parseInt(vehicle.badge.slice(2, 4));
        console.log(number)
        if (number === 0) {
          maxNumber = 1
        } else if (number > maxNumber) {
          maxNumber = number;
        }
      } else if (make === "Land Cruiser" && vehicle.badge.startsWith('LC')) {
        const number = parseInt(vehicle.badge.slice(2, 4));
        console.log(number)
        if (number === 0) {
          maxNumber = 1
        } else if (number > maxNumber) {
          maxNumber = number;
        }
      } else if (make === "Utility" && vehicle.badge.startsWith('UT')) {
        const number = parseInt(vehicle.badge.slice(2, 4));
        console.log(number)
        if (number === 0) {
          maxNumber = 1
        } else if (number > maxNumber) {
          maxNumber = number;
        }
      } 
    });
    let stringAB = ''
    if (make === 'Jeep') {
      stringAB ='JP'
    } else if (make === 'Land Cruiser') {
      stringAB = 'LC'
    } else {
      stringAB = 'UT'
    }
    if (maxNumber.toString().length < 2) {
      let result = `${stringAB}0${maxNumber.toString()}`
      return result
    } else {
      let result = `${stringAB}${maxNumber.toString()}`
      return result
    }
  }
  

  return (
    <div className="masterContainer">

        <header className='masterHeader'> 
          <button className='cuiHeaderButton'>FIND</button>
          <button className='cuiHeaderButton' onClick={() => dispatch(toggleAddForm())}>ORDER</button>
          <button className='cuiHeaderButton'>MONITOR</button>
          <button className='cuiHeaderButton'>DELETE</button>
          <button className='cuiHeaderButton' onClick={() => getBadges('JP02')}>REPORT</button>
          <button className='cuiHeaderButton' onClick={() => addVehicle()}>OPTIONS</button>
          <button className='cuiHeaderButton' onClick={() => dispatch(changeSection('MAINTENANCE'))}>GO BACK</button>
        </header>
        
        <section className='vehicleGrid'>
        {interfaceData.addFormOpen?  <NewVehicleForm getBadges={getBadges}/> : null}
       
       
        <div className='cuiDropDownContainer'>
        {isLoading ? <div>Loading...</div> : error ? <div>Error: 102</div> : data ? data.map((item: any, index: number) => {
         return <div key={item._id} className='cuiDropDownListContainer'>
          <VehicleAccordion title={item.make} subTitle={item.badge} content={item} />
          
         </div>
        }) : null }
        </div>

        </section>
        
    </div>
  )
}

export default VehiclesMain