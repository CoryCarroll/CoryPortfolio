import React from 'react';

export const Header = () => {
  return (
    <div className='flex justify-center items-baseline h-screen'>
      <div className='text-end pt-72 pb-72'>
        <div className='text-9xl font-oswald'>Cory Carroll</div>
        <div className='mt-4'>
          <p className='text-2xl font-poppins'>
            I am a Full Stack Web Developer based in Salt Lake City, Utah. I am currently open to work and am actively seeking employment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;