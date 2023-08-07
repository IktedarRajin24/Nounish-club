/* eslint-disable no-unused-vars */
import React from 'react';
import './Modal.css';

const Modal = () => {
    return (
        <div className='modal md:min-w-full md:min-h-full h-auto relative '>
            <h1 className='md:text-5xl text-3xl  text-center'>Choose your wallet</h1>
            <div className='md:flex justify-center items-center h-80 w-9/12 mx-auto md:mt-36 mt-16 mb-20'>
                <div className='px-5 py-10 h-full md:w-64 w-9/12 md:mx-0 mx-auto border-2 border-solid border-gray-600 hover:border-white md:hover:h-96 md:hover:w-70 hover:w-72 text-center'>
                    <img className='w-8 h-8 mx-auto mb-3' src="images/metamask.png" alt="metamask" />
                    <h2 className='text-md font-bold mb-3'>MetaMask</h2>
                    <p className='text-sm w-32 font-thin mx-auto mb-20'>Connect to your MetaMask Wallet</p>
                    <button className='border-2 p-2 text-sm font-bold'>Connect Wallet</button>
                </div>
                <div className='px-5 py-10 h-full md:w-64 w-9/12 md:mx-0 mx-auto  border-2 border-solid border-gray-600 hover:border-white md:hover:h-96 md:hover:w-70 hover:w-72 text-center'>
                    <img className='w-6 h-6 mx-auto mb-5' src="images/coinbase.png" alt="coinbase-wallet" />
                    <h2 className='text-md font-bold mb-3'>Coinbase Wallet</h2>
                    <p className='text-sm w-32 font-thin mx-auto mb-20'>Scan with Coinbase Wallet to connect</p>
                    <button className='border-2 p-2 text-sm font-bold'>Connect Wallet</button>
                </div>
                <div className='px-5 py-10 h-full md:w-64 w-9/12 md:mx-0 mx-auto border-2 border-solid border-gray-600 hover:border-white md:hover:h-96 md:hover:w-70 hover:w-72 text-center'>
                    <img className='w-6 h-6 mx-auto mb-5' src="images/walletConnect.png" alt="walletConnect" />
                    <h2 className='text-md font-bold mb-3'>WalletConnect</h2>
                    <p className='text-sm w-32 font-thin mx-auto mb-16'>Scan with WalletConnect to connect</p>
                    <button className='border-2 p-2 text-sm font-bold'>Connect Wallet</button>
                </div>
                <div className='px-5 py-10 h-full md:w-64 w-9/12 md:mx-0 mx-auto border-2 border-solid border-gray-600 hover:border-white md:hover:h-96 md:hover:w-70 hover:w-72 text-center'>
                    <img className='w-4 h-5 mx-auto mb-3' src="images/portis.png" alt="portis" />
                    <h2 className='text-md font-bold mb-3'>Portis</h2>
                    <p className='text-sm w-32 font-thin mx-auto mb-24'>Connect with your Portis account</p>
                    <button className='border-2 p-2 text-sm font-bold'>Connect Wallet</button>
                </div>
                <div className='px-5 py-10 h-full md:w-64 w-9/12 md:mx-0 mx-auto border-2 border-solid border-gray-600 hover:border-white md:hover:h-96 md:hover:w-70 hover:w-72 text-center'>
                    <img className='w-5 h-5 mx-auto mb-3' src="images/torus.png" alt="torus" />
                    <h2 className='text-md font-bold mb-3'>Torus</h2>
                    <p className='text-sm w-32 font-thin mx-auto mb-24'>Connect with your Torus account</p>
                    <button className='border-2 p-2 text-sm font-bold'>Connect Wallet</button>
                </div>
            </div>
            
        </div>
    );
};

export default Modal;