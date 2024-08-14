import style from "./Nav.module.css"
import { MdSearch } from "react-icons/md";
import { Lato } from "next/font/google";
import logo from "@/images/logoI.png"

const lato = Lato({ subsets: ["latin"], weight: ["700"] })

export default function Navbar() {
    return (
        <nav className={` ${style.nav}`}>
            <section className={`${style.nav__logo}`}>
                <img src={logo.src} alt="" />
            </section>
            <ul>
                <li>RED</li>
                <li>CONTACTO</li>
                <li>NOSOTROS</li>
                <li>FQAs</li>
            </ul>
            <section className={`${style.nav__sectionButton}`}>
                <button className="bg-botonNaranja">Crear Cuenta</button>
                <button className="bg-botonVerde">Ingresar</button>
                <div className="">
                    <MdSearch />
                </div>
            </section>
        </nav>
    )
}