import React from "react";
import Projetos from "../Projetos/projetos";
import Conhecimentos from "../Conhecimentos/Conhecimentos";
import './main.css';
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Main() {
    return (
        <main>

            {/* ===== HERO ===== */}
            <section id="inicio" className="hero">
                <div className="hero-content">
                    <p className="hero-greeting">HELLO WORLD 🖖</p>
                    <h1 className="hero-title">
                        EU SOU <span className="hero-name">DAVI</span>,
                    </h1>
                    <h2 className="hero-subtitle">Desenvolvedor Web Full-Stack</h2>
                    <p className="hero-desc">
                        Criando interfaces modernas e soluções digitais com performance,
                        organização e foco na experiência do usuário.
                    </p>
                    <div className="hero-actions">
                        <a href="#falecomigo" className="btn btn-primary">Fale Comigo</a>
                        <a href="#projetos" className="btn btn-outline">Ver Projetos</a>
                    </div>
                </div>
                <div className="hero-image">
                    <img
                        src="./images/arte frontend.png"
                        alt="Ilustração de desenvolvimento frontend com notebook"
                    />
                </div>
            </section>

            {/* ===== SOBRE MIM ===== */}
            <section id="sobremim" className="about-section">
                <div className="section-container about-grid">
                    <div className="about-text">
                        <span className="section-label">Sobre mim</span>
                        <h2 className="section-title">Quem sou eu</h2>
                        <p className="descricao">
                            Olá, eu sou Davi, desenvolvedor web focado na criação de interfaces modernas,
                            sistemas funcionais e soluções digitais que unem desempenho, organização e
                            experiência do usuário.
                        </p>
                        <p className="descricao">
                            Tenho experiência no desenvolvimento de aplicações utilizando JavaScript, React,
                            Node.js, Express, MongoDB, HTML, CSS e Tailwind CSS, criando projetos completos
                            desde o frontend até a integração com banco de dados e APIs.
                        </p>
                        <p className="descricao">
                            Além do desenvolvimento web, também atuo com Power Apps e SharePoint, criando
                            sistemas internos, automações e soluções empresariais para controle de processos,
                            estoque, movimentações e gerenciamento de informações.
                        </p>
                        <p className="descricao">
                            Meu foco é desenvolver aplicações que não sejam apenas bonitas visualmente, mas
                            que realmente resolvam problemas, otimizem processos e entreguem uma experiência
                            fluida para o usuário. Estou sempre buscando evoluir tecnicamente e criar projetos
                            cada vez mais profissionais e bem estruturados.
                        </p>
                    </div>
                    <div className="about-photo-wrapper">
                        <img
                            src="./images/eu.jpeg"
                            alt="Foto de Davi Lucas, desenvolvedor web"
                            className="about-photo"
                        />
                    </div>
                </div>
            </section>

            {/* ===== PROJETOS ===== */}
            <section id="projetos" className="projects-section">
                <div className="section-container">
                    <span className="section-label">Portfólio</span>
                    <h2 className="section-title">Projetos</h2>
                    <Projetos />
                </div>
            </section>

            {/* ===== CONHECIMENTOS ===== */}
            <section id="conhecimentos" className="skills-section">
                <div className="section-container">
                    <span className="section-label">Stack</span>
                    <h2 className="section-title">Conhecimentos</h2>
                    <Conhecimentos />
                </div>
            </section>

            {/* ===== FALE COMIGO ===== */}
            <section id="falecomigo" className="contact-section">
                <div className="section-container contact-inner">
                    <span className="section-label">Contato</span>
                    <h2 className="section-title">Fale Comigo</h2>
                    <p className="contact-desc">
                        Estou disponível para novos projetos e oportunidades. Entre em contato!
                    </p>
                    <div className="contact-cards">
                        <a href="mailto:Davilucarios47@gmail.com" className="contact-card">
                            <MdEmail className="contact-icon" />
                            <div>
                                <p className="contact-card-label">Email</p>
                                <p className="contact-card-value">Davilucarios47@gmail.com</p>
                            </div>
                        </a>
                        <a href="tel:+5535991152505" className="contact-card">
                            <BsFillTelephoneFill className="contact-icon" />
                            <div>
                                <p className="contact-card-label">Telefone</p>
                                <p className="contact-card-value">+55 35 991152505</p>
                            </div>
                        </a>
                    </div>
                    <a
                        href="https://wa.me/qr/ZZFAG3EVAASOA1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-whatsapp"
                    >
                        <FaWhatsapp /> Conversar no WhatsApp
                    </a>
                </div>
            </section>

        </main>
    );
}
