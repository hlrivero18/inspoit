import style from "./cards.module.css";
import Link from "next/link";
export default function Cards({
  idproyecto,
  nombre,
  descripcion,
  fecha,
  imagenes_urls,
  avatar,
}) {
  return (
    <div className={`${style.cardContainer}`}>
      <div className={style.projectImageContainer}>
        <img
          src={imagenes_urls}
          alt="imagen del proyecto"
          className={style.projectImage}
        />
      </div>
      <img
        src={avatar}
        alt="avatar de la organización"
        className={style.avatar}
      />
      <div className={style.cardInfo}>
        <h3 className={style.fecha}>
          {" "}
          {new Date(fecha).toLocaleDateString("es-ES")}
        </h3>
        <div className={style.cardContent}>
          <h1 className={style.title}>{nombre}</h1>
          <p className={style.description}>
            {descripcion.length > 70
              ? `${descripcion.substring(0, 70)}...`
              : descripcion}
          </p>
        </div>
        <Link href={`/detail/${idproyecto}`}>
          <button className={style.button}>Ver más</button>
        </Link>
      </div>
    </div>
  );
}
