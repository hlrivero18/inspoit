import { CiCirclePlus } from "react-icons/ci";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import style from "./projects.module.css";
import useStore from "@/store/useStore";
import Link from "next/link";
import { useEffect, useState } from "react";
import Modal from "@/components/modal/modal";
import { GETPROYECTFORUSER } from "@/request/userRequest";
import { request } from "@/request/request";

export default function Project({ id }) {
  const { user } = useStore();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalMessage, setModalMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch(
          GETPROYECTFORUSER + id
        );
        const data = await response.json();
        setProjects(data);
        console.log(projects)
      } catch (error) {
        console.error("Error al cargar los proyectos:", error);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchProjects();
    }
  }, [id]);

  const handleDelete = async () => {
    try {
      await fetch(`${request}proyect/${projectToDelete}`, {
        method: "DELETE",
      });
      setProjects((prevProjects) =>
        prevProjects.filter((project) => project._id !== projectToDelete)
      );
      setProjectToDelete(null);
      setIsConfirmModalOpen(false);
      openModal("El proyecto se eliminó correctamente");
    } catch (error) {
      console.error("Error al eliminar el proyecto:", error);
    }
  };

  const openModal = (message) => {
    setModalMessage(message);
    setIsModalOpen(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setModalMessage("");
    }, 2000); // Auto-cierre del modal en 2 segundos
  };

  const openConfirmModal = (projectId) => {
    setProjectToDelete(projectId);
    setIsConfirmModalOpen(true);
  };

  const closeConfirmModal = () => {
    setProjectToDelete(null);
    setIsConfirmModalOpen(false);
  };

  return (
    <section className={`${style.cardG} p-10`}>
      {/* Modal de Notificación */}
      <Modal
        show={isModalOpen} // Usamos el estado isModalOpen
        title="Notificación"
        autoClose={false} // Auto-cierre lo manejamos manualmente
      >
        <p>{modalMessage}</p>
      </Modal>

      {/* Modal de Confirmación */}
      <Modal
        show={isConfirmModalOpen}
        onClose={closeConfirmModal}
        autoClose={false} // No se cierra automáticamente.
      >
        <div
          style={{ textAlign: "center", fontFamily: "Montserrat, sans-serif" }}
        >
          <p
            style={{
              fontSize: "18px",
              marginBottom: "1.5rem",
              color: "#1b4956",
            }}
          >
            ¿Estás seguro de que deseas eliminar este proyecto?
          </p>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "1rem" }}
          >
            <button
              onClick={handleDelete}
              style={{
                padding: "0.7rem 1.5rem",
                backgroundColor: "#DE7A38",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "16px",
                cursor: "pointer",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.2s, background-color 0.2s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#C5672E")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#DE7A38")}
              onFocus={(e) => (e.target.style.backgroundColor = "#C5672E")}
            >
              Confirmar
            </button>
            <button
              onClick={closeConfirmModal}
              style={{
                padding: "0.7rem 1.5rem",
                backgroundColor: "#BAC0B9",
                color: "#1b4956",
                border: "none",
                borderRadius: "8px",
                fontSize: "16px",
                cursor: "pointer",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.2s, background-color 0.2s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#9EA5A0")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#BAC0B9")}
              onFocus={(e) => (e.target.style.backgroundColor = "#9EA5A0")}
            >
              Cancelar
            </button>
          </div>
        </div>
      </Modal>

      {loading ? (
        <p>Cargando proyectos...</p>
      ) : projects.length > 0 ? (
        <>
          <h3>Proyectos</h3>
          <ul>
            {projects.map((project) => (
              <li key={project._id} className={style.projectItem}>
                <div className={style.info}>
                  <h4>{project.nombre}</h4>
                  <p>{project.descripcion}</p>
                </div>
                <div className={style.projectActions}>
                  {/* Ícono de Ver */}
                  <Link href={`/detail/${project._id}`}>
                    <FaEye className={style.icon} title="Ver detalle" />
                  </Link>

                  {/* Ícono de Editar */}
                  <Link href={`/edit_project/${project._id}`}>
                    <FaEdit className={style.icon} title="Editar proyecto" />
                  </Link>

                  {/* Ícono de Eliminar */}
                  <FaTrash
                    className={style.icon}
                    title="Eliminar proyecto"
                    onClick={() => openConfirmModal(project._id)}
                  />
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <h3>Proyectos</h3>
          <p>Este usuario aún no tiene proyectos para mostrar</p>
        </>
      )}
      {user == id &&  <div className={`${style.newProject}`}>
        <h3>Añadir un proyecto</h3>
        <h4>
          <Link href={`/form_project/${user}`}>
            <CiCirclePlus />
          </Link>
        </h4>
      </div> }
    </section>
  );
}
