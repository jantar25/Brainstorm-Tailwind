import React,{useState} from 'react'
import tes from "../Images/it.png"
import {RiCloseLine,RiMenu4Line} from 'react-icons/ri'
import { Link } from 'react-scroll'

const Menu = ()=>(
  <>
    <p className="text-white font-Manrope mx-4 my-1 text-base">
    <Link className="cursor-pointer" to="Home" smooth={true} duration={500}>Home</Link></p>
    <p className="text-white font-Manrope mx-4 my-1 text-base">
    <Link className="cursor-pointer" to="WhatsBrain" smooth={true} duration={500}>About Brainstorm</Link></p>
    <p className="text-white font-Manrope mx-4 my-1 text-base">
    <Link className="cursor-pointer" to="possibilities" smooth={true} duration={500}>Open AI</Link></p>
    <p className="text-white font-Manrope mx-4 my-1 text-base">
    <Link className="cursor-pointer" to="features" smooth={true} duration={500}>Case Studies</Link></p>
    <p className="text-white font-Manrope mx-4 my-1 text-base">
    <Link className="cursor-pointer" to="blog" smooth={true} duration={500}>Library</Link></p>
  </>
)

const Navbar = () => {

  const [toggleMenu,setToggleMenu] = useState(false);

    return (
        <div className="flex justify-between items-center px-5 sm:px-20 py-8">
          <div className="flex1 flex justify-start items-center">
            <div className="flex items-center mr-8">
              <div className="mr-1 w-14">
                <img className='min-w-full' src={tes} alt="test" />
              </div>
              <h1 className="hidden sm:flex text-3xl font-Manrope text-transparent bg-clip-text 
              bg-gradient-to-br from-pink-400 to-red-600">Brainstorm</h1>
            </div>
            <div className="hidden lg:flex">
              <Menu />
            </div>
          </div>
          <div className="hidden md:flex justify-end items-center">
            <p className="text-white font-Manrope mx-4 text-base"><a href='SignIn'>Sign In</a></p>
            <button type='button' className="px-6 py-2 text-white font-Manrope 
            bg-[#FF4820] rounded">Sign Up</button>
          </div>
          <div className='flex lg:hidden ml-2 relative'>
            {toggleMenu ?
            <RiCloseLine style={{cursor:'pointer'}} color="#fff" size={27} onClick={()=>{setToggleMenu(false)}}/>
          : <RiMenu4Line style={{cursor:'pointer'}} color="#fff" size={27} onClick={()=>{setToggleMenu(true)}}/>}
          {toggleMenu && (
            <div className="flex justify-end items-end flex-col bg-footer text-left p-8 absolute
             top-8 right-0 mt-4 min-w-[210px] rounded shadow-lg shadow-blue-700">
              <div>
                <Menu />
                <div className="block md:hidden justify-end items-center flex-col mx-4">
                  <p className="text-white font-Manrope my-4 text-base">Sign In</p>
                  <button type='button' className="bg-[#FF4820] px-6 py-2 text-white font-Manrope rounded">Sign Up</button>
                </div>
              </div>
            </div>
          )}
          </div>
      </div>
    )
}

export default Navbar
