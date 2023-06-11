import '../../styles/heating.css'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeScreen } from '../slices/mainSlice';
import { changeOpen, changeContent, newPopup } from '../slices/popupSlice';

const Heating: React.FC = () => {

  const dispatch = useAppDispatch()

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
                <div className='heatSection2'>
                    <div className='heatCell1'>CONTROL</div>
                    <div className='heatCell'>SET</div>
                    <div className='heatCell'>MODE</div>
                    <div className='heatCell'>RESET</div>
                    <div className='heatCell1'>MAINTENANCE</div>
                    <div className='heatCell'>SET</div>
                    <div className='heatCell'>MODE</div>
                    <div className='heatCell'>RESET</div>
                    <div className='heatCell1'>KITCHEN 1</div>
                    <div className='heatCell'>SET</div>
                    <div className='heatCell'>MODE</div>
                    <div className='heatCell'>RESET</div>
                    <div className='heatCell1'>KITCHEN 2</div>
                    <div className='heatCell'>SET</div>
                    <div className='heatCell'>MODE</div>
                    <div className='heatCell'>RESET</div>
                    <div className='heatCell1'>BUNGALOW</div>
                    <div className='heatCell'>SET</div>
                    <div className='heatCell'>MODE</div>
                    <div className='heatCell'>RESET</div>
                    <div className='heatCell1'>GARAGE</div>
                    <div className='heatCell'>SET</div>
                    <div className='heatCell'>MODE</div>
                    <div className='heatCell'>RESET</div>
                    <div className='heatCell1'>AVIARY</div>
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

export default Heating