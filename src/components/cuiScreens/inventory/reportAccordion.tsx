import React, { ChangeEvent, useState } from 'react';
//import RideUpdateForm from './rideUpdateForm';
import '../../../styles/reportStyle.css'
import InventoryEditForm from './inventoryEditForm';
import { addToActiveInventory, removeActiveInventory, toggleOrderForm } from '../../slices/interfaceSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';

interface AccordionProps {
    content: any,
    editFields: any,
}

const ReportingAccordion: React.FC<AccordionProps> = ({content, editFields}) => {

    const dispatch = useAppDispatch()
  const [isEditing, setIsEditing] = useState(false);
  const [selected, setSelected] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const interfaceData = useAppSelector((state) => state.interface)

  const openForm = () => {
    setIsEditing(!isEditing)
  }

  return (
    <div className="cuiReportItemContainer">
        {editFields.name ? <div id='cuiReportNameDiv' className='cuiReportDiv'>{content.name}</div> : null}
        {editFields.category ? <div className='cuiReportDiv'>{content.category}</div> : null}
        {editFields.sub_category ? <div className='cuiReportDiv'>{content.sub_category}</div> : null}
        {editFields.quantity ? <div className='cuiReportDiv'>{content.quantity}</div> : null}
        {editFields.price ? <div className='cuiReportDiv'>{content.price}</div> : null}
        {editFields.availability ? <div className='cuiReportDiv'>{content.isAvailable ? "In Stock" : "Not Available"}</div> : null}
        {editFields.supplier ? <div className='cuiReportDiv'>{content.supplier}</div> : null}
        {editFields.lotSize ? <div className='cuiReportDiv'>{content.lotSize}</div> : null}
        {editFields.lastOrdered ? <div className='cuiReportDiv'>{content.lastOrdered_formatted}</div> : null}
        {editFields.orderHistory ? content.orderHistory.length > 0 ?
            <div className='cuiReportHistoryContainer'>
                {content.orderHistory.map((item: any, index: any) => {
                    return (
                    <div key={index} className='cuiReportHistorydiv'>
                        <p>Date:</p>
                        <p>{content.orderHistory_formatted[index]}</p>
                        <p>Quantity:</p>
                        <p>{item.quantity}</p>
                    </div>)
                })}
            </div>
        : <div className='cuiReportHistoryContainer'>
                <div className='cuiReportHistorydiv'>No Order History Found</div>
            </div> : null}

        
    </div>
  );
};

export default ReportingAccordion;