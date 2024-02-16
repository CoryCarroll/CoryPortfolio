import React from 'react';
import selfie from '../images/SelfPortrait.png';

export const Header = () => {
  return (
    <div className='flex flex-wrap justify-center bg-yellow-500'>
      <div className='text-end pt-15'>
        <div className='text-9xl font-kode+mono flex items-center'>
          <img
            className='selfie bg-gray-300 md:w-1/3 max-w-xs mb-4 md:mb-0 mr-4'
            src={selfie}
            alt='Selfie'
          />
          <span className='text-white'>Cory Carroll</span>
        </div>
        <div className='my-4'>
          <p className='text-2xl text-gray-10 font-poppins'>
            I am a Full Stack Web Developer based in Salt Lake City, Utah. I am currently open to work and am actively seeking employment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
