import React from 'react';
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BsLinkedin />
        </div>
        <div>
            <BsInstagram />
        </div>
        <div>
            <BsTwitter />
        </div>
    </div>
  )
}

export default SocialMedia;