import React from 'react';

function ImageAudio(props) {
  return <img className="image" src={props.image} alt={props.alt}/>
};

ImageAudio.defaultProps = { image: "https://via.placeholder.com/75", alt: ""};

export default ImageAudio;
