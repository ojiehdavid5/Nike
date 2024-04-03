import React from 'react'

const Begin = () => {
  return (
    <>
    <h1 className='text-center text-3xl text-green-400'>
      helloworld
      
    </h1>
    <div className=" w-full h-10 bg-violet-200 border-violet-600 rounded-md p-2 mx-2">
        <p className='text-center font-mono font-extrabold'>A div</p>
    </div>




    {/* layout */}


    <div className='w-10 top-0 bg-red-500 fixed h-10 left-10'>

    </div>
    <div className="flex justify-between space-x-6 mt-10">
        <div className="h-16 w-16 rounded-full bg-blue-500"></div>
        <div className="h-16 w-16 rounded-full bg-blue-500"></div>




        <div className="h-16 w-16 rounded-full bg-blue-500"></div>
    </div>

    <div className="grid grid-cols-5 gap-4">
        <div className="bg-violet-500 h-12 w-18"></div>
        <div className="bg-violet-500 h-12 w-18"></div>
        <div className="bg-violet-500 h-12 w-18"></div>
        <div className="bg-violet-500 h-12 w-18"></div>
        <div className="bg-violet-500 h-12 w-18"></div>
    </div>
    <div className="lg:block hidden">
        <p>hello</p>
    </div>

    <button className='my-2 rounded-lg bg-blue-500 px-4 py-2 mt-10 text-white ml-10 hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200 active:bg-blue-900'>
      Click me
    </button>
<ul className='my-2 space-y-6'>
  <li className='bg-white p-2  first:bg-yellow-100'>Item 1</li>
  <li className='bg-white p-2  first:bg-yellow-100 odd:bg-green-500 even:bg-blue-500'>Item 1</li>
  <li className='bg-white p-2  first:bg-yellow-100 odd:bg-green-500 even:bg-blue-500'>Item 1</li>
  <li className='bg-white p-2  first:bg-yellow-100 odd:bg-green-500 even:bg-blue-500'>Item 1</li>
  <li className='bg-white p-2  first:bg-yellow-100 odd:bg-green-500 even:bg-blue-500'>Item 1</li>
  <li className='bg-white p-2  first:bg-yellow-100 odd:bg-green-500 even:bg-blue-500'>Item 1</li>
  <li className='bg-white p-2  first:bg-yellow-100 odd:bg-green-500 even:bg-blue-500'>Item 1</li>
  <li className='bg-white p-2  first:bg-yellow-100 odd:bg-green-500 even:bg-blue-500'>Item 1</li>
</ul>

{/* darkTheme */}
<div className=" m-10 rounded-lg bg-white px-6 py-8 shadow-lg ring-1 ring-slate-900/5">
  <h3>This s a text element </h3>
  <p>This is a even longer p tag element</p>

  <button 
  id='toggleDark'
  
  className="text-blue-900 px-4 py-2 text-sm font-medium mt-8 bg-blue-100 rounded-md"
  onClick="document.body.classList.toggle('dark')"
  
  
  >
    Toggle dark mode

  </button>
</div>


<p className='text-[120px] text-chestnut bg-stone-100 p-[16px]
'>
  chestNut color
</p>
    
    </>
      
    
  )
}

export default Begin
