import '../../styles/hydraulics.css'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeScreen } from '../slices/mainSlice';
import { changeOpen, changeContent, newPopup } from '../slices/popupSlice';

const Hydraulics: React.FC = () => {

  const dispatch = useAppDispatch()

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