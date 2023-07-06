import '../../../styles/cuiStyle.css'
import '../../../styles/zoologyStyle.css'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { changeOpen, changeContent, newPopup } from '../../slices/popupSlice';
import { changeID, changeSection } from '../../slices/interfaceSlice';
import { useGetSpeciesListQuery } from '../../slices/apiSlice';
import ZoologyTabs from './zoologyTabs';
import ZoologyAccordion from './zoologyAccordion';

const ZoologyMain: React.FC = () => {

  const popUpArr = useAppSelector((state) => state.popup.PopupArr)
  const dispatch = useAppDispatch()
  const { data, error, isLoading } = useGetSpeciesListQuery('')

  async function getData() {
     console.log(data)
  }

  const getSpecies = (id: string) => {
    fetch(`http://localhost:3000/api/animals/${id}`)
    .then(res => res.json())
    .then(data => console.log(data))
  } 
 
  const getAnimalInstance = (id:string) => {
    dispatch(changeID(id))
    dispatch(changeSection("ANIMAL LIST"))
  }

  
  return (
    <div className="masterContainer">
      <ZoologyTabs />
      <button onClick={getData}>efefef</button>
      <section className='zoologyGrid'>
      
          {error ? ( <>Error: {error}</>) : isLoading ? (<>Loading...</>) : data ? (
            data.map((item: any, index: number) => {
              return <ZoologyAccordion content={item} key={index} />
          }))  : null }
        
        
        
        <div className='zoologyLinkContainer'>
          <div 
            onClick={() => dispatch(changeSection("HEALTH"))} 
            className='cuiLink'>Health
            <ul>
              <li className='listItem'>Records</li>
              <li className='listItem'>Safety</li>
              <li className='listItem'>Research</li>
            </ul>
          </div>
          <div className='cuiLink'>Feeding
            <ul>
              <li className='listItem'>Schedules</li>
              <li className='listItem'>Inventory</li>
              <li className='listItem'>Deliveries</li>
            </ul>
          </div>
          <div className='cuiLink'>All Animals
            <ul>
              <li className='listItem'>Count</li>
              <li className='listItem'>Paddocks</li>
              <li className='listItem'>Hatchery</li>
            </ul>  
          </div>
        </div>
          
      </section>
    </div>
  )
}

export default ZoologyMain