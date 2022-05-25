import React from 'react'
import './About.css'
import ME from '../../assets/me2.png'




const About = () => {
  return (
    <section id="about">      
      <h2>A Propos de moi</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className= "about__me-img">
          <img src={ME} alt="About image"/>
          </div>
        </div>
        <div className="about__content">          
          <p>
             Je m’appelle Mohamed MUSA, je suis né le 07/09/1984, j’ai fait mes études
              au SOUDAN en ingénierie pétrolière et j’ai obtenu mon bac+5. Ce qui me 
              caractérise le plus c’est mon esprit de curiosité. Maintenant en tant que
              développeur web, je suis pleinement épanoui car j’y retrouve ce qui me plait
              le développement de fonctionnalités. Aussi, c’est un monde qui répond à mon
               besoin de curiosité et de découvertes car ce monde demande de se mettre à jour
               régulièrement sur les technologies qui évolue chaque jour.
          </p>
          <a href="#contact" className="btn btn-primary">Contactez-moi</a>
        </div>
      </div>
    </section>
  )
}

export default About