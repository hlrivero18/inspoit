// import data from "@/utils/Red";
// import Cards from "@/components/cardsRed/cards";
// import style from "./page.module.css";
// export default function Redpages() {
//   console.log("Proyectos:", data.proyecto); // Para verificar los datos

//   // Obtener los primeros 6 proyectos
//   const proyectos = data.proyecto.slice(0, 8);

//   return (
//     <div className={`${style.container}`}>
//       <div className={style.cardContainer}>
//         {proyectos.map((proyecto) => (
//           <Cards
//             key={proyecto.idproyecto}
//             titulo={proyecto.titulo}
//             descripcion={proyecto.descripcion}
//             fechadeinicio={proyecto.fecha_inicio}
//             url_img_1={proyecto.url_img_1}
//             avatar={proyecto.organizacion_idorganizacion.url_avatar}
//           />
//         ))}
//       </div>
//       <button>gh</button>{" "}
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import data from "@/utils/Red";
import Cards from "@/components/cardsRed/cards";
import style from "./page.module.css";
import Filters from "@/components/filters/filters";

export default function Redpages() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const indexOfLastProject = currentPage * itemsPerPage;
  const indexOfFirstProject = indexOfLastProject - itemsPerPage;
  const currentProjects = data.proyecto.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(data.proyecto.length / itemsPerPage);

  return (
    <div className={style.container}>
      <Filters />
      <div className={style.cardContainer}>
        {currentProjects.map((proyecto) => (
          <Cards
            key={proyecto.idproyecto}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
            fechadeinicio={proyecto.fecha_inicio}
            url_img_1={proyecto.url_img_1}
            avatar={proyecto.organizacion_idorganizacion.url_avatar}
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
