import CardFqas from "@/components/cardFqas/card";
import style from "./ong.module.css"
import { Open_Sans } from "next/font/google";
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400"] });

export default function Ong() {
    const user = {
        idusuario: 6,
        nombre: "Fundacion Pescar",
        email: "sofia.lopez@example.com",
        clave: "clave303",
        descripcion: "Somos una organización de la sociedad civil sin fines de lucro, fundada en el 2003 en la Argentina, cuyo objetivo principal es formar a personas en situación de vulnerabilidad socioeconómica para que puedan insertarse en el mundo del trabajo y diseñar un proyecto de vida realista.",
        url_avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtjPrkgBiYNFw2Pqok7XiQzPvusxt7laKd4w&s",
        rol_idrol: {
            "idrol": 2,
            "nombre": "voluntario"
        },
        portada: "https://buenosaires.gob.ar/sites/default/files/media/image/2014/10/22/29f108981ad4792c85e9d8e6ea4751f477ff7bdf.png",
        perfil: ""
    }
    return (
        <div className={`${style.container} ${openSans.className}`}>
            <header>
                <div className={`${style.portada}`}>
                    <img src={user.portada} alt="foto de portada" />
                </div>
                <div className={`${style.perfil}`}>
                    <img src={user.url_avatar} alt="foto de perfil" />
                    <h1>{user.nombre} </h1>
                </div>
            </header>
            <div>
                <section>
                    <section></section>
                </section>
                <section className={`${style.descripcion}`}>
                    <div className={`${style.card} p-8`}>
                        <h3>Informacion</h3>
                        <div>
                            <h3>Telefono</h3>
                            <p>00541148121818</p>
                        </div>
                        <div
                        ><h3>Sede</h3>
                            <p>Argentina</p>
                        </div>
                        <div>
                            <h3>Especialidades</h3>
                            <p>inclucion, primer empleo, incersion laboral</p>
                        </div>
                        <div>
                            <h3>Email</h3>
                            <p>pescar@org.com</p>
                        </div>
                    </div>
                    <section>
                        <div className={`${style.cardG} p-10`}>
                            <h3>{"Descripción"}</h3>
                            <p>{user.descripcion}</p>
                        </div>
                        <div className={`${style.cardG} p-10`}>
                            <h3>{"Proyectos"}</h3>
                            <p>{user.descripcion}</p>
                        </div>
                        <div className={`${style.cardG} p-10`}>
                            <h3>{"Reseñas"}</h3>
                            <p>{user.descripcion}</p>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    )
}