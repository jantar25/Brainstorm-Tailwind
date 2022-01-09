import React from 'react'

const Cta = () => {
    return (
        <div className='border flex flex-col sm:flex-row justify-between items-center p-4 sm:p-8 m-5 sm:m-16 rounded-2xl
        bg-gradient-to-r from-[#AE67FA] to-[#F49867] '>
            <div className='text-center sm:text-left'>
                <p className='font-Manrope text-sm font-[500]'>Request Early Access to Get Started</p>
                <h3 className='font-Manrope text-md sm:text-lg font-[800]'>Register today & Start exploring the endless possibilities</h3>
            </div>
            <div className='flex justify-center items-center mt-8 sm-mt-0 sm:ml-8 text-white'>
                <button className='bg-black rounded-3xl font-Manrope text-sm font-[500] px-2 py-3 min-w-[150px]'>
                    Get Started</button>
            </div>
        </div>
    )
}

export default Cta
