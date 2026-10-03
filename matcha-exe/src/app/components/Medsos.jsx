import { FaInstagram,FaTiktok } from "react-icons/fa";
import {social} from "../config.js"
import { ImInstagram } from "react-icons/im";

const ICONS = {
    Instagram: FaInstagram,
    Tiktok: FaTiktok,
};


export default function Medsos() {
    return (
       <footer className="footer" id="medsos">
        {social.map((s)=>{
            const Icon = ICONS[s.label];
            return(
                <a 
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                >
                    <Icon className="social-link-icon" aria-hidden="true"/>
                    <span>{s.label}</span>

                </a>
            );
        })}
       </footer>
    );
}

