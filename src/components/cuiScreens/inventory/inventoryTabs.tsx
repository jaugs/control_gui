
import '../../../styles/cuiStyle.css'
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { changeOpen, changeContent, newPopup } from '../../slices/popupSlice';
import { changeSection, toggleAddForm, toggleOrderForm } from '../../slices/interfaceSlice';
import { useGetInventoryListQuery } from '../../slices/apiSlice';
import VehicleAccordion from '../maintenance/vehicleAccordion';
import NewVehicleForm from '../maintenance/newVehicleForm';
import { useEffect } from 'react';


const InventoryTabs: React.FC = () => {

  const dispatch = useAppDispatch()
  const popUpArr = useAppSelector((state) => state.popup.PopupArr)
  const interfaceData = useAppSelector((state) => state.interface)
  
  const { data, error, isLoading } = useGetInventoryListQuery('office_supplies')

  const goBack = () => {
    let currentScreen = interfaceData.section;
    if (currentScreen === 'INVENTORY') {
        dispatch(changeSection('MASTER'))
    } else if (currentScreen == 'EQUIPMENT' || 'FEED' || 'LAB INVENTORY' || 'RESORT INVENTORY') {
        dispatch(changeSection('INVENTORY'))
    }
  }
  
  return (
    <header className='masterHeader'> 
        <button className='cuiHeaderButton' onClick={() => dispatch(changeSection('FIND'))}>FIND</button>
        <button className={interfaceData.orderFormOpen ? 'cuiActiveHeaderButton' : 'cuiHeaderButton'} onClick={() => dispatch(toggleOrderForm())}>ORDER</button>
        <button className='cuiHeaderButton'>MONITOR</button>
        <button className='cuiHeaderButton' onClick={() => dispatch(toggleAddForm())}>CREATE</button>
        <button className='cuiHeaderButton'>REPORT</button>
        <button className='cuiHeaderButton'>OPTIONS</button>
        <button className='cuiHeaderButton' onClick={() => goBack()}>GO BACK</button>
    </header>
  )
}

export default InventoryTabs
