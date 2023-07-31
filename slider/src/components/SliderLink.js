import React, { useState } from 'react';
import Slider from './Slider'
const SliderLink = ({ imageUrl }) => {
  const [isSliderOpen, setSliderOpen] = useState(false);

  const handleLinkClick = () => {
    setSliderOpen(true);
  };

  const handleCloseSlider = () => {
    setSliderOpen(false);
  };

  return (
    <div>
      <a href="#" onClick={handleLinkClick}>
        Open Slider
      </a>
      {isSliderOpen && (
        <Slider imageUrl={imageUrl} onCloseSlider={handleCloseSlider} />
      )}
    </div>
  );
};

export default SliderLink;
