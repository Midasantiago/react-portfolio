import React from 'react';

const Project = ({ image, title, deployedLink, githubLink }) => {
    return (
        <div className='my-8 p-4 border border-gray-300 rounded-md'>
            <img src={image} className='mb-4 rounded-md' />
            <h2 className='text-lg font-semibold'>{title}</h2>
            <div className='my-2'>
                <a href={deployedLink} target='_blank' rel="noopener noreferrer" className='text-blue-500 hover:underline mr-4'>
                    Link to Application
                </a>
                <a href={githubLink} target='_blank' rel="noopener noreferrer" className='text-gray-500 hover:underline'>
                    Link to Github Repository
                </a>
            </div>
        </div>
    )
}

export default Project;