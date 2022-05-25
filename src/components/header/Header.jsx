import React from 'react'
import './Header.css'
import CTA from './CTA'
import Me from '../../assets/mee.png'
import Socials from './Socials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Bonjour, je suis</h5>
        <h1>Mohamed</h1>
        <h5 className='text-light'>Développeur Reactjs, Nodejs</h5>
        <CTA />
        <Socials />
        <div className="me">
          <img src={Me} alt=""  />
        </div>  
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header