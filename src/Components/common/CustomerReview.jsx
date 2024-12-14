import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import customerReviewsData from "../data/CustomerReviewData";

const CustomerReviewsCarousel = () => {
  const renderStars = (rating) => {
    const totalStars = 5;
    return (
      <>
        {Array.from({ length: totalStars }, (_, index) =>
          index < rating ? (
            <span key={index} className="star filled text-2xl">
              ★
            </span>
          ) : (
            <span key={index} className="star">
              ☆
            </span>
          )
        )}
      </>
    );
  };

  return (
    <>
      <div class="customer-reviews-container">
        <div className="customer-reviews-carousel">
          <OwlCarousel
            className="owl-theme"
            loop
            margin={50}
            center
            autoplay
            autoplayTimeout={5000}
            autoplayHoverPase={false}
            responsive={{
              0: { items: 1 },
              480: { items: 1 },
              768: { items: 2 },
              1200: { items: 3 },
            }}
            dots
          >
            {customerReviewsData.map((review, index) => (
              <div className="card" key={index}>
                <div className="img-card">
                  <img src={review.img} alt={review.name} />
                </div>
                <div className="testimonial">{review.testimonial}</div>
                <div className="rating">{renderStars(review.rating)}</div>
                <div className="name">{review.name}</div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
      <style>{`

        .customer-reviews-container {
               margin:50px 15px
           }
        .customer-reviews-carousel .card {
          padding: 30px;
          text-align: center;
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
          position: relative;
        }

        .customer-reviews-carousel .img-card img {
          height: 200px;
          width: 100%;
          object-fit: cover;
          border-radius: 10px;
        }

        @media (min-width: 768px) {
          .customer-reviews-carousel .img-card img {
            height: 330px; 
          }
        }

        .customer-reviews-carousel .testimonial {
          margin-top: 20px;
          font-size: 0.9rem;
          color: #666;
        }

        .customer-reviews-carousel .rating {
          margin-top: 10px;
          font-size: 2rem;
          color: #ffd700; /* Gold color for stars */
        }

        .customer-reviews-carousel .rating .star {
          margin: 0 2px;
        }

        .customer-reviews-carousel .name {
          margin-top: 10px;
          font-size: 1.1rem;
          font-weight: 600;
          color: white;
          background-color: #f75757;
          padding: 0.3rem 0.5rem;
          border-radius: 5px;
          display: inline-block;
        }

        .owl-carousel .owl-dots .owl-dot span {
          height: 10px;
          width: 10px;
          margin: 5px;
          margin-top: 10px;
          background: #2a6ba3;
          border-radius: 50%;
          display: inline-block;
          transition: background 0.3s ease;
        }

        .owl-carousel .owl-dots .owl-dot.active span,
        .owl-carousel .owl-dots .owl-dot:hover span {
          background: #f75757;
        }

        @media (max-width: 575.5px) {
          .customer-reviews-carousel .name {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
};

export default CustomerReviewsCarousel;
