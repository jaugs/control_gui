import '../../styles/fireHZD.css'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeScreen } from '../mainSlice';
import { changeOpen, changeContent, newPopup } from '../popupSlice';

const FireHZD: React.FC = () => {

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
    <div className="fireContainer">

        <header className='fireHeader'  onClick={() => dispatch(changeScreen('startup'))}> 
            <div className='fireTitle'>FIRE/HAZARD SAFETY</div>
        </header>
        <section className='fireGrid'>
            <div className='fireSection2'>
                <div className='fireCell1'>TEST</div>
                <div className='fireCell1'>RESET</div>
                <div className='fireCell1'>LOCKDOWN</div>
                <div className='fireCell1'>LOGS</div>
            </div>
            <div className='fireSection1'>
                <div className='fireCell'>LAB MAIN</div>
                <div className='fireCell'>NURSURY MAIN</div>
                <div className='fireCell'>HATCHERY MAIN</div>
                <div className='fireCell'>CONTROL MAIN</div>
                <div className='fireCell'>OFFICES MAIN</div>
                <div className='fireCell'>GARAGE MAIN</div>
                <div className='fireCell'>SECURITY MAIN</div>
                <div className='fireCell'>LODGE LOWER</div>
                <div className='fireCell'>LODGE UPPER</div>
                <div className='fireCell'>MAINTENANCE</div>
                <div className='fireCell'>PARK AUX 1</div>
                <div className='fireCell'>PARK AUX 2</div>
                <div className='fireCell'>PARK AUX 3</div>
                <div className='fireCell'>DOCK 1</div>
                <div className='fireCell'>DOCK 2</div>
                <div className='fireCell'>HELIPAD</div>
                <div className='fireCell'>SOUTH EXHAUST</div>
                <div className='fireCell'>AVIARY</div>
                <div className='fireCell'>HYDRAULICS</div>
                <div className='fireCell'>MNG RESIDENCE</div>
          
            </div>
            
        </section>
    </div>
  )
}

export default FireHZD