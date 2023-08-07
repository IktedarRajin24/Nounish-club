/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Navbar = ({toggleModal1, modal1}) => {

    return (
        <div className='w-full px-8 py-6 flex justify-between items-center'>
            <div className='md:hidden'>
                <img src="images/Group 255.png" alt="" />
            </div>
            <div className={`logo md:flex gap-5 w-1/5 h-8  hidden`}>
                <img src="images/Union.png" alt="" className=''/>
                <div className='brand-name flex items-baseline'>
                    <img src="images/N.png" alt="" />
                    <img src="images/o.png" alt="" />
                    <img src="images/u.png" alt="" />
                    <img src="images/n_.png" alt="" />
                    <img src="images/i.png" alt="" />
                    <img src="images/s.png" alt="" />
                    <img src="images/h.png" alt="" />&nbsp;
                    
                    <img src="images/Group.png" alt="" />
                </div>

            </div>

            <button className='border-2 border-white md:w-44 w-28 md:text-lg text-xs border-solid text-white font-bold md:px-4 md:py-4 px-2  py-2' onClick={toggleModal1}>
                Connect Wallet
            </button>
            
        </div>
    );
};

export default Navbar;