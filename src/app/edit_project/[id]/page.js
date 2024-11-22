"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Modal from "@/components/modal/modal";
import style from "./editProject.module.css";

export default function EditProject() {
  const { id } = useParams();
  const router = useRouter();
  const [projectData, setProjectData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (id) {
      const fetchProject = async () => {
        try {
          setIsLoading(true);
          const response = await fetch(`http://localhost:3001/proyect/${id}`);
          if (!response.ok) {
            throw new Error("Error al obtener los datos del proyecto");
          }
          const data = await response.json();
          setProjectData(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      };

      fetchProject();
    }
  }, [id]);

  const opcionesEspecializacion = [
    "FrontEnd",
    "BackEnd",
    "Marketing Digital",
    "Diseño UX/UI",
  ];
  const opcionesAlcance = ["Pequeño", "Mediano", "Grande"];
  const opcionesTiempoDuracion = [
    "Urgente (Menos de 2 semanas)",
    "Corto (Hasta 1 mes)",
    "Medio (1 a 2 meses)",
    "Largo (Más de 2 meses)",
  ];

  if (isLoading) {
    return <div className={style.loader}>Cargando...</div>;
  }

  if (error) {
    return <div className={style.error}>Error: {error}</div>;
  }

  if (!projectData) {
    return (
      <div className={style.noData}>No se encontraron datos del proyecto.</div>
    );
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3001/proyect/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar el proyecto");
      }

      setIsModalOpen(true); // Abre el modal después de la actualización exitosa

      setTimeout(() => {
        router.push(`/detail/${id}`); // Redirige después del cierre automático
      }, 3000);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className={style.container}>
      <h1>Editar Proyecto</h1>
      <form onSubmit={handleUpdate} className={style.form}>
        <label>
          Nombre del proyecto:
          <input
            type="text"
            name="nombre"
            value={projectData.nombre || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Descripción:
          <textarea
            name="descripcion"
            value={projectData.descripcion || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Requisitos:
          <textarea
            name="requisitos"
            value={projectData.requisitos || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Especialización:
          <div className={style.options}>
            {opcionesEspecializacion.map((opcion) => (
              <button
                type="button"
                key={opcion}
                className={
                  projectData.especializacion?.includes(opcion)
                    ? style.activeButton
                    : style.inactiveButton
                }
                onClick={() => {
                  setProjectData((prevData) => ({
                    ...prevData,
                    especializacion: prevData.especializacion?.includes(opcion)
                      ? prevData.especializacion.filter(
                          (item) => item !== opcion
                        )
                      : [...(prevData.especializacion || []), opcion],
                  }));
                }}
              >
                {opcion}
              </button>
            ))}
          </div>
        </label>

        <label>
          Alcance:
          <div className={style.options}>
            {opcionesAlcance.map((opcion) => (
              <button
                type="button"
                key={opcion}
                className={
                  projectData.alcance === opcion
                    ? style.activeButton
                    : style.inactiveButton
                }
                onClick={() => {
                  setProjectData((prevData) => ({
                    ...prevData,
                    alcance: opcion,
                  }));
                }}
              >
                {opcion}
              </button>
            ))}
          </div>
        </label>

        <label>
          Tiempo de duración:
          <div className={style.options}>
            {opcionesTiempoDuracion.map((opcion) => (
              <button
                type="button"
                key={opcion}
                className={
                  projectData.tiempo_duracion === opcion
                    ? style.activeButton
                    : style.inactiveButton
                }
                onClick={() => {
                  setProjectData((prevData) => ({
                    ...prevData,
                    tiempo_duracion: opcion,
                  }));
                }}
              >
                {opcion}
              </button>
            ))}
          </div>
        </label>

        <button type="submit">Actualizar Proyecto</button>
      </form>

      <Modal
        show={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="¡Proyecto actualizado correctamente!"
        autoClose={true}
      ></Modal>
    </div>
  );
}
