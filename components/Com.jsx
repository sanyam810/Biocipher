import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  'wolf.png',
  'ecch.jpg',
  // Add more image URLs herea
];

const Com = () => {
  return (
    <div className="flex flex-col items-center mb-32 mt-24">
      <h2 className="text-4xl font-bold text-center mb-8 text-white">Our Sponsors</h2>
      <div className="flex flex-wrap justify-center">
        {images.map((image, index) => (
          <div className="max-w-xs rounded overflow-hidden shadow-lg m-4 bg-white" key={index}>
            <img className="w-full" src={image} alt={`Slide ${index + 1}`} />
            {/* <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Image Title</div>
              <p className="text-gray-700 text-base">Description of the image goes here.</p>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Com;
