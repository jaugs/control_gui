import '../../styles/cuiStyle.css'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeScreen } from '../slices/mainSlice';
import { changeOpen, changeContent, newPopup } from '../slices/popupSlice';
import { useEffect, useState } from 'react';
import { changeSection } from '../slices/interfaceSlice';

const ZoologyMain: React.FC = () => {

  const popUpArr = useAppSelector((state) => state.popup.PopupArr)
  const dispatch = useAppDispatch()


  const [animalData, setanimalData] = useState([] as any[])

  useEffect(() => {
    fetch("http://localhost:3000/api/animals")
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

  const getSpecies = (id: string) => {
    fetch(`http://localhost:3000/api/animals/${id}`)
    .then(res => res.json())
    .then(data => console.log(data))
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
        
        <section className='zoologyGrid'>
           
          <div className='zoologySpecies'>Species:
            {animalData ? animalData.map((item) => {
                return <div key={item._id} className='animalContainer'>
                            <div className='animalItemContainer' onClick={() => getSpecies(item._id)}>
                                <div className='animalItem'>{item.current_version}</div>
                                <div className='animalItem'>{item.name}</div>
                            </div>
                            <div className='animalLink'>Active Animals</div>
                         
                        </div>
            }) : null }
          </div>
          <div className='zoologyLinkContainer'>
            <div onClick={() => dispatch(changeSection("HEALTH"))} className='zoologyLink'>Health</div>
            <div className='zoologyLink'>Feeding</div>
            <div className='zoologyLink'>All Animals</div>
          </div>
            
        </section>
    </div>
  )
}

export default ZoologyMain