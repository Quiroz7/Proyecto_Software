import React from "react";
import Sidebar from "../../Components/Sidebar/sidebar";
import GuideCard from "../../Components/GuideCard/guidecard";
import Calendary from "../../Components/Calendary/calendary";
import "./Programaciones.css";

import imaghome1 from "../../assets/imaghome1.jpg";
import imaghome2 from "../../assets/imaghome2.jpg";
import reciclaje4 from "../../assets/reciclaje4.jpg";
import reciclaje5 from "../../assets/reciclaje5.jpg";

const Programaciones = () => {
  return (
    
    <div className="programaciones-container">
      <Sidebar />
      <div className="home-content">
        <h1>Consultar Programaciones</h1>
        
        <section
            className="services-section1"
            style={{ backgroundImage: `url(${imaghome2})` }}
        ></section>
        <section
            className="services-section2"
            style={{ backgroundImage: `url(${reciclaje4})` }}
        ></section>
        <section
            className="services-section3"
            style={{ backgroundImage: `url(${reciclaje5})` }}
        ></section>
        </div>

      <div className="programaciones-content">
        <GuideCard
          imageSrc={imaghome1}
          text='Si tienes dudas sobre cómo separar tus residuos, no te preocupes, solo dando clic al botón "Ir a guía" aprenderás y más'
          buttonText="Ir a guía"
          onButtonClick={() => window.open('/GuiaResiduos.pdf', '_blank')}
        />

        <Calendary />
        
      </div>
    </div>
  );
};

export default Programaciones;
