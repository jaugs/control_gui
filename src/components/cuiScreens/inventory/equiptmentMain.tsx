import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { changeOpen, changeContent, newPopup } from '../../slices/popupSlice';
import { changeSection, toggleAddForm, closeActiveObjectIndex, openActiveObjectIndex, selectInterface } from '../../slices/interfaceSlice';
import { useGetEquipmentListQuery, useGetInventoryListQuery, useGetVehicleListQuery, useUpdateVehicleMutation  } from '../../slices/apiSlice';
import InventoryAccordion from './inventoryAccordion';
import InventoryTabs from './inventoryTabs';
import NewInventoryForm from './inventoryNewForm';

const EquiptmentMain: React.FC = () => {

  const dispatch = useAppDispatch()
  const popUpArr = useAppSelector((state) => state.popup.PopupArr)
  const interfaceData = useAppSelector((state) => state.interface)
  const { data, error, isLoading } = useGetEquipmentListQuery();

  
  const addVehicle = () => {
    console.log(data)
    console.log(interfaceData.active_object_index)
  }
  
  return (
    <div className="masterContainer">
      <InventoryTabs />
      <section className='inventoryGrid'>
        {interfaceData.addFormOpen?  <NewInventoryForm /> : null}
        {isLoading ? <div>Loading...</div> : error ? <div>Error: 102</div> : data ? data.map((item: any, index: number) => {
          return <InventoryAccordion key={item._id} content={item} />
        }) : null }
      </section>
    </div>
  )
}

export default EquiptmentMain