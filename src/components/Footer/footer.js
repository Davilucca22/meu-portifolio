import React from "react";
import './footer.css'
import { SlSocialGithub, SlSocialLinkedin } from "react-icons/sl";
import { FaWhatsapp  } from "react-icons/fa";

export default function footer(){
    return(
        <footer>
            <div id="texto">
                <h4>DaviLucas</h4>
                <p>©2025 por Davi Lucas.</p>
                <p>Todos os direitos reservados.</p>
            </div>
            <div id="redeSociais">
                <ul>
                    <li><a href="https://www.linkedin.com/in/davilucca22?trk=contact-info" target="blank_"><SlSocialLinkedin /></a></li>
                    <li><a href="https://github.com/Davilucca22" target="blank_"><SlSocialGithub /></a></li>
                    <li><a href="https://wa.me/qr/ZZFAG3EVAASOA1" target="blank_"><FaWhatsapp /></a></li>
                </ul>
            </div>
        </footer>
    )
}