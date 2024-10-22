'use client'
import style from "./editProfile.module.css"
import { Montserrat } from "next/font/google"
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });
import { useState } from "react";
import UploadImage from "./imageUpload/imageUpload";
import axios from "axios";
import { UPDATEUSER } from "@/request/userRequest";

export default function EditProfile({ typeUser, setFormOn, usuario }) {
    console.log(usuario._id)
    const [edit, setEdit] = useState({
        name: usuario.name,
        descripcion: usuario.descripcion ? usuario.descripcion : "",
        telefono: usuario.telefono ? usuario.telefono : "",
        sede: usuario.sede ? usuario.sede : "",
        profileImage: usuario.profileImage ? usuario.profileImage : "",
        portadaImage: usuario.portadaImage ? usuario.portadaImage : "",
        especialidad: usuario.especialidad ? usuario.especialidad : "",
        // password: ""
    })

    
    const handleChange = (e) => {
        const { value, name } = e.target
        let newForm = { ...edit, [name]: value }
        setEdit(newForm)
    }

    const handleImage = (url, type)=>{
         const newEdit = {...edit, [type]: url }
         setEdit(newEdit)

    }

    const handlePut = async()=>{
        try {
            const {data} = await axios.put(UPDATEUSER + usuario._id, edit )
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleClick = async (e) => {
        // e.preventDefault()
        await handlePut()
    }

    return (
        <section className={`${style.fullScreen} ${montserrat.className}`} onClick={()=>setFormOn(false)}>
            <div className={style.window} onClick={(event) => event.stopPropagation()}>
                <h1 className={style.title}>Editar Perfil</h1>
                <form action="" className={style.form} onSubmit={handleClick}>
                    <div className={style.form_div}>
                        <label>Nombre</label>
                        <input type="text" value={edit.name} name="name"
                        onChange={handleChange} placeholder={"ingresa tu nombre"}/>

                        <label htmlFor="">Foto de Perfil</label>
                        <UploadImage key="1" type="profileImage" handleImage={handleImage}/>

                        <label htmlFor="">Foto de Portada</label>
                        <UploadImage key="2" type="portadaImage" handleImage={handleImage}/>

                        <label htmlFor="">Descripción</label>
                        <textarea name="descripcion" id="2" value={edit.descripcion} 
                        onChange={handleChange} placeholder={"hablanos mas de tu perfil"}></textarea>

                        <label htmlFor="">Telefono</label>
                        <input type="text" name="telefono" value={edit.telefono} onChange={handleChange}/>

                        <label htmlFor="">{typeUser === "ong" ? "Sede" : "Ubicación"}</label>
                        <input type="text" value={edit.sede} name="sede" onChange={handleChange}/>

                        <label htmlFor="">Especialidades</label>
                        <input type="text" value={edit.especialidad} name="especialidad" onChange={handleChange}/>

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