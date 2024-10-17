'use client'
import Link from 'next/link';
import style from './login.module.css'
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useState } from 'react';
import axios from 'axios';
import { LOGINUSER } from '@/request/userRequest';
import useStore from '@/store/useStore';
import { useRouter } from 'next/navigation';

export default function Login() {
    const router = useRouter()

    const [login, setLogin] = useState({
        email: '',
        password: '',
    })
    const [error, setError] = useState({})

    const handleChange = (e) => {
        const { value, name } = e.target
        let newUser = { ...login, [name]: value }
        setLogin(newUser)
    }

    const { setAccess, setUser } = useStore()

    const handleClick = async () => {
        try {
            const {data} = await axios.post(LOGINUSER, login)
            const acceso = data.data.access
            await setAccess(acceso)
            await setUser(data.data.id)
            router.push('/profile/' + data.data.id);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section className={`${style.container}`}>
            <div className={`${style.header}`}>
                <h1>Bienvenido de nuevo!</h1>
                <h2>Ingrese a su cuenta</h2>
            </div>

            <div className={`${style.inputs}`}>
                <input type="text" name='email' value={login.email} onChange={handleChange} placeholder='ingrese su correo' />
                <input type="password" name='password' value={login.password} onChange={handleChange} placeholder='ingrese su contraseña' />
            </div>

            <div className={`${style.botones}`}>
                <button onClick={handleClick}>Acceso</button>
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