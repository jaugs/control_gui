import React, { useState } from 'react';
import RideUpdateForm from './rideUpdateForm';
import '../../../styles/vehiclesMain.css'

interface AccordionProps {
    title: String,
    content: any,
}

const RidesAccordion: React.FC<AccordionProps> = ({title, content}) => {

  const [isEditing, setIsEditing] = useState(false);

  const [isActive, setIsActive] = useState(false);
  const [isServiceWorkActive, setIsServiceWorkActive] = useState(false);
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
        <div className='cuiDropDownButtonRow'>
          <button className='cuiDropDownLink' onClick={() => setIsActive(!isActive)}>{isActive ? 'HIDE' : 'EXPAND'}</button>
          <button className='cuiDropDownLink' onClick={openForm}>{isEditing ? "GO BACK" : "EDIT"}</button>
        </div>
      </div>
      {isEditing ? <RideUpdateForm id={content._id} /> : null}
      {isActive && <div className="cuiDropDownContent">
            <div className='cuiDropDownContentDiv'>
                <p>OPERATIONAL STATUS:</p>
                <p>{content.operational ? "OPERATIONAL" : "UNDER CONSTRUCTION"}</p>
            </div>
           <div className='cuiDropDownContentDiv'>
            <p>NEXT SERVICE:</p>
            <p>{content.opening_date_formatted}</p>
           </div>
        </div>
        }
    </div>
  );
};

export default RidesAccordion;