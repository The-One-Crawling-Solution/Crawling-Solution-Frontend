import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const reviewsData = [
  {
    id: 1,
    name: "Viral Sadhu",
    position: "Project Manager",
    image: "assets/images/blog/1734455961173_viralsadhu.jpeg",
    testimonial:
      "The One Crawling Solution helped us streamline our data collection process with their excellent web scraping services. Their team was professional and delivered accurate and reliable data.",
    // company: "Tech Innovations Ltd",
  },
  {
    id: 2,
    name: "Mehul",
    position: "Technical Lead",
    image: "assets/images/blog/1734455979755_M.jpeg",
    testimonial:
      "We needed a customized solution for API data scraping, and The One Crawling Solution exceeded our expectations. Their expertise in handling complex APIs was impressive.",
    // company: "Data Systems Inc",
  },
  {
    id: 3,
    name: "Smit Patel",
    position: "Operations Director",
    image: "assets/images/blog/1734455995158_Smitpatel.jpeg",
    testimonial:
      "Working with The One Crawling Solution was a great experience. They developed a web scraping application tailored to our business requirements.",
    // company: "Digital Solutions Co",
  },
  {
    id: 4,
    name: "Aalap Jadeja",
    position: "Technical Director",
    image: "assets/images/blog/1734456011114_Aalapjadeja.jpeg",
    testimonial:
      "The One Crawling Solution provided us with top-notch data scraping services. Their ability to handle large-scale data extraction tasks efficiently has been crucial for our projects.",
    // company: "Web Solutions Ltd",
  },
];

const ReviewSlider = () => {
  return (
    <div className="review-slider-container">
      <OwlCarousel
        className="owl-theme"
        loop
        margin={20}
        nav={false}
        dots={true}
        autoplay
        autoplayTimeout={5000}
        autoplayHoverPause={true}
        responsive={{
          0: { items: 1 },
          768: { items: 2 },
          1024: { items: 3 },
        }}
      >
        {reviewsData.map((review) => (
          <div key={review.id} className="review-card">
            <div className="quote-mark">"</div>
            <div className="profile-section">
              <div className="profile-image-wrapper">
                <img
                  src={review.image}
                  alt={review.name || "User"}
                  className="profile-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="review-content">
                <p className="testimonial-text">{review.testimonial}</p>
                <h3 className="reviewer-name">{review.name}</h3>
                <p className="reviewer-position">{review.position}</p>
                {/* <p className="reviewer-company">{review.company}</p> */}
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>

      <style>{`
        .review-slider-container {
          padding: 60px 20px;
          background-color: #f5f7ff;
        }

        .review-card {
          background: white;
          border-radius: 15px;
          padding: 30px;
          margin: 15px;
          position: relative;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease;
        }

        .review-card:hover {
          transform: translateY(-5px);
        }

        .quote-mark {
          position: absolute;
          top: -20px;
          right: 20px;
          font-size: 80px;
          color: #f75757;
          font-family: Arial, sans-serif;
          line-height: 1;
          opacity: 0.3;
        }

        .profile-image-wrapper {
          width: 100px;
          height: 100px;
          margin: 0 auto 20px;
          position: relative;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid #f75757;
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .review-content {
          text-align: center;
        }

        .testimonial-text {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #4b5563;
          margin: 20px 0;
          min-height: 80px;
        }

        .reviewer-name {
          font-size: 1.2rem;
          color: #1f2937;
          margin: 10px 0 5px;
        }

        .reviewer-position {
          font-size: 0.9rem;
          color: #f75757;
          margin: 0;
          text-transform: uppercase;
          font-weight: 500;
        }

        .reviewer-company {
          font-size: 0.85rem;
          color: #6b7280;
          margin: 5px 0 0;
        }

        .owl-dots {
          margin-top: 30px !important;
        }

        .owl-dot span {
          background: #cbd5e1 !important;
          width: 10px !important;
          height: 10px !important;
          margin: 5px 7px !important;
          transition: all 0.3s ease !important;
        }

        .owl-dot.active span {
          background: #f75757 !important;
          transform: scale(1.2);
        }

        @media (max-width: 768px) {
          .review-slider-container {
            padding: 40px 10px;
          }

          .review-card {
            padding: 25px 20px;
          }

          .testimonial-text {
            font-size: 0.9rem;
            min-height: 100px;
          }

          .quote-mark {
            font-size: 60px;
            top: -15px;
            right: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default ReviewSlider;
