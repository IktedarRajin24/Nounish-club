/* eslint-disable no-unused-vars */
import React from 'react';
import './Gradient.css';

const Gradient = () => {
    return (
        <div className='relative mt-64 mb-40 md:h-56 h-36 w-full gradient z-10'>
            <img className='bg-transparent w-20 h-28 absolute md:top-40 -top-10 md:left-10 -left-9 z-50' src="images/Frame.png" alt="" />
            <img className='bg-transparent w-20 h-28 absolute md:-top-10 -bottom-10 md:right-10 -right-9 z-50' src="images/Frame.png" alt="" />
           
        </div>
    );
};

export default Gradient;