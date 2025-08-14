
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Views/Home/home';
import Login from './Views/Login/login';
import Programaciones from './Views/Programaciones/programaciones';
import Createuser from './Views/CreateUser/createuser';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/programaciones" element={<Programaciones />} />
        <Route path="/createuser" element={<Createuser />} />
      </Routes>
    </Router>  
  );
}

export default App
