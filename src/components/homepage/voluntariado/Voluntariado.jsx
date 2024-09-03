import style from "./Voluntariado.module.css";
import ellipse5 from "@/images/homePage/ellipse5.png";
import ellipse1 from "@/images/homePage/ellipse1.png";
import ellipse2 from "@/images/homePage/ellipse2.png";
import ellipse3 from "@/images/homePage/ellipse3.png";
import ellipse4 from "@/images/homePage/ellipse4.png";

export default function Voluntariado() {
  return (
    <div className={style.container}>
      <h1 className={style.h1}>
        Encuentra Las Mejores Oportunidades De Voluntariado
      </h1>

      <div className={style.container2}>
        <div className={style.containerimg}>
          <div className={style.circle}>
            <img className={style.img} src={ellipse1.src} alt="Diseño UX/UI" />

            <p>Diseño UX/UI</p>
          </div>
          <div className={style.circle}>
            <img
              className={style.img}
              src={ellipse2.src}
              alt="Marketing Digital"
            />
            <p>Marketing Digital</p>
          </div>
          <div className={style.circle}>
            <img className={style.img} src={ellipse3.src} alt="Frontend" />
            <p>Frontend</p>
          </div>
          <div className={style.circle}>
            <img className={style.img} src={ellipse4.src} alt="Backend" />
            <p>Backend</p>
          </div>
          <div className={style.circle}>
            <img className={style.img} src={ellipse5.src} alt="IT" />
            <p>IT</p>
          </div>
        </div>
      </div>
    </div>
  );
}
