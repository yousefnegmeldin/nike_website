import React from 'react'

const PopularProductCard = ({imgURL,name,price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img src={imgURL} alt={name}  className='w-[280px] h-[280px]'/>
        <p className='text-2xl my-4 indent-3 font-bold'>{name}</p>
        <p className='text-coral-red text-3xl indent-3'>{price}</p>
    </div>
  )
}

export default PopularProductCard