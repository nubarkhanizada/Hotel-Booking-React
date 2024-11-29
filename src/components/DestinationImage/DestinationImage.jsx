import React from 'react';

const DestinationImage = ({ imageSrc, title }) => {
  return (
    <div className="image">
      <img src={imageSrc} alt={title} />
      <div className="overlay">
        <span>{title}</span>
      </div>
    </div>
  );
};

export default DestinationImage;