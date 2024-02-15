import React from 'react';
import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    <nav className='flex justify-end m-5'>
      <ul className='flex flex-wrap justify-center'>
        <li className='my-2 md:my-0 mx-2'>
          <Link
            activeClass='active'
            smooth
            spy
            to='about'
            className='cursor-pointer px-4 py-2'
          >
            ABOUT
          </Link>
        </li>
        <li className='my-2 md:my-0 mx-2'>
          <Link
            activeClass='active'
            smooth
            spy
            to='skills'
            className='cursor-pointer px-4 py-2'
          >
            SKILLS
          </Link>
        </li>
        <li className='my-2 md:my-0 mx-2'>
          <Link
            activeClass='active'
            smooth
            spy
            to='projects'
            className='cursor-pointer px-4 py-2'
          >
            PROJECTS
          </Link>
        </li>
        <li className='my-2 md:my-0 mx-2'>
          <Link
            activeClass='active'
            smooth
            spy
            to='contact'
            className='cursor-pointer px-4 py-2'
          >
            CONTACT ME
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
