import React, { useRef, Fragment } from 'react';
import map from '../assets/nublarresized.png'
import mapdata from './mapAreas.json'

import ImageMapper from 'react-img-mapper';

interface fenceprops {
    fenceToggle: boolean
}

const Mapper = (props:fenceprops) => {

    

    const URL = map;
    const MAP = {
        name: 'my-map',
    // GET JSON FROM BELOW URL AS AN EXAMPLE
        areas: [
        {
            "id": "parkfence2",
            "title": "Lodge Fence",
            "shape": "poly",
            "preFillColor": "transparent",
            "coords": (props.fenceToggle ? [
                524,741,480,700,441,647,427,599,414,519,413,492,433,447,471,434,529,434,622,437,659,430,701,430,732,431,761,434,785,434,809,442,844,453,878,473,921,505,951,539,968,576,974,610,978,646,978,683,968,712,954,737,937,761,916,766,874,768,835,768,799,768,760,768,719,766,676,768,641,768,601,768,568,759,547,753
            ] : [0])
        },
        {
            "id": "parkfence3",
            "title": "Hipsy Paddock",
            "shape": "poly",
            "coords":  [664,768,959,772,1032,770,1064,777,1087,787,1107,808,1123,834,1129,855,1132,879,1132,922,1118,969,1089,997,1064,1016,1040,1025,918,1014,803,1019,618,1018,606,1002,604,939,597,885,602,833,618,790],
            "preFillColor": "transparent"
        },
        ],
  };
  
  return (
    <Fragment>
    <ImageMapper 
        active={true} 
        stayHighlighted={true} 
        src={URL} map={MAP} 
        parentWidth={400} 
        lineWidth={5} 
        fillColor='#00000000' 
        responsive={true}
    />
    </Fragment>
  )
}

export default Mapper;