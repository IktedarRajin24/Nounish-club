/* eslint-disable no-unused-vars */
import React from 'react';
import './Registered.css';
import Navbar from '../Navbar/Navbar';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

const Registered = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='fixed h-full w-full bg-opacity-0 overlay'>
            <div className='fixed left-0 right-0 top-24 m-auto w-full modal mx-auto p-2'>
                <h1 className='md:w-1/2 w-2/3 md:text-7xl text-4xl mx-auto text-center'>Your number in <span>Nounish Club</span></h1>
                <h1 className='md:w-1/2 w-9/12 md:text-3xl text-xl mx-auto text-center mt-10'>245⌐◨-◨ to 9999⌐◨-◨</h1>
                <img className='md:w-80 w-60 md:h-80 h-60 mt-10 mx-auto' src="images/0-9999.gif" alt="" />
                
                <button className='claim-btn mt-12 text-xl font-bold block w-44 h-12 mx-auto'>
                    Manage
                </button>
                <button onClick={()=>{window.location.replace('/')}} className='claim-btn mt-12 text-xl font-bold w-44 h-12 mx-auto flex  justify-center items-center'>
                    Go Back <ArrowLeftIcon className='h-6 w-6 ms-5'/>
                </button>

            
            </div>

        </div>
        </div>
    );
};

export default Registered;