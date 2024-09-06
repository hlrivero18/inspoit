import ProfileCard from "@/components/ProfileCard/ProfileCard";
import { FaInstagram, FaLinkedinIn, FaFacebookSquare } from "react-icons/fa";
import profiles from "@/utils/profiles";
import logo from "@/images/LogoOriginal.png"

export default function AboutUs() {
  return (
    <>
      <div className="min-h-screen px-3 bg-gradient-to-b from-[#1B4956] to-[#ACD9D4]">

        <section className="py-10 border-b-2 border-b-white flex flex-col justify-center items-center">
          <h2 className="pb-10 text-4xl text-center text-white font-bold">Acerca de Inspo IT</h2>
          <img src={logo.src} alt="imagen banner" className="bg-gray-200 rounded-full p-12"/>
          <div className="py-7 w-10/12 text-xl text-white  ">
          InspoIT es una red innovadora dedicada a conectar organizaciones que enfrentan dificultades para acceder a herramientas tecnológicas o hacerse notar en el mundo digital, con voluntarios apasionados del ámbito IT. Estos voluntarios, que buscan obtener su primera experiencia real como desarrolladores, diseñadores, editores, y más, tienen la oportunidad de aplicar sus habilidades en proyectos significativos. Al mismo tiempo, las organizaciones beneficiadas reciben el apoyo necesario para mejorar su presencia digital, impulsando su crecimiento y aumentando su impacto en la comunidad. Juntos, creamos un puente entre el talento emergente y las necesidades tecnológicas de quienes más lo necesitan, fomentando un ecosistema inclusivo y colaborativo en el mundo de la tecnología.
          </div>
        </section>
        <section className="py-10">
          <h2 className="text-4xl text-center text-white font-bold py-10">Sobre nosotros</h2>
         {profiles.map((p, i) =>{
          return(
            <ProfileCard 
            key = {i}
            fullName={p.name} 
            description={p.description}
            imageUrl={p.image}
            social={p.social}
            isReversed = {i % 2 == 0 ? true : false}
            />
          )
         })}
        </section>
      </div>
    </>
  );
}
