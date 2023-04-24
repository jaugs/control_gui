//import reactLogo from './assets/react.svg'
import '../styles/startup.css'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { open, close } from './modalSlice';
import { changeScreen } from './mainSlice';

const Startup: React.FC = () => {

  const screen = useAppSelector((state) => state.main.screen)
  const isOpen = useAppSelector((state) => state.modal.isOpen)
  const dispatch = useAppDispatch()



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
                <div 
                  className='gridCell'
                  onClick={() => dispatch(open())}>Security Main
                </div>
                <div className='gridCell'>Monitor Main</div>
                <div className='gridCell'>Command Main</div>
                <div className='gridCell' onClick={() => dispatch(changeScreen('electrical'))}>Electrical Main</div>
                <div className='gridCell'>Hydraulic Main</div>
                <div className='gridCell'>Master Main</div>
                <div className='gridCell'>Zoolog Main</div>

                <div className='gridCell' onClick={() => dispatch(changeScreen('grid'))}>SetGrids DNL</div>
                <div className='gridCell' onClick={() => dispatch(changeScreen('view'))}>View<br></br>VBB</div>
                <div className='gridCell'>Access TNL</div>
                <div className='gridCell'>Heating Cooling</div>
                <div className='gridCell'>Door Fold Interface</div>
                <div className='gridCell'>SAAG-<br></br> Rnd</div>
                <div className='gridCell'>Repair Storage</div>

                <div className='gridCell'>Critical Locks</div>
                <div className='gridCell'>TeleCom VBB</div>
                <div className='gridCell'>Reset Revert</div>
                <div className='gridCell'>Emergncy Illumin</div>
                <div className='gridCell'>GAS/VLD Main II</div>
                <div className='gridCell' onClick={() => dispatch(changeScreen('common'))}>Common Interface</div>
                <div className='gridCell'>Status Main</div>

                <div className='gridCell'>Control Passthru</div>
                <div className='gridCell'>TeleCom RSD</div>
                <div className='gridCell'>Template Main</div>
                <div className='gridCell'>FNCC Params</div>
                <div className='gridCell'>Explosion Fire Hzd</div>
                <div className='gridCell'>Schematic Main</div>
                <div className='gridCell'>Safety/ Health</div>
            </div>
        </section>      

    </div>
  )
}

export default Startup