import React, { useState, useEffect, useRef } from "react";
import "../css/Familishop.css";
//import Khedmat from "../assets/jarvis_logo.svg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../components/Variants";
import "../css/Netflix.css";
 
import image11 from "../assets/Group 197.png";

import image1 from "../assets/w1.svg";
import image2 from "../assets/w2.svg";
import image3 from "../assets/w3.svg";
import image4 from "../assets/w4.svg";
import image5 from "../assets/w5.svg";
import image6 from "../assets/w6.svg";
 

import image9 from "../assets/w9.svg";

import image12 from "../assets/es01.png";
import image13 from "../assets/es02.png";
import image14 from "../assets/es03.png";
import image15 from "../assets/es04.png";
import image16 from "../assets/es05.png";
import image18 from "../assets/es07.png";
import image19 from "../assets/es08.png";
import image20 from "../assets/es09.png";
import image21 from "../assets/es10.png";
import image22 from "../assets/es13.png";
import image23 from "../assets/es14.png";
import image24 from "../assets/es20.png";
import image25 from "../assets/es21.jpg";

import image26 from "../assets/es24.png";
import { esiway } from "../assets";
import imagelogo from "../assets/esilogo.png";

  

const EsiWay = () => {
  const images = [
    image12,
    image14,
    image15,
    image16,
    image18,
    image25,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image9,
    image26,
   
   
    
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const elementRef = useRef(null);

  const handleIntersection = (entries) => {
    if (entries[0].isIntersecting && !animationPlayed) {
      setAnimationPlayed(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // Adjust the threshold as needed
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [animationPlayed]);

  const handleChangeImage = (index) => {
    setSelectedImageIndex(index);
  };

  const handlePreviousImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container-famili">
      <motion.div
        variants={fadeIn("left", 0.3)}
        ref={elementRef}
        initial="hidden"
        animate={animationPlayed ? "show" : "hidden"}
        className="row projet-datails p-12"
      >
        <div className="col-xxl-5 col-md-6">
        <img src={imagelogo} alt="" className="familishop mb-6 h-12 md:h-40 w-12 md:w-40" />

          <h1>Esiway </h1>
          <p>
            Esiway a mobile app using Flutter to simplify school administrative
            tasks. 🏫 Our goal: streamline processes and make things
            user-friendly. As part of our collaborative effort, we leveraged
            Flutter Clean Architecture principales to build a seamless and
            efficient solution. 💡
          </p>
        </div>
        <div className="col-xxl-5 col-md-6 ml-0">
          <div className="techno ml-0">
            <h4>Technologies used :</h4>
            <ul>
              <li>Mobile : Flutter</li>
              <li>Backend: Firebase</li>
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("right", 0.8)}
        ref={elementRef}
        initial="hidden"
        animate={animationPlayed ? "show" : "hidden"}
        className="row d-flex justify-content-center mt-5"
      >
        <div className="col-xl-10 col-lg-11 col-12 projet-screens">
          <div>
            <p>Here are some project highlights : </p>
          </div>
          <div className="ImageSlider">
            <div className="slider-controls">
              <div className="arrow left" onClick={handlePreviousImage}>
                <FaChevronCircleLeft />
              </div>
              <Carousel
                selectedItem={selectedImageIndex}
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
                transitionTime={1500} // Set transition time in milliseconds
                transitionTimeUnit="ms" // Time unit for transitionTime (milliseconds)
                transitionStatus="slide" // Use 'fade' animation
              >
                {images.map((image, index) => (
                  <div key={index} className="carousel-slide">
                    <img
                      src={image}
                      alt={`Image ${index}`}
                      className="sliderimages"
                    />
                  </div>
                ))}
              </Carousel>
              <div className="arrow right" onClick={handleNextImage}>
                <FaChevronCircleRight />
              </div>
            </div>
            <div className="dots">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={selectedImageIndex === index ? "active" : ""}
                  onClick={() => handleChangeImage(index)}
                ></span>
              ))}
            </div>
          </div>
          <div className="vertical-images">
            {images.map((image, index) => (
              <div key={index} className="image-container">
                <div className="bordered-div-n">
                  <img
                    src={image}
                    alt={`Image ${index}`}
                    className="vertical-image"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EsiWay;
