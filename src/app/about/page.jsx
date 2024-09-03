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


          {/* <ProfileCard fullName={"Pepito Perez"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, obcaecati aperiam error velit accusamus, consectetur cupiditate sapiente magnam, eum consequuntur officia voluptatibus! Tenetur nulla quisquam amet asperiores. Aliquid sapiente alias praesentium rerum. Porro, quis facilis? Amet, dignissimos totam? Ipsam quis ea iste cupiditate tempora architecto ipsum ut, consequatur labore odit."} imageUrl={"https://placehold.co/400x400"} social={{
            Facebook: 'https://www.facebook.com/',
            Twitter: 'https://www.twitter.com/',
            Instagram: 'https://www.instagram.com/',
            LinkedIn: 'https://www.linkedin.com/',
            YouTube: 'https://www.youtube.com/',
            TikTok: 'https://www.tiktok.com/',
          }} />
          <ProfileCard fullName={"Pepito Perez"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, obcaecati aperiam error velit accusamus, consectetur cupiditate sapiente magnam, eum consequuntur officia voluptatibus! Tenetur nulla quisquam amet asperiores. Aliquid sapiente alias praesentium rerum. Porro, quis facilis? Amet, dignissimos totam? Ipsam quis ea iste cupiditate tempora architecto ipsum ut, consequatur labore odit."} imageUrl={"https://placehold.co/400x400"} social={{
            Facebook: 'https://www.facebook.com/',
            Twitter: 'https://www.twitter.com/',
            Instagram: 'https://www.instagram.com/',
            LinkedIn: 'https://www.linkedin.com/',
            YouTube: 'https://www.youtube.com/',
            TikTok: 'https://www.tiktok.com/',
          }} isReversed />
          <ProfileCard fullName={"Pepito Perez"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, obcaecati aperiam error velit accusamus, consectetur cupiditate sapiente magnam, eum consequuntur officia voluptatibus! Tenetur nulla quisquam amet asperiores. Aliquid sapiente alias praesentium rerum. Porro, quis facilis? Amet, dignissimos totam? Ipsam quis ea iste cupiditate tempora architecto ipsum ut, consequatur labore odit."} imageUrl={"https://placehold.co/400x400"} social={{
            Facebook: 'https://www.facebook.com/',
            Twitter: 'https://www.twitter.com/',
            Instagram: 'https://www.instagram.com/',
            LinkedIn: 'https://www.linkedin.com/',
            YouTube: 'https://www.youtube.com/',
            TikTok: 'https://www.tiktok.com/',
          }} />
          <ProfileCard fullName={"Pepito Perez"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, obcaecati aperiam error velit accusamus, consectetur cupiditate sapiente magnam, eum consequuntur officia voluptatibus! Tenetur nulla quisquam amet asperiores. Aliquid sapiente alias praesentium rerum. Porro, quis facilis? Amet, dignissimos totam? Ipsam quis ea iste cupiditate tempora architecto ipsum ut, consequatur labore odit."} imageUrl={"https://placehold.co/400x400"} social={{
            Facebook: 'https://www.facebook.com/',
            Twitter: 'https://www.twitter.com/',
            Instagram: 'https://www.instagram.com/',
            LinkedIn: 'https://www.linkedin.com/',
            YouTube: 'https://www.youtube.com/',
            TikTok: 'https://www.tiktok.com/',
          }} isReversed />
          <ProfileCard fullName={"Pepito Perez"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, obcaecati aperiam error velit accusamus, consectetur cupiditate sapiente magnam, eum consequuntur officia voluptatibus! Tenetur nulla quisquam amet asperiores. Aliquid sapiente alias praesentium rerum. Porro, quis facilis? Amet, dignissimos totam? Ipsam quis ea iste cupiditate tempora architecto ipsum ut, consequatur labore odit."} imageUrl={"https://placehold.co/400x400"} social={{
            Facebook: 'https://www.facebook.com/',
            Twitter: 'https://www.twitter.com/',
            Instagram: 'https://www.instagram.com/',
            LinkedIn: 'https://www.linkedin.com/',
            YouTube: 'https://www.youtube.com/',
            TikTok: 'https://www.tiktok.com/',
          }} /> */}
        </section>

        <section className="py-16 text-[#1B4956] flex justify-center gap-10 border-t-4 border-t-white">
          <a href="https://www.instagram.com/">
            <FaInstagram className="text-6xl"/>
          </a>
          <a href="https://www.linkedin.com/">
            <FaLinkedinIn className="text-6xl"/>
          </a>
          <a href="https://www.facebook.com/">
            <FaFacebookSquare className="text-6xl"/>
          </a>
        </section>
      </div>
    </>
  );
}
