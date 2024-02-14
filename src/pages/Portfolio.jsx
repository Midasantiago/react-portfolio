import React from 'react';
import Project from '../components/project';
import projectData from '../data/projects';

const Portfolio = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold mb-8'>Portfolio</h1>
            {projectData.length > 0 ? (
                projectData.map((project, index) => (
                    <Project key={index} {...project} />
                ))
            ) : (
                <p>No Projects added yet.</p>
            )}
        </div>
    );
};

export default Portfolio;