import '../../styles/cuiStyle.css'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeScreen } from '../slices/mainSlice';
import { changeOpen, changeContent, newPopup } from '../slices/popupSlice';
import { useEffect, useState, ChangeEvent, FormEvent, ComponentState } from 'react';
import { changeSection } from '../slices/interfaceSlice';


const AnimalList: React.FC = () => {

    const popUpArr = useAppSelector((state) => state.popup.PopupArr)
    const dispatch = useAppDispatch()
    const interfaceData = useAppSelector((state) => state.interface)

    const [animalData, setanimalData] = useState([] as any[])
    const [editForm, setEditForm] = useState(false)
    const [expandField, setExpandField] = useState(false)
    const [activeIndex, setActiveIndex] = useState('')
    const [editIndex, setEditIndex] = useState(0)
    const [editFields, setEditFields] = useState([] as any[])

  useEffect(() => {
    fetch(`http://localhost:3000/api/animalinstances/species/${interfaceData.id}`)
    .then(res => res.json())
    .then(data => setanimalData(data))
  }, [])

  const getPopup = (word: string) => {
    let num = popUpArr.findIndex((item) => {return !item.isOpen})
    if (popUpArr.length > 5 && num === -1 ) {
      return
    }
    if (num === -1) {
      dispatch(newPopup({isOpen: true, coords: {x:50, y:50}, isDragging: false, contents: word}))
    } else {
    dispatch(changeOpen(num))
    dispatch(changeContent({contents: word, index: num}))
    }
  } 

  async function getData() {
     console.log(editFields)
  }

  const toggleEditForm = (id: number) => {
    setEditForm(true)
    setEditIndex(id)
  }

  const toggleExpand = (id: string) => {
    setActiveIndex(id)
    setExpandField(!expandField)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setEditFields({ [event.target.name]: event.target.value } as ComponentState)
  }
  
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const serializedData = JSON.stringify(editFields);
    const fetchOptions = {
        method: 'POST',
        body: serializedData
    };
    fetch(`http://localhost:3000/api/animalinstance/${animalData[editIndex]._id}/update`, fetchOptions)
    setEditForm(false)
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
           <div className='animalListTitle'>{animalData[0] ? animalData[0].animal.name : "Animal Not Found"}</div>
            {editForm ? 
                <form className='animalForm' name='animalInstanceForm' method='POST' onSubmit={(event) =>handleSubmit(event)}>


                    <label>Imprint:</label>
                    <input 
                        type='text' 
                        placeholder='Imprint...' 
                        name='imprint' 
                        required 
                        value={editFields}
                        onChange={handleChange} >
                    </input>
                    <label>Current Weight (in Kilograms):</label>
                    <input 
                        type='text' 
                        placeholder='Current Weight...' 
                        name='current_weight' 
                        required 
                        value={animalData[editIndex].current_weight} 
                        onChange={handleChange} >
                    </input>
                    <label>Current Height (in Meters):</label>
                    <input 
                        type='text' 
                        placeholder='Current Height...' 
                        name='current_height' 
                        required 
                        value={animalData[editIndex].current_height} 
                        onChange={handleChange} >
                    </input>
                    <label>Date of Death:</label>
                    <input 
                        type='date' 
                        placeholder='Date of Death...' 
                        name='death_date'  
                        value={undefined}
                        onChange={handleChange} >
                    </input>
                    <button type='submit'>SUBMIT</button>
                </form> : null}
            {animalData ? animalData.map((item, index) => {
                return <div key={item._id} className='animalListContainer'>
                                <div className='animalImprintContainer'>
                                    <div className='animalImprintField'>{item.imprint}</div>
                                    <div>
                                        <button className='animalImprintButton' onClick={() => toggleExpand(item._id)}>{activeIndex === item._id ? (expandField ? 'HIDE' : "EXPAND") : "EXPAND"}</button>
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