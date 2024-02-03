import React, { useState, useEffect, useRef } from "react";
import "../css/Familishop.css";
import Khedmat from "../assets/jarvis_logo.svg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../assets/jarvis_1.svg";
import image2 from "../assets/jarvis_fram3.svg";
import image3 from "../assets/jarvis_frame4.svg";
import image4 from "../assets/jarvis_frame7.svg";
import image5 from "../assets/jarvis_frame6.svg";
import image6 from "../assets/jarvis_frame5_1.svg";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../components/Variants";
import "../css/Netflix.css";
const Jarvis = () => {
  const images = [image1, image2, image3 ,image4 ,image5 ,image6 ,];

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
    rootMargin: '0px',
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
  setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
};

const handleNextImage = () => {
  setSelectedImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
};

return (
  <div className='container-famili'>
   <motion.div variants={fadeIn('left' ,0.3)} ref={elementRef} initial='hidden' animate={animationPlayed ? 'show' : 'hidden'} className='row projet-datails'>
   <div className='col-md-6'>
    <h1>Jarvis </h1>
    <p>Jarvis, a forward-thinking tech startup, empowers users to achieve their project goals within set timeframes by addressing common hurdles like motivation, overthinking, and time management. We achieve this through user behavior tracking and a sophisticated NLP model with reinforcement learning, tailoring individualized work plans. The platform offers roadmap visualization, fosters a collaborative user community, facilitates project management, provides data-driven insights, and employs push notifications to keep users on track. Jarvis is your partner in turning ambitions into successful project outcomes while optimizing your productivity.</p>
   </div>

   <div className='col-md-4 offset-md-2 smforloggo'>
 <img src={Khedmat} alt="" className='familishop' />
 <div className='techno'>
   <h4>Technologies used :</h4> 
  <ul>
      <li>Mobile : Flutter</li>
      <li>Backend: Node Js</li>
  </ul>
 </div>
 
   </div>
   </motion.div>

   <motion.div variants={fadeIn('right' ,0.8)} ref={elementRef} initial='hidden' animate={animationPlayed ? 'show' : 'hidden'} className='row d-flex justify-content-center mt-5'>
   <div className='col-xl-10 col-lg-11 col-12 projet-screens'>
      <div>
          <p>here are some project highlights : </p>
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
            <img src={image} alt={`Image ${index}`} className='sliderimages' />
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
          className={selectedImageIndex === index ? 'active' : ''}
          onClick={() => handleChangeImage(index)}
        ></span>
      ))}
    </div>
  </div>
  <div className='vertical-images'>
          {images.map((image, index) => (
            <div key={index} className='image-container'>
              <div className='bordered-div-n'>
                <img src={image} alt={`Image ${index}`} className='vertical-image' />
              </div>
            </div>
          ))}
  </div>
   </div>

  
   </motion.div>
  </div>
)
}

export default Jarvis
