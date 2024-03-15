import React from 'react';
import proficiencies from '../data/proficiencies';

const Resume = () => {
    return (
        <div className='max-w-xl mx-auto mt-8 p-4 bg-gray-800 text-white'>
            <h2 className='text-2xl font-bold mb-4'> 
                <a href='=/resume/SantiagoResume.docx' download="SantiagoResume.docx" className='block bg-blue-500 text-white py-2 px-4 rounded text-center hover:bg-blue-600 transition duration-300'>
                    Download Resume
                </a>
            </h2>
            <h2 className='text-2xl font-bold mt-8 mb-4'>Proficiencies</h2>
            <div className='grid grid-cols-2 gap-4'>
                <ul>
                    {proficiencies.length > 0 ? (
                        proficiencies.slice(0, 10).map((proficiency, index) => (
                            <li key={index} className='mb-2'>{proficiency}</li>
                        ))
                    ) : (
                        <p className='text-gray-400'>No Proficiencies To List!</p>
                    )}
                </ul>
                <ul>
                    {proficiencies.length > 10 ? (
                        proficiencies.slice(10).map((proficiency, index) => (
                            <li key={index} className='mb-2'>{proficiency}</li>
                        ))
                    ) : null}
                </ul>
            </div>
        </div>
    )
}

export default Resume;
