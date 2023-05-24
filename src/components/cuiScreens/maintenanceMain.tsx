import '../../styles/cuiStyle.css'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeScreen } from '../slices/mainSlice';
import { changeOpen, changeContent, newPopup } from '../slices/popupSlice';
import { useEffect, useState } from 'react';
import { changeID, changeSection } from '../slices/interfaceSlice';
import { useGetVehicleListQuery } from '../slices/apiSlice';

const MaintenanceMain: React.FC = () => {

  const popUpArr = useAppSelector((state) => state.popup.PopupArr)
  const dispatch = useAppDispatch()


  const getPopup = (word: string) => {
    let num = popUpArr.findIndex((item) => {return !item.isOpen})
    if (popUpArr.length > 5 && num === -1 ) {
      return
    }
    if (num === -1) {
      dispatch(newPopup({isOpen: true, coords: {x:50, y:50}, isDragging: false, contents: word}))
    } else {
    dispatch(changeOpen(num))
    dispatch(changeContent({contents: word, index: num}))
    }
  } 

  async function getData() {
     console.log('data')
  }



  
  return (
    <div className="masterContainer">

        <header className='masterHeader'> 
          <button className='cuiHeaderButton'>FIND</button>
          <button className='cuiHeaderButton'>ORDER</button>
          <button className='cuiHeaderButton'>MONITOR</button>
          <button className='cuiHeaderButton'>DELETE</button>
          <button className='cuiHeaderButton'>REPORT</button>
          <button className='cuiHeaderButton' onClick={getData}>OPTIONS</button>
          <button className='cuiHeaderButton' onClick={() => dispatch(changeSection('MASTER'))}>GO BACK</button>
        </header>
        
        <section className='maintenanceGrid'>
           
            <div 
                className='maintenanceItem'
                onClick={() => dispatch(changeSection('VEHICLES'))}>
                <div className='maintenanceTitle'>Vehicles</div> 
            </div>
            <div className='maintenanceItem'>
                <div className='maintenanceTitle'>Rides</div> 
            </div>
            <div className='maintenanceItem'>
                <div className='maintenanceTitle'>Plants</div> 
            </div>
            <div className='maintenanceItem'>
                <div className='maintenanceTitle'>Roads</div> 
            </div>
            <div className='maintenanceItem'>
                <div className='maintenanceTitle'>Paddocks</div> 
            </div>
            <div className='maintenanceItem'>
                <div className='maintenanceTitle'>Lake</div> 
            </div>
        
            
        </section>
    </div>
  )
}

export default MaintenanceMain