/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { slides } from "../data/SliderData";
import { Link } from "react-router-dom";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const runningTimeRef = useRef(null);

  const timeRunning = 1500;
  const timeAutoNext = 7000;

  useEffect(() => {
    const autoNextSlide = setInterval(() => {
      showSlider("next");
    }, timeAutoNext);

    resetTimeAnimation();

    return () => clearInterval(autoNextSlide);
  }, [activeIndex]);

  const showSlider = (type) => {
    if (type === "next") {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    } else {
      setActiveIndex(
        (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
      );
    }
    resetTimeAnimation();
  };

  const resetTimeAnimation = () => {
    if (runningTimeRef.current) {
      runningTimeRef.current.style.animation = "none";
      runningTimeRef.current.style.animation = `runningTime ${
        timeAutoNext / 1000
      }s linear 1 forwards`;
    }
  };

  return (
    <>
      <style>
        {`
          .carousel {
            width: 100%;
            overflow: hidden;
            position: relative; 
          }
          .list {
            display: flex;
            transition: transform ${timeRunning}ms ease-in-out;
          }
          .item {
            min-width: 100%;
            height: 90vh;
            background-size: cover;
            background-position: center;
            display: flex;
            align-items: center;
            padding: 0 10%;
            color: white;
            flex-shrink: 0;
            position: relative;
          }
          .item::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%);
            z-index: 1;
          }
          .content {
            max-width: 600px;
            position: relative;
            z-index: 2;
          }
          .title {
            font-size: 3rem;
            margin-bottom: 0.5rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
          }
          .name {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
          }
          .des {
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
            text-wrap: wrap;
            color:gray
            text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
          }
          .sliderBtn a {
            margin-right: 10px;
            padding: 10px 20px;
            font-size: 1rem;
            text-decoration: none;
            border-radius: 5px;
            transition: all 0.3s ease;
          }
          .sliderBtn .primary {
            background-color: #f75757;
            color: white;
          }
          .sliderBtn .secondary {
            background-color: transparent;
            border: 1px solid white;
            color: white;
          }
          .sliderBtn a:hover {
            opacity: 0.8;
          }
          .arrows {
            position: absolute;
            bottom: 5%; 
            width: 100%;
            display: flex;
            justify-content: center;
            z-index: 3;
          }
          .arrows button {
            background: #f75757;
            border: none;
            color: white;
            cursor: pointer;
            padding: 10px 18px;
            margin: 0 20px;
            border-radius: 50%;
            transition: background-color 0.3s;
          }
          .arrows button:hover {
            background: rgb(247, 87, 87);
          }
          .timeRunning {
            position: absolute;
            bottom: 0;
            height: 4px;
            background-color: white;
            animation: runningTime ${timeAutoNext / 1000}s linear 1 forwards;
            z-index: 3;
          }
          @keyframes runningTime {
            0% { width: 0; }
            100% { width: 100%; }
          }

          @media (max-width: 768px) {
            .item {
              width: 100%;
              height: 90vh;
              padding: 0 20px;
            }
            .title {
              font-size: 2rem;
            }
            .name {
              font-size: 1.5rem;
            }
            .des {
              font-size: 0.9rem;
            }
            .sliderBtn a {
              padding: 8px 16px;
              font-size: 0.9rem;
            }
            .arrows {
              bottom: 8%;
            }
          }

          @media (max-width: 480px) {
            .arrows {
              bottom: 10%; 
            }
          }
        `}
      </style>

      <div className="carousel">
        <div
          className="list"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="item"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="content">
                <div className="title">{slide.title}</div>
                <div className="name">{slide.name}</div>
                <div className="des">{slide.description}</div>
                <div className="sliderBtn">
                  <Link to={slide.path} className="primary">
                    See More
                  </Link>
                  <Link to="/contact" className="secondary">
                    Subscribe
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="arrows">
          <button className="prev" onClick={() => showSlider("prev")}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="next" onClick={() => showSlider("next")}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        <div className="timeRunning" ref={runningTimeRef}></div>
      </div>
    </>
  );
};

export default Slider;
