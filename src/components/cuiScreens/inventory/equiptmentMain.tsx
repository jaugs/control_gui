import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { useGetEquipmentListQuery } from '../../slices/apiSlice';
import InventoryAccordion from './inventoryAccordion';
import InventoryTabs from './inventoryTabs';
import NewInventoryForm from './inventoryNewForm';
import OrderInventoryForm from './orderInventoryForm';

const EquiptmentMain: React.FC = () => {

  const dispatch = useAppDispatch()
  const interfaceData = useAppSelector((state) => state.interface)
  const { data, error, isLoading } = useGetEquipmentListQuery();

  return (
    <div className="masterContainer">
      <InventoryTabs />
      <section className='inventoryGrid'>
        {interfaceData.addFormOpen ?  <NewInventoryForm /> : null}
        {interfaceData.orderFormOpen ? interfaceData.active_inventory.length > 0 ? <OrderInventoryForm /> : null : null}
        {isLoading ? <div>Loading...</div> : error ? <div>Error: 102</div> : data ? data.map((item: any, index: number) => {
          return <InventoryAccordion key={item._id} content={item} />
        }) : null }
      </section>
    </div>
  )
}

export default EquiptmentMain