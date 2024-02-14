import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
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
    );
}

export default Navigation;