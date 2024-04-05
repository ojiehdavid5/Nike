import React from 'react'
import Button from'./Button'
import {arrowRight} from '../assets/icons'
import {statistics}  from '../constants'
const Hero = () => {
  return (
    <section 
    id="home"
    className='w-full border-2 border-red-500 p-2 h-full xl:flex-row flex-col justify-center min-h-screen max-container'
    
    
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p clasname>Our summer collections</p>
        <h1 className='mt-30 font-palanquin text-8l max-sm:text-[70px]'> 
          <span>The new Arrival</span>
          <br />
          <span>Nike</span>
          Shoes
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta error amet consequuntur nisi consequatur architecto, delectus ea aliquam nobis velit!</p>
        <Button
        label='Show now '
        iconURL={arrowRight}
        
        />
        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap'>

          {statistics.map((stat,index)=>(
            <div className=''>
              <p>{stat.value}</p>
              <p>{stat.label}</p>
            </div>



          ))}
        </div>
      </div>
      
    </section>
  )
}

export default Hero
