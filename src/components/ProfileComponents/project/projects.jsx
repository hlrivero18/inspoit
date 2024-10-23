import { CiCirclePlus } from "react-icons/ci";
import style from "./projects.module.css"
import useStore from "@/store/useStore";

export default function Project({ project, id }) {
    const { user } = useStore()
    
    return (
        <section className={`${style.cardG} p-10`}>
            {project ?
                <>
                    <h3>Proyectos</h3>

                </>
                :
                id === user ?
                    <div className={`${style.newProject}`}>
                        <h3>Añadir un proyecto</h3>
                        <h4><CiCirclePlus /></h4>
                    </div>
                    :
                    <>
                      <h3>Proyectos</h3> 
                      <p>Este usuario aun no tiene proyectos para mostrar</p> 
                    </>
            }
        </section>
    )
}