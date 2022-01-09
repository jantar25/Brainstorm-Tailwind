import React from 'react'
import people from '../Images/people.png'
import ai from '../Images/ai.png'

const Header = () => {
    return (
        <div className='flex flex-col lg:flex-row px-5 py-10 sm:px-20' id='Home'>
            <div className='flex-1 flex justify-center items-start flex-col mb-24 lg:mr-32'>
                <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-red-600 font-Manrope
                text-3xl md:text-5xl font-black'>
                    Build something amazing with Brainstorm Open AI</h1>
                <p className='font-Manrope text-md md:text-lg text-text mt-6'>
                    The ability of a computer or a robot controlled by a computer to do tasks that are usually
                     done by humans because they require human intelligence and discernment</p>
                <div className='flex w-full mt-8 mb-4'>
                    <input className='bg-[#052D56] rounded-l font-Manrope text-md md:text-lg text-white px-4 flex-2 w-full 
                    min-h-[40px] md:min-h-[50px]' type='Email' placeholder='Your Email'/>
                    <button className='flex-[1_1_60%] bg-[#FF4820] min-h-[40px] md:min-h-[50px] px-4 w-full rounded-r font-Manrope 
                    font-bold text-white text-md md:text-lg' type='button'>Get Started</button>
                </div>
                <div className='flex flex-col md:flex-row w-full justify-start items-center mt-8'> 
                    <img className='w-[181px] h-[38px]' src={people} alt="people" />
                    <p className='font-Manrope text-md text-center text-white md:ml-4'>
                        1,850 people requested access a visit in last 24 hours.</p>
                </div>
            </div>
            <div className='flex-1 flex justify-center items-center'>
                <img className='w-full h-full' src={ai} alt="ai" />
            </div>
        </div>
    )
}

export default Header
