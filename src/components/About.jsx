import React from 'react'

import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion';

import { SectionWrapper } from '../hoc'
import '../index.css';



const ServiceCard = ({index,title,icon}) =>{
  return(
    <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          ABOUT ME
        </p>
        <h2 className={`${styles.sectionHeadText} md:w-[800px] `}>
          Full stack | <br />  Mobile Developer &#x1F4CD;
        </h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("","",0.1,1)}
        className='mt-4 text-white text-[17-px] max-w-3xl leading-[30px]'
      >
Third-year computer science student at the Institute of Digital Sciences Management & Cognition in Nancy, specializing in software development with expertise in backend design for websites and mobile applications. Alongside my studies, I have worked on several exciting projects, honing my programming skills and problem-solving abilities. Passionate about technological innovation, I am always seeking new challenges in the field of software development.         </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service }className="static-service" />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,"About");