import React from 'react'
import { SocialMedia, NavigationDots } from '../components';

const AppWrap = ( Component, idName) => function HOC() {

  let date = new Date();
  const year = date.getFullYear();
  
  return (
    <div id={idName} className={`app__container`}>

      <SocialMedia />

      <div className='app__wrapper app__flex'>
        <Component />
        <div className='copyright'>
            <p className='p-text'>{`@${year} Eduvie Owen U.`}</p>
            <a className='p-text' href='#home'>Don't Just Steal My Work ;)</a>
        </div>
      </div>

      <NavigationDots active={idName} />  

    </div>
  )
}

export default AppWrap;