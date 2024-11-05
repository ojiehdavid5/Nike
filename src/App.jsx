import React from 'react'
import Begin from './components/Begin'


import Nav from './components/Nav'
import Hero from './components/Hero'
import CustomerReviews from './components/CustomerReviews'
import PopularProducts  from './components/PopularProducts'
import SuperQuality from './components/SuperQuality'
import SpecialOffer from './components/SpecialOffer'
import Review from './components/Review'
import Services from './components/Services'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='relative'>
      <Nav/>
      <section className='xl:padding-1 wide:padding-r padding-b'>
        <Hero/>
      </section>
      <section className='padding'>
        
<PopularProducts/>
      </section>
      <section className='padding'>

<SuperQuality/>
      </section>
      <section className='padding-x py-10'>
<Services/>
      </section>
      <section className='padding'>
<SpecialOffer/>
      </section>
      <section className='padding bg-pale-blue'>
        <CustomerReviews/>

      </section>
      <section className='padding bg-pale-blue'>
        <Review/>

      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe/>

      </section>
      <section className='padding-x bg-black padding-t pb-8'>
     < Footer/>

      </section>

    </main>

  )
}

export default App
