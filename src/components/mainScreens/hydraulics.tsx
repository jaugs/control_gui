import '../../styles/hydraulics.css'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeScreen } from '../mainSlice';
import { changeOpen, changeContent, newPopup } from '../popupSlice';

const Hydraulics: React.FC = () => {

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
    <div className="hydsContainer">

        <header className='hydsHeader'  onClick={() => dispatch(changeScreen('startup'))}> 
            <div className='hydsTitle'>HYDRAULICS MAIN CONTROL MODULE</div>
        </header>
        <section className='hydsGrid'>
            <div className='hydsSection1'>
                <div className='hydsCell1'>PRESSURE MAIN</div>
                <div className='hydsCell1'>VALVE MAIN</div>
                <div className='hydsCell1'>FILTER MAIN</div>
                <div className='hydsCell1'>DRAINAGE MAIN</div>
               
            </div>
            <div className='sensorSection'>
                <div className='hydsCell1'>SENSOR CONTROL</div>
                <div className='sensorGrid1'>
                    <div className='hydsCell'>SECTION C4</div>
                    <div className='hydsCell'>SECTION B3</div>
                    <div className='hydsCell'>SECTION D4</div>
                    <div className='hydsCell'>SECTION F4</div>
                    <div className='hydsCell'>MAIN WATERFALL</div>
                    <div className='hydsCell'>MAIN LAKE</div>
                    <div className='hydsCell'>INLET SENSOR 1</div>
                    <div className='hydsCell'>INLET SENSOR 2</div>
                    <div className='hydsCell'>INLET SENSOR 3</div>
                </div>
            </div>
            <div className='hydsSection2'>
                <div className='hydsCell1'>VIEW</div>
                <div className='hydsCell1'>LOGS</div>
                <div className='hydsCell1'>EM SHUT OFF</div>
            </div>
            
        </section>
    </div>
  )
}

export default Hydraulics