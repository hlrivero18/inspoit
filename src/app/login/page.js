import style from './login.module.css'
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export default function Login() {
    return (
        <section className={`${style.container}`}>
            <div className={`${style.header}`}>
                <h1>Bienvenido de nuevo!</h1>
                <h2>Ingrese a su cuenta</h2>
            </div>

            <div className={`${style.inputs}`}>
                <input type="text" placeholder='ingrese su correo' />
                <input type="password" placeholder='ingrese su contraseña' />
            </div>

            <div className={`${style.botones}`}>
                <button >Acceso</button>
                <button >Crear cuenta</button>
            </div>

            <p className='p-4 border-b border-black'>¿olvidaste tu contraseña?</p>

            <div className={`${style.botones2}`}>
                <button><FaGoogle className='inline text-xl' />  iniciar sesión con google </button>
                <button className='bg-botonAzul text-white'>iniciar sesión con linkedin  <FaLinkedin className='inline text-xl' /></button>
            </div>

        </section>
    )
}