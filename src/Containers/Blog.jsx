import React from 'react'
import {Article} from '../Components'
import blog01 from '../Images/blog01.jpg'
import blog02 from '../Images/blog02.png'
import blog03 from '../Images/blog03.png'
import blog04 from '../Images/blog04.png'
import blog05 from '../Images/blog05.png'

const Blog = () => {
    return (
        <div className='flex flex-col px-5 sm:px-20 py-24'>
           <div className='w-full h-full text-left mb-20 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500'>
               <h1 className='my-4 font-Manrope text-3xl sm:text-4xl font-black'>
                   A lot is happening,We are blogging about it.</h1>
           </div>
           <div className='flex flex-col lg:flex-row  '>
               <div className='flex-[0.75] mb-8 lg:mb-0 lg:mr-8'>
                   <Article imageUrl={blog01} date="Jan 09, 2022" title="Brainstorm and Open AI is the future,let's explore how itis" />
               </div>
               <div className='flex-1 grid grid-cols-1 md:grid-cols-2 gap-8'>
                   <Article imageUrl={blog02} date="Jan 09, 2022" title="Brainstorm and Open AI is the future,let's explore how itis" />
                   <Article imageUrl={blog03} date="Jan 09, 2022" title="Brainstorm and Open AI is the future,let's explore how itis" />
                   <Article imageUrl={blog04} date="Jan 09, 2022" title="Brainstorm and Open AI is the future,let's explore how itis" />
                   <Article imageUrl={blog05} date="Jan 09, 2022" title="Brainstorm and Open AI is the future,let's explore how itis" />
               </div>
           </div>
        </div>
    )
}

export default Blog
