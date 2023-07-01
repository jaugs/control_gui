import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { useGetInventoryListQuery } from '../../slices/apiSlice';
import '../../../styles/resortStyle.css'
import ResortTabs from './resortTabs';
import { useState } from 'react';
import InventoryAccordion from '../inventory/inventoryAccordion';
import NewInventoryForm from '../inventory/inventoryNewForm';
import OrderInventoryForm from '../inventory/orderInventoryForm';

const PoolMain: React.FC = () => {

    const {data: supplies, error: suppliesError, isLoading: isSuppliesLoading } = useGetInventoryListQuery('Pool Maintenance')
    const [kitchenSupplyCollapsible, setKitchenSupplyCollapsible] = useState(false);

    const dispatch = useAppDispatch()
    const interfaceData = useAppSelector((state) => state.interface)

    const toggleCollapse = () => {
        setKitchenSupplyCollapsible(!kitchenSupplyCollapsible)
    }
    
    return (
        <div className="masterContainer">
            <ResortTabs />
            <div className='cleaningSectionBody'>
                <div className='cleaningInventorySection'>
                    <div className='resortTitle'>
                        <div className='resortTitleText'>POOL SUPPLIES</div>
                        <button onClick={toggleCollapse} className='resortToggleButton'>{kitchenSupplyCollapsible ? 'EXPAND' : 'HIDE'}</button>
                    </div>
                    {kitchenSupplyCollapsible ? null : <section className='resortCleaningInventory'>
                    {interfaceData.addFormOpen ?  <NewInventoryForm /> : null}
                    {interfaceData.orderFormOpen ? interfaceData.active_inventory.length > 0 ? <OrderInventoryForm /> : null : null}
                    {isSuppliesLoading ? <div>Loading...</div> : suppliesError ? <div>Error: 103</div> : supplies ? supplies.map((item: any, index: number) => {
                        return <InventoryAccordion content={item} key={index} />
                    }) : null}
                    </section>}
                </div>
                
            </div>
        </div>
    )
}

export default PoolMain