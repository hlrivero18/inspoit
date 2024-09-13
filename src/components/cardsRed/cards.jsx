import style from "./cards.module.css";
export default function Cards({
  titulo,
  descripcion,
  fechadeinicio,
  url_img_1,
  avatar,
}) {
  return (
    <div className={`${style.cardContainer}`}>
      <div className={style.projectImageContainer}>
        <img
          src={url_img_1}
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
        <h3 className={style.fecha}>{fechadeinicio}</h3>
        <div className={style.cardContent}>
          <h1 className={style.title}>{titulo}</h1>
          <p className={style.description}>{descripcion}</p>
        </div>
        <button className={style.button}>Ver más</button>
      </div>
    </div>
  );
}
