"use client"; // Hacer el componente Client-side

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import style from "../detail.module.css";
import Link from "next/link";
import { GETIDPROYECT } from "@/request/proyectRequest";
import { MdArrowBack } from "react-icons/md";

export default function ProjectDetail() {
  const { id } = useParams();
  const [proyecto, setProyecto] = useState(null);
  const [loading, setLoading] = useState(true);

  // Estados para los campos del formulario
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  // Hacer la solicitud al backend para obtener el proyecto por ID
  useEffect(() => {
    const fetchProyecto = async () => {
      try {
        const response = await axios.get(GETIDPROYECT(id));
        setProyecto(response.data);
      } catch (error) {
        console.error("Error al obtener el proyecto:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProyecto();
  }, [id]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Aquí puedes hacer una solicitud al backend para enviar el formulario
    try {
      const response = await axios.post(`/api/contact/${id}`, {
        nombre,
        email,
        mensaje,
      });
      console.log("Formulario enviado exitosamente", response.data);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!proyecto) {
    return <div>Proyecto no encontrado</div>;
  }

  return (
    <div className={style.container}>
      <Link href={"/red"}>
        <button className={style.backButton}>
          <i className="fas fa-arrow-left">
            <MdArrowBack />
          </i>
        </button>
      </Link>
      <div className={style.containerInfo}>
        <h1 className={style.title}>{proyecto.nombre}</h1>
        <h2 className={style.organization}>
          <p>{proyecto.especializacion.join(", ")}</p>
        </h2>

        <div className={style.imagesContainer}>
          {proyecto.imagenes_urls?.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`imagen del proyecto ${index + 1}`}
              className={style.projectImage}
            />
          ))}
        </div>

        <div className={style.infoContainer}>
          <p className={style.description}>{proyecto.descripcion}</p>
          <h3 className={style.requisitos}>
            <strong>Requisitos: </strong>
            <p>{proyecto.requisitos}</p>
          </h3>
        </div>

        <div className={style.infoContainer}>
          <p>
            <strong>Especialización:</strong>{" "}
            {proyecto.especializacion.join(", ")}
          </p>
          <p>
            <strong>Tiempo de duración:</strong> {proyecto.tiempo_duracion}
          </p>
          <p>
            <strong>Fecha de inicio:</strong>{" "}
            {new Date(proyecto.fecha).toLocaleDateString("es-ES")}
          </p>
          <p>
            <strong>Alcance:</strong> {proyecto.alcance}
          </p>
          <p>
            <strong>Estado:</strong> {proyecto.estado ? "Activo" : "Inactivo"}
          </p>
        </div>

        <button className={style.applyButton}>Postularse</button>

        {/* Formulario para contactar */}
        <div className={style.contactFormContainer}>
          <h3>Contáctate con el propietario del proyecto</h3>
          <form onSubmit={handleFormSubmit} className={style.contactForm}>
            <label>
              Nombre:
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label>
              Mensaje:
              <textarea
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                required
              />
            </label>
            <button type="submit" className={style.sendButton}>
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
