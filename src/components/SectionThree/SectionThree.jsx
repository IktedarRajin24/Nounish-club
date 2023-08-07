/* eslint-disable no-unused-vars */
import React from 'react';
import './SectionThree.css'
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const SectionThree = () => {
    return (
        <div className='mt-24 pt-36 w-full px-10 bg-ash'>
            <div className='md:flex justify-between items-center mb-36 bg-ash w-10/12 mx-auto'>
                <div className='md:text-left text-center bg-ash md:mb-0 mb-10'>
                    <h1 className='md:text-6xl text-3xl mb-5 bg-ash'>Nounish Questions</h1>
                    <p className='md:text-xl text-xs bg-ash'>(aka everything you wanna know)</p>
                </div>
                <div className='w-52 md:mx-0 mx-auto'>
                    <img className='bg-ash' src="images/mug-painter 2.png" alt="" />
                </div>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-5 md:w-10/12 mx-auto bg-ash pb-20'>
                <div className='px-3 py-2 w-full flex justify-between items-center order-1'>
                    <p className='md:text-lg text-xs'>
                        What is the NNS?
                    </p>
                    <ChevronDownIcon className='h-6 w-6 text-teal-300'></ChevronDownIcon>
                </div>
                <div className='px-3 py-2 flex justify-between items-center order-2'>
                    <p className='md:text-lg text-xs'>What is a ◨-◨  domain?</p>
                    <ChevronDownIcon className='h-6 w-6 text-teal-300'></ChevronDownIcon>
                </div>
                <div className='px-3 py-2 flex justify-between items-center order-3'>
                    <p className='md:text-lg text-xs'>
                    What’s the idea behind the Nounish Club?
                    </p>
                    <ChevronDownIcon className='h-6 w-6 text-teal-300'></ChevronDownIcon>
                </div>
                <div className='px-3 py-2 flex justify-between items-center order-4'>
                    <p className='md:text-lg text-xs'>What are the benefits of owning a Nounish Club name?</p>
                    <ChevronDownIcon className='h-6 w-6 text-teal-300'></ChevronDownIcon>
                </div>
                <div className='px-3 py-2 flex justify-between items-center order-5'>
                    <p className='md:text-lg text-xs'>
                    What are the benefits of owning a Nounish Club name?
                    </p>
                    <ChevronDownIcon className='h-6 w-6 text-teal-300'></ChevronDownIcon>
                </div>
                <div className='px-3 py-2 flex justify-between items-center order-6'>
                    <p className='md:text-lg text-xs'>Can I choose my Nounish Club number?</p>
                    <ChevronDownIcon className='h-6 w-6 text-teal-300'></ChevronDownIcon>
                </div>
                <div className='px-3 py-2 flex justify-between items-center order-7'>
                    <p className='md:text-lg text-xs'>How does the Proof of Proliferation work?</p>
                    <ChevronDownIcon className='h-6 w-6 text-teal-300'></ChevronDownIcon>
                </div>
                <div className='px-3 py-2 flex justify-between items-center order-8'>
                    <p className='md:text-lg text-xs'>Why is the Nounish Club important for the NNS?</p>
                    <ChevronDownIcon className='h-6 w-6 text-teal-300'></ChevronDownIcon>
                </div>
                <div className='px-3 py-2 flex justify-between items-center order-9'>
                    <p className='md:text-lg text-xs'>
                    How can I get a Nounish Club name?
                    </p>
                    <ChevronDownIcon className='h-6 w-6 text-teal-300'></ChevronDownIcon>
                </div>
                <div className='px-3 py-2 flex justify-between items-center order-10'>
                    <p className='md:text-lg text-xs'>How can I get a Nounish Club name?</p>
                    <ChevronDownIcon className='h-6 w-6 text-teal-300'></ChevronDownIcon>
                </div>
            </div>
        </div>
    );
};

export default SectionThree;