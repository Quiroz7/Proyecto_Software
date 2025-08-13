import React from "react";
import "./Sidebar.css"; // Si quieres separar sus estilos
import { FaRecycle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    
    const navigate = useNavigate();

        const handleLogout = () => {
    
        navigate('/'); 
    };

  return (
    <div className="sidebar">
        <div className="sidebar-logo">
            <FaRecycle size={60} color="white" />
        </div>

      <h2 className="sidebar-title">Nombre del aplicativo</h2>

      <ul className="sidebar-list">
        <li><a href="#">Sobre nosotros</a></li>
        <li><a href="#">Consultar programaciones</a></li>
        <li><button className="sidebar-button" onClick={handleLogout}> Cerrar Sesión</button></li>
      </ul>
    </div>
  );
};

export default Sidebar;
