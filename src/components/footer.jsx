import React from 'react';

const Footer = ({ githubUrl, linkedinUrl}) => {
    return (
        <footer className='mt-8 p-4 bg-gray-800 text-white'>
            <ul className='flex space-x-4'>
                <li>
                    <a href={githubUrl} target='_blank' rel="noopener noreferrer" className='text-blue-500 hover:underline'>
                        Github
                    </a>
                </li>
                <li>
                    <a href={linkedinUrl} target='_blank' rel="noopener noreferrer" className='text-blue-500 hover:underline'>
                        LinkedIn
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;