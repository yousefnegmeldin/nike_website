import React from 'react'

const Button = ({label,iconUrl,fullWidth}) => {
  return (
    <button className={`${fullWidth && 'w-full'} text-lg flex p-4 px-7 justify-center font-montserrat items-center gap-2 bg-coral-red text-white rounded-full`}>
        {label}
        <img src={iconUrl} alt="arrow right icon" className='ml-2'/>
    </button>
  )
}

export default Button