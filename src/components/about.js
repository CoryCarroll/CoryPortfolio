import React from 'react';


const About = () => {
  return (
    <div className='about mt-20'>
      <h1 className='name text-3xl ml-10 mr-10 text-white font-bold font-poppins border-b-2 border-yellow-300'>
        About Me
      </h1>
      <div className='flex flex-col pt-2 md:flex-row justify-center'>
        <div className='w-full mb-5 mx-20 md:w-32 lg:w-48'>
          <p className='text-2xl text-white font-poppins'>
            I am a Full Stack Web Developer who enjoys creating front-end functionality and dabbles into back-end
            databases. I have a background in automotive and automation technical diagnostics and repairs. I found my
            passion in coding through my diagnostics experience. I am a natural and effective problem solver, and I love
            dissecting why something isn't working and gaining the knowledge on how to fix it.
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