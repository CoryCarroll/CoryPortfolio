import React, { useState, useEffect } from 'react';
import { RxDotFilled } from 'react-icons/rx';

const Project = () => {
  const projects = [
    {
      name: 'Toothless Gaming',
      link: 'https://corycarroll.github.io/toothlessgaming/',
      image: 'images/toothlessgaming.png',
    },
    {
      name: 'Weather Dashboard',
      link: 'https://corycarroll.github.io/weathercheck/',
      image: 'images/weathercheck.png',
    },
    {
      name: 'Diaster Search',
      link: 'https://emileebogdan.github.io/project-1-travel-and-events/',
      image: 'images/safetysearch.png',
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
    <div className="carousel max-w-[1400px] h-[780px] mt-96 w-full m-auto py-16 px-4 relative group">
      <div className='font-bold text-6xl mb-24 text-slate-100'>My Projects</div>
      <div className='flex justify-'>
        {projects.map((project, index) => (
            <div
              key={index}
              className={` border-black border-4 ${index === currentIndex ? 'active' : ''}`}

            >
              <a href={project.link}>
                <img src={project.image} alt={project.name} />
              </a>
            </div>
        ))}
      </div>
      <div className='flex top-4 justify-center py-2'>
                {projects.map((slide, slideIndex) => (
                    <div 
                    key={slideIndex} 
                    onClick={() => goToSlide(slideIndex)} 
                    className='text-2xl cursor-pointer'
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>
    </div>
  );
};

export default Project;