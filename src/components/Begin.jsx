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
    <div className="md:block hidden">
        <p>hello</p>
    </div>

    
    </>
      
    
  )
}

export default Begin
