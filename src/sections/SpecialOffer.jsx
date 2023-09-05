import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex-1 flex justify-center items-center">
        <img src={offer} alt="offer"  className="max-sm:h-[350px] h-[692px] object-contain"/>
      </div>
      <div className="flex flex-col flex-1">
        <h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          <span className='text-coral-red'>Special</span> Offer
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.

Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        <div className="mt-11">
          <Button label="View Details" iconUrl={arrowRight} />
        </div>
        
      </div>
    </section>
  )
}

export default SpecialOffer