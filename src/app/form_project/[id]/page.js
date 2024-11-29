"use client";
import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";
import styles from "./form_project.module.css";
import UploadImage from "../imageUpload/imageUpload";
import Modal from "@/components/modal/modal";

export default function FormProject() {
  const { id } = useParams(); // ID del usuario desde la URL
  const [modalVisible, setModalVisible] = useState(false);
  const [proyectoId, setProyectoId] = useState(null);

  const [projectData, setProjectData] = useState({
    usuario: id,
    nombre: "",
    descripcion: "",
    requisitos: "",
    especializacion: [],
    alcance: "",
    tiempo_duracion: "",
    imagenes_urls: [],
    estado: true,
  });

  // Listado de especializaciones
  const especializaciones = [
    {
      titulo: "FrontEnd",
      descripcion: "Diseño visual de Páginas Web",
    },
    {
      titulo: "BackEnd",
      descripcion: "Funcionalidad interna de Páginas Web",
    },
    {
      titulo: "Marketing Digital",
      descripcion: "Redes Sociales, identidad de marca y promoción",
    },
    {
      titulo: "Diseño UX/UI",
      descripcion: "Cómo se ve y usa un producto digital",
    },
  ];
  const alcances = [
    { titulo: "Pequeño" },
    { titulo: "Mediano" },
    { titulo: "Grande" },
  ];
  const tiemposDuracion = [
    { titulo: "Urgente", descripcion: "1-2 semanas" },
    { titulo: "Corto", descripcion: "3-4 semanas" },
    { titulo: "Medio", descripcion: "1-3 meses" },
    { titulo: "Largo", descripcion: "Más de 3 meses" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Maneja el cambio cuando se selecciona/deselecciona una especialización

  const handleEspecializacionSeleccionada = (especializacionSeleccionada) => {
    setProjectData((prev) => {
      const nuevasEspecializaciones = prev.especializacion.includes(
        especializacionSeleccionada
      )
        ? prev.especializacion.filter(
          (item) => item !== especializacionSeleccionada
        )
        : [...prev.especializacion, especializacionSeleccionada];
      return {
        ...prev,
        especializacion: nuevasEspecializaciones,
      };
    });
  };

  // Maneja la selección del alcance
  const handleAlcanceSeleccionado = (alcanceSeleccionado) => {
    setProjectData((prev) => ({
      ...prev,
      alcance: alcanceSeleccionado,
    }));
  };

  // Maneja la selección del tiempo de duración
  const handleTiempoDuracionSeleccionado = (tiempoSeleccionado) => {
    setProjectData((prev) => ({
      ...prev,
      tiempo_duracion: tiempoSeleccionado,
    }));
  };

  // Función para renderizar los botones de especialización
  const renderizarBotonesSelector = (items, handleSeleccionado, campo) => {
    return items.map((item, index) => (
      <button
        key={index}
        type="button"
        className={`${styles.botonSelector} ${projectData[campo].includes(item.titulo) ? styles.seleccionado : ""
          }`}
        onClick={() => handleSeleccionado(item.titulo)}
      >
        {item.titulo}
        {item.descripcion && (
          <span className={styles.descripcionBoton}>{item.descripcion}</span>
        )}
      </button>
    ));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Resultado final de la publicación:", projectData);

    try {
      const response = await axios.post(
        "http://localhost:3001/proyect/",
        projectData
      );
      console.log("Respuesta del servidor:", response.data);

      const idProyecto = response.data._id; // Captura el ID del proyecto
      setProyectoId(idProyecto); // Guarda el ID para usarlo luego

      // Muestra el modal
      setModalVisible(true);
    } catch (error) {
      console.error("Error al crear el proyecto:", error);
      if (error.response) {
        console.error("Detalles del error:", error.response.data);
      } else {
        console.error("Error sin respuesta del servidor:", error.message);
      }
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);

    // Redirige al detalle del proyecto después de cerrar el modal
    if (proyectoId) {
      window.location.href = `/detail/${proyectoId}`;
    }
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log("Resultado final de la publicación:", projectData);

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:3001/proyect/",
  //       projectData
  //     );
  //     console.log("Respuesta del servidor:", response.data);
  //     // Redirige al perfil del usuario u otra página tras éxito
  //     // router.push(`/user/${id}`);
  //     router.push(`/detail/${id}`);
  //   } catch (error) {
  //     console.error("Error al crear el proyecto:", error);
  //     // detalles completos del error
  //     if (error.response) {
  //       console.error("Detalles del error:", error.response.data);
  //     } else {
  //       console.error("Error sin respuesta del servidor:", error.message);
  //     }
  //   }
  // };

  //Movimiento del form

  const [formularioActual, setFormularioActual] = useState(1);
  const totalFormularios = 9;
  const avanzarFormulario = () => {
    if (formularioActual < totalFormularios) {
      setFormularioActual(formularioActual + 1);
    }
  };

  const retrocederFormulario = () => {
    if (formularioActual > 1) {
      setFormularioActual(formularioActual - 1);
    }
  };
  const renderizarBarraProgreso = () => {
    return (
      <div className={styles.barraProgresoContenedor}>
        <div
          className={styles.barraProgreso}
          style={{ width: `${(formularioActual / totalFormularios) * 100}%` }}
        />
      </div>
    );
  };
  return (
    <div className={styles.contenedorGeneral}>
      <form onSubmit={(e) => handleSubmit(e)}>
        {renderizarBarraProgreso()}
        <h2>Añadir un nuevo proyecto</h2>
        {formularioActual === 1 && (
          <div className={styles.formulario}>
            <h2 className={styles.titulo}>Publicación de proyecto</h2>
            <label className={styles.etiqueta}>Nombre del proyecto</label>
            <input
              className={styles.entrada}
              name="nombre"
              type="text"
              placeholder="Ingresa un nombre breve y claro que describa tu proyecto."
              onChange={handleChange}
              required
            />
            <div className={styles.sugerencias}>
              <h3>Tips:</h3>
              <ul>
                <li>
                  Usa palabras clave que resuman el enfoque y esencia del
                  proyecto.
                </li>
                <li>Mantén el nombre sencillo y fácil de recordar.</li>
                <li>Considera incluir el tipo de proyecto y su propósito.</li>
              </ul>
            </div>
          </div>
        )}
        {/* Descripción */}
        {formularioActual === 2 && (
          <div className={styles.formulario}>
            <h2 className={styles.titulo}>Publicación de proyecto</h2>
            <label className={styles.etiqueta}>Descripción</label>
            <textarea
              className={styles.textarea}
              name="descripcion"
              placeholder="Explica en detalle de qué se trata tu proyecto."
              onChange={handleChange}
              value={projectData.descripcion}
              required
            />
            <div className={styles.sugerencias}>
              <h3>Tips:</h3>
              <ul>
                <li>Sé claro y específico sobre el propósito del proyecto.</li>
                <li>Incluye el público objetivo y cómo se beneficiará.</li>
                <li>
                  Menciona cualquier necesidad específica, como habilidades
                  requeridas o tecnología a utilizar.
                </li>
              </ul>
            </div>
          </div>
        )}
        {/* Requisitos */}
        {formularioActual === 3 && (
          <div className={styles.formulario}>
            <h2 className={styles.titulo}>Publicación de proyecto</h2>
            <label className={styles.etiqueta}>Requisitos</label>
            <textarea
              className={styles.textarea}
              name="requisitos"
              placeholder="Define las necesidades técnicas y objetivos claves del proyecto."
              onChange={handleChange}
              value={projectData.requisitos}
              required
            />

            <div className={styles.sugerencias}>
              <h3>Tips:</h3>
              <ul>
                <li>Especifica las funcionalidades mínimas que debe tener.</li>
                <li>Menciona las tecnologías o herramientas necesarias.</li>
                <li>
                  Indica cualquier requerimiento de diseño, rendimiento,
                  seguridad o compatibilidad.
                </li>
              </ul>
            </div>
          </div>
        )}
        {/* Especialización */}
        {formularioActual === 4 && (
          <div className={styles.formulario}>
            <h2 className={styles.titulo}>Publicación de proyecto</h2>
            <label className={styles.etiqueta}>Especialización</label>
            <div className={styles.selector}>
              {renderizarBotonesSelector(
                especializaciones,
                handleEspecializacionSeleccionada,
                "especializacion"
              )}

              <div className={styles.sugerencias}>
                <h3>Tips:</h3>
                <ul>
                  <li>
                    Selecciona el área de especialización predominante que el
                    proyecto requiere.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {/* Alcance */}
        {formularioActual === 5 && (
          <div className={styles.formulario}>
            <h2 className={styles.titulo}>Publicación de proyecto</h2>
            <label className={styles.etiqueta}>Alcance</label>
            <div className={styles.selector}>
              {renderizarBotonesSelector(
                alcances,
                handleAlcanceSeleccionado,
                "alcance"
              )}
            </div>
            <div className={styles.sugerencias}>
              <h3>Tips:</h3>
              <ul>
                <li>Pequeño: Tareas rápidas y sencillas.</li>
                <li>Mediano: Proyectos de duración media y bien definidos.</li>
                <li>Grande: Proyecto de alta complejidad y de largo plazo.</li>
              </ul>
            </div>
          </div>
        )}
        {/* Tiempo de Duración */}
        {formularioActual === 6 && (
          <div className={styles.formulario}>
            <h2 className={styles.titulo}>Publicación de proyecto</h2>

            <label className={styles.etiqueta}>Tiempo de Duración</label>
            <div className={styles.selector}>
              {renderizarBotonesSelector(
                tiemposDuracion,
                handleTiempoDuracionSeleccionado,
                "tiempo_duracion"
              )}
            </div>
          </div>
        )}
        {/* // URLs de Imágenes */}
        {formularioActual === 7 && (
          <div className={styles.formGroup}>
            <h2 className={styles.titulo}>Publicación de proyecto</h2>

            <label htmlFor="imagenes_urls">
              URLs de Imágenes (separadas por comas):
            </label>
            <UploadImage value={projectData.imagenes_urls.join(", ")}/>
            {/* <input
              type="text"
              id="imagenes_urls"
              name="imagenes_urls"
              value={projectData.imagenes_urls.join(", ")}
              onChange={(e) => {
                const urls = e.target.value.split(",").map((url) => url.trim());
                setProjectData((prev) => ({
                  ...prev,
                  imagenes_urls: urls,
                }));
              }}
            /> */}
            <div className={styles.sugerencias}>
              <h3>Tips:</h3>
              <ul>
                <li>
                  Proporciona imágenes que puedan ser utilizadas de
                  guía/referencia por quien realice tu proyecto.
                </li>
              </ul>
            </div>
          </div>
        )}
        {/* Botón de enviar */}

        {formularioActual === 8 && (
          <div className={styles.resumen}>
            <h2 className={styles.titulo}>Revisión Final</h2>
            <p>
              <strong>Nombre del Proyecto:</strong> {projectData.nombre}
            </p>
            <p>
              <strong>Descripción:</strong> {projectData.descripcion}
            </p>
            <p>
              <strong>Requisitos:</strong> {projectData.requisitos}
            </p>
            <p>
              <strong>Especialización:</strong>{" "}
              {projectData.especializacion.join(", ")}
            </p>
            <p>
              <strong>Alcance:</strong> {projectData.alcance}
            </p>
            <p>
              <strong>Tiempo de Duración:</strong> {projectData.tiempo_duracion}
            </p>
            <p>
              <strong>URLs de Imágenes:</strong>{" "}
              {projectData.imagenes_urls.join(", ")}
            </p>
            <div className={styles.sugerencias}>
              <h3>¿Todo está correcto?</h3>
              <p>
                Si necesitas hacer algún cambio, usa el botón "Atrás". Si todo
                está bien, haz clic en "Enviar".
              </p>
            </div>
          </div>
        )}

        <div className={styles.controlesNavegacion}>
          {formularioActual > 1 && (
            <button
              type="button"
              onClick={retrocederFormulario}
              className={styles.boton}
            >
              Atrás
            </button>
          )}

          <button
            className={styles.boton}
            type="button"
            onClick={
              formularioActual < totalFormularios - 1
                ? avanzarFormulario
                : handleSubmit
            }
          >
            {formularioActual < totalFormularios - 1
              ? "Siguiente"
              : "Guardar Proyecto"}
          </button>
        </div>
      </form>
      <Modal
        show={modalVisible}
        onClose={handleCloseModal}
        title="¡Proyecto creado con éxito!"
        autoClose={true} // Si deseas que se cierre automáticamente
      >
        <p>Tu proyecto ha sido creado correctamente.</p>
      </Modal>
    </div>
  );
}
