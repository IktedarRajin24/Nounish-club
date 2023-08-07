/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './NumberGeneration.css';

const NumberGeneration = () => {
    const [filled, setFilled] = useState(0);
    const [running, isRunning] = useState(false);
    return (
        <div className='md:min-w-full md:min-h-full h-auto relative modal pt-20'>
            <h1 className='md:w-1/2 w-2/3 md:text-7xl text-3xl mx-auto text-center'>Hold on. We are generating your <span>Nounish Club</span> number</h1>

            <div className='w-9/12 mx-auto mt-20 text-center relative'>
                <div className='md:text-7xl text-3xl font-bold'>{filled} %</div>
                <div className='w-9/12 h-6' style={{
                    
                    transition: 'width 0.5s',
                    position: 'relative',
                    overflow: 'hidden',
                    backgroundColor: '#1F1F23',
                    
                }}>

                </div>
            </div>
        </div>
    );
};

export default NumberGeneration;