import './createuser.css';
import { FaUser, FaLock, FaIdCard, FaMobileAlt, FaMapMarkerAlt, FaArrowLeft} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2';

const CreateUser = () => {

    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/");
    };

    const [formData, setFormData] = useState({
        nombre_usuario: "",
        email: "",
        documento: "",
        password: "",
        telefono: "",
        ciudad: ""
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("https://proyecto-software-backend-jgqz.onrender.com/api/user/createuser", {
                method: "POST",
                headers: { "Content-Type" : "application/json"},
                body: JSON.stringify(formData)
            });

            if(res.ok){
                Swal.fire({
                    title: "¡Registro exitoso!",
                    text: "Tu usuario ha sido creado correctamente.",
                    icon: "success",
                    confirmButtonText: "Ir al Login"
                }).then(() => {
                    navigate("/login");
                });

            } else {
                const errorData = await res.json();
                Swal.fire({
                    title: "Error",
                    text: errorData.error || "No se pudo registrar el usuario",
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
        <div className="createuser-page">
            <div className='back-button' onClick={goToLogin}>
                <FaArrowLeft className="back-icon" />
            </div>
            <div className="wrapper-createuser">

                <form onSubmit={handleSubmit}>
                    <h1>EcoRuta</h1>
                    <h2>Ingresa los siguientes datos para registrarte</h2>
                    <div className="input-box">
                        <input type="text" name='nombre_usuario' placeholder='Nombre de usuario' required onChange={handleChange} />
                        <FaUser className='icon'/>
                    </div>
                    <div className="input-box">
                        <input type="email" name='email' placeholder='Email' required onChange={handleChange} />
                        <MdEmail className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="number" name='documento' placeholder='Documento de identidad' required onChange={handleChange}/>
                        <FaIdCard className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="password" name='password' placeholder='Contraseña' required onChange={handleChange} />
                        <FaLock className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="number" name='telefono' placeholder='Teléfono' required onChange={handleChange} />
                        <FaMobileAlt className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="text" name='ciudad' placeholder='Localidad' required onChange={handleChange} />
                        <FaMapMarkerAlt className='icon' />
                    </div>

                    <button type='submit'>Registrarme</button>
                </form>
            </div>
        </div>
    );
};

export default CreateUser;
