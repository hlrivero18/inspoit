"use client"; // Hacer el componente Client-side

import { useParams } from "next/navigation";
import data from "@/utils/Red";
import style from "../detail.module.css"; // Archivo de estilos
import Link from "next/link";

export default function ProjectDetail() {
  const { id } = useParams(); // Obtener el id del proyecto desde la URL

  // Buscar el proyecto por su ID
  const proyecto = data.proyecto.find((p) => p.idproyecto === parseInt(id));

  // Si no se encuentra el proyecto, mostrar un mensaje
  if (!proyecto) {
    return <div>Proyecto no encontrado</div>;
  }

  return (
    <div className={style.container}>
      <Link href={"/red"}>
        <button className={style.backButton}>
          {" "}
          <i className="fas fa-arrow-left"></i>
        </button>
      </Link>
      <div className={style.containerInfo}>
        <h1 className={style.title}>{proyecto.titulo}</h1>
        <h2 className={style.organization}>
          {proyecto.organizacion_idorganizacion.nombre_organizacion}
        </h2>

        <div className={style.imagesContainer}>
          <img
            src={proyecto.url_img_1}
            alt="imagen del proyecto"
            className={style.projectImage}
          />
          <img
            src={proyecto.url_img_2}
            alt="imagen del proyecto"
            className={style.projectImage}
          />
          <img
            src={proyecto.url_img_3}
            alt="imagen del proyecto"
            className={style.projectImage}
          />
        </div>

        <div className={style.infoContainer}>
          <p className={style.description}>{proyecto.descripcion}</p>
          <h3 className={style.requisitos}>
            <strong>Requisitos: </strong>
            <p> {proyecto.requisitos}</p>
          </h3>
        </div>

        <div className={style.infoContainer}>
          <p>
            <strong>Especialización:</strong> {proyecto.especializacion}
          </p>
          <p>
            <strong>Tiempo de duracion:</strong> {proyecto.tiempo_estimado}
          </p>
          <p>
            <strong>Fecha de inicio:</strong> {proyecto.fecha_inicio}
          </p>
          <p>
            <strong>Complejidad:</strong> {proyecto.complejidad}
          </p>
          <p>
            <strong>Estado:</strong> {proyecto.estado}
          </p>
        </div>

        <button className={style.applyButton}>Postularse</button>
      </div>{" "}
    </div>
  );
}
