import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Views/Home/home';
import Login from './Views/Login/login';
import Programaciones from './Views/Programaciones/programaciones';
import Createuser from './Views/CreateUser/createuser';
import Recoleccion from './Views/SolicitudRecoleccion/recoleccion';
import PrivateRoute from './Components/PrivateRoute/privateroute'; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta pública */}
        <Route path="/login" element={<Login />} />
        <Route path="/createuser" element={<Createuser />} />

        {/* Rutas protegidas */}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/programaciones"
          element={
            <PrivateRoute>
              <Programaciones />
            </PrivateRoute>
          }
        />
        <Route
          path="/recoleccion"
          element={
            <PrivateRoute>
              <Recoleccion />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
