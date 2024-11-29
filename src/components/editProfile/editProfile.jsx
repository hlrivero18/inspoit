'use client'
import style from "./editProfile.module.css"
import { Montserrat } from "next/font/google"
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });
import { useState } from "react";
import UploadImage from "./imageUpload/imageUpload";
import axios from "axios";
import { UPDATEUSER } from "@/request/userRequest";
import { caracteres } from "@/utils/validatorEdit";
import { useRouter, usePathname } from "next/navigation";

export default function EditProfile({ typeUser, setFormOn, usuario }) {

    const router = useRouter();
    const pathname = usePathname()

    const [edit, setEdit] = useState({
        nombre: usuario.nombre,
        descripcion: usuario.descripcion ? usuario.descripcion : "",
        telefono: usuario.telefono ? usuario.telefono : "",
        sede: usuario.sede ? usuario.sede : "",
        imagen_perfil_url: usuario.imagen_perfil_url ? usuario.imagen_perfil_url : "",
        imagen_portada_url: usuario.imagen_portada_url ? usuario.imagen_portada_url : "",
        especialidad: usuario.especialidad ? usuario.especialidad : "",
        // password: ""
    })

    const [error, setError] = useState(false)

    const handleError = (value) => {
        setError(caracteres(value))
    }


    const handleChange = (e) => {
        const { value, name } = e.target
        let newForm = { ...edit, [name]: value }
        handleError(newForm.nombre)
        setEdit(newForm)

    }

    const handleImage = (url, type) => {
        const newEdit = { ...edit, [type]: url }
        setEdit(newEdit)
        console.log(edit)
    }

    const handlePut = async () => {
        try {
            const { data } = await axios.put(UPDATEUSER + usuario._id, edit)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleClick = async (e) => {
        e.preventDefault()
        if (!error) {
            await handlePut()
            window.location.reload()
        }

    }

    return (
        <section className={`${style.fullScreen} ${montserrat.className}`} onClick={() => setFormOn(false)}>
            <div className={style.window} onClick={(event) => event.stopPropagation()}>
                <h1 className={style.title}>Editar Perfil</h1>
                <form action="" className={style.form} onSubmit={handleClick}>
                    <div className={style.form_div}>
                        <label>Nombre*</label>
                        <input type="text" value={edit.nombre} name="nombre"
                            onChange={handleChange} placeholder={"ingresa tu nombre"} />
                        <div>
                            <p>{error && "este campo no puede estar vacio"}</p>
                        </div>

                        <label htmlFor="">Foto de Perfil</label>
                        <UploadImage key="1" type="imagen_perfil_url" handleImage={handleImage} />

                        <label htmlFor="">Foto de Portada</label>
                        <UploadImage key="2" type="imagen_portada_url" handleImage={handleImage} />

                        <label htmlFor="">Descripción</label>
                        <textarea name="descripcion" id="2" value={edit.descripcion}
                            onChange={handleChange} placeholder={"hablanos mas de tu perfil"}></textarea>

                        <label htmlFor="">Telefono</label>
                        <input type="text" name="telefono" value={edit.telefono} onChange={handleChange} />

                        <label htmlFor="">{typeUser === "ong" ? "Sede" : "Ubicación"}</label>
                        <input type="text" value={edit.sede} name="sede" onChange={handleChange} />

                        <label htmlFor="">Especialidades</label>
                        <input type="text" value={edit.especialidad} name="especialidad" onChange={handleChange} />

                        {/* <label htmlFor="">Cambiar Contraseña</label>
                        <input type="password" name="password" onChange={handleChange}/> */}
                    </div>
                    <div className={style.button}>
                        <button>editar</button>
                    </div>
                </form>
            </div>

        </section>
    )
}