import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { useFindItemQuery } from '../../slices/apiSlice';
import InventoryAccordion from './inventoryAccordion';
import InventoryTabs from './inventoryTabs';
import NewInventoryForm from './inventoryNewForm';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

const FindItems: React.FC = () => {

  const dispatch = useAppDispatch()
  const interfaceData = useAppSelector((state) => state.interface)
  
  const [findQuery, setFindQuery] = useState('')
  const { data, error, isLoading } = useFindItemQuery('Park')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setFindQuery(event.target.value)
}
const [isSubmmited, setIsSubmitted] = useState(false)

  useEffect(() => {
    if (isSubmmited) {
    postData()
    }
  }, [isSubmmited])
  
const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true)
  }

  async function postData () {
    console.log(data)

  }
  return (
    <div className="masterContainer">
      <InventoryTabs />
      <section className='inventoryGrid'>
        <div className='findFormContainer'>
            <form className='newInventoryForm' name='findItemForm' method='POST' onSubmit={(event) =>handleSubmit(event)}>
                <label className='cuiLabel'>Find: </label>
                <input
                    required
                    value={findQuery}
                    type='text'
                    name='find'
                    onChange={(event) => handleChange(event)}
                    >
                </input>
                <div className='cuiDropDownButtonContainer'>
                    <button className='cuiDropDownButton' type='submit'>SUBMIT</button>
                </div>
            </form>
        </div>
        {interfaceData.addFormOpen?  <NewInventoryForm /> : null}
        {/* {isLoading ? <div>Loading...</div> : error ? <div>Error: 102</div> : data ? data.map((item: any, index: number) => {
          return <InventoryAccordion key={item._id} content={item} />
        }) : null } */}
      </section>
    </div>
  )
}

export default FindItems