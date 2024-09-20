import React from "react";

const Slider = () => {
  return (
    <section className="slider">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-10">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/1200x400"
                    alt="First slide"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>First Slide</h5>
                    <p>Some description for the first slide.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/1200x400"
                    alt="Second slide"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Second Slide</h5>
                    <p>Some description for the second slide.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/1200x400"
                    alt="Third slide"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Third Slide</h5>
                    <p>Some description for the third slide.</p>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
