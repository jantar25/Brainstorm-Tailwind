import React from 'react'
import logo from "../Images/it.png"

const Footer = () => {
    return (
        <div className='flex flex-col justify-center items-center px-5 sm:px-20 py-24 bg-footer'>
            <div className='w-full text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500'>
                <h1 className='my-4 font-Manrope text-3xl sm:text-5xl font-black'>Do you want to step into the future before others</h1>
            </div>
            <div className='flex justify-center items-center border p-4 mb-40 cursor-pointer'>
                <p className='text-lg sm:text-2xl text-white font-Manrope'>Request Early Access</p>
            </div>
            <div className='flex justify-between items-start flex-wrap text-left w-full'>
                <div className='w-[250px] m-4 flex flex-col'>
                    <img className='w-[100px] mb-4' src={logo} alt={logo} />
                    <p className='text-sm text-white font-Manrope'>Kigali,Rwanda,All Rights Reserved</p>
                </div>
                <div className='w-[250px] m-4 flex flex-col justify-start'>
                    <h4 className='text-lg text-white font-Manrope mb-4'>Links</h4>
                    <p className='text-sm font-[100] text-white font-Manrope my-2'>Overons</p>
                    <p className='text-sm font-[100] text-white font-Manrope my-2'>Social Media</p>
                    <p className='text-sm font-[100] text-white font-Manrope my-2'>Counters</p>
                    <p className='text-sm font-[100] text-white font-Manrope my-2'>Contacts</p>
                </div>
                <div className='w-[250px] m-4 flex flex-col justify-start'>
                    <h4 className='text-lg text-white font-Manrope mb-4'>Compagny</h4>
                    <p className='text-sm font-[100] text-white font-Manrope my-2'>Trems&Conditions</p>
                    <p className='text-sm font-[100] text-white font-Manrope my-2'>Privacy Policy</p>
                    <p className='text-sm font-[100] text-white font-Manrope my-2'>Contact</p>
                </div>
                <div className='w-[250px] m-4 flex flex-col justify-start'>
                    <h4 className='text-lg text-white font-Manrope mb-4'>Get In touch</h4>
                    <p className='text-sm font-[100] text-white font-Manrope my-2'>Kigali,Rwanda</p>
                    <p className='text-sm font-[100] text-white font-Manrope my-2'>+250988474874</p>
                    <p className='text-sm font-[100] text-white font-Manrope my-2'>info@pay.net</p>
                </div>
            </div>
            <div className='mt-8 text-center w-full'>
                <p className='text-sm text-white font-Manrope'> © 2022 Jantar, All Rights Reserved </p>
            </div>
        </div>
    )
}

export default Footer
