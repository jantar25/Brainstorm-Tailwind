import React from 'react'
import SampleFeature from '../Components/sampleFeature'

const FeaturesData = [
    {
        title:"Improving and distrusts instantly",
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo exercitationem facilis reiciendis id hic a voluptas neque nulla dignissimos quis numquam" ,   
    },
    {
        title:"Become the tended active",
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo exercitationem facilis reiciendis id hic a voluptas neque nulla dignissimos quis numquam" ,   
    },
    {
        title:"Message or am nothing",
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo exercitationem facilis reiciendis id hic a voluptas neque nulla dignissimos quis numquam" ,   
    },
    {
        title:"Really boy law county",
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo exercitationem facilis reiciendis id hic a voluptas neque nulla dignissimos quis numquam" ,   
    },
]


const Features = () => {
    return (
        <div className='flex flex-col w-full lg:flex-row justify-between px-5 sm:px-20 py-24' id="features">
            <div className='flex-1 flex flex-col justify-center items-start mb-8 lg:mr-20 text-left'>
                <h1 className='font-Manrope text-2xl sm:text-3xl font-[800] text-transparent bg-clip-text
                bg-gradient-to-r from-purple-400 via-pink-500 to-[#FF8A71] '>The Future is Now and You Just Need To Realize it.
                Step Into The Future Today & Make It Happen </h1>
                <p className='font-Manrope text-md font-[500] text-[#FF8A71] cursor-pointer mt-4'>
                   Request Early Access to Get Started</p>
            </div>
            <div className='flex-[1_1_20%] flex flex-col flex-start items-center' >
                {FeaturesData.map((item,index)=>(
                    <SampleFeature title={item.title} text={item.text} key={item.title + index} />
                ))}
            </div>
        </div>
    )
}

export default Features
