import React from 'react'
import Button from'./Button'
import {arrowRight} from '../assets/icons'
import {statistics}  from '../constants'
import { bigShoe1 } from '../assets/images'
const Hero = () => {
  return (
    <section 
    id="home"
    className='w-full border-2 border-red-500 p-2 h-full xl:flex-row flex-col justify-center min-h-screen max-container'
    
    
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className='text-xl font-montserrat text-orange-200'>Our summer collections</p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[70px] max-sm:leading-[82] font-bold'> 
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
          <br />
          <span  className='mt-3 text-orange-500 inline-block'>Nike{''}</span>
          {'    '}Shoes
        </h1>
        <p className='font-montserrat text-slate-500 text-lg leading-8 mt-6 mb-14 sm:max-w-sm '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta error amet consequuntur nisi consequatur architecto, delectus ea aliquam nobis velit!</p>
        <Button
        label='Show now '
        iconURL={arrowRight}
        
        />
        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>

          {statistics.map((stat,index)=>(
            <div className=''>
              <p className='text-4xl font-palanquin font-bold' >{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-500'>{stat.label}</p>
            </div>



          ))}
        </div>
      </div>
      <div>
        <img
        src={bigShoe1}
        alt='shoe collection'
        width={610}
        height={500}
        
        />
      </div>
      
    </section>
  )
}

export default Hero
