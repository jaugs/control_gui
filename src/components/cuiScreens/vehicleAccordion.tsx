import React, { useState } from 'react';

interface AccordionProps {
    title: String,
    subTitle: String,
    content: any,
}

const VehicleAccordion: React.FC<AccordionProps> = ({title, subTitle, content}) => {

  const [isActive, setIsActive] = useState(false);
  const [isServiceWorkActive, setIsServiceWorkActive] = useState(false);

const getData = () => {
    console.log(content)
}
  return (
    <div className="accordion-item">
        <button onClick={getData}>dfdf</button>
      <div className="accordion-title">
        <div>{title}</div>
        <div>{subTitle}</div>
        <button onClick={() => setIsActive(!isActive)}>{isActive ? 'HIDE' : 'EXPAND'}</button>
      </div>
      {isActive && <div className="accordion-content">
            <div>
                <p>USE STATUS:</p>
                <p>{content.useStatus ? "IN USE" : "NOT IN USE"}</p>
            </div>
           <div>
                <p>MAINTENANCE STATUS:</p>
                <p>{content.Maintenance ? "NEEDS MAINTENANCE" : "FUNCTIONAL"}</p>
            </div>
           <div>
            <p>NEXT SERVICE:</p>
            <p>{content.next_service_formatted}</p>
           </div>
           <div>
                <p>MILAGE:</p>
                <p>{content.milage}</p>
            </div>
            <button onClick={() => setIsServiceWorkActive(!isServiceWorkActive)}>{isServiceWorkActive ? "HIDE WORK HISTORY" : "SHOW WORK HISTORY"}</button>
            {isServiceWorkActive && <div className='accordian-subcontent'> 
              {content.service_history.map((item:any, index:number) => {
                return <div key={index} className='serviceHistory'>
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