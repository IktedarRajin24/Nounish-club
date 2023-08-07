/* eslint-disable no-unused-vars */
import React from 'react';
import './SectionTwo.css';

const SectionTwo = () => {
    return (
        <div className='mt-24 mb-24'>
            <h1 className='text-6xl mx-auto w-64'>What To Do</h1>
            <div className='grid md:grid-cols-4 gap-x-5 gap-y-12 w-10/12 mx-auto mt-8 section-two'>
                <div className='md:order-1 order-1 md:mx-0 mx-auto'>
                    <img src="images/discord-new version 1.png" alt="" />
                </div>
                <div className='md:order-2 order-3 md:mx-0 mx-auto'>
                    <img src="images/wood-twitter.png" alt="" />
                </div>
                <div className='md:order-3 order-5 md:mx-0 mx-auto'>
                    <img src="images/green-binocular.png" alt="" />
                </div>
                <div className='md:order-4 order-7 md:mx-0 mx-auto'>
                    <img src="images/red-earn spot.png" alt="" />
                </div>
                <div className='md:order-5 order-2 md:mx-0 mx-auto relative'>
                    <img src="images/1.png" alt="" className='w-14 h-28 md:mx-0 mx-auto'/>
                    <p className='absolute top-1/4   md:right-auto -right-20 w-56 md:mx-0 mx-auto text-center'>Join the rest of the Squad on Discord</p>
                </div>
                <div className='md:order-6 order-4 md:mx-0 mx-auto relative'>
                    <img src="images/2.png" alt="" className='w-14 h-28 md:mx-0 mx-auto'/>
                    <p className='absolute top-1/4 w-56 md:right-auto -right-32 md:mx-0 mx-auto'>Follow us on Twitter</p>
                </div>
                <div className='md:order-7 order-6 md:mx-0 mx-auto relative'>
                    <img src="images/3.png" alt="" className='w-14 h-28 md:mx-0 mx-auto'/>
                    <p className='absolute top-1/4 w-64 md:right-auto -right-28 text-center'>Be ready for distribution initiatives</p>
                </div>
                <div className='md:order-8 order-8 md:mx-0 mx-auto relative'>
                    <img src="images/4.png" alt="" className='w-14 h-28 md:mx-0 mx-auto'/>
                    <p className='absolute top-1/4 w-56 md:mx-0 mx-auto md:right-auto -right-24 text-center'>Earn your spot in the Club</p>
                </div>
            </div>
        </div>
    );
};

export default SectionTwo;