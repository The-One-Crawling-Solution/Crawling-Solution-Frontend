import React from "react";
import { Link } from "react-router-dom";
import { ServicesData } from "../Components/data/Service";

const Services = () => {
  return (
    <>
      <section className="section service border-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <div className="section-title">
                <span className="h6 text-color">Our Industries</span>
                <h2 className="mt-3 content-title ">
                  We provide a wide range of creative solutions for various
                  industries{" "}
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            {ServicesData.map((service, index) => (
              <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                <div className="service-item mb-5">
                  <i className={`fas ${service.icon}`}></i>
                  <h4 className="mb-3">
                    <Link to={service.link}>{service.title}</Link>
                  </h4>
                  {/* <p>A digital agency isn't here to replace your internal team, we're here to partner</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="cta-item bg-white p-5 rounded">
                <span className="h6 text-color">We create for you</span>
                <h2 className="mt-2 mb-4">
                  Entrust Your Project to Our Best Team of Professionals
                </h2>
                <p className="lead mb-4">
                  Have any project on mind? For immediate support:
                </p>
                <h3>
                  <i className="ti-mobile mr-3 text-color"></i>+91 9664508201
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
