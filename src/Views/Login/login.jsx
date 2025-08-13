import './login.css';
import { FaUser, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/home');
    };

    return (
        <div className="login-page">
            <div className="wrapper">
                <form onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder='Usuario' required />
                        <FaUser className='icon'/>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Contraseña' required />
                        <FaLock className='icon' />
                    </div>

                    <div className="remember-forgot">
                        <label><input type="checkbox" />Recordarme</label>
                        <a href="#">¿olvidó la contraseña?</a>
                    </div>

                    <button type='submit'>Ingresar</button>

                    <div className="register-link">
                        <p>¿No tiene cuenta? <a href="#">Registrarme</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
