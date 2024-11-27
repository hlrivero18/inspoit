import style from "./Footer.module.css";
import logo from "@/images/logoI.png";
import instagram from "@/images/instagram.png";
import linkedin from "@/images/linkedin.png";
import facebook from "@/images/facebook.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={style.footerCont}>
      <hr />
      <div className={style.redes}>
        <img src={instagram.src} alt="Logo" className={style.instagram} />
        <img src={linkedin.src} alt="Logo" className={style.instagram} />
        <img src={facebook.src} alt="Logo" className={style.instagram} />
      </div>
      <div className={style.footer}>
        <div className={style.footer2}>
          <div className={style.newsletterSection}>
            <h1 className={style.newsletterTitle}>
              Suscríbete a nuestro Newsletter
            </h1>
            <form className={style.newsletterForm}>
              <input
                type="email"
                placeholder="E-MAIL"
                required
                className={style.newsletterInput}
              />
              <button type="submit" className={style.newsletterButton}>
                <i className="fas fa-arrow-right"></i>
              </button>
            </form>
            <img src={logo.src} alt="Logo" className={style.logo} />
          </div>
          <div className={style.categoriesSection}>
            <h2 className={style.sectionTitle}>CATEGORÍAS</h2>
            <ul className={style.categoriesList}>
              <Link href={"/"}>
                <li className={style.categoryItem}>Inicio</li>
              </Link>
              <Link href={"/red"}>
                <li className={style.categoryItem}>Red</li>
              </Link>
              <Link href={"/tyc"}>
                <li className={style.categoryItem}>Terminos</li>
              </Link>
              <Link href={"/about"}>
                <li className={style.categoryItem}>
                  Acerca de InspoIT Argentina
                </li>
              </Link>
            </ul>
          </div>
          <div className={style.contactSection}>
            <h2 className={style.sectionTitle}>CONTACTANOS</h2>
            <ul className={style.contactList}>
              <li className={style.contactItem}>11-2702-8021</li>
              <li className={style.contactItem}>InspoIT@gmail.com</li>
              <li className={style.iconwhatsapp}>
                <i className="fab fa-whatsapp"></i>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <p>&copy; InspoIT - 2024. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
