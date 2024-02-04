import { React, useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

import { client, urlFor } from "../../client";
import { AppWrap, MotionWrap } from '../../wrapper';

import "./Skills.scss";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query)
      .then((data) => {
        setExperiences(data);
      })

    client.fetch(skillsQuery)
      .then((data) => {
        setSkills(data);
      })
  }, [])

  
const fadeInVariants = {
  initial: {
    opacity: 0,
    y: 200,
  },
  animate: (index) => ({ 
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 * index,
      ease: "easeInOut"
    }
  }),
}

  return (
    <>
      <h2 className='head-text'>Skills and Experiences</h2>

      <div className='app__skills-container'>

        {/* Skills */}
        <motion.div className='app__skills-list'>

          {skills?.map((skill, index) => (
            <motion.div
              variants={fadeInVariants}
              initial="initial"
              whileInView="animate"               
              custom={index}
              className='app__skills-item app__flex'
              key={skill.name}
            >
              <div className='app__flex' style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}

        </motion.div>
        
        {/* Experiences */}
        <motion.div className='app__skills-exp'>

          {experiences?.map((experience) => (
            <motion.div
              className='app__skills-exp-item'
              key={experience.year}
            >
              <div className='app__skills-exp-year'>
                <p className='bold-text'>{experience.year}</p>
              </div>

              <motion.div className='app__skills-exp-works'>
                {experience?.works?.map((work) => (
                  <div key={work.name}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className='app__skills-exp-work'
                      data-tooltip-id={work.name}
                      key={work.name}
                    >
                      <h4 className='bold-text'>{work.name}</h4>
                      <p className='p-text'>{work.company}</p>
                    </motion.div>

                    <Tooltip
                      id={work.name}
                      className='skills-tooltip'
                      arrowColor='#fff'

                    >
                      {work.desc}
                    </Tooltip>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </>
  )
}


export default AppWrap (
  MotionWrap(Skills, 'app__skills'), 
  'skills',
  'app__whitebg'
);