import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faYoutube, faInstagram, faLinkedinIn, faTelegram, faDiscord, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAt } from "@fortawesome/free-solid-svg-icons";
export default function SocialMedia({link, iconName}) {

    const getIcon = function (name) {
        switch(name) {
            case 'facebook':
                return faFacebookF;
            case 'youtube':
                return faYoutube;
            case 'instagram':
                return faInstagram;
            case 'linkedin':
                return faLinkedinIn;
            case 'telegram':
                return faTelegram;
            case 'discord':
                return faDiscord;
            case 'mail':
                return faAt;
            case 'twitter':
                return faTwitter;
        }
    }

    return (
        <Link href={link}>  
            <a target="_blank" 
                className="mx-[0.375rem] bg-transparent hover:bg-[#747067] w-[1.5rem] h-[1.5rem] flex justify-center items-center rounded-[0.5rem]"> 
                <FontAwesomeIcon icon={getIcon(iconName)} inverse className="text-[1rem] hover:text-white text-[#747067] p-[5px]"/> 
            </a>
        </Link>
    )
}