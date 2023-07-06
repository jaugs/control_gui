import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { useGetInventoryListQuery, useGetResortCleaningListQuery } from '../../slices/apiSlice';
import '../../../styles/resortStyle.css'
import ResortTabs from './resortTabs';
import RoomCleanItem from './roomCleanItem';
import { useState } from 'react';
import InventoryAccordion from '../inventory/inventoryAccordion';
import NewInventoryForm from '../inventory/inventoryNewForm';
import OrderInventoryForm from '../inventory/orderInventoryForm';

const CleaningMain: React.FC = () => {

    const {data: rooms, error: roomsError, isLoading: isRoomsLoading } = useGetResortCleaningListQuery()
    const {data: cleaningInv, error: cleaningError , isLoading: isCleaningLoading } = useGetInventoryListQuery('Cleaning Supplies')
    const [cleanReportCollapsible, setCleanReportCollapsible] = useState(false);
    const [cleanInventoryCollapsible, setCleanInventoryCollapsible] = useState(false);

    const interfaceData = useAppSelector((state) => state.interface)

    const toggleCollapse = () => {
        setCleanReportCollapsible(!cleanReportCollapsible)
    }
    const toggleINVCollapse = () => {
        setCleanInventoryCollapsible(!cleanInventoryCollapsible)
    }

    return (
        <div className="masterContainer">
            <ResortTabs />
            <div className='cleaningSectionBody'>
                <div className='cleaningReportSection'>
                    <div className='resortTitle'>
                        <div className='resortTitleText'>CLEANING REPORT</div>
                        <button onClick={toggleCollapse} className='resortToggleButton'>{cleanReportCollapsible ? 'EXPAND' : 'HIDE'}</button>
                    </div>
                    {cleanReportCollapsible ? null : <section className='resortGrid'>
                    {isRoomsLoading ? <div>Loading...</div> : roomsError ? <div>Error: 103</div> : rooms ? rooms.map((item: any, index: number) => {
                        return <RoomCleanItem content={item} key={index} />
                    }) : null}
                    </section>}
                </div>
                <div className='cleaningInventorySection'>
                <div className='resortTitle'>
                        <div className='resortTitleText'>CLEANING INVENTORY</div>
                        <button onClick={toggleINVCollapse} className='resortToggleButton'>{cleanInventoryCollapsible ? 'EXPAND' : 'HIDE'}</button>
                </div>
                    {cleanInventoryCollapsible ? null : <section className='resortCleaningInventory'>
                    {interfaceData.addFormOpen ?  <NewInventoryForm /> : null}
                    {interfaceData.orderFormOpen ? interfaceData.active_inventory.length > 0 ? <OrderInventoryForm /> : null : null}
                    {isCleaningLoading ? <div>Loading...</div> : cleaningError ? <div>Error: 103</div> : cleaningInv ? cleaningInv.map((item: any, index: number) => {
                        return <InventoryAccordion content={item} key={index} />
                    }) : null}
                    </section>}
                </div>
            </div>
        </div>
    )
}

export default CleaningMain