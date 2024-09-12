'use client'
import { useState } from 'react'
import style from './formregister.module.css'
import imageProfile from '@/images/form/imageprofile.png'
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });

export function FormRegister({ typeRegister, setFormOn }) {
    const handleClose = ()=>{
        setFormOn(false)
    }
    return (
        <div className={`${style.fullScreen} ${montserrat.className}`} onClick={handleClose}>
            <div className={style.window} onClick={(event) => event.stopPropagation()}>
                {typeRegister === 'ong' ? <h1 className={style.title}>Registre su organización</h1> :
                    <h1 className={style.title}>Registrese como Voluntario</h1>}
                {typeRegister === 'ong' ?
                    <form action="" className={style.form}>
                        <div className={style.form_div}>

                            <label>Nombre</label>
                            <input type="text" placeholder="escribe el nombre de tu organizacion..." />

                            <label>Persona responsable</label>
                            <input type="text" placeholder="persona a cargo de tu organizacion..." />

                            <label>Email</label>
                            <input type="text" placeholder="email de la organizacion" />

                            <label>Contraseña</label>
                            <input type="password" placeholder="brindanos una contraseña" />
                        </div>
                        <div className={`${style.input_img} m-auto`}>
                            <img className='w-full h-full m-auto' src={imageProfile.src} alt="agrega una imagen" />
                        </div>
                        <button>Registrese</button>
                    </form>
                    :
                    <form action="" className={style.form}>
                        <div className={style.form_div}>
                            <label>Nombre</label>
                            <input type="text" placeholder="escribe tu nombre..." />

                            <label>Email</label>
                            <input type="text" placeholder="escribe tu email valido" />

                            <label>Contraseña</label>
                            <input type="text" placeholder="brindanos una contraseña" />
                        </div>
                        <div className={`${style.input_img} m-auto`}>
                            <img className='w-full h-full m-auto' src={imageProfile.src} alt="agrega una imagen" />
                        </div>
                        <button>Regitrese</button>
                    </form>}
            </div>
        </div>
    )
}