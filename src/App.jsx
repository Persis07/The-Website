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
    { id: 1, image: APGPistachioThumb, title: 'Project 1', description: 'PR', size: 'large' },
    { id: 2, image: DHPure, title: 'Project 2', description: 'Verpackungsdesign', size: 'medium' },
    { id: 3, image: DSthumb, title: 'Project 3', description: 'Food', size: 'small' },
    { id: 1, image: BBQthumb, title: 'Project 4', description: 'Beverage', size: 'large' },
    { id: 2, image: Hofguthafermilch, title: 'Project 5', description: 'Beverage', size: 'medium' },
    { id: 3, image: DHaktiv, title: 'Project 6', description: 'Pharma', size: 'small' }, 
    { id: 1, image: DHsystem, title: 'Project 7', description: 'Pharma', size: 'large' },
    { id: 2, image: DreiMeister, title: 'Project 8', description: 'Coporate Design', size: 'medium' },
    { id: 3, image: DHtiere, title: 'Project 9', description: 'Verpackungsdesign', size: 'small' },
    { id: 1, image: MediceThumb, title: 'Project 10', description: 'Pharma', size: 'large' },
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
