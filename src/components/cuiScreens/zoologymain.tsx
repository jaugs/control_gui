import '../../styles/cuiStyle.css'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeScreen } from '../slices/mainSlice';
import { changeOpen, changeContent, newPopup } from '../slices/popupSlice';
import { useEffect, useState } from 'react';
import { changeID, changeSection } from '../slices/interfaceSlice';
import { useGetSpeciesListQuery } from '../slices/apiSlice';

const ZoologyMain: React.FC = () => {

  const popUpArr = useAppSelector((state) => state.popup.PopupArr)
  const dispatch = useAppDispatch()
  const { data, error, isLoading } = useGetSpeciesListQuery('')


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
     console.log(data)
  }

  const getSpecies = (id: string) => {
    fetch(`http://localhost:3000/api/animals/${id}`)
    .then(res => res.json())
    .then(data => console.log(data))
  } 
 
  const getAnimalInstance = (id:string) => {
    dispatch(changeID(id))
    dispatch(changeSection("ANIMAL LIST"))
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
           
          <div className='cuiDropDownContainer'>Species:
            {error ? ( <>Error: {error}</>) : isLoading ? (<>Loading...</>) : data ? (
              data.map((item: any) => {
                return <div key={item._id} className='cuiDropDownListContainer'>
                            <div className='cuiDropDownTitleContainer' onClick={() => getSpecies(item._id)}>
                                <div className='cuiDropDownTitle'>{item.current_version}</div>
                                <div className='cuiDropDownTitle'>{item.name}</div>
                            </div>
                            <button className='cuiDropDownLink' onClick={() => getAnimalInstance(item._id)}>Active Animals</button>
                        </div>
            }))  : null }
          </div>
          <div className='zoologyLinkContainer'>
            <div 
              onClick={() => dispatch(changeSection("HEALTH"))} 
              className='cuiLink'>Health
              <ul>
                <li className='listItem'>Records</li>
                <li className='listItem'>Safety</li>
                <li className='listItem'>Research</li>
              </ul>
            </div>
            <div className='cuiLink'>Feeding
              <ul>
                <li className='listItem'>Schedules</li>
                <li className='listItem'>Inventory</li>
                <li className='listItem'>Deliveries</li>
              </ul>
            </div>
            <div className='cuiLink'>All Animals
              <ul>
                <li className='listItem'>Count</li>
                <li className='listItem'>Paddocks</li>
                <li className='listItem'>Hatchery</li>
              </ul>  
            </div>
          </div>
            
        </section>
    </div>
  )
}

export default ZoologyMain