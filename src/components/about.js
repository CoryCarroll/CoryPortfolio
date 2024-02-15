import React from 'react';
import selfie from '../images/linkedinpic.jpg';

const About = () => {
  return (
    <div className='about'>
      <h1 className='name font-bold font-protest-strike'>
        About Me
      </h1>
      <div className='flex flex-col md:flex-row items-center'>
        <img
          className='selfie md:w-1/3 max-w-xs mb-4 md:mb-0'
          src={selfie}
          alt='Selfie'
        />
        <div className='md:w-2/3 md:pl-4'>
          <p className=''>
            I am a Full Stack Web Developer who enjoys creating front-end functionality and dabbles into back-end
            databases. I have a background in automotive and automation technical diagnostics and repairs. I found my
            passion in coding through my diagnostics experience. I am a natural and effective problem solver, and I love
            dissecting why something isn't working and gaining the knowledge on how to fix it.
          </p>
          <p className=''>
            I enjoy traveling the world with my beautiful wife Haniel and our goofy dogs Kylo and Oakley. I am always
            planning a new adventure for us to embark on. When I am home, I am creating and thinking of website ideas
            for future business plans. I enjoy long walks around our neighborhood, park dates with our dogs, as well as
            playing and streaming video games in my free time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;