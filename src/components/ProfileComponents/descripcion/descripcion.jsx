import { CiCirclePlus } from "react-icons/ci";
import style from "./descripcion.module.css"
import useStore from "@/store/useStore";

export default function Descripcion({ descripcion, id, setFormOn }) {
    const { user } = useStore()
    return (
        <section className={`${style.cardG} p-10`}>
            {descripcion ?
                <>
                    <h3>Descripción</h3>
                    <p>{descripcion}</p>
                </>
                :
                id === user ?
                    <div className={`${style.newProject}`}>
                        <h3>Añadir una descripción</h3>
                        <h4 onClick={()=>setFormOn(true)}><CiCirclePlus /></h4>

                    </div>
                    :
                    <>
                      <h3>Descripción</h3>
                      <p>este usuario no tiene descripcion para mostrar</p>  
                    </>
            }
        </section>
    )
}