import React, { useState } from 'react'

import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { AnimatePresence, motion } from "framer-motion";

import './Navbar.scss';
import { images } from '../../constants';

const navLinks = [
  'home',
  'about',
  'work',
  'skills',
  'contact',
];

const menuVariants = {
  initial: {
    scaleY: 0,
  },

  animate: {
    scaleY: 1,
    transition: {
      duration: .5,
      ease: [0.12, 0, 0.39, 0]
    },
  },

  exit: {
    scaleY: 0,
    transition: {
      duration: .5,
      ease: [0.22, 1, 0.36, 1]
    },
  },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prevOpen) => (!prevOpen));
  };

  return (
    <nav className='app__navbar'>

      {/* <div className='app__navabar-logo'>
        <img src={images.logo} alt="logo" />
      </div> */}
      <div className='app__navbar-logo'>
        {/* <img src={images.logoBlack} alt="logo" /> */}
      </div>
      <ul className='app__navbar-links'>
        {navLinks.map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      {/* Mobile - Navbar Menu */}

      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setOpen(true)} />

        <AnimatePresence>
          {open && (
            
            <motion.div
              variants={menuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            // whileInView={{ x: [300, 0] }}
            // transition={{ duration: 0.85, ease: 'easeInOut' }}
            >

              <p onClick={toggleMenu}>Close</p>

              <ul>
                {navLinks.map((item) => (

                  <li key={item}>
                    <a
                      href={`#${item}`}
                      onClick={toggleMenu}
                    >
                      {item}
                    </a>
                  </li>

                ))}
              </ul>

            </motion.div>
          )}
        </AnimatePresence>
      </div>


    </nav>
  )
}

export default Navbar;