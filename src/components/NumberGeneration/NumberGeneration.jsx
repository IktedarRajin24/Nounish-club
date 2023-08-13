/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './NumberGeneration.css';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { Link,  Navigate,  redirect,  useLocation, useNavigate } from 'react-router-dom';
import Registered from '../Registered/Registered';

const NumberGeneration = (props) => {
    const {modal, filled, isRunning, setFilled} = props;
    const toggleModal2 = props.toggleModal2;
    const navigate = useNavigate();
    
    
    if(modal){
        useEffect(()=>{
            if(filled<100 && isRunning){
                setTimeout(()=> setFilled(prev => prev+=2), 100)
                if(filled === 98){
                    toggleModal2(false);
                    setFilled(0);
                    navigate('/registered');
                    
                }
            }
        }, [filled, isRunning])
    }
    

    return (
        <div className='fixed h-full w-full bg-opacity-0 overlay'>
            <div className='fixed left-0 right-0 top-0 m-auto w-full modal mx-auto pt-40 p-2'>
                <h1 className='md:w-1/2 w-2/3 md:text-7xl text-3xl mx-auto text-center'>Hold on. We are generating your <span>Nounish Club</span> number</h1>
                <div>
                    <h1 className='md:text-7xl text-3xl mx-auto text-center md:mt-20 mt-10'>{filled}%</h1>
                    <div className='mt-5 w-4/6 md:h-10 h-6 mx-auto rounded-full progress-bar flex flex-row justify-start items-stretch'>
                        <div className='bar' style={{
                            width: `${filled}%`,
                            transition: 'width',
                            borderRadius: '50px'
                        }}>

                        </div>

                    </div>
                </div>

            
            </div>

        </div>
        
    );
};

export default NumberGeneration;