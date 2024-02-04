import React from 'react';
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Header.scss";
import AppWrap from '../../wrapper/AppWrap';

// const scaleVariants = {
//   whileInView: {
//     scale: [0, 1],
//     opacity: [0, 1],
//     transition: {
//       duration: 1,
//       ease: 'easeInOut'
//     }
//   }
// }

const fadeInVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({ 
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 * index,
    }
  }),
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>

          <div className='badge-cmp app__flex'>

            <span>👨🏾‍🚀</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Eduvie</h1>
            </div>

          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>Backend Developer</p>
            <p className='p-text'>Freelancer</p>
          </div>

        </div>
      </motion.div>

      {/* Header Image */}
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-img'
      >

        <img src={images.profile} alt="profile-bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='overlay_circle'
          src={images.circle}
          alt='profile_circle'
        />

      </motion.div>

      {/* Header Circles */}
      <div
        // variants={scaleVariants}
        // whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[images.python, images.react, images.node, images.django, images.tailwind].map((circle, index) => (
          <motion.div 
            variants={fadeInVariants}
            initial="initial"
            whileInView="animate"               
            custom={index}
            className='app__flex' 
            key={`circle-${index}`}
          >
            <img 
              src={circle} 
              alt="circle" 
            />
          </motion.div>
        ))}
      </div>

    </div>
  )
}

export default AppWrap(Header, 'home');