import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { useGetInventoryListQuery } from '../../slices/apiSlice';
import '../../../styles/resortStyle.css'
import ResortTabs from './resortTabs';
import { useState } from 'react';
import InventoryAccordion from '../inventory/inventoryAccordion';
import NewInventoryForm from '../inventory/inventoryNewForm';
import OrderInventoryForm from '../inventory/orderInventoryForm';

const DiningMain: React.FC = () => {

    const {data: supplies, error: suppliesError, isLoading: isSuppliesLoading } = useGetInventoryListQuery('Kitchen Supplies')
    const {data: consumables, error: consumablesError , isLoading: isConsumablesLoading } = useGetInventoryListQuery('Kitchen Consumables')
    const [kitchenSupplyCollapsible, setKitchenSupplyCollapsible] = useState(false);
    const [consumableCollapsible, setConsumableCollapsible] = useState(false);

    const dispatch = useAppDispatch()
    const interfaceData = useAppSelector((state) => state.interface)

    const toggleCollapse = () => {
        setKitchenSupplyCollapsible(!kitchenSupplyCollapsible)
    }
    const toggleINVCollapse = () => {
        setConsumableCollapsible(!consumableCollapsible)
    }

    return (
        <div className="masterContainer">
            <ResortTabs />
            <div className='cleaningSectionBody'>
                <div className='cleaningInventorySection'>
                    <div className='resortTitle'>
                        <div className='resortTitleText'>KITCHEN EQUIPMENT</div>
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
                <div className='cleaningInventorySection'>
                <div className='resortTitle'>
                        <div className='resortTitleText'>KITCHEN SUPPLIES</div>
                        <button onClick={toggleINVCollapse} className='resortToggleButton'>{consumableCollapsible ? 'EXPAND' : 'HIDE'}</button>
                </div>
                    {consumableCollapsible ? null : <section className='resortCleaningInventory'>
                    {interfaceData.addFormOpen ?  <NewInventoryForm /> : null}
                    {interfaceData.orderFormOpen ? interfaceData.active_inventory.length > 0 ? <OrderInventoryForm /> : null : null}
                    {isConsumablesLoading ? <div>Loading...</div> : consumablesError ? <div>Error: 103</div> : consumables ? consumables.map((item: any, index: number) => {
                        return <InventoryAccordion content={item} key={index} />
                    }) : null}
                    </section>}
                </div>
            </div>
        </div>
    )
}

export default DiningMain