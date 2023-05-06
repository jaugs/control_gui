import '../styles/mapStyle.css';
import { useAppDispatch, useAppSelector } from '../app/hooks'
import map from '../assets/nublarresized.png'
import { toggleMap } from './mapSlice';
import fence from '../assets/lodgefenceV2.png'
import Mapper from './mapper';
import { useState } from 'react';

interface MapWindowProps {
  title: string;

}

const MapWindow: React.FC<MapWindowProps> = ({title}) => {

  const isOpen = useAppSelector((state) => state.map.isOpen)
  const dispatch = useAppDispatch()

  const [fenceToggle, setFenceToggle] = useState(true)

 

  const toggle = () => {
    setFenceToggle(!fenceToggle)
  }

  return (
    <div className= 'mapContainer'>
      <div className="mapHeader">
          <div className="mapButtons">
            <button className="mapMinimize">-</button>
            <button className="mapClose" onClick={() => dispatch(toggleMap())}>&times;</button>
          </div>
      </div>
      <div className="mapContent">
        <div className='mapControls'>
          <div className='mapView'>
            <button className='viewMode'>Island</button>
            <button className='viewMode'>Lodge</button>
            <button className='viewMode'>Upper</button>
            <button className='viewMode'>Lower</button>
          </div>
          <div className='displayZone'></div>
        </div>
        <div className='map'>
        <Mapper fenceToggle = {fenceToggle}/>
        </div>
      </div>
    </div>
  );
};

export default MapWindow