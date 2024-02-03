import React, { useState, useEffect, useRef } from "react";
import "../css/Familishop.css";
//import famili from '../assets/prigra_logo.png';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
/*
import image1 from  '../assets/prigra.svg'
import image2 from  '../assets/Choose Role.svg'
import image3 from  '../assets/prigra_frame_1.svg'
import image4 from  '../assets/prigra_frame_2.svg'
import image5 from  '../assets/prigra_frame3.svg'
import image6 from  '../assets/consulter_taches_encadrant 1.svg'
import image7 from  '../assets/prigra_frame4.svg'
import image8 from  '../assets/encadrant_dashboard 1.svg'
import image9 from  '../assets/prigra_frame5.svg'
import image10 from  '../assets/prigra_frame6.svg'
import image11 from  '../assets/prigra_frame7.svg'
*/
import {
  image1,
  prrigralogo,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  p13,
} from "../assets";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../components/Variants";

const Prigra = () => {
  const images = [
    image1,
    image2,
    image3,

    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    p13,
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
        className="row projet-datails"
      >
        <div className="col-xxl-5 col-md-6">
          <img src={prrigralogo} alt="" className="familishop mb-6 h-12 md:h-40 w-12 md:w-40" />

          <h1>PRIGRA </h1>
          <p>
            "Prigra is a web and mobile platform designed to track and manage
            projects of the form "Diploma-Stratup/Diploma-Patent" following the
            guidelines of the Ministry of Higher Education and Scientific
            Research (Ministerial Order 1275). Key features: • Project
            submission capability for students. • Tracking and scheduling of
            project presentations by the establishment's internship service. •
            Projects validation by the establishment's incubator. • Effective
            collaboration tools between project holders and supervisors. •
            Availability of project evaluations and deliberations on the
            platform. • Push notification service through the mobile app.
          </p>
        </div>

        <div className="col-xxl-5 col-md-4 smforloggo ml-0 ">
          <div className="techno ml-0">
            <h4 className="ml-0">Technologies used :</h4>
            <ul>
              <li>
                Frontend : React js and Tailwind css and Flutter for the mobile
              </li>
              <li>Backend : Django & Firebase</li>
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn('right"', 0.8)}
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
                <div className="bordered-div">
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

export default Prigra;
