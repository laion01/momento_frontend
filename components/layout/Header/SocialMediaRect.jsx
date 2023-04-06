import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faYoutube, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function SocialMediaRect({link, iconName}) {

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
        }
    }

    return (
        <Link href={link}>
            <a target="_blank" className="m-[8px]"> <FontAwesomeIcon icon={getIcon(iconName)} size='2x'/> </a>
        </Link>
    )
}