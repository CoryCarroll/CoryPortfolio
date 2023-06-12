import React from 'react';

const NavBar = () => {
    return (
        <div className='text-slate-100 pt-6 pb-32 text-sm md:text-lg lg:text-lg xl:text-xl'>
            <ul className='flex justify-end space-x-4 pr-6'>
                <li>
                    <a className='Home' href='./home'>Home</a>
                </li>
                <li>
                    <a className='About' href='./about'>About</a>
                </li>
                <li>
                    <a className='Home' href='./skills'>Skills</a>
                </li>
                <li>
                    <a className='Home' href='./projects'>Projects</a>
                </li>
                <li>
                    <a className='Home' href='./contact'>Contact Me</a>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;