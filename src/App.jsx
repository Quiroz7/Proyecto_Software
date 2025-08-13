
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Views/Home/home';
import Login from './Views/Login/login'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>  
  );
}

export default App
