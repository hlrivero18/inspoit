"use client";

import React, { useState } from 'react';
import styles from './form_project.module.css';

const Pagina = () => {
  const [formularioActual, setFormularioActual] = useState(1);
  const totalFormularios = 8;

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

  document.addEventListener("DOMContentLoaded", function () {
    const botones = document.querySelectorAll(".botonSelector");
  
    botones.forEach(boton => {
      boton.addEventListener("click", function () {
        // Deseleccionar todos los botones
        botones.forEach(b => b.classList.remove("seleccionado"));
        // Seleccionar el botón actual
        this.classList.add("seleccionado");
      });
    });
  });


  const renderizarBotonesSelector = (opciones) => {
    return (
      <div className={styles.botonesSelector}>
        {opciones.map((opcion, index) => (
          <button key={index} className={styles.botonSelector}>
            {opcion.titulo}
            <span className={styles.descripcionBoton}>{opcion.descripcion}</span>
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.contenedorGeneral}>


      <div className={styles.contenedorFormulario}>
        {renderizarBarraProgreso()}

        {/* Formulario 1 */}
        {formularioActual === 1 && (
          <div className={styles.formulario}>
            <h2 className={styles.titulo}>Publicación de proyecto</h2>
            <label className={styles.etiqueta}>Nombre del proyecto</label>
            <input className={styles.entrada} type="text" placeholder="Ingresa un nombre breve y claro que describa tu proyecto." />
            <div className={styles.sugerencias}>
              <h3>Tips:</h3>
              <ul>
                <li>Usa palabras clave que resuman el enfoque y esencia del proyecto.</li>
                <li>Mantén el nombre sencillo y fácil de recordar.</li>
                <li>Considera incluir el tipo de proyecto y su propósito.</li>
              </ul>
            </div>
          </div>
        )}

        {/* Formulario 2 */}
        {formularioActual === 2 && (
          <div className={styles.formulario}>
            <h2 className={styles.titulo}>Publicación de proyecto</h2>
            <label className={styles.etiqueta}>Descripción</label>
            <textarea className={styles.textarea} placeholder="Explica en detalle de qué se trata tu proyecto. Inclui información sobre el contexto, los objetivos que deseas alcanzar y el resultado esperado" />
            <div className={styles.sugerencias}>
              <h3>Tips:</h3>
              <ul>
                <li>Sé claro y específico sobre el propósito del proyecto.</li>
                <li>Incluye el público objetivo y cómo se beneficiará.</li>
                <li>Menciona cualquier necesidad especifica, como habilidades requeridas o tecnología a utilizar.</li>
              </ul>
            </div>
          </div>
        )}

        {/* Formulario 3 */}
        {formularioActual === 3 && (
          <div className={styles.formulario}>
            <h2 className={styles.titulo}>Publicación de proyecto</h2>
            <label className={styles.etiqueta}>Requisitos</label>
            <textarea className={styles.textarea} placeholder="Define las necesidades técnicas y objetivos claves del proyecto que aseguren su correcta ejecución." />
            <div className={styles.sugerencias}>
              <h3>Tips:</h3>
              <ul>
                <li>Especifica las funcionalidades minimas que debe tener (Ej: formularios, SEO, estrategias de marketing).</li>
                <li>Menciona las tecnologías o herramientas necesarias (Ej: lenguajes, plataformas, frameworks).</li>
                <li>Indica cualquier requerimiento de diseño, rendimiento, seguridad o compatibilidad.</li>
              </ul>
            </div>
          </div>
        )}


        {/* Formulario 4: Especializacion */}
        {formularioActual === 4 && (
          <div className={styles.formulario}>
            <h2 className={styles.titulo}>Publicación de proyecto</h2>
            <label className={styles.etiqueta}>Especializacion</label>
            <div className={styles.selector}>
            {renderizarBotonesSelector([
              { titulo: 'FrontEnd', descripcion: 'Diseño visual de Paginas Web' },
              { titulo: 'BackEnd', descripcion: 'Funcionalidad interna de Paginas Web' },
              { titulo: 'Marketing Digital', descripcion: 'Redes Sociales, identidad de marca y promoción' },
              { titulo: 'Diseño UX/UI', descripcion: 'Cómo se ve y usa un producto digital' },
            ])}

            </div>

            <div className={styles.sugerencias}>
              <h3>Tips:</h3>
              <ul>
                <li>Selecciona el área de especialización predominante que el proyecto requiere.</li>
              </ul>
            </div>
          </div>
        )}

        {/* Formulario 5: Alcance */}
        {formularioActual === 5 && (
          <div className={styles.formulario}>
            <h2 className={styles.titulo}>Publicación de proyecto</h2>
            <label className={styles.etiqueta}>Alcance</label>
            <div className={styles.selector}>
            {renderizarBotonesSelector([
              { titulo: 'Pequeño' },
              { titulo: 'Mediano' },
              { titulo: 'Grande' },
            ])}
            </div>

            <div className={styles.sugerencias}>
              <h3>Tips:</h3>
              <ul>
                <li>Pequeño: Tareas rapidas y sencillas (Ej: diseño de un logotipo).</li>
                <li>Mediano: Proyectos de duracion media y bien definidos (Ej: rediseño de una pagina web).</li>
                <li>Grande: Proyecto de alta complejidad y de largo plazo (Ej: desarrollo de una pagina web completa).</li>
              </ul>
            </div>
          </div>
        )}




        {/* Formulario 6: Tiempo estimado */}
        {formularioActual === 6 && (
          <div className={styles.formulario}>
            <h2 className={styles.titulo}>Publicación de proyecto</h2>
            <label className={styles.etiqueta}>Tiempo estimado</label>
            {renderizarBotonesSelector([
              { titulo: 'Urgente', descripcion: '1-2 semanas' },
              { titulo: 'Corto', descripcion: '3-4 semanas' },
              { titulo: 'Medio', descripcion: '1-3 meses' },
              { titulo: 'Largo', descripcion: 'Más de 3 meses' },
            ])}
          </div>
        )}



        {/* Formulario 7: Imágenes */}
        {formularioActual === 7 && (
          <div className={styles.formulario}>
            <h2 className={styles.titulo}>Imágenes</h2>
            <label className={styles.etiqueta}>Sube imágenes del proyecto</label>
            <div className={styles.imagenesPreview}>
              <input type="file" className={styles.entrada} multiple />
              <p className={styles.descripcionImagen}>Vista previa de imágenes aquí...</p>
            </div>

            <div className={styles.sugerencias}>
              <h3>Tips:</h3>
              <ul>
                <li>Proporciona imagenes que puedan ser utilizadas de guia/referencia por quien realice tu proyecto.</li>
                
              </ul>
            </div>
          </div>
        )}

        {/* Controles de navegación */}

      </div>

      <div className={styles.controlesNavegacion}>
        <button onClick={retrocederFormulario} disabled={formularioActual === 1} className={styles.boton}>
          Atrás
        </button>
        <button onClick={avanzarFormulario} className={styles.boton}>
          Siguiente
        </button>
      </div>
    </div>
  );
};


export default Pagina;