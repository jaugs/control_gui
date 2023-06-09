//import reactLogo from './assets/react.svg'
import '../../styles/startup.css'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeScreen } from '../slices/mainSlice';
import { newPopup, changeOpen, changeContent } from '../slices/popupSlice'
import { toggleMap } from '../slices/mapSlice';
import { changeSection, toggleCui } from '../slices/interfaceSlice';
import { useGetPopup } from '../getPopup';

const Startup: React.FC = () => {

  const cuiState = useAppSelector((state) => state.interface);
  const dispatch = useAppDispatch();
  const getPopup = useGetPopup();

  const openCUI = (word: string) => {
    if (cuiState.isOpen) {
      dispatch(changeSection(word))
    } else {
      dispatch(toggleCui())
      dispatch(changeSection(word))
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
                <div className='gridCell' onClick={() => openCUI('MASTER')}>Master Main</div>
                <div className='gridCell' onClick={() => openCUI('ZOOLOGY')}>Zoolog Main</div>

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