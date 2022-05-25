import React from 'react'
import './Projects.css';
import IMG1 from '../../assets/IMG1.png';
import IMG2 from '../../assets/IMG2.png';
import IMG3 from '../../assets/IMG3.png';

// ARRAY OF PRJECTS 
const data = [
  {
    id: 1,
    image: IMG1,
    title: "Covid19 Tracker App",
    github: "https://github.com/MMusa831/Covid19-tracker",
    demo: "https://focused-davinci-66ca9d.netlify.app/"
  },
  {
    id: 2,
    image: IMG2,
    title: "Weather App",
    github: "https://github.com/MMusa831/Meteo-App",
    demo: "https://vibrant-jepsen-ac6168.netlify.app/"
  },
  {
    id: 3,
    image: IMG3,
    title: "Blog Post",
    github: "https://github.com/MMusa831/Auth-App",
    demo: "http://murmuring-sierra-79123.herokuapp.com/login"
  }
]
const Projects = () => {
  return (
    <section id="projects">
      <h5>Ce que j'ai réalisé</h5>
      <h2>Mes Projets</h2>
      <div className="container projects__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="projects__item">
                <div className="projects__item-img">
                  <img src={image} alt=""/>
                </div>
                <h3>{title}</h3>
                <div className="projects__item-cta">
                  <a href={github} className="btn" target="_blank">Github</a>
                  <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
                </div>          
              </article>
            )
          })
        }   
      </div>
    </section>
  )
}

export default Projects