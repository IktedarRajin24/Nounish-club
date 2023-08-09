/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Main.css';
import { BeakerIcon, ChevronDownIcon } from '@heroicons/react/24/solid'

const Main = ({toggleModal2}) => {
    return (
        <div className='relative w-full my-10 md:pt-10 mb-20'>
            {/* heading */}
            <h1 className='relative heading md:w-1/2 w-full text-center md:text-8xl text-4xl text-white mx-auto my-5'>
                Spread the culture. <br/>Join the <span>Nounish Club.</span>
            </h1>
            {/* description */}
            <p className='relative md:w-1/3 w-9/12 text-center mx-auto my-5 md:text-xl text-lg'>
                The Nounish Club includes all the NNS numbers from 0 to 9999.  10k names which will be distributed to anyone, for free.
            </p>
            {/* star */}
            <img className='absolute md:top-4 -top-7  md:right-96 right-5' src="images/Group 159.png" alt="" />
            {/* 1 */}
            <img className='absolute md:top-80 top-96 md:left-48 left-5 md:w-auto w-16' src="images/Blue_on_a_rocket 2.png" alt="" />
            {/* 2 */}
            <img className='absolute md:top-28 md:block hidden md:right-60 w-auto' src="images/white_with_umbrella (1) 1.png" alt="" />
            {/* 3 */}
            <img className='absolute md:top-96 md:block hidden  md:right-96 right-5' src="images/green_astronaut_2 1.png" alt="" />
            {/* claim button */}
            <button onClick={()=>toggleModal2(true)} className='claim-btn mt-12 text-xl font-bold block w-44 h-12 mx-auto'>
                Claim
            </button>

            <p className='mx-auto mt-5 w-28 text-xs font-bold'>Claims available: x</p>
            
            
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-10 h-10 mx-auto mt-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>

            

        </div>
    );
};

export default Main;