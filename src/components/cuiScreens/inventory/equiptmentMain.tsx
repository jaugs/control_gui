import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { changeOpen, changeContent, newPopup } from '../../slices/popupSlice';
import { changeSection, toggleAddForm, closeActiveObjectIndex, openActiveObjectIndex, selectInterface } from '../../slices/interfaceSlice';
import { useGetEquipmentListQuery, useGetInventoryListQuery, useGetVehicleListQuery, useUpdateVehicleMutation  } from '../../slices/apiSlice';
//import NewVehicleForm from './newVehicleForm';
import InventoryAccordion from './inventoryAccordion';

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
      <header className='masterHeader'> 
        <button className='cuiHeaderButton'>FIND</button>
        <button className='cuiHeaderButton' onClick={() => dispatch(toggleAddForm())}>ORDER</button>
        <button className='cuiHeaderButton'>MONITOR</button>
        <button className='cuiHeaderButton'>DELETE</button>
        <button className='cuiHeaderButton'>REPORT</button>
        <button className='cuiHeaderButton' onClick={() => addVehicle()}>OPTIONS</button>
        <button className='cuiHeaderButton' onClick={() => dispatch(changeSection('STORAGE'))}>GO BACK</button>
      </header>
      <section className='inventoryGrid'>
        {/* {interfaceData.addFormOpen?  <NewVehicleForm getBadges={getBadges}/> : null}
       */}
        {isLoading ? <div>Loading...</div> : error ? <div>Error: 102</div> : data ? data.map((item: any, index: number) => {
          return <InventoryAccordion key={item._id} content={item} category={item.category} title={item.name}/>
        }) : null }
      </section>
    </div>
  )
}

export default EquiptmentMain