import style from "./Organizaciones.module.css";
import Link from "next/link";
import orgImagen from "@/images/homePage/orgImagen.png";

export default function Organizaciones() {
  return (
    <section className={style.Organizaciones}>
      <div className={style.container}>
        <div className={style.texto}>
          <h1 className={style.h1}>
            <b>Encuentra<br></br> organizaciones que<br></br> necesitan tu ayuda</b>
          </h1>
          <h2 className={style.h2}>
            Navega y conéctate con organizaciones sin fines<br></br> de lucro que apoyan
            las causas que te interesan
          </h2>
          <Link href={"/red"} >
            <button className={style.botonexplorar}>EXPLORAR ORGANIZACIONES</button>
          </Link>
        </div>

        <div className={style.containerImagen}>
          <img src={orgImagen.src} alt="organizaciones" />
        </div>
      </div>
    </section>
  );
}
