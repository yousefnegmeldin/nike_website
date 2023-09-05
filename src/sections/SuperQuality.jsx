import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"
import Button from "../components/Button"


const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-col flex-1">
        <h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          We provide you
          <br />
          <span className='text-coral-red'>Super</span>
          <span className='text-coral-red'> Quality</span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>discover stylish nike shoes or ignore our competitor, adidas!</p>
        <div className="mt-11">
          <Button label="View Details" iconUrl={arrowRight} fullWidth />
        </div>
        
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe8"  className="w-[570px] h-[522px] object-contain"/>

      </div>
    </section>
  )
}

export default SuperQuality