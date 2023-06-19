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
    <div className="cuiReportContainer">
        <div className='cuiDropDownContentDiv'>{content.category}</div>
        <div className='cuiDropDownContentDiv'>{content.sub_category}</div>
        <div className='cuiDropDownContentDiv'>{content.quantity}</div>
        <div className='cuiDropDownContentDiv'>{content.price}</div>
        <div className='cuiDropDownContentDiv'>{content.isAvailable ? "In Stock" : "Not Available"}</div>
        <div className='cuiDropDownContentDiv'>{content.supplier}</div>
        <div className='cuiDropDownContentDiv'>{content.lotSize}</div>
        <div className='cuiDropDownContentDiv'>{content.lastOrdered_formatted}</div>
        {content.orderHistory.length > 0 ?
            <div className='cuiDropDownContentDiv'>
                {content.orderHistory.map((item: any, index: any) => {
                    return (
                    <div key={index} className='cuiDropDownContentHistory'>
                        <p>Date:</p>
                        <p>{content.orderHistory_formatted[index]}</p>
                        <p>Quantity:</p>
                        <p>{item.quantity}</p>
                    </div>)
                })}
            </div>
        : null}

        
    </div>
  );
};

export default ReportingAccordion;