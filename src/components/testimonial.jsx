import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { reviews } from "../reviewsData";

const Testimonials = () => {
  return (
    <section className="testimonial-container">
      <div className="title">
        <h1>Testimonials</h1>
        <h3>Our Client Says</h3>
      </div>

      <div className="slider-container">
        <Splide
          options={{
            perPage: 1,
            autoplay: true,
            speed: 1000,
            rewind: true,
            rewindByDrag: true,
          }}
        >
          {reviews.map((review) => (
            <SplideSlide key={review.id}>
              <img className="review-img" src={review.image} alt="" />
              <div className="content">
                <p className="text">{review.text}</p>
                <div className="info">
                  <div className="rating">
                    {Array.from({ length: 5 }, (_, index) => (
                      <span key={index} className="star">
                        {index < review.rating ? "★" : "☆"}
                      </span>
                    ))}
                  </div>
                  <p className="user">{review.name}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default Testimonials;
