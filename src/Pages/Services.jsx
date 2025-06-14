import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ServicesData } from "../Components/data/Service";
import "../assets/css/allServices.css";

const Services = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <>
      {/* Services Section */}
      <section className="services-section" ref={sectionRef}>
        <div className="container">
          {/* Section Header */}
          <div className="section-header">
            <span className="section-subtitle">Our Industries</span>
            <h2 className="section-title">
              Need Clean, Reliable Data Without the Hassle? You’re in the Right
              Place.
            </h2>
            <p className="section-description">
              At The One Crawling Solution, we focus on delivering clean, smart
              data through our expert web scraping services and custom data
              extraction. Whether it's price intelligence or specialized
              industry scraping, we make sure that you get accurate insights
              that are quick and hassle-free.
            </p>
          </div>

          {/* Services Grid */}
          <div className="services-grid">
            {ServicesData.map((service, index) => (
              <div
                className="service-card"
                key={service.id}
                ref={addToRefs}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-icon">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <h4 className="service-title">
                  <Link
                    to={service.link}
                    aria-label={`Learn more about ${service.title}`}
                  >
                    {service.title}
                  </Link>
                </h4>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="row justify-content-center">
            {/* <div className="col-lg-8 col-md-10"> */}
            <div className="cta-card">
              <span className="cta-subtitle">Built for You, Backed by Us</span>
              <h2 className="cta-title">
                Entrust Your Project to Our Best Team of Professionals
              </h2>
              <p className="cta-description">
                Got something in mind? Let our experts handle it. We provide
                quick support and reliable solutions for all your data
                extraction needs.
              </p>
              <a
                href="tel:+919664508201"
                className="cta-phone"
                aria-label="Call us for immediate support"
              >
                <i className="fas fa-phone phone-icon"></i>
                <span>+91 9664508201</span>
              </a>
            </div>
            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
