import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const Carousel = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? projects.length -1 : currentIndex - 1;
      setCurrentIndex(newIndex);
  }
  
  const nextSlide = () => {
      const isLastSlide = currentIndex === projects.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
        >
          <a href={project.link}>
            <img src={project.image} alt={project.name} />
          </a>
        </div>
      ))}
        <div className="  -translate-x-0 translate-y-[-700%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
            <div className="  -translate-x-0 translate-y-[-700%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
    </div>
  );
};

export default Carousel;