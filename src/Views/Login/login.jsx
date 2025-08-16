import './login.css';
import { FaUser, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2';

const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const goToCreateUser = () => {
        navigate("/createuser");
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("https://proyecto-software-backend-jgqz.onrender.com/api/user/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (res.ok) {
                Swal.fire({
                    title: "¡Bienvenido!",
                    icon: "success",
                    confirmButtonText: "Continuar"
                }).then(() => {
                    localStorage.setItem("token", data.token);
                    localStorage.setItem("user", JSON.stringify(data.user));
                    navigate('/home');
                });

            } else {
                Swal.fire({
                    title: "Error",
                    text: data.mensaje,
                    icon: "error",
                    confirmButtonText: "Intentar de nuevo"
                });
            }

        } catch (error) {
            console.error(error);
            Swal.fire({
                title: "Error de conexión",
                text: "No se pudo conectar con el servidor",
                icon: "warning",
                confirmButtonText: "Reintentar"
            });
        }
    };

    return (
        <div className="login-page">
            <div className="wrapper">

                <form onSubmit={handleLogin}>
                    <h1>EcoRuta</h1>
                    <h2>Login</h2>
                    <div className="input-box">
                        <input 
                            type="text" 
                            name="email" 
                            placeholder="Usuario"         
                            value={formData.email} 
                            onChange={handleChange} 
                        />
                        <FaUser className="icon" />
                    </div>
                    <div className="input-box">
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Contraseña"                             
                            value={formData.password} 
                            onChange={handleChange} 
                        />
                        <FaLock className="icon" />
                    </div>

                    <div className="remember-forgot">
                        <label><input type="checkbox" />Recordarme</label>
                        <a href="#">¿olvidó la contraseña?</a>
                    </div>

                    <button type="submit">Ingresar</button>

                    <div className="register-link">
                        <p>¿No tiene cuenta? <a onClick={goToCreateUser}>Registrarme</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
