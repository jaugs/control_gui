import '../../styles/cuiStyle.css'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeScreen } from '../slices/mainSlice';
import { changeOpen, changeContent, newPopup } from '../slices/popupSlice';
import { useEffect, useState } from 'react';
import { changeSection } from '../slices/interfaceSlice';

const MasterMain: React.FC = () => {

  const popUpArr = useAppSelector((state) => state.popup.PopupArr)
  const dispatch = useAppDispatch()


  const [animalData, setanimalData] = useState([] as any[])

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
  
     console.log(animalData)
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
          <button className='cuiHeaderButton'>GO BACK</button>
        </header>
        
        <section className='masterGrid'>
           
          <div 
            className='cuiLink'
            onClick={() => dispatch(changeSection('ZOOLOGY'))}>Zoology Main
          <ul>
            <li className='listItem'>Species</li>
            <li className='listItem'>Animals</li>
            <li className='listItem'>Feeding</li>
            <li className='listItem'>Health</li>
          </ul>
          </div>
          <div 
            className='cuiLink'
            onClick={() => dispatch(changeSection('MAINTENANCE'))}>Maintenance Main
          <ul>
            <li className='listItem'>Vehicles</li>
            <li className='listItem'>Rides</li>
            <li className='listItem'>Plants</li>
            <li className='listItem'>Roads</li>
            <li className='listItem'>Plants</li>
            <li className='listItem'>Paddocks</li>
          </ul>
          </div>
          <div 
            className='cuiLink'
            onClick={() => dispatch(changeSection('INVENTORY'))}>Inventory Main
          <ul>
            <li className='listItem'>Equiptment</li>
            <li className='listItem'>Feed/Stock</li>
            <li className='listItem'>Lab</li>
          </ul>
          </div>
          <div className='cuiLink'>Health Main
          <ul>
            <li className='listItem'>Animals</li> 
            <li className='listItem'>Emergency</li> 
          </ul>
          </div>
          <div className='cuiLink'>Resort Main
          <ul>
            <li className='listItem'>Bookings</li>
            <li className='listItem'>Cleaning</li> 
            <li className='listItem'>Dining</li> 
            <li className='listItem'>Pool</li> 
          </ul>
          </div>
          
            
        </section>
    </div>
  )
}

export default MasterMain