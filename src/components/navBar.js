import React from 'react';
import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    <nav className='flex justify-end m-10 bg-green-800'>
      <ul className='flex justify-end flex-wrap h-20'>
        <li className='my-2 md:my-0 mx-2 pt-6'>
          <Link
            activeClass='active'
            smooth
            spy
            to='about'
            className='cursor-pointer px-4 py-2 text-xl font-bold font-oswald'
          >
            ABOUT
          </Link>
        </li>
        <li className='my-2 md:my-0 mx-2 pt-6'>
          <Link
            activeClass='active'
            smooth
            spy
            to='skills'
            className='cursor-pointer px-4 py-2 text-xl font-bold font-oswald'
          >
            SKILLS
          </Link>
        </li>
        <li className='my-2 md:my-0 mx-2 pt-6'>
          <Link
            activeClass='active'
            smooth
            spy
            to='projects'
            className='cursor-pointer px-4 py-2 text-xl font-bold font-oswald'
          >
            PROJECTS
          </Link>
        </li>
        <li className='my-2 md:my-0 mx-2 pt-6'>
          <Link
            activeClass='active'
            smooth
            spy
            to='contact'
            className='cursor-pointer px-4 py-2 text-xl font-bold font-oswald'
          >
            CONTACT ME
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
