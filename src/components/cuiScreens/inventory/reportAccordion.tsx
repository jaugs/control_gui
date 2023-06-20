import React, { ChangeEvent, useState } from 'react';
//import RideUpdateForm from './rideUpdateForm';
import '../../../styles/reportStyle.css'
import InventoryEditForm from './inventoryEditForm';
import { addToActiveInventory, removeActiveInventory, toggleOrderForm } from '../../slices/interfaceSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';

interface AccordionProps {
    content: any,
}

const ReportingAccordion: React.FC<AccordionProps> = ({content}) => {

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
        <div className='cuiReportDiv'>{content.name}</div>
        <div className='cuiReportDiv'>{content.category}</div>
        <div className='cuiReportDiv'>{content.sub_category}</div>
        <div className='cuiReportDiv'>{content.quantity}</div>
        <div className='cuiReportDiv'>{content.price}</div>
        <div className='cuiReportDiv'>{content.isAvailable ? "In Stock" : "Not Available"}</div>
        <div className='cuiReportDiv'>{content.supplier}</div>
        <div className='cuiReportDiv'>{content.lotSize}</div>
        <div className='cuiReportDiv'>{content.lastOrdered_formatted}</div>
        {content.orderHistory.length > 0 ?
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
            </div>}

        
    </div>
  );
};

export default ReportingAccordion;