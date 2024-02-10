import React, {useState, useEffect} from 'react'
import { motion } from "framer-motion";

import "./About.scss";
// import { images } from '../../constants';
import { client, urlFor } from '../../client';
import AppWrap from '../../wrapper/AppWrap';
import { MotionWrap } from '../../wrapper';

const About = () => {
  
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query)
      .then((data) => setAbouts(data))
  }, []);
  
  
  return (
    <>
      <h2 className='head-text'>My <span>Journey</span> Through <br/> Digital <span>Creativity</span></h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (

          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />

            <h2 className='bold-text'>
              {about.title}
            </h2>

            <p className='p-text'>
              {about.description}
            </p>
          </motion.div>
          
        ))}
      </div>
    </>
  )
}

export default AppWrap (
  MotionWrap(About, 'app__about'), 
  'about'
);