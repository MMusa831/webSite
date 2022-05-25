import React from 'react'
import './Experience.css';
import {FaReact, FaNodeJs, FaHtml5, FaCss3} from 'react-icons/fa'
import {SiMongodb, SiExpress, SiMysql} from 'react-icons/si'
import { DiBootstrap } from 'react-icons/di'

const Experience = () => {
  return (
    <section id="experience">
      <h5>Ce que je peux faire</h5>
      <h2>Mes Compétences</h2>
      <div className="container container__experience">
        <div className="experince__frontend">
          <h3>FrontEnd</h3>
          <div className="experience__content">
            <article className="experience__details">
              <div>
               <h5>Html</h5>
               <FaHtml5 className="about__icon"/>
              </div>             
            </article>
             <article className="experience__details">
              <div>
                <h5>React</h5>
              <FaReact className="about__icon"/>
              </div>
            </article>
            <article className="experience__details">
              <div>
               <h5>Css</h5>
               <FaCss3 className="about__icon"/>
              </div>
            </article>           
           
            <article className="experience__details">
              <div>
               <h5>Bootstrap</h5>
               <DiBootstrap className="about__icon"/>
              </div>
            </article>
          </div>
        </div>
        <div className="experince__backend">
          <h3>BackEnd</h3>
          <div className="experience__content">
            <article className="experience__details">
              <div>
                <h5>Nodejs</h5>
              <FaNodeJs className="about__icon"/>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h5>Expressjs</h5>
              <SiExpress className="about__icon"/>
              </div>
            </article>           
            <article className="experience__details">
              <div>
                <h5>MongoDb</h5>
              <SiMongodb className="about__icon"/>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h5>MySQL</h5>
              <SiMysql className="about__icon"/>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience


 