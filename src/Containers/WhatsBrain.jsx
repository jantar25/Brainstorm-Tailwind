import React from 'react'
import Feature from '../Components/Feature'
import SampleFeature from '../Components/sampleFeature'

const WhatsBrain = () => {
    return (
        <div className=' flex flex-col p-8 bg-gradient-to-br from-[#002853] to-[#81AFDD]-600 mx-5 md:mx-20 
        my-24' id='WhatsBrain'>
           <div className='flex'>
                <SampleFeature title="What is Brainstorm" text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Quo exercitationem facilis reiciendis id hic a voluptas neque nulla dignissimos quis numquam, 
                quibusdam obcaecati nam natus inventore dolorem! Laborum distinctio iste sint debitis 
                animi ea ipsam nihil architecto fugiat iusto'/>
           </div>
           <div className='flex flex-col lg:flex-row flex-start lg:justify-between lg:items-center mt-16 lg:mb-8'>
               <h1 className='font-Manrope text-2xl sm:text-3xl font-[800] max-w-[510px] text-transparent bg-clip-text
                bg-gradient-to-r from-purple-400 via-pink-500 to-[#FF8A71] '>
                   The possibilities are beyond your imagination</h1>
               <p className='font-Manrope text-lg font-[500] text-[#FF8A71] cursor-pointer mt-4 lg:mt-0'>
                   Explore our library</p>
           </div>
           <div className='flex flex-wrap mt-8'>
           <Feature title="Chatbots" 
               text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
               Quo exercitationem facilis reiciendis id hic a voluptas neque nulla dignissimos quis numquam"/>
           <Feature title="Knowledgebase" 
               text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
               Quo exercitationem facilis reiciendis id hic a voluptas neque nulla dignissimos quis numquam, 
               quibusdam obcaecati nam natus inventore dolorem!"/>
           <Feature title="Education" 
               text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
               Quo exercitationem facilis reiciendis id hic a voluptas "/>  
           </div>
        </div>
    )
}

export default WhatsBrain
