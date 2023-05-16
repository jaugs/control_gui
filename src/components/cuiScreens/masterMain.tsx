import '../../styles/cuiStyle.css'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeScreen } from '../slices/mainSlice';
import { changeOpen, changeContent, newPopup } from '../slices/popupSlice';
import { useEffect, useState } from 'react';

const MasterMain: React.FC = () => {

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
        
  return (
    <div className="masterContainer">

        <header className='masterHeader'> 
            <div className='masterTitle'>Main CUI Interface</div>
        </header>
        
        <section className='masterGrid'>
           {animalData ? animalData.map((item) => {
              return <div key={item._id} className='animalContainer'>
                        <div className='animalItem' >{item.synth_date}</div>
                        <div className='animalItem' >{item.current_version}</div>
                      </div>
           }

           ) : null }
            <button className='getButton' onClick={getData}>GET</button>
            
        </section>
    </div>
  )
}

export default MasterMain