/* eslint-disable no-unused-vars */
import React from 'react';

const Footer = () => {
    return (
        <div className='footer mt-10 pt-5 h-42 pb-10'>
            <div className='md:hidden mx-auto w-32'>
                <img src="images/Group 255.png" alt="" />
            </div>
            <div className={`logo md:flex mx-auto gap-5 w-1/5 h-8  hidden `}>
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
            <div className='md:mt-28 mt-8 w-9/12 mx-auto md:flex justify-between items-end'>
                <div className='flex gap-3 w-14 md:mb-0  mb-5 md:mx-0 mx-auto'>
                    <img src="images/twitter.svg" alt="" />
                    <img src="images/discord.svg" alt="" />
                </div>
                <p className='text-xs w-48 md:mx-0 mx-auto'>Made with ❤️ in the nouniverse.</p>
            </div>
            
        </div>
    );
};

export default Footer;