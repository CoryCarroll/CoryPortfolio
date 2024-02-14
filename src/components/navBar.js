import React from 'react';
import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    <div className='text-slate-100 pt-6 pb-32 text-sm md:text-lg lg:text-lg xl:text-xl'>
      <nav className='flex justify-center'>
        <ul className='flex space-x-6'>
          <li>
            <Link
              activeClass='active'
              smooth
              spy
              to='about'
              className='cursor-pointer transition-colors duration-300 hover:text-primary'
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              activeClass='active'
              smooth
              spy
              to='skills'
              className='cursor-pointer transition-colors duration-300 hover:text-primary'
            >
              SKILLS
            </Link>
          </li>
          <li>
            <Link
              activeClass='active'
              smooth
              spy
              to='projects'
              className='cursor-pointer transition-colors duration-300 hover:text-primary'
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <Link
              activeClass='active'
              smooth
              spy
              to='contact'
              className='cursor-pointer transition-colors duration-300 hover:text-primary'
            >
              CONTACT ME
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;