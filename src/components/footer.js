import React from 'react';
import githublogo from '../images/GitHub-logo.png';
import linkdin from '../images/linkdin.png';

function Footer() {
    return (
        <footer className='icons mt-10 sm:mt-20 md:mt-36'>
          <div className='flex justify-center'>
            <a className="github" href="https://github.com/CoryCarroll">
              <img className='w-10 sm:w-20' src={githublogo} alt='Github-profile' />
            </a>
            <a className="linkd" href="https://www.linkedin.com/in/cdcarroll/">
              <img className='w-10 sm:w-20' src={linkdin} alt="LinkedIn-Profile" />
            </a>
          </div>
        </footer>
      );
    }
    
    export default Footer;