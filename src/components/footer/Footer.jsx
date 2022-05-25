import React from 'react'
import './Footer.css';
import { BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">MOHAMED</a>
      <ul className="permalinks">
        <li><a href="#">Accueil</a></li>
        <li><a href="#about">Profile</a></li>
        <li><a href="#experience">Compétences</a></li>
        <li><a href="#education">Formation</a></li>
        <li><a href="#projects">Projets</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href="https://www.instagram.com/moha_med_musa/" target="_blank"><BsInstagram /></a>
        <a href="https://www.facebook.com/mohamed.musa.737/" target="_blank"><BsFacebook /></a>
        <a href="https://www.youtube.com/channel/UC0T2E2AcLra4yepPkZUO6BQ" target="_blank"><BsTwitter /></a>
      </div> 
      <div className="footer__copyright">
        <small>&copy; Mohamed Musa. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer