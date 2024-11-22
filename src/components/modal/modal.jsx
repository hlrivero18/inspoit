import React, { useEffect } from "react";
import style from "./modal.module.css";

export default function Modal({ show, onClose, title, children, autoClose }) {
  useEffect(() => {
    if (autoClose && show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [autoClose, show, onClose]);

  if (!show) return null;

  return (
    <div className={style.modalOverlay}>
      <div className={style.modalContent}>
        <h3>{title}</h3>
        <div>{children}</div>
      </div>
    </div>
  );
}
