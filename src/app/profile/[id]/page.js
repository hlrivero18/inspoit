'use client'
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import style from "./ong.module.css"
import { Open_Sans } from "next/font/google";
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400"] });
import axios from "axios";
import useStore from "@/store/useStore";
import Project from "@/components/ProfileComponents/project/projects";
import Descripcion from "@/components/ProfileComponents/descripcion/descripcion";
import EditProfile from "@/components/editProfile/editProfile";

export default function Ong() {

    const {user} = useStore()
    const [usuario, setUsuario] = useState({})
    const [error, setError] = useState({})
    const [formOn, setFormOn] = useState(false)
    const { id } = useParams()

    

    useEffect(() => {
        axios.get("http://localhost:3001/user/" + id).then(({ data }) => {
            setUsuario(data.data)

        }).catch(({ response }) => {
            const { error } = response.data
            setError(error)
        })
        return setUsuario({})
    }, [])

    return (
        <div className={`${style.container} ${openSans.className}`}>
            <header>
                <div className={`${style.portada}`}>
                    <img src={usuario.portadaImage ? usuario.portadaImage : "https://placehold.co/600x400"} alt="foto de portada" />
                </div>
                <div className={`${style.perfil}`}>
                    <img src={usuario.profileImage ? usuario.profileImage : "https://placehold.co/240x240"} alt="foto de perfil" />
                    <h1>{usuario.name} </h1>
                </div>
            </header>
            <div>
                <section>
                    <section></section>
                </section>
                <section className={`${style.descripcion}`}>
                    <div className={`${style.card} p-8`}>
                        <h3>Información</h3>
                        {usuario.telefono &&
                            <div>
                                <h3>Telefono</h3>
                                <p>{usuario.telefono}</p>
                            </div>}
                        {usuario.sede &&
                            <div>
                                <h3>Sede</h3>
                                <p>{usuario.sede}</p>
                            </div>
                        }
                        {usuario.speciality &&
                            <div>
                                <h3>Especialidades</h3>
                                <p>inclusión, primer empleo, incersion laboral</p>
                            </div>
                        }

                        <div>
                            <h3>Email</h3>
                            <p>{usuario.email}</p>
                        </div>
                        {user == id && <button onClick={()=>setFormOn(true)}>Editar perfil</button>}
                    </div>
                    <section>
                        <Descripcion id={id} descripcion={usuario.descripcion} setFormOn={setFormOn}/>
                        <Project id={id} />
                        <div className={`${style.cardG} p-10`}>
                            <h3>{"Reseñas"}</h3>
                            <p>{usuario.review ? usuario.review : `este usuario no tiene reseñas para mostrar`}</p>
                        </div>

                    </section>
                </section>
            </div>
            {formOn && <EditProfile setFormOn={setFormOn} typeUser={usuario.typeUser} usuario={usuario}/>}
        </div>
    )
}