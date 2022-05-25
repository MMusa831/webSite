import React from 'react'
import './Education.css';
import { BiCheck } from 'react-icons/bi'

const Education = () => {
  return (
    <section id="education">
      <h5>Ce que j'ai étudié</h5>
      <h2>Formation</h2>
      <div className="container education__container">
        <article className="education">
          <div className="education__head">
             <h3>Développeur Full Stack</h3>
             <h5>Simplon, Nanterre France | Mai - Dec 2019</h5>
          </div>
          <ul className="education__list">
            <li>
              <BiCheck className="education__list-icon" />              
              <p>Créer une base de données.</p>
            </li>
            <li>
              <BiCheck className="education__list-icon" />              
              <p>Développer les composants d’accès aux données.</p>
            </li>
            <li>
              <BiCheck className="education__list-icon" />              
              <p>Maquetter une application.</p>
            </li>
            <li>
              <BiCheck className="education__list-icon" />              
              <p>Réaliser une interface utilisateur web.</p>
            </li>
            <li>
              <BiCheck className="education__list-icon" />              
              <p>Développer une interface utilisateur web dynamique.</p>
            </li>
            <li>
              <BiCheck className="education__list-icon" />              
              <p>Réaliser une interface utilisateur.</p>
            </li>
            
          </ul>
        </article>         
        <article className="education">         
          <div className="education__head">
             <h3>Méthodes agiles Scrum Master</h3>
             <h5>Simplon, Nanterre France |Juillet 2019</h5>
          </div>
          <ul className="education__list">
            <li>
              <BiCheck className="education__list-icon" />              
              <p>Méthodes agiles de gestion et amorçage de projet (CNCP2085).</p>
            </li>            
          </ul>
          <div className="education__head">
             <h3>Maîtrise de la qualité en projet Web.</h3>
             <h5>Simplon, Nanterre France |Aout 2019</h5>
          </div>
          <ul className="education__list">
            <li>
              <BiCheck className="education__list-icon" />              
              <p>Certificat Opquast® N°0DYWE - Maîtrise de la qualité en projet Web.</p>
            </li>            
          </ul>
        </article>
        <article className="education">
          <div className="education__head">
             <h3>Ingénieur Pétrolier</h3>
             <h5>Sudan University of Sciences and Technology SOUDAN 2005 - 2010</h5>
          </div>
          <ul className="education__list">
            <li>
              <BiCheck className="education__list-icon" />              
              <p>Reconnu en France (Maîtrise).</p>
            </li>            
          </ul>          
        </article>
      </div>
    </section>
  )
}

export default Education