import React, { ChangeEvent, useState } from 'react';
//import RideUpdateForm from './rideUpdateForm';
import '../../../styles/inventoryMain.css'
import InventoryEditForm from '../inventory/inventoryEditForm';
import { addToActiveAnimals, addToActiveInventory, removeActiveAnimals, removeActiveInventory, toggleOrderForm } from '../../slices/interfaceSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';

interface AccordionProps {
    content: any,
}

{/* <div key={index} className='cuiDropDownListContainer'>
                          <div className='cuiDropDownTitleContainer' onClick={() => getSpecies(item._id)}>
                              <div className='cuiDropDownTitle'>{item.current_version}</div>
                              <div className='cuiDropDownTitle'>{item.name}</div>
                          </div>
                          <button className='cuiDropDownLink' onClick={() => getAnimalInstance(item._id)}>Active Animals</button>
                      </div> */}

const ZoologyAccordion: React.FC<AccordionProps> = ({content}) => {

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
        if (interfaceData.active_animals.some((item: any) => item._id === content.id)) {
            return
        } else {
            dispatch(addToActiveAnimals(content))
        }
    } else {
        dispatch(removeActiveAnimals(content.name))
        if (interfaceData.active_animals.length < 2 && interfaceData.orderFormOpen) {
            dispatch(toggleOrderForm())
        }
    }
    }
    

  return (
    <div className="cuiDropDownAccordian">
        <div className='cuiDropDownListContainer'>
            <div className='cuiDropDownTitle'>{content.current_version}</div>
            <div className='cuiDropDownTitle'>{content.name}</div>
            <div className='cuiDropDownButtonRow'>
            <button className='cuiDropDownLink' onClick={() => setIsActive(!isActive)}>{isActive ? 'HIDE' : 'EXPAND'}</button>
            <button className='cuiDropDownLink' onClick={openForm}>{isEditing ? "GO BACK" : "EDIT"}</button>
            <input
                className='checkInput'
                type='checkbox'
                value={content._id}
                checked={interfaceData.active_animals.some((item: any) => item._id === content.id)}
                onChange={(event) => handleCheckboxChange(event)}>
            </input>
            </div>
        </div>
        {isEditing ? <InventoryEditForm content={content} setIsEditing={setIsEditing}/>: null}
        {isActive && <div className="cuiDropDownContent">
            <div className='cuiDropDownContentDiv'>
                <p>Scientific Name:</p>
                <p>{content.scientificname}</p>
            </div>
            <div className='cuiDropDownContentDiv'>
                <p>Diet:</p>
                <p>{content.diet}</p>
            </div>
            <div className='cuiDropDownContentDiv'>
                <p>Description:</p>
                <p>{content.description}</p>
            </div>
            <div className='cuiDropDownContentDiv'>
                <p>Synth Date:</p>
                <p>{content.synth_date}</p>
            </div>
        </div>
        }
    </div>
  );
};

export default ZoologyAccordion;