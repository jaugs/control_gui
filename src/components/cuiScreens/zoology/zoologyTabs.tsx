import '../../../styles/cuiStyle.css'
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { changeSection, toggleAddForm, toggleOrderForm, toggleReportForm, toggleReportOptions } from '../../slices/interfaceSlice';


const ZoologyTabs: React.FC = () => {

  const dispatch = useAppDispatch()
  const popUpArr = useAppSelector((state) => state.popup.PopupArr)
  const interfaceData = useAppSelector((state) => state.interface)
  
  const goBack = () => {
    let currentScreen = interfaceData.section;
    if (currentScreen === 'ZOOLOGY') {
        dispatch(changeSection('MASTER'))
    } else if (currentScreen === 'REPORT') {
      dispatch(toggleReportForm())
      dispatch(changeSection('ZOOLOGY'))
    } else if (currentScreen == 'EQUIPMENT' || 'FEED' || 'LAB INVENTORY' || 'RESORT INVENTORY') {
        dispatch(changeSection('ZOOLOGY'))
    } 
  }
  
  const order = () => {
    if (interfaceData.section == 'REPORT') {
      return
    }
    if (interfaceData.active_inventory.length > 0) {
      dispatch(toggleOrderForm())
    }
  }

  const openReport = () => {
    if (interfaceData.section == 'REPORT') {
      if (interfaceData.reportOptions) {
        dispatch(toggleReportOptions())
      }
      dispatch(toggleReportForm())
      dispatch(changeSection('INVENTORY'))
      return
    }
    if (interfaceData.active_inventory.length > 0) {
      dispatch(toggleReportForm())
      dispatch(changeSection('REPORT'))
    }
  }

  const openOptions = () => {
    if (interfaceData.section == 'REPORT') {
      dispatch(toggleReportOptions())
    }
  }
  
  return (
    <header className='masterHeader'> 
        <button className={interfaceData.section == 'FIND' ? 'cuiActiveHeaderButton' : 'cuiHeaderButton'} onClick={() => dispatch(changeSection('FIND'))}>FIND</button>
        <button className={interfaceData.orderFormOpen ? 'cuiActiveHeaderButton' : 'cuiHeaderButton'} onClick={() => order()}>ORDER</button>
        <button className='cuiHeaderButton'>MONITOR</button>
        <button className='cuiHeaderButton' onClick={() => dispatch(toggleAddForm())}>CREATE</button>
        <button className={interfaceData.reportOpen ? 'cuiActiveHeaderButton' : 'cuiHeaderButton'} onClick={() => openReport()}>REPORT</button>
        <button className={interfaceData.reportOptions ? 'cuiActiveHeaderButton' : 'cuiHeaderButton'} onClick={() => openOptions()}>OPTIONS</button>
        <button className='cuiHeaderButton' onClick={() => goBack()}>GO BACK</button>
    </header>
  )
}

export default ZoologyTabs
