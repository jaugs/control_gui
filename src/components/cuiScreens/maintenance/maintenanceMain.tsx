import '../../../styles/cuiStyle.css'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { changeScreen } from '../../slices/mainSlice';
import { changeOpen, changeContent, newPopup } from '../../slices/popupSlice';
import { useEffect, useState } from 'react';
import { changeID, changeSection } from '../../slices/interfaceSlice';

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

  return (
    <div className="masterContainer">

        <header className='masterHeader'> 
          <button className='cuiHeaderButton'>FIND</button>
          <button className='cuiHeaderButton'>ORDER</button>
          <button className='cuiHeaderButton'>MONITOR</button>
          <button className='cuiHeaderButton'>DELETE</button>
          <button className='cuiHeaderButton'>REPORT</button>
          <button className='cuiHeaderButton'>OPTIONS</button>
          <button className='cuiHeaderButton' onClick={() => dispatch(changeSection('MASTER'))}>GO BACK</button>
        </header>
        
        <section className='maintenanceGrid'>
           
            <div 
              className='cuiLink'
              onClick={() => dispatch(changeSection('VEHICLES'))}>Vehicles
                <ul>
                  <li className='listItem'>Records</li>
                  <li className='listItem'>Status</li>
                </ul>
            </div>
            <div 
              className='cuiLink'
              onClick={() => dispatch(changeSection('RIDES'))}>Rides
                <ul>
                  <li className='listItem'>Records</li>
                  <li className='listItem'>Status</li>
                  <li className='listItem'>Construction</li>
                </ul>
            </div>
            <div 
              className='cuiLink'
              onClick={() => dispatch(changeSection('RIDES'))}>Plants
                <ul>
                    <li className='listItem'>Equiptment</li>
                    <li className='listItem'>Planting</li>
                    <li className='listItem'>Shipment</li>
                </ul> 
            </div>
            <div 
              className='cuiLink'
              onClick={() => dispatch(changeSection('RIDES'))}>Roads
                <ul>
                  <li className='listItem'>Service</li>
                  <li className='listItem'>Tour Loop</li>
                  <li className='listItem'>Docks</li>
                  <li className='listItem'>Signage</li>
                </ul>  
            </div>
            <div 
              className='cuiLink'
              onClick={() => dispatch(changeSection('RIDES'))}>Paddocks
                <ul>
                  <li className='listItem'>Fences</li>
                  <li className='listItem'>Moats</li>
                  <li className='listItem'>Records</li>
                  <li className='listItem'>Sheds</li>
                </ul>  
            </div>
            <div 
              className='cuiLink'
              onClick={() => dispatch(changeSection('RIDES'))}>Lake
                <ul>
                  <li className='listItem'>Hydraulics</li>
                  <li className='listItem'>Status</li>
                  <li className='listItem'>Tunnel</li>
                </ul>  
            </div>   
        </section>
    </div>
  )
}

export default MaintenanceMain