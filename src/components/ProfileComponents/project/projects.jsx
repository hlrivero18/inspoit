import { CiCirclePlus } from "react-icons/ci";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import style from "./projects.module.css";
import useStore from "@/store/useStore";
import Link from "next/link";
import { useEffect, useState } from "react";
import Modal from "@/components/modal/modal";

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
          `http://localhost:3001/proyect/user/${id}`
        );
        const data = await response.json();
        setProjects(data);
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
      await fetch(`http://localhost:3001/proyect/${projectToDelete}`, {
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
        title="Confirmación"
        autoClose={false} // No se cierra automáticamente.
      >
        <p>¿Estás seguro de que deseas eliminar este proyecto?</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <button
            onClick={handleDelete}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "red",
              color: "white",
            }}
          >
            Confirmar
          </button>
          <button
            onClick={closeConfirmModal}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "gray",
              color: "white",
            }}
          >
            Cancelar
          </button>
        </div>
      </Modal>

      <div className={`${style.newProject}`}>
        <h3>Añadir un proyecto</h3>
        <h4>
          <Link href={`/form_project/${user}`}>
            <CiCirclePlus />
          </Link>
        </h4>
      </div>

      {loading ? (
        <p>Cargando proyectos...</p>
      ) : projects.length > 0 ? (
        <>
          <h3>Proyectos</h3>
          <ul>
            {projects.map((project) => (
              <li key={project._id} className={style.projectItem}>
                <h4>{project.nombre}</h4>
                <p>{project.descripcion}</p>
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
    </section>
  );
}
