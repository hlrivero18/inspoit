import { FaUser } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import { ImExit } from "react-icons/im";
import Link from "next/link";
import useStore from "@/store/useStore";
import style from "./searchbar.module.css";
import { logout } from "@/utils/setLogin/loginJwt";

export default function SearchBar() {
  const { user } = useStore();
  return (
    <section className={`${style.nav__sectionButton}`}>
      <Link href={"/profile/" + user}>
        <span>
          <FaUser />
        </span>
      </Link>
      <span onClick={() => logout()}>
        <ImExit />
      </span>
    </section>
  );
}
