import React from "react";
import "./sidebar.css"; // Si quieres separar sus estilos
import { FaRecycle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    
    const navigate = useNavigate();
       
    const goToProgramaciones = () => {
      navigate("/programaciones");
    } ;

    const goToInicio = () => {
      navigate("/home");
    } ;

    const goToRecoleccion = () => {
      navigate("/recoleccion");
    } ;

    const handleLogout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/");
    };

  return (
    <div className="sidebar">
        <div className="sidebar-logo">
            <FaRecycle size={50} color="white" />
            <h2 className="sidebar-title">EcoRuta</h2>
        </div>

      

      <ul className="sidebar-list">
        <li><button className="sidebar-button" onClick={goToInicio}> Inicio</button></li>
        <li><button className="sidebar-button" onClick={goToProgramaciones}> Consultar Programaciones</button></li>
        <li><button className="sidebar-button" onClick={goToRecoleccion}> Recolección de Residuos</button></li>
        <li><button className="sidebar-button" onClick={handleLogout}> Cerrar Sesión</button></li>
      </ul>
    </div>
  );
};

export default Sidebar;
