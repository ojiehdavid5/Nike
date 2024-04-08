import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({imgURL,customerName,rating,feedback}) => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <img
        src={imgURL}
        alt='customers'
        className='rounded-full object-cover  h-[120px] w-[120px]'
        
        
        />
        <p className='mt-6  max-w-sm text-center font-montserrat text-slate-600 text-lg leading-7 '>{feedback}</p>
        <div className="mt-3 flex justify-center item-center gap-2.5">
            <img src={star}
            width={24}
            height={24} 
            
            alt="star"
            className='object-contain m-0'
             />
             <p className='text-4xl font-montserrat text-slate-600'>({rating})</p>
        </div>
        <h3 className='text-3xl font-bold text-center'>{customerName}</h3>
    </div>
  )
}

export default ReviewCard
