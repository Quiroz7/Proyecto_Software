import { useState } from "react";
import Swal from "sweetalert2"; // 👈 importamos SweetAlert2
import "./modal.css";

const Modal = ({ onClose, onSaved }) => {
  const [fecha, setFecha] = useState("");
  const [tipoResiduo, setTipoResiduo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://proyecto-software-backend-jgqz.onrender.com/api/recolection/createrecoleccion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fecha, tipo_residuo: tipoResiduo }),
      });

      const data = await response.json();

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "¡Registro exitoso!",
          text: "La recolección fue registrada con éxito ✅",
          confirmButtonColor: "#3085d6",
        }).then(() => {
          onSaved();
          onClose();
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: data.mensaje || "Hubo un problema al registrar",
          confirmButtonColor: "#d33",
        });
      }
    } catch (error) {
      console.error("Error en el registro:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo conectar con el servidor",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <div className="container-modal">
      <div className="modal">
        <h3>Agregar Información</h3>
        <form onSubmit={handleSubmit}>
          <label>Fecha:</label>
          <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />

          <label>Residuo:</label>
          <select
            value={tipoResiduo}
            onChange={(e) => setTipoResiduo(e.target.value)}
            className="container-select"
          >
            <option value="" disabled>Tipo de residuo</option>
            <option value="Biodegradables">Biodegradables</option>
            <option value="Aprovechables">Aprovechables</option>
            <option value="No aprovechables">No aprovechables</option>
            <option value="Residuos peligrosos">Residuos peligrosos</option>
            <option value="Residuos químicos">Residuos químicos</option>
            <option value="Residuos radioactivos">Residuos radioactivos</option>
          </select>

          <div className="modal-buttons">
            <button type="button" onClick={onClose}>Cancelar</button>
            <button type="submit">Guardar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
