import React, { useState, useEffect } from 'react';
import { RxDotFilled } from 'react-icons/rx';

const Project = () => {
  const projects = [
    {
      name: 'Toothless Gaming',
      link: 'https://corycarroll.github.io/toothlessgaming/',
      image: '/images/toothlessgaming.png',
    },
    {
      name: 'Weather Dashboard',
      link: 'https://corycarroll.github.io/weathercheck/',
      image: '/images/weather_forecast.png',
    },
    {
      name: 'Ecommerce Database',
      link: 'https://drive.google.com/file/d/1_qItoxtF2tWjG13zSJUvKvFVZn-zVnMW/view',
      image: '/images/Ecommerce_screenshot.png',
    },
    {
      name: 'Task Master',
      link: 'https://personal-taskmanager-960825f39bbf.herokuapp.com/',
      image: '/images/task_master_screenshot.png',
    },
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevSlide) => (prevSlide + 1) % projects.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [projects.length]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="carousel mt-10 sm:mt-20 md:mt-36 max-w-[1400px] w-full m-auto py-16 px-4 relative group">
      <div className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-6xl mb-8 sm:mb-12 text-slate-100'>My Projects</div>
      <div className='flex justify-center'>
        <div className={`border-black border-4 m-4 ${currentIndex === 0 ? 'active' : ''}`}>
          <a href={projects[currentIndex].link} target="_blank" rel="noopener noreferrer">
            <img 
            src={projects[currentIndex].image} 
            alt={projects[currentIndex].name}
            className="w-full h-auto"
             />
          </a>
        </div>
      </div>
      <div className='flex top-4 justify-center py-2'>
        {projects.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${slideIndex === currentIndex ? 'text-primary' : ''}`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;