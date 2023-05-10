import '../../styles/doorfold.css'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeScreen } from '../slices/mainSlice';
import { changeOpen, changeContent, newPopup } from '../slices/popupSlice';

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
    <div className="doorContainer">

        <header className='doorHeader'  onClick={() => dispatch(changeScreen('startup'))}> 
            <div className='doorheaderTitle'>DOOR FOLD INTERFACE</div>
        </header>
        <div className='heatParams'>
            <div className='heatTitle'>CUSTOM PARAMETERS</div>
            <div className='heatTitle'>STANDARD PARAMETERS</div>
        </div>
        <section className='heatGrid'>
            <div className='heatGrid2'>
                <div className='heatSection1'>
                    <div className='heatCell1'>AUTOMATIC TIMEOUT</div>
                    <div className='heatCell'>SET</div>
                    <div className='heatCell'>SHUTDOWN</div>
                    <div className='heatCell1'>ACCESS CODES</div>
                    <div className='heatCell'>SET</div>
                    <div className='heatCell'>MODE</div>
                    <div className='heatCell'>RESET</div>
                    <div className='heatCell1'>ACCESS PROFILES</div>
                    <div className='heatCell'>SET</div>
                    <div className='heatCell'>CREATE</div>
                    <div className='heatCell'>DELETE</div>
                    <div className='heatCell1'>BADGE CODES</div>
                    <div className='heatCell'>SET</div>
                    <div className='heatCell'>CREATE</div>
                    <div className='heatCell'>DELETE</div>
                    <div className='heatCell1'>LODGE ACCESS</div>
                    <div className='heatCell'>ENCODER</div>
                    <div className='heatCell1'>BIOMETRICS</div>
                    
                </div>
               
            </div>
          
            
        </section>
    </div>
  )
}

export default DoorFold