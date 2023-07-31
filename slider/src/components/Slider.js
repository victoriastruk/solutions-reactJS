import React from 'react';

const Slider = ({ imageUrl, onCloseSlider }) => {
  const handleCloseClick = () => {
    onCloseSlider();
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        src={imageUrl}
        alt="Slide"
        style={{ maxWidth: '90%', maxHeight: '90%' }}
      />
      <button onClick={handleCloseClick}>Close</button>
    </div>
  );
};

export default Slider;
