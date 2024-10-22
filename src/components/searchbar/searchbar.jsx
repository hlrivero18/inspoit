import { FaUser } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import Link from "next/link";
import useStore from "@/store/useStore";
import style from "./searchbar.module.css"

export default function SearchBar() {
    const { user } = useStore()
    return (
        <section className={`${style.nav__sectionButton}`}>
            <div className={`${style.inputContainer}`}>
                <i><MdSearch /></i>
               <input type="text" placeholder={"buscar..."}/> 
            </div>
            
            <Link href={"/profile/" + user}>
                <span>
                    <FaUser />
                </span>
            </Link>
        </section>
    )
}