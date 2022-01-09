import React from 'react'

const Feature = ({title,text}) => {
    return (
        <div className='flex-1 flex-col my-4 sm:m-4 min-w-full sm:min-w-[210px]'>
            <div className='max-w-[180px]'>
                <div className='w-[40px] h-[3px] bg-gradient-to-r from-purple-400 via-pink-500 to-[#FF8A71] 
                shadow-lg mb-[5px]'/>
                <h1 className='text-white font-Manrope text-xl font-[800] '>{title}</h1>
            </div>
            <div className='max-w-[700px] mt-2'>
                <p className='text-text font-Manrope text-md font-[500]'>{text}</p>
            </div>
        </div>
    )
}

export default Feature
