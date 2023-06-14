import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { useGetFeedListQuery } from '../../slices/apiSlice';
import InventoryAccordion from './inventoryAccordion';
import InventoryTabs from './inventoryTabs';
import NewInventoryForm from './inventoryNewForm';

const FeedMain: React.FC = () => {

  const dispatch = useAppDispatch()
  const interfaceData = useAppSelector((state) => state.interface)
  const { data, error, isLoading } = useGetFeedListQuery();

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

export default FeedMain