//import reactLogo from './assets/react.svg'
import '../../styles/startup.css'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeScreen } from '../mainSlice';
import { newPopup, changeOpen, changeContent } from '../popupSlice'
import { toggleMap } from '../mapSlice';

const Startup: React.FC = () => {

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
    <div className="startupWindow">

        <header>JURASSIC PARK - SYSTEM STARTUP</header>

        <section className='mainGrid'>
            <div className='headGrid'>
                <div className='AB0'>
                  <div className='headCard1'>STARTUP AB(0)</div>
                </div>
                <div className='CND'>
                  <div className='headCard2'>STARTUP CN/D</div>
                </div>
            </div>
            <div className='subGrid'>
                <div className='gridCell'>Security Main</div>
                <div className='gridCell' onClick={() => dispatch(toggleMap())}>Monitor Main</div>
                <div className='gridCell'>Command Main</div>
                <div className='gridCell' onClick={() => dispatch(changeScreen('electrical'))}>Electrical Main</div>
                <div className='gridCell' onClick={() => dispatch(changeScreen('hydraulics'))}>Hydraulic Main</div>
                <div className='gridCell'>Master Main</div>
                <div className='gridCell'>Zoolog Main</div>

                <div className='gridCell' onClick={() => dispatch(changeScreen('grid'))}>SetGrids DNL</div>
                <div className='gridCell' onClick={() => dispatch(changeScreen('view'))}>View<br></br>VBB</div>
                <div className='gridCell' onClick={() => getPopup('ACCESS')}>Access TNL</div>
                <div className='gridCell' onClick={() => dispatch(changeScreen('heating'))}>Heating Cooling</div>
                <div className='gridCell' onClick={() => dispatch(changeScreen('doorfold'))}>Door Fold Interface</div>
                <div className='gridCell' onClick={() => dispatch(changeScreen('saag'))}>SAAG-<br></br> Rnd</div>
                <div className='gridCell'>Repair Storage</div>

                <div className='gridCell'>Critical Locks</div>
                <div className='gridCell'>TeleCom VBB</div>
                <div className='gridCell' onClick={() => getPopup('RESET')}>Reset Revert</div>
                <div className='gridCell'>Emergncy Illumin</div>
                <div className='gridCell' onClick={() => dispatch(changeScreen('gas'))}>GAS/VLD Main II</div>
                <div className='gridCell' onClick={() => dispatch(changeScreen('common'))}>Common Interface</div>
                <div className='gridCell'>Status Main</div>

                <div className='gridCell'>Control Passthru</div>
                <div className='gridCell'>TeleCom RSD</div>
                <div className='gridCell'>Template Main</div>
                <div className='gridCell'>FNCC Params</div>
                <div className='gridCell' onClick={() => dispatch(changeScreen('hazard'))}>Explosion Fire Hzd</div>
                <div className='gridCell'>Schematic Main</div>
                <div className='gridCell'>Safety/ Health</div>
            </div>
        </section>      

    </div>
  )
}

export default Startup