import React from 'react'

const Article = ({imageUrl,date,title}) => {
    return (
        <div className='w-full h-full bg-footer flex flex-col'>
            <div className='w-full h-full bg-bg'>
                <img className='w-full h-full' src={imageUrl} alt='Blog' />
            </div>
            <div className='h-full flex flex-col justify-between px-6 py-4'>
                <div>
                    <p className='font-Manrope text-sm text-white'>{date}</p>
                    <h3 className='font-Manrope text-md md:text-lg text-white mb-20 cursor-pointer'>{title}</h3>
                </div>
                <p className='font-Manrope text-md text-white cursor-pointer'>Read full Article</p>
            </div>
        </div>
    )
}

export default Article
