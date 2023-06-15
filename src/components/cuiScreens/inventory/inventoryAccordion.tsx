import React, { ChangeEvent, useState } from 'react';
//import RideUpdateForm from './rideUpdateForm';
import '../../../styles/inventoryMain.css'
import InventoryEditForm from './inventoryEditForm';
import { addToActiveInventory, removeActiveInventory, toggleOrderForm } from '../../slices/interfaceSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';

interface AccordionProps {
    content: any,
}

const InventoryAccordion: React.FC<AccordionProps> = ({content}) => {
const dispatch = useAppDispatch()
  const [isEditing, setIsEditing] = useState(false);
  const [selected, setSelected] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const interfaceData = useAppSelector((state) => state.interface)

  const openForm = () => {
    setIsEditing(!isEditing)
  }

const getData = () => {
    console.log(content)
}

const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target
    if (checked) {
        if (interfaceData.active_inventory.some((item: any) => item._id === content.id)) {
            return
        } else {
            dispatch(addToActiveInventory(content))
        }
    } else {
        dispatch(removeActiveInventory(content.name))    
    }
    }
    
    //dispatch(toggleOrderForm())

  return (
    <div className="cuiDropDownAccordian">
        <div className='cuiDropDownListContainer'>
            <div className='cuiDropDownTitle'>{content.name}</div>
            <div className='cuiDropDownTitle'>{content.category}</div>
            <div className='cuiDropDownButtonRow'>
            <button className='cuiDropDownLink' onClick={() => setIsActive(!isActive)}>{isActive ? 'HIDE' : 'EXPAND'}</button>
            <button className='cuiDropDownLink' onClick={openForm}>{isEditing ? "GO BACK" : "EDIT"}</button>
            <input
                type='checkbox'
                value={content._id}
                onChange={(event) => handleCheckboxChange(event)}>
            </input>
            </div>
        </div>
        {isEditing ? <InventoryEditForm content={content} setIsEditing={setIsEditing}/>: null}
        {isActive && <div className="cuiDropDownContent">
            <div className='cuiDropDownContentDiv'>
                <p>Sub-Category:</p>
                <p>{content.sub_category}</p>
            </div>
            <div className='cuiDropDownContentDiv'>
                <p>Quantity:</p>
                <p>{content.quantity}</p>
            </div>
            <div className='cuiDropDownContentDiv'>
                <p>Price:</p>
                <p>{content.price}</p>
            </div>
            <div className='cuiDropDownContentDiv'>
                <p>Description:</p>
                <p>{content.description}</p>
            </div>
            <div className='cuiDropDownContentDiv'>
                <p>Availability:</p>
                <p>{content.isAvailable ? "In Stock" : "Not Available"}</p>
            </div>
            <div className='cuiDropDownContentDiv'>
                <p>Supplier:</p>
                <p>{content.supplier}</p>
            </div>
            <div className='cuiDropDownContentDiv'>
                <p>Lot Size:</p>
                <p>{content.lotSize}</p>
            </div>
            <div className='cuiDropDownContentDiv'>
                <p>Last Ordered:</p>
                <p>{content.lastOrdered_formatted}</p>
            </div>
            <div className='cuiDropDownContentDiv'>
                <p>Tags:</p>
                <div className='tagMap'>
                {content.tags.map((item:any, index: number) => {
                    return<p key={index} className='ItemTags'>[{item}]</p>
                })}
                </div>
            </div>
        </div>
        }
    </div>
  );
};

export default InventoryAccordion;