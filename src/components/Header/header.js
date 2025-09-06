import React, { useState } from "react";
import { SlSocialGithub, SlSocialLinkedin } from "react-icons/sl";
import { FaWhatsapp, FaGripLines } from "react-icons/fa";
import './header.css'

export default function Header(){

    const [mostrarInfo,setmostrainfo] = useState(false)

    function toggleinfo(){
        setmostrainfo(!mostrarInfo)

    }

    return(
        <nav>
            <section className="infoDisplay">
                <h1>DAVILUCAS</h1>
                <span onClick={toggleinfo}><FaGripLines /></span>
            </section>
            <section className={`infoHidden ${mostrarInfo ? "ativo" : ""}`}>
            <div id="menus">
                <ul className="linksPage">
                    <li><a href="#sobre">Sobre mim</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#conhecimentos">Conhecimentos</a></li>
                    <li><a href="#contato">Contatos</a></li>
                </ul>
                <ul className="socialLinks">
                    <li><a href="https://www.linkedin.com/in/davilucca22?trk=contact-info" target="blank_"><SlSocialLinkedin /></a></li>
                    <li><a href="https://github.com/Davilucca22" target="blank_"><SlSocialGithub /></a></li>
                    <li><a href="https://wa.me/qr/ZZFAG3EVAASOA1" target="blank_"><FaWhatsapp /></a></li>
                </ul>
            </div>
            </section>
        </nav>
    )
}