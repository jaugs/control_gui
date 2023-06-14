import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { useLazyFindItemQuery } from '../../slices/apiSlice';
import InventoryAccordion from './inventoryAccordion';
import InventoryTabs from './inventoryTabs';
import NewInventoryForm from './inventoryNewForm';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

const FindItems: React.FC = () => {

  const dispatch = useAppDispatch()
  const interfaceData = useAppSelector((state) => state.interface)
  
  const [findQuery, setFindQuery] = useState('')
  const [ trigger, result, lastPromiseInfo ] = useLazyFindItemQuery()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setFindQuery(event.target.value)
}
const [isSubmmited, setIsSubmitted] = useState(false)

  useEffect(() => {
    if (isSubmmited) {
    postData()
    setIsSubmitted(false)
    }
  }, [isSubmmited])
  
const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true)
  }

  async function postData () {
    trigger(findQuery)
  }
  
  return (
    <div className="masterContainer">
      <InventoryTabs />
      <section className='inventoryGrid'>
        <div className='findFormContainer'>
            <form className='findInventoryForm' name='findItemForm' method='POST' onSubmit={(event) =>handleSubmit(event)}>
                <label className='cuiLabel'>Find:
                <input
                    className='findInput'
                    required
                    value={findQuery}
                    type='text'
                    name='find'
                    onChange={(event) => handleChange(event)}
                    >
                </input>
                </label>
                <div className='cuiDropDownButtonContainer'>
                    <button className='cuiDropDownButton' type='submit'>SUBMIT</button>
                </div>
            </form>
        </div>
        {interfaceData.addFormOpen?  <NewInventoryForm /> : null}
        {(result.status === 'uninitialized') ? null : (result.isLoading) ? <div>Loading...</div> : 
        result.isError ? <div>Error...</div> : (result.data.length === 0) ? <div>Could not Find any Items</div> : 
        result.data.map((item: any, index: number) => {
          return <InventoryAccordion key={item._id} content={item} />
        })}
      </section>
    </div>
  )
}

export default FindItems