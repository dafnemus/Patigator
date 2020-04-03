import React from 'react';

function ImageAudio(props) {
  return (
    <img className="image" src={props.image}/>
    )
  };

  ImageAudio.defaultProps = {
    image:"https://via.placeholder.com/80"
  };
  
export default ImageAudio;
