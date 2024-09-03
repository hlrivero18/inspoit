import style from "./SobreNosotros.module.css";

import fotoMakro from "@/images/homePage/fotoMakro.png";
export default function SobreNosotros() {
  return (
    <div className={style.container}>
      <div className={style.imagecontainer}>
        <img src={fotoMakro.src} alt="Grupo de personas frente a Makro" />
      </div>
      <div className={style.textcontainer}>
        <h2 className={style.h2}>Sobre Nosotros</h2>
        <p className={style.p}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse delectus
          laudantium eius nam vero id suscipit, sunt error doloremque
          reprehenderit minima ipsam hic atque ratione! Laudantium esse aperiam
          ab illo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          delectus laudantium eius nam vero id suscipit, sunt error doloremque
          reprehenderit minima ipsam hic atque ratione! Laudantium esse aperiam
          ab illo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          delectus laudantium eius nam vero id suscipit, sunt error doloremque
          reprehenderit minima ipsam hic atque ratione! Laudantium esse aperiam
          ab illo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          delectus laudantium eius nam vero id suscipit, sunt error doloremque
          reprehenderit minima ipsam hic atque ratione! Laudantium esse aperiam
          ab illo!.........
        </p>
        <p className={style.p}></p>
        <button className={style.button}>Saber Más</button>
      </div>
    </div>
  );
}
