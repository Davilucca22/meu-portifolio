import React from "react";
import Projetos from "../Projetos/projetos";
import Conhecimentos from "../Conhecimentos/Conhecimentos";
import Header from "../Header/header"
import './main.css'
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";


export default function Main(){
    return(
        <main>
            <Header />
            <div class="apresentacao">
                <section className="helloW">
                    <p>HELLO WORLD 🖖</p>
                    <h1 id="eusou">EU SOU DAVI,</h1>
                    <h2>Desenvolvedor front-end...</h2>
                    <button type="button"><a href="#falecomigo">Fale Comigo</a></button>
                </section>
                <img id="imgPC" src="./images/arte frontend.png" alt="foto de um notebook"></img>
            </div>

            <section id="sobremim">
                <p id="bloco"></p>
                <div id="miniCont">
                    <div class="texto">
                        <h3>Sobre mim</h3>
                        <p id="descricao">Olá, me chamo Davi Lucas. Sou graduando em Análise e Desenvolvimento de Sistemas pela Universidade São Francisco (USF) e atuo como desenvolvedor web front-end. Estou no início da minha trajetória profissional na área de tecnologia, mas já carrego comigo a curiosidade e a dedicação de quem busca evoluir constantemente.Tenho interesse especial em construir interfaces funcionais, responsivas e bem estruturadas, sempre pensando na melhor experiência para o usuário. Estou em constante aprendizado, explorando novas ferramentas, linguagens e frameworks que possam agregar valor ao meu trabalho e ampliar minha visão como desenvolvedor.Meu próximo grande objetivo é me tornar um desenvolvedor fullstack, unindo o conhecimento do front-end com a solidez do back-end, para entregar soluções mais completas e integradas.</p>
                    </div>
                    <div id="divft">
                        <img id="minhaCara" src="./images/eu.jpg" alt="eu"></img>
                    </div>
                </div>
            </section>

            <section id="projetos">
                <p id="bloco"></p>
                <h3 id="tituloProj">Projetos</h3>
                <Projetos />
            </section>

            <section id='conhecimentos'>
                <p id="bloco"></p>
                <Conhecimentos />
            </section>

            <section id="falecomigo">
                <p id="bloco"></p>
                <h3>Fale Comigo</h3>
                <p><MdEmail/> Davilucarios47@gmail.com</p>
                <p><BsFillTelephoneFill/> +55 35 991152505</p>
                <button><a href="https://wa.me/qr/ZZFAG3EVAASOA1" ><FaWhatsapp/> Whatsapp</a></button>
            </section>
        </main>
    )
}
