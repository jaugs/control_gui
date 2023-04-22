//import reactLogo from './assets/react.svg'
import '../styles/view.css'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { open, close } from './modalSlice';
import { changeScreen } from './mainSlice';

const ViewScreen: React.FC = () => {

  const screen = useAppSelector((state) => state.main.screen)
  const isOpen = useAppSelector((state) => state.modal.isOpen)
  const dispatch = useAppDispatch()



  return (
    <div className="viewGrid">

        <header>View</header>

        <section className='viewGrid'>
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
                <div className='gridCell'>Electrical Main</div>
                <div className='gridCell'>Hydraulic Main</div>
                <div className='gridCell'>Master Main</div>
                <div className='gridCell'>Zoolog Main</div>

                <div className='gridCell'>SetGrids DNL</div>
                <div className='gridCell' onClick={() => dispatch(changeScreen('view'))}>View<br></br>VBB</div>
                <div className='gridCell'>Access TNL</div>
                <div className='gridCell'>Heating Cooling</div>
                <div className='gridCell'>Door Fold Interface</div>
                <div className='gridCell'>SAAG-<br></br> Rnd</div>
                <div className='gridCell'>Repair Storage</div>

          
            </div>
        </section>      

    </div>
  )
}

export default ViewScreen