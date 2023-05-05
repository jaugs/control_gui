import '../styles/mapStyle.css';
import { useAppDispatch, useAppSelector } from '../app/hooks'
import map from '../assets/nublarresized.png'
import { toggleDragging, toggleMap } from './mapSlice';
import fence from '../assets/lodgefenceV2.png'
import Mapper from './mapper';
import { useState } from 'react';

interface MapWindowProps {
  title: string;

}

const MapWindow: React.FC<MapWindowProps> = ({title}) => {

  const isOpen = useAppSelector((state) => state.map.isOpen)
  const coords = useAppSelector((state) => state.map.coords)
  const dispatch = useAppDispatch()

  const [fenceToggle, setFenceToggle] = useState(true)

  const onDragEnd = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault
    dispatch(toggleDragging())
  }

  const toggle = () => {
    setFenceToggle(!fenceToggle)
  }

  return (
    <div 
      className= {isOpen ? 'mapContainer' : 'mapClose'}
      draggable
      onDragStart={() => dispatch(toggleDragging())}
      onDragEnd={(event) => onDragEnd(event)}
      // style={{
      //   position: 'absolute',
      //   top: coords.y,
      //   left: coords.x,
      //   cursor: 'pointer',
      // }}
      >
      <div className="mapHeader">
       
          <div className="mapButtons">
            <button onClick={toggle}>erf</button>
            <button className="mapMinimize">-</button>
            <button className="mapClose" onClick={() => dispatch(toggleMap())}>&times;</button>
          </div>
      </div>
      <div className="mapContent">
        <div className='map'>
        <Mapper fenceToggle = {fenceToggle}/>
        </div>
        {/* <img 
          className='map' 
          src={map}
          alt='IslaNublarMap'
          useMap='#image-map'></img>
        <map name='image-map' id='image-map'>
        <area target="_blank" alt="dddddd" title="dddddd" coords="524,741,480,700,441,647,427,599,414,519,413,492,433,447,471,434,529,434,622,437,659,430,701,430,732,431,761,434,785,434,809,442,844,453,878,473,921,505,951,539,968,576,974,610,978,646,978,683,968,712,954,737,937,761,916,766,874,768,835,768,799,768,760,768,719,766,676,768,641,768,601,768,568,759,547,753" shape="poly"></area>
        </map> */}
        {/* <img className='fence' src={fence}></img> */}
      </div>
    </div>
  );
};

export default MapWindow