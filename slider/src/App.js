import React from 'react';
import SliderLink from './components/SliderLink';

const App = () => {
  return (
    <div>
      <h1>React Slider</h1>
      <SliderLink imageUrl="https://example.com/image1.jpg" />
      <SliderLink imageUrl="https://avatars.mds.yandex.net/i?id=758997e252b855a3d0192bcb0b22280c28a9686f-8484564-images-thumbs&n=13" />
      {/* Add more SliderLink components with different image URLs as needed */}
    </div>
  );
};

export default App;
