"use client"
import { FormRegister } from '@/components/FormRegister/FormRegister'
import style from './register.module.css'
import ong from '@/images/ong.png'
import vol from '@/images/vol.png'
import Link from 'next/link'
import { useState } from 'react'

export default function Register() {
    const [formOn, setFormOn] = useState(false)
    const [typeRegister, setTypeRegister] = useState('ong')

    const handleForm = (type)=>{
        setFormOn(!formOn)
        setTypeRegister(type)
    }

    return (
        <section className={`${style.container}`}>
            <div className={`${style.header}`}>
                <h1>Crea una cuenta!</h1>
                <p>Unase a una red de personas igual de preocupadas que usted</p>
                <h2>¿Qué tipo de cuenta te gustaría?</h2>
            </div>

            <div className={`${style.cards}`}>
                <div className={`${style.card}`} onClick={()=>handleForm("voluntario")}>
                    <figure className={style.imgrol}>
                        <img src={vol.src} />
                    </figure>

                    <h2>Voluntario</h2>
                    <p>Soy un profesional que quiere ser voluntario</p>
                </div>
                <div className={`${style.card}`} onClick={()=>handleForm("ong")}>
                    <figure className={style.imgrol}>
                        <img src={ong.src} />
                    </figure>
                    <h2>Organizacion</h2>
                    <p>Mi organizacion esta buscando voluntarios</p>
                </div>
            </div>
            <Link href={'/login'}>
                <p className={`${style.login} p-2 border-b border-black font-bold`}>¿ya tienes cuenta? ingresa aqui</p>
            </Link>
            {formOn && <FormRegister typeRegister={typeRegister} setFormOn={setFormOn}/>}

        </section>
    )
}