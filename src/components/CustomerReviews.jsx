import React from 'react'
import {reviews} from '../constants/'
import ReviewCard from './ReviewCard'

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='font-palanquin text-center text-4xl font-bold' >What are our 
        <span className='text-orange-600'>{' '}Customer</span>
        {' '} saying?</h3>
        <p className='m-auto mt-4 info-text max-w-lg text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quae natus eius dolor?</p>
      <div className="mt-4 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">

{reviews.map((review,index)=>(
  <ReviewCard
    key={review.customerName} {...review}

  
  />

))}
      </div>
    </section>
  )
}

export default CustomerReviews
