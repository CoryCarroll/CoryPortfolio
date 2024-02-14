import React from 'react';

const About = () => {
    return (
        <div className='about mt-10 sm:mt-20 md:mt-96 p-4 sm:p-10 md:p-20'>
          <h1 className='name text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-6xl font-bold text-slate-100'>
            About Me
          </h1>
          <div className='flex flex-col sm:flex-row mt-10 sm:mt-20'>
            <img
              className='selfie w-32 sm:w-48 md:w-64 lg:w-96 xl:w-auto h-32 sm:h-48 md:h-64 lg:h-96 xl:h-auto'
              src='images/linkedinpic.jpg'
              alt='Selfie'
            />
            <div className='p-4 sm:p-8 md:p-12 lg:p-24'>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl text-slate-100'>
                I am a Full Stack Web Developer who enjoys creating front-end functionality and dabbles into back-end
                databases. I have a background in automotive and automation technical diagnostics and repairs. I found my
                passion in coding through my diagnostics experience. I am a natural and effective problem solver, and I love
                dissecting why something isn't working and gaining the knowledge on how to fix it.
              </p>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl mt-4 sm:mt-6 md:mt-8 lg:mt-12 xl:mt-16 text-slate-100'>
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