import React, { useState, useEffect } from 'react';
import './Slidebar.css';

const images = [
  'https://slidechef.net/wp-content/uploads/2022/11/John-Wick-Movie.jpg',
  'https://slidechef.net/wp-content/uploads/2022/11/John-Wick-Cast.jpg',
  'https://slidechef.net/wp-content/uploads/2022/11/John-Wick-Daisy-1024x576.jpg',
  'https://slidechef.net/wp-content/uploads/2022/11/John-Wick-Continental-1024x576.jpg',
  
];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const imagesToShow = 4; // Number of images to show at a time
  const totalSlides = Math.ceil(images.length / imagesToShow);

  // Automatic sliding interval (change slide every 3 seconds)
  const autoSlideInterval = 3000; // 3 seconds

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, autoSlideInterval);

    return () => {
      clearInterval(slideInterval);
    };
  }, [currentSlide, totalSlides]);

  const getVisibleImages = () => {
    const startIndex = currentSlide * imagesToShow;
    const endIndex = startIndex + imagesToShow;
    return images.slice(startIndex, endIndex);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {getVisibleImages().map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
