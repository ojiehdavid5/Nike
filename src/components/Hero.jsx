import React from 'react'
import{useState} from 'react'
import Button from'./Button'
import {arrowRight} from '../assets/icons'
import {statistics,shoes}  from '../constants'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../components/ShoeCard'
const Hero = () => {
  const[bigShoeImg,setBigShoeImg]=useState(bigShoe1);
  return (
    <section 
    id="home"
    className='w-full  px-12  py-12  p-2 h-full flex xl:flex-row  flex-col justify-center min-h-screen max-container'
    
    
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

          {statistics.map((stat ,index)=>(
            <div key={index} className=''>
              <p className='text-4xl font-palanquin font-bold' >{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-500'>{stat.label}</p>
            </div>



          ))}
        </div>

        
      </div>


      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-blue-100  bg-cover  bg-hero  bg-center' >
        <img
        src={bigShoeImg}
        alt='shoe collection'
        width={610}
        height={500}
        className='object-contain relative z-10'
        
        
        />
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[15%] sm:-left-[1%] '>
          {shoes.map((shoe,index)=>(
            <div key={index}>
              <ShoeCard
              imgURL={shoe}
              changeBigShoeImage={(shoe)=>setBigShoeImg(shoe)}
              bigShoeImg={bigShoeImg}
              
              
              />


            </div>
          ))}
        </div>
        </div>

      
    </section>
  )
  
}

export default Hero
