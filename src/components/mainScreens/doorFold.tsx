import '../../styles/doorfold.css'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeScreen } from '../slices/mainSlice';
import { changeOpen, changeContent, newPopup } from '../slices/popupSlice';
import { useGetPopup } from '../getPopup';

const DoorFold: React.FC = () => {

  const getPopup = useGetPopup()
  const dispatch = useAppDispatch()

 

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