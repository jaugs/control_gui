import React, { useState } from 'react';
//import RideUpdateForm from './rideUpdateForm';
import '../../../styles/inventoryMain.css'

interface AccordionProps {
    title: String,
    category: String,
    content: any,
}

const InventoryAccordion: React.FC<AccordionProps> = ({title, category, content}) => {

  const [isEditing, setIsEditing] = useState(false);

  const [isActive, setIsActive] = useState(false);

  const openForm = () => {
    setIsEditing(!isEditing)
  }

const getData = () => {
    console.log(content)
}
  return (
    <div className="cuiDropDownAccordian">
        <div className='cuiDropDownListContainer'>
            <div className='cuiDropDownTitle'>{title}</div>
            <div className='cuiDropDownTitle'>{category}</div>
            <div className='cuiDropDownButtonRow'>
            <button className='cuiDropDownLink' onClick={() => setIsActive(!isActive)}>{isActive ? 'HIDE' : 'EXPAND'}</button>
            <button className='cuiDropDownLink' onClick={openForm}>{isEditing ? "GO BACK" : "EDIT"}</button>
            </div>
        </div>
        {/* {isEditing ? <RideUpdateForm id={content._id} /> : null} */}
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
                {content.tags.map((item:any) => {
                    return<p className='ItemTags'>[{item}]</p>
                })}
                </div>
            </div>
        </div>
        }
    </div>
  );
};

export default InventoryAccordion;