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



function App() {
  const [count, setCount] = useState(0);
  const [modal1, setModal1] = useState(false);
  const toggleModal1 = () =>{
        setModal1(!modal1);
  }

  return (
    <div className='relative'>
      <Navbar toggleModal1={toggleModal1} modal={modal1}></Navbar>
      {
        modal1 && <Modal toggleModal1={toggleModal1} modal={modal1}></Modal>
      }

      <NumberGeneration></NumberGeneration>
      
      <Main></Main>
      <Gradient></Gradient>
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
      <SectionThree></SectionThree>
      <Footer></Footer>
    </div>
  )
}

export default App
