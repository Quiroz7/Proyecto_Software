import React, { useState, useEffect } from "react";
import Modal from "../Modal/modal";
import "./Table.css";

const Table = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://proyecto-software-backend-jgqz.onrender.com/api/recolection/listrecoleccion");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error al obtener las recolecciones:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="table-container">
      <h2>Tabla de recolección</h2>
      <button className="add-btn" onClick={() => setShowModal(true)}>+ Agregar</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Residuo</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.fecha}</td>
                <td>{item.tipo_residuo}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No hay datos</td>
            </tr>
          )}
        </tbody>
      </table>

      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          onSaved={fetchData} 
        />
      )}
    </div>
  );
};

export default Table;
