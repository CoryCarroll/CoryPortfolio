import React from 'react';

const About = () => {
    return (
        <div className='about'>
          <h1 className='name'>
            About Me
          </h1>
          <div className='flex'>
            <img
              className='selfie'
              src='images/linkedinpic.jpg'
              alt='Selfie'
            />
            <div className=''>
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