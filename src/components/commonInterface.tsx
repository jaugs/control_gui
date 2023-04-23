import '../styles/commonInterface.css'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { open, close } from './modalSlice';
import { changeScreen } from './mainSlice';

const CommonInterface: React.FC = () => {

  const screen = useAppSelector((state) => state.main.screen)
  const isOpen = useAppSelector((state) => state.modal.isOpen)
  const dispatch = useAppDispatch()



  return (
    <div className="CommonInterfaceGrid">

        <header>
          <div className='commonDiv1'></div>
          <div className='commonTitle' onClick={() => dispatch(changeScreen('startup'))}>COMMON INTERFACE</div>  
          <div className='commonDiv2'></div>
        </header>
        
        <div className='borderLine1'></div>
        <div className='borderLine2'></div>
        <section className='commonGrid'>
            <div className='advise'>ADVISE</div>
            <div className='commonFirstGrid'>
                <div className='commonCell'>ESTIMTE</div>
                <div className='commonCell'>ORDER</div>
                <div className='commonCell'>REVIVE</div>
                <div className='commonCell'>FIND</div>
                <div className='commonCell'>PRMTRS</div>
                <div className='commonCell'>SEARCH</div>
                <div className='commonCell'>GOAHEAD</div>
                <div className='commonCell'>REPEAT</div>
                <div className='commonCell'>REPORT</div>
                <div className='commonCell'>COLLATE</div>
                <div className='commonCell'>GO BACK</div>
            </div>
            <div className='commonSecondGrid'>
                <div className='commonCell'>INFO</div>
                <div className='commonCell'>SYSTEMS</div>
                <div className='commonCell'>CONNOTE</div>
                <div className='commonCell'>MONITOR</div>
                <div className='commonCell'>TEST</div>
                <div className='commonCell'>DELAY</div>
                <div className='commonCell'>OPTIONS</div>
                <div className='commonCell'>TRACK</div>
                <div className='commonCell'>DELETE</div>
                <div className='commonCell'></div>
                <div className='commonCell'>TRIAL</div>
                <div className='commonCell'></div>
            </div>
        </section>      

    </div>
  )
}

export default CommonInterface