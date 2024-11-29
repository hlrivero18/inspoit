import { FaUser } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import { ImExit } from "react-icons/im";
import Link from "next/link";
import useStore from "@/store/useStore";
import style from "./searchbar.module.css";
import { logout } from "@/utils/setLogin/loginJwt";
import Modal from "../modal/modal";
import { useState } from "react";

export default function SearchBar() {
  const { user } = useStore();
  const [showModal, setShowModal] = useState(false);
  const handleLogout = () => {
    setShowModal(false); // Cierra el modal
    logout(); // Llama a la función de cierre de sesión
  };

  return (
    <section className={`${style.nav__sectionButton}`}>
      <Link href={"/profile/" + user}>
        <span>
          <FaUser />
        </span>
      </Link>
      <span onClick={() => setShowModal(true)}>
        <ImExit />
      </span>
      {/* <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Confirmación de cierre de sesión"
      >
        <p>¿Estás seguro de que quieres cerrar sesión?</p>
        <div>
          <button onClick={handleLogout}>Sí</button>
          <button onClick={() => setShowModal(false)}>No</button>
        </div>
      </Modal> */}
      <Modal show={showModal} onClose={() => setShowModal(false)} title="">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0.5rem",
            // backgroundColor: "#F1FAEE",
            // borderRadius: "12px",
            // boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
            color: "#1D3557",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          {/* Icono de alerta */}
          <div
            style={{
              // borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // marginBottom: "1rem",
              // boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <span
              style={{
                fontSize: "50px",
                color: "white",
              }}
            >
              ⚠️
            </span>
          </div>

          {/* Mensaje del modal */}
          <p
            style={{
              fontSize: "18px",
              fontWeight: "600",
              marginBottom: "0.5rem",
            }}
          >
            Confirmación de cierre de sesión
          </p>
          <p
            style={{
              fontSize: "16px",
              color: "#457B9D",
              marginBottom: "1.5rem",
            }}
          >
            ¿Estás seguro de que quieres cerrar sesión?
          </p>

          {/* Botones de acción */}
          <div style={{ display: "flex", gap: "1rem" }}>
            <button
              onClick={handleLogout}
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
              onMouseOver={(e) => (e.target.style.backgroundColor = "#DE7A36")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#DE7A55")}
            >
              Confirmar
            </button>
            <button
              onClick={() => setShowModal(false)}
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
            >
              Cancelar
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
}
