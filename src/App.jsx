/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Gradient from './components/Layout/Gradient'
import SectionOne from './components/SectionOne/SectionOne'
import SectionTwo from './components/SectionTwo/SectionTwo'
import SectionThree from './components/SectionThree/SectionThree'
import Modal from './components/Modal/Modal'
import NumberGeneration from './components/NumberGeneration/NumberGeneration'
import Registered from './components/Registered/Registered'
import { Link } from 'react-router-dom'




function App() {
  const [count, setCount] = useState(0);
  const [modal1, setModal1] = useState(false);
  const toggleModal1 = (value) =>{
        setModal1(value);
        if(value){
          document.body.style.overflow = 'hidden'
        }else{
          document.body.style.overflow = 'auto'
        }
  }
  const [modal2, setModal2] = useState(false);
  const toggleModal2 = (value) =>{
        setModal2(value);
        if(value){
          document.body.style.overflow = 'hidden'
        }else{
          document.body.style.overflow = 'auto'
        }
  }

  const [filled, setFilled] = useState(0);
  const [running, isRunning] = useState(false);


  return (
    <div className='relative overflow-x-hidden'>
      <Navbar toggleModal1={toggleModal1} modal={modal1}></Navbar>
      {
        modal1 && <Modal toggleModal1={toggleModal1} modal={modal1}></Modal>
      }
      {
        modal2 && <NumberGeneration filled={filled} isRunning={isRunning} setFilled={setFilled} modal={modal2} toggleModal2={toggleModal2}></NumberGeneration>
      }
      {/* {
        filled === 98 && <Link to="/registered" >
          <Registered/>
        </Link>
      } */}

      
      
      <Main toggleModal2={toggleModal2} modal={modal2}></Main>
      <Gradient></Gradient>
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
      <SectionThree></SectionThree>
      <Footer></Footer>
    </div>
  )
}

export default App
