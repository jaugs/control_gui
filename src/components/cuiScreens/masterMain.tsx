import '../../styles/cuiStyle.css'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeScreen } from '../slices/mainSlice';
import { changeOpen, changeContent, newPopup } from '../slices/popupSlice';
import { useEffect, useState } from 'react';

const MasterMain: React.FC = () => {

  const popUpArr = useAppSelector((state) => state.popup.PopupArr)
  const dispatch = useAppDispatch()


  const [animalData, setanimalData] = useState([] as any[])

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/animals")
  //   .then(res => res.json())
  //   .then(data => setanimalData(data))
  // }, [])

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
        
//   {animalData ? animalData.map((item) => {
//     return <div key={item._id} className='animalContainer'>
//               <div className='animalItem' >{item.synth_date}</div>
//               <div className='animalItem' >{item.current_version}</div>
//             </div>
//  }) : null }

  
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
           
          <ul className='cuiLink'>Zoology Main
            <li className='listItem'>Species</li>
            <li className='listItem'>Animals</li>
            <li className='listItem'>Feeding</li>
            <li className='listItem'>Health</li>
          </ul>
          <ul className='cuiLink'>Maintenance Main
            <li className='listItem'>Vehicles</li>
            <li className='listItem'>Rides</li>
            <li className='listItem'>Plants</li>
            <li className='listItem'>Roads</li>
            <li className='listItem'>Plants</li>
            <li className='listItem'>Paddocks</li>
          </ul>
          <ul className='cuiLink'>Storage Main
            <li className='listItem'>Equiptment</li>
            <li className='listItem'>Feed/Livestock</li>
            <li className='listItem'>Lab</li>
          </ul>
          <ul className='cuiLink'>Health Main
            <li className='listItem'>Animals</li> 
            <li className='listItem'>Emergency</li> 
          </ul>
          <ul className='cuiLink'>Resort Main
            <li className='listItem'>Bookings</li>
            <li className='listItem'>Cleaning</li> 
            <li className='listItem'>Dining</li> 
            <li className='listItem'>Pool</li> 
          </ul>
          
            
        </section>
    </div>
  )
}

export default MasterMain