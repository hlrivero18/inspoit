import { Lato } from "next/font/google";
import { MdFacebook, MdBlock } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const lato = Lato({ subsets: ["latin"], weight: ["700"] })

function getSocialIcon(socialName) {
    let iconComponent = <MdBlock />;
    const socialIconStyles = "w-10 h-10";
    switch (socialName.toLowerCase().trim()) {
        case "facebook":
            iconComponent = <MdFacebook className={socialIconStyles} />
            break;

        case "github":
            iconComponent = <FaGithub className={socialIconStyles} />
            break;

        case "twitter":
            iconComponent = <FaXTwitter className={socialIconStyles} />
            break;
        case "linkedin":
            iconComponent = <FaLinkedin className={socialIconStyles}/>
            break
        default:
            iconComponent = <MdBlock className={socialIconStyles} />
            break;
    }

    return iconComponent;
}

export default function ProfileCard({ fullName, description, imageUrl, social, isReversed = false }) {
    return (
        <>
            <div className={`text-white py-6 flex flex-col gap-3 items-center ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} lg:justify-center lg:gap-10 lg:px-16`}>
                <div className="basis-40 lg:basis-96 flex-none">
                    <img className="rounded-full w-40 lg:w-full" src={imageUrl} alt={`foto de perfil ${fullName}`} />


                </div>
                <div className="py-3 flex flex-col items-center gap-3">
                    <h3 className="text-3xl font-bold">{fullName}</h3>
                    <p className="text-xl font-normal">{description}</p>
                    <ul className="flex flex-wrap gap-3">
                        {
                            Object.entries(social).map(([socialName, url]) => {
                                return (
                                    <li key={socialName}>
                                        <a href={url} target="_blank" rel="noreferrer">
                                            {getSocialIcon(socialName)}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

