import React from 'react';

const About = () => {
  return (
    <div className='about mt-20'>
      <h1 className='name text-3xl ml-10 mr-10 text-white font-bold font-poppins border-b-2 border-yellow-300'>
        About Me
      </h1>
      <div className='flex flex-col pt-2 md:flex-row justify-center'>
        <div className='w-full mb-5 md:mx-4 lg:mx-20 md:w-1/2 lg:w-3/5 xl:w-2/3'>
          {/* Adjusting margins and widths based on screen sizes */}
          <p className='text-2xl text-white font-poppins'>
          I'm a Full Stack Web Developer with a background in automotive and automation diagnostics. Passionate problem solver with a knack for front-end functionality and back-end databases. I love traveling with my wife and dogs, planning new adventures, and brainstorming website ideas for future ventures.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
