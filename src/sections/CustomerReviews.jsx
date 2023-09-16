import { reviews } from '../constants';
import ReviewCard from '../components/ReviewCard';

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-4xl text-center font-bold">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="mt-4 text-lg text-center text-slate-500 font-montserrat max-w-lg mx-auto">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className="mt-24 flex justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};
export default CustomerReviews;
