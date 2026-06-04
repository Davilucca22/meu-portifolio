import React, { useState, useEffect } from "react";
import { SlSocialGithub, SlSocialLinkedin } from "react-icons/sl";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import './header.css';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
            <nav className="nav-container" role="navigation" aria-label="Navegação principal">
                <a href="#inicio" className="nav-logo" onClick={closeMenu}>
                    DAVI<span className="logo-accent">LUCAS</span>
                </a>

                <ul className="nav-links">
                    <li><a href="#sobremim">Sobre mim</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#conhecimentos">Conhecimentos</a></li>
                    <li><a href="#falecomigo">Contatos</a></li>
                </ul>

                <div className="nav-social">
                    <a href="https://www.linkedin.com/in/davilucca22" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Davi Lucas">
                        <SlSocialLinkedin />
                    </a>
                    <a href="https://github.com/Davilucca22" target="_blank" rel="noopener noreferrer" aria-label="GitHub de Davi Lucas">
                        <SlSocialGithub />
                    </a>
                    <a href="https://wa.me/qr/ZZFAG3EVAASOA1" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp de Davi Lucas">
                        <FaWhatsapp />
                    </a>
                </div>

                <button
                    className="hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </nav>

            <div
                id="mobile-menu"
                className={`mobile-menu ${menuOpen ? 'open' : ''}`}
                aria-hidden={!menuOpen}
            >
                <ul>
                    <li><a href="#sobremim" onClick={closeMenu}>Sobre mim</a></li>
                    <li><a href="#projetos" onClick={closeMenu}>Projetos</a></li>
                    <li><a href="#conhecimentos" onClick={closeMenu}>Conhecimentos</a></li>
                    <li><a href="#falecomigo" onClick={closeMenu}>Contatos</a></li>
                </ul>
                <div className="mobile-social">
                    <a href="https://www.linkedin.com/in/davilucca22" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <SlSocialLinkedin />
                    </a>
                    <a href="https://github.com/Davilucca22" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <SlSocialGithub />
                    </a>
                    <a href="https://wa.me/qr/ZZFAG3EVAASOA1" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                        <FaWhatsapp />
                    </a>
                </div>
            </div>
        </header>
    );
}