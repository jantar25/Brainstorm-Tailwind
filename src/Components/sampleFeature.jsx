import React from 'react'

const sampleFeature = ({title,text}) => {
    return (
        <div className='flex flex-col sm:flex-row justify-between items-start my-4 sm:m-4 w-full'>
            <div className='flex-1 max-w-[200px] mr-8'>
                <div className='w-[40px] h-[3px] bg-gradient-to-r from-purple-400 via-pink-500 to-[#FF8A71] 
                shadow-lg mb-[5px]'/>
                <h1 className='text-white font-Manrope text-xl font-[800] '>{title}</h1>
            </div>
            <div className='flex-2 flex max-w-[450px]'>
                <p className='text-text mt-2 sm:mt-0 font-Manrope text-md font-[500]'>{text}</p>
            </div>
        </div>
    )
}

export default sampleFeature
