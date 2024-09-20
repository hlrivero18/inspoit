import SobreNosotros from "./sobreNosotros/SobreNosotros";
import Tipodevoluntariado from "./tiposdevoluntariados/Tipoddevoluntariados";
import Voluntariado from "./voluntariado/Voluntariado";
import style from "./Homepage.module.css";
import Organizaciones from "./organizaciones/Organizaciones";
import Tutorial from "./tutorial/Tutorial";
import Slider from "./slider/slider";

export default function Homepage() {
  return (
    <div className={style.home}>
      <Slider/>
      <Organizaciones/>
      <hr className={style.homeHr} /> <br />
      <Tutorial/>
      <hr className={style.homeHr} /> <br />
      <Voluntariado />
      <hr className={style.homeHr} /> <br />
      <Tipodevoluntariado />
      <hr />
      <br />
      <SobreNosotros />
    </div>
  );
}
