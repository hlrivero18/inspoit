import style from "./Tipoddevoluntariados.module.css";

import publicaeventos from "@/images/homePage/publicaeventos.png";
import registratuoganizacion from "@/images/homePage/registratuoganizacion.png";
import vacantesconImpacto from "@/images/homePage/vacantesconImpacto.png";

export default function Tipodevoluntariado() {
  return (
    <div className={style.cardcontainer}>
      <div className={style.card}>
        <div className={style.icon}>
          {/* <img src={publicaeventos.src} className={style.card} alt="Vacantes con Impacto"> */}
          <img
            className={style.card}
            src={publicaeventos.src}
            alt="Vacantes con Impacto"
          />
        </div>
        <h3>Encuentra Vacantes con Impacto</h3>
        <p>
          Encuentra vacantes de empleo y oportunidades de voluntariado en el
          sector de impacto en el lugar que quieras y en el área que te
          interese.
        </p>
      </div>
      <div className={style.card}>
        <div className={style.icon}>
          <img
            src={registratuoganizacion.src}
            className={style.card}
            alt="Registra tu Organización"
          />
        </div>
        <h3>Registra tu Organización</h3>
        <p>
          Registra tu organización, colectivo o empresa social, de forma
          gratuita, en nuestro directorio de más de 150,000 organizaciones y
          publica tus vacantes, eventos, oportunidades de voluntariado y más.
        </p>
      </div>
      <div className={style.card}>
        <div className={style.icon}>
          <img
            src={vacantesconImpacto.src}
            className={style.card}
            alt="Publica Eventos"
          />
        </div>
        <h3>Publica Eventos</h3>
        <p>
          Promociona todos los eventos de tu organización o empresa, de forma
          gratuita, entre miles de personas interesadas en el sector de impacto.
        </p>
      </div>
    </div>
  );
}
