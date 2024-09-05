import SobreNosotros from "./sobreNosotros/SobreNosotros";
import Tipodevoluntariado from "./tiposdevoluntariados/Tipoddevoluntariados";
import Voluntariado from "./voluntariado/Voluntariado";
import Presentacion from "./Presentacion/Presentacion";
import Tutorial from "./Tutorial/Tutorial";
import Organizaciones from "./organizaciones/Organizaciones";
import style from "./Homepage.module.css";
export default function Homepage() {
  return (
    <div className={style.home}>
      <Presentacion />
      <Tutorial />
      <Organizaciones />
      <Voluntariado />
      <hr className={style.homeHr} /> <br />
      <Tipodevoluntariado />
      <hr />
      <br />
      <SobreNosotros />
    </div>
  );
}