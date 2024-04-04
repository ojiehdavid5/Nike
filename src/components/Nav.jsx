import React from 'react'
import {headerLogo} from '../assets/images'
import {hamburger} from "../assets/icons"

const Nav = () => {
  return (
    <header  className='padding-x py-8 z-10 w-full'>
      <nav className='flex justify-between items-center  max-container '>
        <a href='/'>
          <img src=
          
          {headerLogo}
          alt='Logo'
          width={140}
          height={29}
          
          ></img>
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          

        </ul>
      </nav>

      
    </header>
  )
}

export default Nav
