import React from 'react'
import google from '../Images/google.png'
import slack from '../Images/slack.png'
import atlassian from '../Images/atlassian.png'
import dropbox from '../Images/dropbox.png'
import shopify from '../Images/shopify.png'

const Brand = () => {
    return (
        <div className='flex flex-wrap justify-center items-center px-5 sm:px-20 py-10'>
            <div className='flex-1 justify-center items-center m-4 min-w-[120px] max-w-[150px]'>
                <img src={google} alt='google' />
            </div>
            <div className='flex-1 justify-center items-center m-4 min-w-[120px] max-w-[150px]'>
                <img src={slack} alt='slack' />
            </div>
            <div className='flex-1 justify-center items-center m-4 min-w-[120px] max-w-[150px]'>
                <img src={atlassian} alt='atlassian' />
            </div>
            <div className='flex-1 justify-center items-center m-4 min-w-[120px] max-w-[150px]'>
                <img src={dropbox} alt='dropbox' />
            </div>
            <div className='flex-1 justify-center items-center m-4 min-w-[120px] max-w-[150px]'>
                <img src={shopify} alt='shopify' />
            </div>
        </div>
    )
}

export default Brand
