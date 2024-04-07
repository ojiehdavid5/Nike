import React from 'react'
import {offer} from '../assets/images'
import Button from "./Button"

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>


      <div className="flex-1">
        <img src={offer} width={773} height={687}
        className='object-container w-full'/>
      </div>
      <div className="flex flex-1 flex-col ">
        <p className="text-xl font-montserrat text-orange-200">
          Our summer collections
        </p>

        <h2 className="mt-10 font-palanquin text-4xl capitalized  font-bold">
          We provide you
          <br />
          <span className=" text-orange-500 ">Super{""}</span>
          <span className=" text-orange-500 "> Quality{""}</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg ">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta error
          amet consequuntur nisi consequatur architecto, delectus ea aliquam
          nobis velit!
        </p>
        <p className="mt-6 lg:max-w-lg  ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          nostrum hic suscipit minus est ullam.
        </p>
        <div className="mt-12">
          <Button label="View details" />
        </div>
      </div>

      
    </section>
  )
}

export default SpecialOffer
