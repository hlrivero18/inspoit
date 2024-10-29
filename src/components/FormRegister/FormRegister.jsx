'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation';
import style from './formregister.module.css'
import { Montserrat } from "next/font/google";
import validatorRegisterOng from '@/utils/validatorRegisterOng';
import validatorRegister from '@/utils/validatorRegister';
import axios from 'axios';
import { LOGINUSER, POSTUSER } from '@/request/userRequest';
import useStore from '@/store/useStore';
import { setJwLocalStorage } from '@/utils/setLogin/loginJwt';
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });



export function FormRegister({ typeRegister, setFormOn }) {
    const [form, setForm] = useState({
        nombre: "",
        password: "",
        email: "",
        repeatPass: "",
        tipo_usuario: typeRegister
    })
    const [error, setError] = useState({})

    const router = useRouter();

    const { setAccess, setUser } = useStore()

    const handleChange = (e) => {
        const { value, name } = e.target
        let newForm = { ...form, [name]: value }
        setForm(newForm)
        handleError(newForm)
    }

    const handleError = (form) => {
        setError(validatorRegister(form))
    }

    const handleClose = () => {
        setFormOn(false)
    }

    const handleLogin = async (user) => {
        router.push('/login');
    }

    const handlePost = async () => {

        if (Object.keys(error).length === 0) {
            try {
                const response = await axios.post(POSTUSER, form)
                handleLogin()
                setForm({
                    name: "",
                    password: "",
                    email: "",
                    pResponsable: "",
                    repeatPass: ""
                })

            }
            catch (error) {
                console.error(error)
            }
        }

    }

    const handleClick = async (e) => {
        e.preventDefault()
        await handlePost()
    }

    return (
        <div className={`${style.fullScreen} ${montserrat.className}`} onClick={handleClose}>
            <div className={style.window} onClick={(event) => event.stopPropagation()}>
                {typeRegister === 'ong' ? <h1 className={style.title}>Registre su organización</h1> :
                    <h1 className={style.title}>Registrese como Voluntario</h1>}

                <form action="" className={style.form} onSubmit={handleClick}>
                    <div className={style.form_div}>
                        <label>Nombre</label>
                        <input type="text"
                            name='nombre' value={form.nombre} onChange={handleChange}
                            placeholder="escribe tu nombre..." />
                        <div>
                            <p>{error.nombre && error.nombre}</p>
                        </div>


                        <label>Email</label>
                        <input type="text"
                            name='email' value={form.email} onChange={handleChange}
                            placeholder="escribe tu email valido" />
                        <div>
                            <p>{error.email && error.email}</p>
                        </div>


                        <label>Contraseña</label>
                        <input type="password"
                            name='password' value={form.password} onChange={handleChange}
                            placeholder="brindanos una contraseña" />
                        <div>
                            <p>{error.password && error.password}</p>
                        </div>


                        <label>Repetir contraseña</label>
                        <input type="password"
                            name='repeatPass' value={form.repeatPass} onChange={handleChange}
                            placeholder="repite la contraseña" />
                        <div>
                            <p>{error.repeatPass && error.repeatPass}</p>
                        </div>
                    </div>
                    <div className={style.button}>
                        <button>Regitrese</button>
                    </div>


                </form>
            </div>
        </div>
    )
}