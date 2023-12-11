import React from "react";

import Header from "./components/header/Header";
import APGPistachioThumb from "./assets/Images/APG_Pistachio_thumbs.jpg";
import DHPure from "./assets/Images/DH-Pure_2b.jpg";
import DSthumb from "./assets/Images/DS_thumb.jpg";
import BBQthumb from "./assets/Images/BBQ_Thumb.jpg";
import Hofguthafermilch from "./assets/Images/Hofgut_hafermilch_Thumb.jpg";
import DHaktiv from "./assets/Images/DH_Aktiv.jpg";
import DHsystem from "../src/assets/Images/DH_System_thumb.jpg";
import DreiMeister from "./assets/Images/Dreimeister_katalog_Thumbs.jpg";
import DHtiere from "./assets/Images/Cases_Thumb_af_4.jpg";
import MediceThumb from "./assets/Images/Medice_soventol_thumb.jpg";




import './App.css'

function App() {
  
  const projects = [
    { id: 1, image: APGPistachioThumb, title: 'PR', description: 'APG Pistachios', size: 'large' },
    { id: 2, image: DHPure, title: 'Packaging Design', description: 'DH Pure', size: 'medium' },
    { id: 3, image: DSthumb, title: 'Food', description: 'Deutschesee', size: 'small' },
    { id: 4, image: BBQthumb, title: 'Beverage', description: 'Branden B. quelle', size: 'large' },
    { id: 5, image: Hofguthafermilch, title: 'Beverage', description: 'Hofgut Hafermilch', size: 'medium' },
    { id: 6, image: DHaktiv, title: 'Pharma', description: 'DH Aktiv', size: 'small' }, 
    { id: 7, image: DHsystem, title: 'Pharma', description: 'CDH System', size: 'medium' },
    { id: 8, image: DHtiere, title: 'PPackaging Design', description: 'DH Tiere', size: 'small' },
    { id: 9, image: MediceThumb, title: 'Project 10', description: 'Pharma', size: 'large' },
  ];



  return (
    <>
     
      <Header/>
     

     <main>
     <div className="welcome-section">
          <h1>
          Moin, wir sind Colell und Čakar Design.</h1>
            </div>
            <p className="paragraph">Interdisziplinäre Designagentur aus Hamburg.
            <br />
            Wir machen Markendesign!
            <br />
            </p>

            <section className="brand-animation">
            <div className="black-section">
            <div className="centered-content">
            <img src="./src/assets/Images/CČ Logo animation_1.gif" alt="Logo animation" />

           </div>
           </div>

            </section>


          


        <h1 className="project-section">Projekte</h1>
        <p className="paragraph">Ob Weiterentwicklung oder Aufbau von Marken:
        <br />
          Auf Grundlage der Briefing-Ziele, Marken-DNA, Positionierung 
          und
          <br />
          Zielgruppen-Bedürfnisse, entwickeln wir passgenaues Design.
        </p>
        <div className="portfolio-container">
          {projects.map((project) => (
            <div key={project.id} className={`project ${project.size}`}>
              <img src={project.image} alt={project.title} />
              <div className="overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      
    </>
  )
}

export default App
