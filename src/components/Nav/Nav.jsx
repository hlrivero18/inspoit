import style from "./Nav.module.css"
import { MdSearch } from "react-icons/md";
import { Lato } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["700"] })

export default function Navbar() {
    return (
        <nav className={`${lato.className} ${style.nav}`}>
            <section>
                logo imaginario
            </section>
            <ul>
                <li>Red</li>
                <li>Contacto</li>
                <li>Nosotros</li>
                <li>FQAs</li>
            </ul>
            <section className={`${style.nav__sectionButton}`}>
                <button>Crear Cuenta</button>
                <button>Ingresar</button>
                <div className="">
                    <MdSearch />
                </div>
            </section>
        </nav>
    )
}