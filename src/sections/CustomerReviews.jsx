import ReviewCard from "../components/ReviewCard"
import {reviews} from '../constants'

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our <span className="text-coral-red">Customers</span> Say!
      </h3>
      <p className="text-center info-text m-auto mt-4 max-w-lg">
        Hear true stories from our customers and their satisfication with our amazing running shoes.
      </p>

      <div className="justify-evenly mt-24 flex flex-1 items-center max-lg:flex-col gap-14">
        {reviews.map(review => (<ReviewCard key={review.customerName} {...review} />))}
      </div>
    </section>  
  )
}

export default CustomerReviews