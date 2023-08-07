/* eslint-disable no-unused-vars */
import React from 'react';
import './SectionOne.css';

const SectionOne = () => {
    return (
        <div className='w-9/12 grid md:grid-cols-3 place-items-center md:gap-0 gap-10 mt-36 mx-auto'>
            <div className='md:w-80 w-64 md:mx-0 mx-auto'>
                <h1 className='md:text-7xl text-4xl md:text-left text-center'>Let the proliferation begin</h1>
            </div>
            <div>
                <img src="images/0-9999.gif" className='md:w-80 w-60 md:h-80 h-60 md:mx-0 mx-auto' alt="" />
            </div>
            <div className='md:w-80 w-64 md:text-xl text-lg text-left'>
                <p>
                    The <span>Nounish Club</span> is reserved to the holders of a special category of NNS names: numbers.
                    10k of them. Only earnable through Proof of Proliferation.
                </p>
            </div>
        </div>
    );
};

export default SectionOne;