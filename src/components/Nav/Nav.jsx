'use client'
import style from "./Nav.module.css"
import { MdSearch } from "react-icons/md";
import { MdOutlineMenuOpen } from "react-icons/md";
import { Lato } from "next/font/google";
import logo from "@/images/logoI.png"
import Link from "next/link";
import { useState } from "react";

const lato = Lato({ subsets: ["latin"], weight: ["700"] })

export default function Navbar() {
    const [menu, setMenu] = useState(false)

    const handleMenu = () => {
        setMenu(!menu)
    }

    return (
        <div className={`${style.container}`}>
            <nav className={` ${style.nav}`}>
                <section className={`${style.nav__logo}`}>
                    <Link href="/" style={{ all: 'unset' }}>
                        <img src={logo.src} alt="logo inspoit" />
                    </Link>
                </section>
                <ul>
                    <li>RED</li>
                    <li>CONTACTO</li>
                    <li>NOSOTROS</li>
                    <li>FQAs</li>
                </ul>
                <section className={`${style.nav__sectionButton}`}>
                    <Link href={'/register'}>
                        <button className="bg-botonNaranja">Crear Cuenta</button>
                    </Link>

                    <Link href={'/login'}>
                        <button className="bg-botonVerde">Ingresar</button>
                    </Link>

                    <div className="cursor-pointer">
                        <MdSearch />
                    </div>
                </section>
                <section className={`${style.nav__menu}`} onClick={handleMenu}>
                    <MdOutlineMenuOpen />
                </section>
            </nav>
                <section className={` ${style.menu__expand} ${menu ? style.show : style.hide}`}>
                    <ul>
                        <li>RED</li>
                        <li>CONTACTO</li>
                        <li>NOSOTROS</li>
                        <li>FQAs</li>
                        <li>INGRESAR</li>
                        <li>CREAR CUENTA</li>
                    </ul>
                </section>

        </div>

    )
}