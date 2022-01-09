import React from 'react'
import possible from "../Images/possibility.png"

const Possibility = () => {
    return (
        <div className='flex flex-col md:flex-row px-5 sm:px-20 py-24' id='possibilities'>
            <div className='flex-1 flex justify-start items-center md:mr-8'>
                <img className='w-full h-full' src={possible} alt='possible' />
            </div>
            <div className='flex-1 flex flex-col justify-end items-start'>
                <h3 className='font-Manrope text-md font-[500] text-[#71E5FF] cursor-pointer mt-4 lg:mt-0'>
                    Request Early Access to Get Started</h3>
                <h1 className='font-Manrope text-2xl sm:text-4xl font-[800] my-4 text-transparent bg-clip-text
                bg-gradient-to-b from-purple-400 via-pink-500 to-[#FF8A71] '>
                    The Possibilities are beyond your imagination</h1>
                <p className='text-text mb-8 font-Manrope text-md font-[500]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Facilis nisi similique, sunt culpa dolores veritatis 
                    magni assumenda a earum iusto Facilis nisi similique, sunt culpa dolores veritatis 
                    magni assumenda a earum iusto?</p>
                <h3 className='font-Manrope text-md font-[500] text-[#FF8A71] cursor-pointer mt-4 lg:mt-0'>
                    Request Early Access to Get Started</h3>
            </div>
        </div>
    )
}

export default Possibility
