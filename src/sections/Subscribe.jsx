import Button from '../components/Button'
import { arrowRight } from "../assets/icons"

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10" id="contact-us">
      <h3 className="text-4xl leading-[60px] font-palanquin font-bold lg:max-w-md">Sign Up For
      <span className="text-coral-red"> Updates </span>
      & Newsletter
      </h3>
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 rounded-full border border-slate-gray'>
        <input type="text" placeholder="subscribe@nike.com" className="input border-none" />
        <div className='max-sm:hidden flex max-sm:justify-end items-center max-sm:w-full'>
          <Button label="Sign Up" iconUrl={arrowRight}/>
        </div>
      </div>
      <div className='max-sm:block hidden w-full'>
        <Button fullWidth label="Sign Up" iconUrl={arrowRight}/>
      </div>
    </section>
  )
}

export default Subscribe