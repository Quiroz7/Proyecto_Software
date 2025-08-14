import './createuser.css';
import { FaUser, FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaIdCard } from 'react-icons/fa';
import { FaMobileAlt } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const CreateUser = () => {

    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/");
    };

    return (
            <div className="createuser-page">
                <div className='back-button' onClick={goToLogin}>
                    <FaArrowLeft className="back-icon" />
                </div>
                <div className="wrapper-createuser">
                    <form >
                        <h1>EcoRuta</h1>
                        <h2>Ingresa los siguientes datos para registrarte</h2>
                        <div className="input-box">
                            <input type="text" placeholder='Nombre de usuario' required />
                            <FaUser className='icon'/>
                        </div>
                        <div className="input-box">
                            <input type="email" placeholder='Email' required />
                            <MdEmail className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="number" placeholder='Documento de identidad' required />
                            <FaIdCard className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder='Contraseña' required />
                            <FaLock className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="number" placeholder='Teléfono' required />
                            <FaMobileAlt className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder='Localidad' required />
                            <FaMapMarkerAlt className='icon' />
                        </div>
    
                        
                        <button type='submit'>Registrarme</button>
    
                        
                    </form>
                </div>
            </div>
        );
};

export default CreateUser;