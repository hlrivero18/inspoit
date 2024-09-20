import style from "./Tutorial.module.css";
import tutoImagen from "@/images/homePage/tutoImagen.png";
import Link from "next/link";

export default function Tutorial() {
  return (

    <section className={`${style.contenedorTutorial}`}>
      <div className="m-auto">
        <iframe
          src="https://www.youtube.com/embed/jzqgailQx_Q?si=7ZaIhTmWlgYvDRf6"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div>
        <div className={style.contenedor}>
          <h1 className={style.h1}>
            Red fácil y sencilla de comprender
          </h1>
          <h3 className={style.h3}>Únase sin costo y descubra oportunidades para colaborar con ONGs y fundaciones.
          </h3>
          <div className={style.icono}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.75 12.5C11.5117 12.5 13.75 10.2617 13.75 7.5C13.75 4.73828 11.5117 2.5 8.75 2.5C5.98828 2.5 3.75 4.73828 3.75 7.5C3.75 10.2617 5.98828 12.5 8.75 12.5ZM12.25 13.75H11.5977C10.7305 14.1484 9.76562 14.375 8.75 14.375C7.73438 14.375 6.77344 14.1484 5.90234 13.75H5.25C2.35156 13.75 0 16.1016 0 19V20.625C0 21.6602 0.839844 22.5 1.875 22.5H12.6133C12.5195 22.2344 12.4805 21.9531 12.5117 21.668L12.7773 19.2891L12.8242 18.8555L13.1328 18.5469L16.1523 15.5273C15.1953 14.4453 13.8086 13.75 12.25 13.75ZM14.0195 19.4258L13.7539 21.8086C13.7109 22.207 14.0469 22.543 14.4414 22.4961L16.8203 22.2305L22.207 16.8438L19.4062 14.043L14.0195 19.4258ZM24.7266 13.0039L23.2461 11.5234C22.8828 11.1602 22.2891 11.1602 21.9258 11.5234L20.4492 13L20.2891 13.1602L23.0938 15.9609L24.7266 14.3281C25.0898 13.9609 25.0898 13.3711 24.7266 13.0039Z"
                fill="#306139"
              />
            </svg>
            <div className={style.textoIcono}>
              <h2 className={style.h2}>Regístrese y Explore</h2>

              <h3 className={style.h3}>
                Unase sin costo y descubra oportunidades para colaborar con ONGs y
                fundaciones
              </h3>
            </div>
          </div>
          <div className={style.icono}>
            <svg
              width="30"
              height="20"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.33333 23.9584C7.76042 23.9584 7.26997 23.7544 6.86198 23.3464C6.45399 22.9384 6.25 22.4479 6.25 21.875V17.7084H8.33333V18.75H18.75V6.25002H8.33333V7.29169H6.25V3.12502C6.25 2.5521 6.45399 2.06165 6.86198 1.65367C7.26997 1.24568 7.76042 1.04169 8.33333 1.04169H18.75C19.3229 1.04169 19.8134 1.24568 20.2214 1.65367C20.6293 2.06165 20.8333 2.5521 20.8333 3.12502V21.875C20.8333 22.4479 20.6293 22.9384 20.2214 23.3464C19.8134 23.7544 19.3229 23.9584 18.75 23.9584H8.33333ZM8.33333 20.8334V21.875H18.75V20.8334H8.33333ZM4.58333 17.7084L3.125 16.25L8.95833 10.4167H5.20833V8.33335H12.5V15.625H10.4167V11.875L4.58333 17.7084ZM8.33333 4.16669H18.75V3.12502H8.33333V4.16669Z"
                fill="#306139"
              />
            </svg>
            <div className={style.textoIcono}>
              <h2 className={style.h2}>Publica y Colabora con Facilidad</h2>


              <h3 className={style.h3}>
                Publica ofertas de voluntariado y atrae a los mejores talentos
                comprometidos con tu causa sin complicaciones.
              </h3>
            </div>
          </div>
          <div className={style.icono}>
            <svg
              width="60"
              height="20"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75 11.25C5.12891 11.25 6.25 10.1289 6.25 8.75C6.25 7.37109 5.12891 6.25 3.75 6.25C2.37109 6.25 1.25 7.37109 1.25 8.75C1.25 10.1289 2.37109 11.25 3.75 11.25ZM21.25 11.25C22.6289 11.25 23.75 10.1289 23.75 8.75C23.75 7.37109 22.6289 6.25 21.25 6.25C19.8711 6.25 18.75 7.37109 18.75 8.75C18.75 10.1289 19.8711 11.25 21.25 11.25ZM22.5 12.5H20C19.3125 12.5 18.6914 12.7773 18.2383 13.2266C19.8125 14.0898 20.9297 15.6484 21.1719 17.5H23.75C24.4414 17.5 25 16.9414 25 16.25V15C25 13.6211 23.8789 12.5 22.5 12.5ZM12.5 12.5C14.918 12.5 16.875 10.543 16.875 8.125C16.875 5.70703 14.918 3.75 12.5 3.75C10.082 3.75 8.125 5.70703 8.125 8.125C8.125 10.543 10.082 12.5 12.5 12.5ZM15.5 13.75H15.1758C14.3633 14.1406 13.4609 14.375 12.5 14.375C11.5391 14.375 10.6406 14.1406 9.82422 13.75H9.5C7.01562 13.75 5 15.7656 5 18.25V19.375C5 20.4102 5.83984 21.25 6.875 21.25H18.125C19.1602 21.25 20 20.4102 20 19.375V18.25C20 15.7656 17.9844 13.75 15.5 13.75ZM6.76172 13.2266C6.30859 12.7773 5.6875 12.5 5 12.5H2.5C1.12109 12.5 0 13.6211 0 15V16.25C0 16.9414 0.558594 17.5 1.25 17.5H3.82422C4.07031 15.6484 5.1875 14.0898 6.76172 13.2266Z"
                fill="#306139"
              />
            </svg>

            <div className={style.textoIcono}>
              <h2 className={style.h2}>Oportunidades para Crecer sin Experiencia Previa</h2>
              <h3 className={style.h3}>
                Colabore con los mejores y aproveche cada oportunidad para aprender
                y crecer, sin importar su experiencia previa. En Inspo IT,
                facilitamos la mejora de tu trabajo y te ayudamos a maximizar el
                impacto de cada proyecto.
              </h3>
            </div>
          </div>
          <div className={style.botonesTutorial}>
            <Link className={style.botonregistrate} href="/register">
              <button >REGISTRATE</button>
            </Link>
            <Link className={style.botoninspirate} href={"/red"}>
            <button >INSPIRATE</button>
            </Link>
            
          </div>
        </div>
      </div>
    </section>
  )

}
