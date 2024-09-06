import style from "./Tutorial.module.css";
import tutoImagen from "@/images/homePage/tutoImagen.png";

export default function Tutorial() {
  return (
    <div className={style.Tutorial}>
       <div className={style.imagencontenedor}>
        <img src={tutoImagen.src} alt="tutorial" />
        <button className={style.botonregistrate}>REGISTRATE</button>
        <button className={style.botoninspirate}>INSPIRATE</button> 
      </div>

<div className={style.videocontenedor}>        <iframe
          width="460"
          height="215"
          src="https://www.youtube.com/embed/jzqgailQx_Q?si=7ZaIhTmWlgYvDRf6"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe></div>
      </div>
  );
}
