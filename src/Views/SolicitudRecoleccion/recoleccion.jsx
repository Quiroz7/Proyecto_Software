import Sidebar from '../../Components/Sidebar/sidebar';
import Table from '../../Components/Table/table';
import './recoleccion.css';

const Recoleccion = () => {
  return (
    <div className="container-recoleccion">
      <Sidebar />
      <main className="content">
        <h1>Recolección de Residuos</h1>
        <Table />
      </main>
    </div>
  );
};

export default Recoleccion;