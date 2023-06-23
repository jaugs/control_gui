import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { useGetResortDataQuery } from '../../slices/apiSlice';

import ResortTabs from './resortTabs';

const CleaningMain: React.FC = () => {

    const dispatch = useAppDispatch()
    const interfaceData = useAppSelector((state) => state.interface)
    const {data, error, isLoading } = useGetResortDataQuery()

    return (
        <div className="masterContainer">
            <ResortTabs />
            <section className='inventoryGrid'>
            {/* {interfaceData.addFormOpen ?  <NewInventoryForm /> : null}
            {interfaceData.orderFormOpen ? interfaceData.active_inventory.length > 0 ? <OrderInventoryForm /> : null : null}
            {isLoading ? <div>Loading...</div> : error ? <div>Error: 102</div> : data ? data.map((item: any, index: number) => {
            return <InventoryAccordion key={item._id} content={item} />
            }) : null } */}
            </section>
        </div>
    )
}

export default CleaningMain