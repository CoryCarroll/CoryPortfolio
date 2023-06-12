import React from 'react';

const About = () => {
    return (
        <div className='about mt-96 p-40'>
            <h1 className='name font-bold text-3xl md:text-4xl lg:text-6xl xl:text-6xl text-slate-100'>About Me</h1>
            <div className='flex mt-36'>
                <img className='selfie w-32 md:w-48 lg:w-96 xl:w-fit' src="images/linkedinpic.jpg" alt="Selfie"/>
                <div className='p-36'>
                    <p className='text-xl md:text-xl lg:text-2xl xl:text-4xl text-slate-100'>
                        I am a Full Stack Web Developer who enjoys creating front-end functionality and dabbles into back-end databases. I have a background in automoible and automation technical diagnostics and repairs. I found my passion in coding through my diagnostics experience, I am a natural and effective problem solver, I love disecting why something isnt working and gaining the knowledge on how to fix it.

                        I enjoy traveling the world with my beautiful wife Haniel and our goofy dogs Kylo and Oakley. I am always planning a new adventure for us to enbark on. When I am home I am creating and thinking of website ideas for future business plans, I enjoy long walks around our neighborhood, park dates with our dogs, as well as playing and streaming video games in my free time. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;