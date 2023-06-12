import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';




const Project = () => {
    const slides = [
        {
            "url": "images/weathercheck.png",
        },
        {
            "url": "images/travelog-site.png",
        },
        {
            "url": "images/under-construction.png",
        },
        {
            "url": "images/safetysearch.png",
        }
    ];

const [currentIndex, setCurrentIndex] = useState(0);

const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
    setCurrentIndex(newIndex);
}

const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
};

const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
}

    return(
     <div className='max-w-[1400px] h-[780px] mt-96 w-full m-auto py-16 px-4 relative group'>
        <div className='font-bold text-6xl mb-24 text-slate-100'>My Projects</div>
        <div  style={{backgroundImage: `url(${slides[currentIndex].url})` }} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>
            <div className="hidden group-hover:block absolute  -translate-x-0 translate-y-[-700%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            <div className="hidden group-hover:block absolute  -translate-x-0 translate-y-[-700%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
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
    )
}

export default Project;