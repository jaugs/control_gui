import '../../../styles/cuiStyle.css'
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { changeOpen, changeContent, newPopup } from '../../slices/popupSlice';
import { changeSection, toggleAddForm, closeActiveObjectIndex, openActiveObjectIndex, selectInterface } from '../../slices/interfaceSlice';
import { useGetInventoryListQuery } from '../../slices/apiSlice';
import VehicleAccordion from '../maintenance/vehicleAccordion';
import NewVehicleForm from '../maintenance/newVehicleForm';
import InventoryTabs from './inventoryTabs';


const InventoryMain: React.FC = () => {

  const dispatch = useAppDispatch()
  const popUpArr = useAppSelector((state) => state.popup.PopupArr)
  const interfaceData = useAppSelector((state) => state.interface)
  
  const { data, error, isLoading } = useGetInventoryListQuery('office_supplies')

  
  const addVehicle = () => {
    console.log(data)
    console.log(interfaceData.active_object_index)
  }


  
  return (
    <div className="masterContainer">

        <InventoryTabs />
        
        <section className='storageGrid'>
           
            <div 
              className='cuiLink'
              onClick={() => dispatch(changeSection('EQUIPTMENT'))}>Equiptment
                <ul>
                  <li className='listItem'>Tools</li>
                  <li className='listItem'>Security</li>
                  <li className='listItem'>Admin</li>
                  <li className='listItem'>Maintenance</li>
                </ul>
            </div>
            <div 
              className='cuiLink'
              onClick={() => dispatch(changeSection('FEED'))}>Feed/Stock
                <ul>
                  <li className='listItem'>Feed</li>
                  <li className='listItem'>Livestock</li>
                  <li className='listItem'>Deliveries</li>
                </ul>
            </div>
            <div 
              className='cuiLink'
              onClick={() => dispatch(changeSection('LAB INVENTORY'))}>Lab
                <ul>
                    <li className='listItem'>Hardware</li>
                    <li className='listItem'>Chemicals</li>
                    <li className='listItem'>Materials</li>
                </ul> 
            </div>
            <div 
              className='cuiLink'
              onClick={() => dispatch(changeSection('RESORT INVENTORY'))}>Resort
                <ul>
                  <li className='listItem'>Kitchen</li>
                  <li className='listItem'>Rooms</li>
                  <li className='listItem'>Misc</li>
                </ul>  
            </div>
        </section>
    </div>
  )
}

export default InventoryMain