import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({imgURL,customerName,rating,feedback}) => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <img src={imgURL} alt={customerName} className='rounded-full object-cover w-[120px] h-[120px]' />
        <p className='info-text text-center mt-6 max-w-sm  '>{feedback}</p>
        <div className='mt-3 flex justify-center items-center gap-2.5'>
            <img src={star} alt="star" className='w-[24px] h-[24px] object-contain m-0' />
            <p className='text-xl font-montserrat text-slate-gray '>({rating})</p>
        </div>
        <h3>{customerName}</h3>
    </div>
  )
}

export default ReviewCard