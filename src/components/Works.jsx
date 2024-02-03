import React from "react";

import { styles } from "../styles";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { projects } from "../constants";
import { Tilt } from "react-tilt";
import { github } from "../assets";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  project_link,
}) => {
  const navigate = useNavigate();

  const performAction = (index) => {
    switch (index) {
      case 0:
        navigate(`/projects/prigra`);
        break;
      case 1:
        navigate(`/projects/jarvis`);
        break;
      case 2:
        navigate(`/projects/esiway`);
        break;
      default:
        // Default action if index is not 0, 1, or 2
        break;
    }
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl w-full md:w-[360px]"
      >
        <div
          className="relative h-[210px] cursor-pointer"
          onClick={() => performAction(index)}
        >
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
            
          />
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-white text-[17-px] max-w-3xl leading-[30px]"
        >
          Throughout my studies and personal projects, I've had the opportunity
          to work on a variety of exciting endeavors. From crafting robust
          back-end solutions for web applications to creating innovative user
          experiences for mobile apps, each project has allowed me to hone my
          technical skills and tackle new challenges. Explore below a selection
          of my recent projects and discover my approach to software
          development.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "Works");
