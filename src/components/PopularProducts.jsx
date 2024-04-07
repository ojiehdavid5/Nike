import React from 'react'
import { products } from '../constants'
import PopularProductCard from '../components/PopularProductCard'

const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className="flex flex-col justify-start gap-4">
        <h2 className='text-4xl font-bold font-palanquin '> <span className='text-orange-500'>Popular </span>Products</h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-500 '> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus facere cum modi! Sapiente vitae, sed quibusdam ipsum architecto eligendi dolorum! Vel, omnis neque possimus atque accusamus dolorum voluptatem excepturi totam?</p>
      </div>


      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {products.map((product)=>(
          <PopularProductCard key={product.name} {...product}/>
        ))}
      </div>

      
    </section>
  )
}

export default PopularProducts
