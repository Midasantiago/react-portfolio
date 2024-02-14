import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='bg-gray-800 text-white p-4'>
            <h1 className='text-2xl font-bold'>Michael Santiago</h1>
            <nav>
                <ul className='flex space-x-4 mt-4'>
                    <li className='hover:text-gray-300'>
                        <Link to="/about">About Me</Link> 
                    </li>
                    <li className='hover:text-gray-300'>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li className='hover:text-gray-300'>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className='hover:text-gray-300'>
                        <Link to="/resume">Resume</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
