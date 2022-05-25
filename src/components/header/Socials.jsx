import React from 'react'
import {BsLinkedin, BsTwitter, BsGithub} from 'react-icons/bs'

const Socials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/mohamed-musa-0b5582178/" rel="noreferrer" target="_blank"><BsLinkedin/></a>
        <a href="https://twitter.com/Moh_dev7" rel="noreferrer" target="_blank"><BsTwitter/></a>
        <a href="https://github.com/MMusa831"  target="_blank" rel="noreferrer"><BsGithub/></a>
    </div>
  )
}

export default Socials