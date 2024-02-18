import React from 'react';
import selfie from '../images/SelfPortrait.png';

export const Header = () => {
  return (
    <div className='flex flex-wrap justify-center bg-yellow-400'>
      <div className='text-center md:text-left pt-15 px-4 md:px-0'>
        <div className='text-4xl md:text-9xl font-kode+mono flex items-center'>
          <img
            className='selfie bg-gray-300 md:w-1/3 max-w-xs mb-4 md:mb-0 md:mr-4'
            src={selfie}
            alt='Selfie'
          />
          <span className='text-white'>Cory Carroll</span>
        </div>
        <div className='my-4 text-center md:text-left'>
          <p className='text-lg md:text-2xl text-gray-10 font-poppins'>
            I am a Full Stack Web Developer based in Salt Lake City, Utah. I am currently open to work and am actively seeking employment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;

