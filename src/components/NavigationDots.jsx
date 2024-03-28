import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import { navLinks } from './Navbar/Navbar';

const NavigationDots = ({ active }) => {

  let secondaryColor = " ";
  const { theme } = useContext(ThemeContext);

  theme === 'light' ? secondaryColor = 'var(--secondary-color)' : secondaryColor = 'var(--secondary-color-dark)';
  
  return (
    <div className='app__navigation'>
        {navLinks.map((item, index) => (
            <a 
                href={`#${item}`}
                key={item + index}
                className='app__navigation-dot'
                style={active === item ? { backgroundColor: secondaryColor } : { }} 
            />
        ))}
    </div>
  )
}

export default NavigationDots;