"use client";
import style from "./Nav.module.css";
import { MdSearch } from "react-icons/md";
import { MdOutlineMenuOpen } from "react-icons/md";
import { Lato } from "next/font/google";
import logo from "@/images/logoI.png";
import Link from "next/link";
import { useState } from "react";

const lato = Lato({ subsets: ["latin"], weight: ["700"] });

// ! este nav es de uso general, solo para usuarios que no estan logueados

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className={`${style.container}`}>
      <nav className={` ${style.nav}`}>
        <section className={`${style.nav__logo}`}>
          <Link href="/" style={{ all: "unset" }}>
            <img src={logo.src} alt="logo inspoit" />
          </Link>
        </section>
        <ul>
          <Link href={"/red"}>
            <li>RED</li>
          </Link>
          <li>CONTACTO</li>
          <Link href={"/about"}>
            <li>NOSOTROS</li>
          </Link>
          <Link href={"/FQAs"}>
            <li>FQAs</li>
          </Link>
        </ul>
        <section className={`${style.nav__sectionButton}`}>
          <Link href={"/register"}>
            <button className="bg-botonNaranja">Crear Cuenta</button>
          </Link>

          <Link href={"/login"}>
            <button className="bg-botonVerde">Ingresar</button>
          </Link>

          <div className="cursor-pointer">
            <MdSearch />
          </div>
        </section>

        {/* ! version mobile */}

        <section className={`${style.nav__menu}`} onClick={handleMenu}>
          <MdOutlineMenuOpen />
        </section>
      </nav>
      <section
        className={` ${style.menu__expand} ${menu ? style.show : style.hide}`}
      >
        <ul>
          <li>RED</li>
          <li>CONTACTO</li>
          <Link href={"/about"} onClick={handleMenu}>
            <li>NOSOTROS</li>
          </Link>
          <li>FQAs</li>
          <Link href={"/login"} onClick={handleMenu}>
            <li>INGRESAR</li>
          </Link>
          <Link href={"/register"} onClick={handleMenu}>
            <li>CREAR CUENTA</li>
          </Link>
        </ul>
      </section>
    </div>
  );
}
