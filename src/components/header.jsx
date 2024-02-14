import React from 'react';
import Navigation from './navigation';


const Header = () => {
    return (
        <header className='bg-gray-800 text-white p-4'>
            <h1 className='text-2xl font-bold'>Michael Santiago</h1>
            <Navigation />
        </header>
    );
};

export default Header;
