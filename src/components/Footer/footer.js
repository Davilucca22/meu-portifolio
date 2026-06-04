import React from "react";
import './footer.css';
import { SlSocialGithub, SlSocialLinkedin } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <p className="footer-name">
                        DAVI<span className="footer-accent">LUCAS</span>
                    </p>
                    <p className="footer-copy">©2025 por Davi Lucas. Todos os direitos reservados.</p>
                </div>
                <nav className="footer-social" aria-label="Redes sociais de Davi Lucas">
                    <a
                        href="https://www.linkedin.com/in/davilucca22"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn de Davi Lucas"
                        className="footer-social-link footer-linkedin"
                    >
                        <SlSocialLinkedin />
                    </a>
                    <a
                        href="https://github.com/Davilucca22"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub de Davi Lucas"
                        className="footer-social-link footer-github"
                    >
                        <SlSocialGithub />
                    </a>
                    <a
                        href="https://wa.me/qr/ZZFAG3EVAASOA1"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp de Davi Lucas"
                        className="footer-social-link footer-whatsapp"
                    >
                        <FaWhatsapp />
                    </a>
                </nav>
            </div>
            <div className="footer-divider" />
            <p className="footer-bottom">Desenvolvido com ❤️ por Davi Lucas</p>
        </footer>
    );
}