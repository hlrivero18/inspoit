import style from "./Presentacion.module.css";
import presentacionImagen from "@/images/homePage/presentacionImagen.png"

export default function presentacion() {
  return (
    <div className={style.presentacion}>
        <h2 className={style.h2}><b>Descubre nuevos desafios y 
            proyectos<br></br> estes donde estés</b></h2>
      <div className={style.imagenpresentacion}>
        <img src={presentacionImagen.src} alt="presentacion"/>
        <button className={style.botonpresentacion}>IR A RED AHORA</button>
      </div>
    </div>
  );
}
