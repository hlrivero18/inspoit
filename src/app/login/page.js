'use client'
import Link from 'next/link';
import style from './login.module.css'
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useState } from 'react';


export default function Login() {
    const [login, setLogin] = useState({
        user: '',
        password: '',
    })
    const [error, setError] = useState({})

    const handleChange = (e)=>{
        const {value, name} = e.target
        let newUser = {...login, [name] : value}
        setLogin(newUser)
        console.log(login)
    }
    return (
        <section className={`${style.container}`}>
            <div className={`${style.header}`}>
                <h1>Bienvenido de nuevo!</h1>
                <h2>Ingrese a su cuenta</h2>
            </div>

            <div className={`${style.inputs}`}>
                <input type="text" name='user' value={login.user} onChange={handleChange} placeholder='ingrese su correo' />
                <input type="password" name='password' value={login.password} onChange={handleChange} placeholder='ingrese su contraseña' />
            </div>

            <div className={`${style.botones}`}>
                <button >Acceso</button>
                <Link href={'/register'}>
                <button >Crear cuenta</button>
                </Link>
                
            </div>

            <p className='p-4 border-b border-black font-bold'>¿olvidaste tu contraseña?</p>

            <div className={`${style.botones2}`}>
                <button><FaGoogle className='inline text-xl' />  iniciar sesión con google </button>
                <button className='bg-botonAzul text-white'>iniciar sesión con linkedin  <FaLinkedin className='inline text-xl' /></button>
            </div>

        </section>
    )
}