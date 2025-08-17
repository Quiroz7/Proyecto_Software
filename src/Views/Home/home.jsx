import React from "react";
import Sidebar from "../../Components/Sidebar/sidebar";
import "./home.css";

import imaghome1 from "../../assets/imaghome1.jpg";
import imaghome2 from "../../assets/imaghome2.jpg";
import imaghome3 from "../../assets/imaghome3.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <Sidebar />

      <div className="home-content">
        <h1>Bienvenido a EcoRuta</h1>

        <section
          className="services-section"
          style={{ backgroundImage: `url(${imaghome3})` }}
        >
          <h2>Nuestros Servicios</h2>
          <p>Estos son algunos de los servicios que tenemos para ofrecer</p>

          <div className="services-grid">
            <div className="service-card">
              <h3>Solicitud de recolección</h3>
              <p>
                Registro de la localidad del usuario para determinar su día de
                recolección de residuos orgánicos. Solicitud programada o por
                demanda para residuos inorgánicos reciclables (1 o 2 veces por
                semana).
              </p>
            </div>
            <div className="service-card">
              <h3>Puntos y recompensas</h3>
              <p>
                Asignación de puntos por recolecciones cumplidas con separación
                adecuada. Registro del historial de puntos ganados.
              </p>
            </div>
            <div className="service-card">
              <h3>Reportes</h3>
              <p>Visualiza tus reportes</p>
            </div>
          </div>

          <div className="stats">
            <div>
              <strong>45.678</strong>
              <p>kilos de residuos a los botaderos</p>
            </div>
            <div>
              <strong>2,405</strong>
              <p>kilos de abono para los suelos</p>
            </div>
            <div>
              <strong>10,353</strong>
              <p>libras de CO₂ en la atmósfera</p>
            </div>
          </div>
        </section>

        
        <section
          className="about-section"
          style={{ backgroundImage: `url(${imaghome2})` }}
        >
          
          <p>
            En EcoRuta promovemos la transformación de residuos aprovechables,
            por medio de la capacitación a comunidades que nos permita generar
            entre todos un equilibrio en el planeta.
          </p>

          <div className="about-buttons">
            <button>Conciencia ambiental</button>
            <button>Reaprovechamiento</button>
            <button>Educación ambiental</button>
            <button>Ayudamos al planeta</button>
          </div>

          {/* <div className="email-form">
            <input
              type="email"
              placeholder="ejemplo: cambio@gmail.com"
            />
            <button>Clic</button>
          </div> */}
        </section>
      </div>
    </div>
  );
};

export default Home;