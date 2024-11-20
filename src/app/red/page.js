"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "@/components/cardsRed/cards";
import style from "./page.module.css";
import Filters from "@/components/filters/filters";
import { GETALLPROYECT } from "@/request/proyectRequest";

export default function Redpages() {
  const [currentPage, setCurrentPage] = useState(1);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(GETALLPROYECT);
        console.log("Datos del API:", response.data); // Verificar los datos
        if (Array.isArray(response.data)) {
          setProjects(response.data);
        } else {
          setError("La respuesta no es un arreglo.");
        }
      } catch (err) {
        setError("Error al cargar los proyectos");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const totalProjects = projects.length;
  const totalPages = Math.ceil(totalProjects / itemsPerPage);
  const indexOfLastProject = currentPage * itemsPerPage;
  const indexOfFirstProject = indexOfLastProject - itemsPerPage;

  // console.log("Index of First Project:", indexOfFirstProject);
  // console.log("Index of Last Project:", indexOfLastProject);
  // console.log("Total Projects:", totalProjects);

  const currentProjects =
    totalProjects > 0
      ? projects.slice(indexOfFirstProject, indexOfLastProject)
      : [];

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <div>Cargando proyectos...</div>;
  if (error) return <div>{error}</div>;
  if (totalProjects === 0) return <div>No hay proyectos disponibles.</div>;

  return (
    <div className={style.container}>
      <Filters setProjects={setProjects} />
      <div className={style.cardContainer}>
        {currentProjects.map((proyecto) => (
          <Cards
            key={proyecto._id}
            idproyecto={proyecto._id}
            nombre={proyecto.nombre}
            descripcion={proyecto.descripcion}
            fecha={proyecto.fecha}
            url_img_1={proyecto.imagenes_urls[0]}
          />
        ))}
      </div>

      {/* Paginado */}
      <nav className={style.pagination}>
        <ul>
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index} onClick={() => paginate(index + 1)}>
              <button className={currentPage === index + 1 ? style.active : ""}>
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
