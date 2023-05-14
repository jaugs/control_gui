import '../../styles/cuiStyle.css'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeScreen } from '../slices/mainSlice';
import { changeOpen, changeContent, newPopup } from '../slices/popupSlice';

const MasterMain: React.FC = () => {

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
     const data = await fetch('http://localhost:3000/catalog/api/animals')
     .then((response) => {
        return response.json()
     })
     console.log(data)
  }
        
  return (
    <div className="masterContainer">

        <header className='masterHeader'> 
            <div className='masterTitle'>Main CUI Interface</div>
        </header>
        
        <section className='masterGrid'>
            <button className='getButton' onClick={getData}>GET</button>
            
        </section>
    </div>
  )
}

export default MasterMain