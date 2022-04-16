import React from 'react';
import Draggable from 'react-draggable';


export const ImageCard = ({url, key1}) => {
  return (
    <>
      <Draggable>
        <img className="image" src={url} key={key1} alt="query" />
      </Draggable>
    </>
  )
}


