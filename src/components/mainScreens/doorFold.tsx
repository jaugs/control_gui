import '../../styles/doorfold.css'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeScreen } from '../mainSlice';
import { changeOpen, changeContent, newPopup } from '../popupSlice';

const DoorFold: React.FC = () => {

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
    <div className="heatContainer">

        <header className='heatHeader'  onClick={() => dispatch(changeScreen('startup'))}> 
            <div className='heatheaderTitle'>HEATING/COOLING CONTROL MODULE</div>
        </header>
        <div className='heatParams'>
            <div className='heatTitle'>CUSTOM PARAMETERS</div>
            <div className='heatTitle'>STANDARD PARAMETERS</div>
        </div>
        <section className='heatGrid'>
            <div className='heatGrid2'>
                <div className='heatSection1'>
                    <div className='heatCell1'>LODGE LOWER</div>
                    <div className='heatCell'>SET</div>
                    <div className='heatCell'>MODE</div>
                    <div className='heatCell'>RESET</div>
                    <div className='heatCell1'>LODGE UPPER</div>
                    <div className='heatCell'>SET</div>
                    <div className='heatCell'>MODE</div>
                    <div className='heatCell'>RESET</div>
                    <div className='heatCell1'>VC MAIN</div>
                    <div className='heatCell'>SET</div>
                    <div className='heatCell'>MODE</div>
                    <div className='heatCell'>RESET</div>
                    <div className='heatCell1'>VC AUX</div>
                    <div className='heatCell'>SET</div>
                    <div className='heatCell'>MODE</div>
                    <div className='heatCell'>RESET</div>
                    <div className='heatCell1'>LAB MAIN</div>
                    <div className='heatCell'>SET</div>
                    <div className='heatCell'>MODE</div>
                    <div className='heatCell'>RESET</div>
                    <div className='heatCell1'>CRYO MAIN</div>
                    <div className='heatCell'>SET</div>
                    <div className='heatCell'>MODE</div>
                    <div className='heatCell'>RESET</div>
                    <div className='heatCell1'>CRYO AUX</div>
                    <div className='heatCell'>SET</div>
                    <div className='heatCell'>MODE</div>
                    <div className='heatCell'>RESET</div>
                </div>
               
            </div>
            <div className='heatSection3'>
                <div className='heatCell1'>FAN CONTROL</div>
                <div className='heatCell1'>POWER SAVE</div>
                <div className='heatCell1'>LOGS</div>
                <div className='heatCell1'>SHUT DOWN</div>
            </div>
            
        </section>
    </div>
  )
}

export default DoorFold