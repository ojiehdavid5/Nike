import React from 'react'

const ShoeCard = ({imgURL,changeBigShoeImage,bigShoeImg}) => {

  const handleClick=()=>{
    if(bigShoeImg!== imgURL.bigShoe){
      changeBigShoeImage(imgURL.bigShoe)
    }
  }
  return (
    <div className= {`border-2 rounded-xl
    ${bigShoeImg  === imgURL
    
    ?'border-orange-500':'border-transparent'} cursor-pointer max-sm:flex-1
    
    
    `}  onClick={handleClick} >

      <div className='flex justify-center items-center bg-slate-500 bg-center bg-cover w-40 h-40 rounded-xl max_sm:p-4'>
        <img 
        src={imgURL.thumbnail}
        alt='shoe collection'
        width={127}
        height={103}
        className='object-contain'
        
        />
      </div>
      
    </div>
  )
}

export default ShoeCard
