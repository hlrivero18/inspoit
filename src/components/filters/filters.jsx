import Style from "./filters.module.css";

export default function Filters() {
  return (
    <div className={Style.Filters}>
      <div className={Style.FiltersRow}>
        <div className={Style.FiltersColumn}>
          <select id="especializacion" className={Style.FiltersSelects}>
            <option value="default">ESPECIALIZACION</option>
          </select>
        </div>

        <div className={Style.FiltersColumn}>
          <select id="fecha" className={Style.FiltersSelects}>
            <option value="default"> FECHA</option>
          </select>
        </div>

        <div className={Style.FiltersColumn}>
          <select id="complejidad" className={Style.FiltersSelects}>
            <option value="default"> COMPLEJIDAD</option>
          </select>
        </div>

        <div className={Style.FiltersColumn}>
          <select id="estado" className={Style.FiltersSelects}>
            <option value="default"> ESTADO</option>
          </select>
        </div>
      </div>
    </div>
  );
}
