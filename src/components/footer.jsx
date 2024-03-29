import React from 'react';
import personalLinks from '../data/personalLinks';

const Footer = () => {
    return (
        <footer className='mt-8 p-4 bg-gray-800 text-white'>
            <ul className='flex space-x-4'>
                <li>
                    <a href={personalLinks.githubUrl} target='_blank' rel="noopener noreferrer" className='text-blue-500 hover:underline'>
                        Github
                    </a>
                </li>
                <li>
                    <a href={personalLinks.linkedinUrl} target='_blank' rel="noopener noreferrer" className='text-blue-500 hover:underline'>
                        LinkedIn
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;