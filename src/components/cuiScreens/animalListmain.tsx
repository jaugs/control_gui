import '../../styles/cuiStyle.css'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeOpen, changeContent, newPopup } from '../slices/popupSlice';
import { useEffect, useState, ChangeEvent, FormEvent, ComponentState } from 'react';
import { changeSection, toggleIsEditing } from '../slices/interfaceSlice';
import { useGetAnimalInstanceQuery, useUpdateAnimalMutation  } from '../slices/apiSlice';


const AnimalList: React.FC = () => {

    const popUpArr = useAppSelector((state) => state.popup.PopupArr)
    const dispatch = useAppDispatch()
    const interfaceData = useAppSelector((state) => state.interface)

    const [expandField, setExpandField] = useState(false)
    const [activeIndex, setActiveIndex] = useState('')
    const [editIndex, setEditIndex] = useState(0)
    const [editFields, setEditFields] = useState({
      animal: '',
      imprint: '',
      current_weight: '',
      current_height: '',
      death_date: '',
    })
    const { data, error, isLoading } = useGetAnimalInstanceQuery(interfaceData.id);
    const [updatePost, { isLoading: isUpdating }] = useUpdateAnimalMutation()



  async function getData() {
     console.log(editFields)
     console.log(data)
  }

  const toggleEditForm = (id: number) => {
    setEditFields({
      animal: data[id].animal._id,
      imprint: data[id].imprint,
      current_weight: data[id].current_weight,
      current_height: data[id].current_height,
      death_date: data[id].death_date,
    })
    dispatch(toggleIsEditing());
    setEditIndex(id)
    
  }

  const toggleExpand = (id: string) => {
    setActiveIndex(id)
    setExpandField(!expandField)
  }


  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setEditFields({...editFields, [event.target.name]: event.target.value})

    // setEditFields({state[event.target.name]: event.target.value } as ComponentState)
  }
  
  async function handleSubmit (event: FormEvent<HTMLFormElement>)  {
    event.preventDefault()
    const serializedData = editFields;
    console.log(serializedData)
    try { 
      await updatePost({id: activeIndex, ...serializedData}) 
    }
    catch {
      error: console.log(error)
    }
    finally {
      dispatch(toggleIsEditing());    
    }
  }

  return (
    <div className="masterContainer">

        <header className='masterHeader'> 
          <button className='cuiHeaderButton'>FIND</button>
          <button className='cuiHeaderButton'>EDIT</button>
          <button className='cuiHeaderButton'>MONITOR</button>
          <button className='cuiHeaderButton'>DELETE</button>
          <button className='cuiHeaderButton'>REPORT</button>
          <button className='cuiHeaderButton' onClick={getData}>OPTIONS</button>
          <button className='cuiHeaderButton' onClick={() => dispatch(changeSection('ZOOLOGY'))}>GO BACK</button>
        </header>
        
        <section className='animalListGrid'>
           <div className='animalListTitle'></div>
            {interfaceData.isEditing ? 
                <form className='animalForm' name='animalInstanceForm' method='POST' onSubmit={(event) =>handleSubmit(event)}>
                    <label>Imprint:</label>
                    <input 
                        type='text' 
                        placeholder='Imprint...' 
                        name='imprint' 
                        required 
                        value={editFields.imprint || ''}
                        onChange={(event) => handleChange(event)} >
                    </input>
                    <label>Current Weight (in Kilograms):</label>
                    <input 
                        type='text' 
                        placeholder='Current Weight...' 
                        name='current_weight' 
                        required 
                        value={editFields.current_weight}
                        onChange={(event) => handleChange(event)} >
                    </input>
                    <label>Current Height (in Meters):</label>
                    <input 
                        type='text' 
                        placeholder='Current Height...' 
                        name='current_height' 
                        required 
                        value={editFields.current_height} 
                        onChange={(event) => handleChange(event)} >
                    </input>
                    <label>Date of Death:</label>
                    <input 
                        type='date' 
                        placeholder='Date of Death...' 
                        name='death_date'  
                        value={undefined}
                        onChange={(event) => handleChange(event)} >
                    </input>
                    <button type='submit'>SUBMIT</button>
                </form> : null}
            {data ? data.map((item: any, index: number) => {
                return <div key={item._id} className='animalListContainer'>
                                <div className='animalImprintContainer'>
                                    <div className='animalImprintField'>{item.imprint}</div>
                                    <div>
                                        <button className='animalImprintButton' onClick={() => toggleExpand(item._id)}>
                                          {activeIndex === item._id ? (expandField ? 'HIDE' : "EXPAND") : "EXPAND"}
                                        </button>
                                        <button className='animalImprintButton' onClick={() => toggleEditForm(index)}>EDIT</button>
                                    </div>
                                </div>
                                <div className={activeIndex === item._id ? (expandField ? 'animalListField' : "animalListFieldHidden") : "animalListFieldHidden"}>
                                    <div className='animallistItem'>
                                        <div>VERSION:</div>
                                        <div>{item.version}</div>
                                    </div>
                                    <div className='animallistItem'>
                                        <div>CURRENT HEIGHT:</div>
                                        <div>{item.current_height}</div>
                                    </div>
                                    <div className='animallistItem'>
                                        <div>CURRENT WEIGHT:</div>
                                        <div>{item.current_weight}</div>
                                    </div>
                                    <div className='animallistItem'>
                                        <div>BIRTH DATE:</div>
                                        <div>{item.birth_date}</div>
                                    </div>
                                    {item.death_date ? <div className='animallistItem'>
                                        <div>DEATH DATE:</div>
                                        <div>{item.death_date}</div>
                                    </div> : null}
                                </div>
                        </div>
            }) : null }
            
       
        </section>
    </div>
  )
}

export default AnimalList