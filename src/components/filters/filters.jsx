import { useState, useEffect } from "react";
import axios from "axios";
import Style from "./filters.module.css";

import { MdSearch } from "react-icons/md";
import { GETALLPROYECT, GETNAMEPROYECTS } from "@/request/proyectRequest";

export default function Filters({ setProjects }) {
  // Asegúrate de que setProjects se pase correctamente
  const [name, setName] = useState("");
  const [especializacion, setEspecializacion] = useState("");
  const [fecha, setFecha] = useState("");
  const [alcance, setAlcance] = useState("");
  const [tiempo_duracion, setTiempoDeDuracion] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage("");
      }, 3000); // Desaparece después de 3 segundos

      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  const applyFilters = async () => {
    try {
      const response = await axios.get(GETALLPROYECT, {
        params: {
          especializacion,
          fecha,
          alcance,
          tiempo_duracion,
        },
      });

      if (response.status === 200) {
        if (response.data.data && response.data.data.length === 0) {
          setErrorMessage("No se encontraron proyectos con esos filtros.");
          const allProjectsResponse = await axios.get(GETALLPROYECT);
          setProjects(allProjectsResponse.data);
        } else {
          setProjects(response.data);
          setErrorMessage(""); // Limpia el mensaje si hay proyectos
        }
      }
    } catch (error) {
      console.error("Error al filtrar proyectos:", error);
      setErrorMessage("Error al intentar filtrar los proyectos.");
    }
  };

  const searchByName = async () => {
    try {
      if (name.trim() === "") {
        setErrorMessage("Por favor ingrese un nombre para buscar.");
        console.log("Campo de búsqueda vacío.");
        return;
      }

      console.log("Iniciando búsqueda con nombre:", name);

      const response = await axios.get(GETNAMEPROYECTS, {
        params: { nombre: name },
      });

      if (response.status === 200) {
        if (response.data.length === 0) {
          setErrorMessage(
            `No se encontraron proyectos con el nombre: "${name}"`
          );
        } else {
          setProjects(response.data);
          setErrorMessage("");
          console.log("Proyectos encontrados:", response.data);
        }
      } else {
        console.log("Error en la respuesta:", response);
        setErrorMessage("Error al intentar buscar proyectos por nombre.");
      }
    } catch (error) {
      console.error("Error al buscar proyectos por nombre:", error);
      setErrorMessage("Error al intentar buscar proyectos por nombre.");
    }
  };

  return (
    <div>
      <div className={Style.Filters}>
        <div className={Style.FiltersRow}>
          {/* Buscador */}
          <div className={Style.SearchContainer}>
            <input
              type="text"
              placeholder="Buscar"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={Style.SearchInput}
            />
            <button onClick={searchByName} className={Style.SearchButton}>
              <MdSearch />
            </button>
          </div>

          {/* Filtros */}
          <div className={Style.FiltersColumn}>
            <select
              id="especializacion"
              className={Style.FilterSelect}
              onChange={(e) => setEspecializacion(e.target.value)}
            >
              <option value="">ESPECIALIZACION</option>
              <option value="FrontEnd">Front</option>
              <option value="BackEnd">Back</option>
              <option value="Marketing Digital">Marketing Digital</option>
              {/* <option value="IT">IT</option> */}
              <option value="Diseño UX/UI">Diseño</option>
            </select>
          </div>

          <div className={Style.FiltersColumn}>
            <select
              id="fecha"
              className={Style.FilterSelect}
              onChange={(e) => setFecha(e.target.value)}
            >
              <option value="">FECHA</option>
              <option value="asc">Más antiguo</option>
              <option value="desc">Más reciente</option>
            </select>
          </div>

          <div className={Style.FiltersColumn}>
            <select
              id="alcance"
              className={Style.FilterSelect}
              onChange={(e) => setAlcance(e.target.value)}
            >
              <option value="">ALCANCE</option>
              <option value="Grande">Grande</option>
              <option value="Mediano">Mediano</option>
              <option value="Pequeño">Pequeño</option>
            </select>
          </div>

          <div className={Style.FiltersColumn}>
            <select
              id="tiempo_duracion"
              className={Style.FilterSelect}
              onChange={(e) => setTiempoDeDuracion(e.target.value)}
            >
              <option value="">TIEMPO DE DURACION</option>
              <option value="Urgente">Urgente (Menos de 2 semanas)</option>
              <option value="Corto">Corto (Hasta 1 mes)</option>
              <option value="Medio">Medio (1 a 2 meses)</option>
              <option value="Largo">Largo (Más de 2 meses)</option>
            </select>
          </div>

          <button onClick={applyFilters} className={Style.ApplyFiltersButton}>
            Aplicar Filtros
          </button>
        </div>
      </div>

      {errorMessage && <div className={Style.errorMessage}>{errorMessage}</div>}
    </div>
  );
}
