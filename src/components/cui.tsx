import '../styles/cuiStyle.css'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { changeScreen } from '../components/slices/mainSlice'
import { newPopup, changeOpen, changeContent } from '../components/slices/popupSlice'
import { toggleMap } from '../components/slices/mapSlice';
import { toggleCui, toggleMinimize, changeIntDragging } from './slices/interfaceSlice';
import MasterMain from './cuiScreens/masterMain';
import ZoologyMain from './cuiScreens/zoologymain';
import AnimalList from './cuiScreens/animalListmain';
import MaintenanceMain from './cuiScreens/maintenanceMain';
import VehiclesMain from './cuiScreens/maintenance/vehiclesMain';
import RidesMain from './cuiScreens/maintenance/ridesMain';
import InventoryMain from './cuiScreens/inventory/inventoryMain';
import EquiptmentMain from './cuiScreens/inventory/equiptmentMain';
import LabInventoryMain from './cuiScreens/inventory/labInventoryMain';
import FeedMain from './cuiScreens/inventory/feedMain';
import ResortInventoryMain from './cuiScreens/inventory/resortInventoryMain';
import FindItems from './cuiScreens/inventory/findItems';

const Cui: React.FC = () => {

  const dispatch = useAppDispatch()
  const intState = useAppSelector((state) => state.interface)

  const isMinimized = useAppSelector((state) => state.interface.isMinimized)
  const minimizeCui = () => {
    dispatch((toggleMinimize()))
  }

  const dragEnd = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault
    dispatch(changeIntDragging())
  }

  return (
    <div 
      className="cuiWindow"
      draggable
      style={{position: 'absolute',
              top: intState.coords.y,
              left: intState.coords.x,
              
      }}
      onDragStart={() => dispatch(changeIntDragging())}
      onDragEnd={(event) => dragEnd(event)}>

        <header className={isMinimized ? 'miniHeader' : 'cuiHeader'}>
          <div className='cuiTitle'>COMMON USER INTERFACE:{intState.section}</div>
          <div className='cuiHeaderRow'>
            <button className='cuiButton' onClick={() => minimizeCui()}>-</button>
            <button className='cuiButton' onClick={() => dispatch(toggleCui())}>&times;</button>
        </div>
        </header>

        <section className='cuiSection'>
        {(() => {
          switch(intState.section) {
            case 'MASTER':
              return <MasterMain />
            case 'ZOOLOGY':
              return <ZoologyMain />
            case 'ANIMAL LIST':
              return <AnimalList />
            case 'MAINTENANCE':
              return <MaintenanceMain />
            case 'VEHICLES':
              return <VehiclesMain />
            case 'INVENTORY':
              return <InventoryMain />
            case 'RIDES':
              return <RidesMain />
            case 'EQUIPTMENT':
              return <EquiptmentMain />
            case 'LAB INVENTORY':
              return <LabInventoryMain />
            case 'RESORT INVENTORY':
              return <ResortInventoryMain />
            case 'FEED':
              return <FeedMain />
            case 'FIND':
              return <FindItems />
            default:
              return <MasterMain />
          }
        })()}   
        </section>
    </div>
  )
}
export default Cui
