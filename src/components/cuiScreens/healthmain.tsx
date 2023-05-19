import '../../styles/cuiStyle.css'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeScreen } from '../slices/mainSlice';
import { changeOpen, changeContent, newPopup } from '../slices/popupSlice';
import { useEffect, useState } from 'react';
import { changeSection } from '../slices/interfaceSlice';

const HealthMain: React.FC = () => {

  const popUpArr = useAppSelector((state) => state.popup.PopupArr)
  const dispatch = useAppDispatch()


  const [animalData, setanimalData] = useState([] as any[])

  useEffect(() => {
    fetch("http://localhost:3000/api/health")
    .then(res => res.json())
    .then(data => setanimalData(data))
  }, [])

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
          <button className='cuiHeaderButton' onClick={getData}>OPTIONS</button>
          <button className='cuiHeaderButton' onClick={() => dispatch(changeSection('MASTER'))}>GO BACK</button>
        </header>
        
        <section className='healthGrid'>
            <div className='healthLink'>Immunizations</div>
            <div className='healthLink'>Injury Records</div>
            <div className='healthLink'>Dental Records</div>
            <div className='healthLink'>Measurements Records</div>
            <div className='healthLink'>;'' Records</div>
          
          <div className='healthSpecies'>
            <div onClick={() => dispatch(changeSection("HEALTH"))} className='zoologyLink'>Health</div>
            
          </div>
            
        </section>
    </div>
  )
}

export default HealthMain