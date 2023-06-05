import React, { useState } from 'react';
import VehicleForm from './changeVehicleForm';

interface AccordionProps {
    title: String,
    subTitle: String,
    content: any,
}

const VehicleAccordion: React.FC<AccordionProps> = ({title, subTitle, content}) => {

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
        <div className='cuiDropDownTitle'>{subTitle}</div>
        <div className='cuiDropDownTitle'>{title}</div>
        <div className='cuiDropDownButtonRow'>
          <button className='cuiDropDownLink' onClick={() => setIsActive(!isActive)}>{isActive ? 'HIDE' : 'EXPAND'}</button>
          <button className='cuiDropDownLink' onClick={openForm}>{isEditing ? "GO BACK" : "EDIT"}</button>
        </div>
      </div>
      {isEditing ? <VehicleForm id={content._id} /> : null}
      {isActive && <div className="cuiDropDownContent">
            <div className='cuiDropDownContentDiv'>
                <p>USE STATUS:</p>
                <p>{content.useStatus ? "IN USE" : "NOT IN USE"}</p>
            </div>
           <div className='cuiDropDownContentDiv'>
                <p>MAINTENANCE STATUS:</p>
                <p>{content.Maintenance ? "NEEDS MAINTENANCE" : "FUNCTIONAL"}</p>
            </div>
           <div className='cuiDropDownContentDiv'>
            <p>NEXT SERVICE:</p>
            <p>{content.next_service_formatted}</p>
           </div>
           <div className='cuiDropDownContentDiv'>
                <p>MILAGE:</p>
                <p>{content.milage}</p>
            </div>
            <button
              className='cuiDropDownLink'
              onClick={() => setIsServiceWorkActive(!isServiceWorkActive)}>
                {isServiceWorkActive ? "HIDE WORK HISTORY" : "SHOW WORK HISTORY"}
            </button>
            {isServiceWorkActive && <div className='cuiDropDownSubContent'> 
              {content.service_history.map((item:any, index:number) => {
                return <div key={index} className='cuiDropDownContentDiv'>
                  <p>{item.service_type}</p>
                  <p>{content.service_date_formatted[index]}</p>
                  <p>{item.service_notes}</p>
                  </div>
              })}
            </div>}
        </div>
        }
    </div>
  );
};

export default VehicleAccordion;