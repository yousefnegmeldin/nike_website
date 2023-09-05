import React from 'react'
import { arrowRight } from '../assets/icons'
import Button from '../components/Button'
import {statistics} from '../constants'
import { bigShoe1 } from '../assets/images'
const Hero = () => {
  return (
    <section id="home" className='w-full max-container flex xl:flex-row flex-col justify-center min-h-screen border-2 border-red-500 '>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-coral-red'>our summer collection!</p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
          <br />
          <span className='text-coral-red inline-block mt-3 '>Nike</span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 my-4 sm:max-w-sm'>discover stylish nike shoes or ignore our competitor, adidas!</p>
        <Button label="Show More" iconUrl={arrowRight} />

        <div className='flex gap-2  mt-16 items-center'>
            {statistics.map(item => (<div key={item.label} className='text-left m-4'>
              <span className='font-montserrat  font-bold text-2xl'>{item.value}</span>
              <br />
              <span className='text-slate-400'>{item.label}</span>
            </div>))}
        </div>
      </div>
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen 
      max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img src={bigShoe1} alt="shoe collection" className='w-[610px] h-[500px] z-10 relative object-contain' />
        <div>
          {shoes.map(shoe => (<div key={shoe}>
            <ShoeCard />
          </div>))}
        </div>
      </div>
    </section>
  )
}

export default Hero