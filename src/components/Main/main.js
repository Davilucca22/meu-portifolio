import React from "react";
import Projetos from "../Projetos/projetos";
import Conhecimentos from "../Conhecimentos/Conhecimentos";
import './main.css'
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";


export default function Main(){
    return(
        <main>
            <div class="apresentacao">
                <section className="helloW">
                    <p>HELLO WORLD 🖖</p>
                    <h1 id="eusou">EU SOU DAVI,</h1>
                    <h2>Desenvolvedor Web...</h2>
                    <button type="button"><a href="#falecomigo">Fale Comigo</a></button>
                </section>
                <img id="imgPC" src="./images/arte frontend.png" alt="foto de um notebook"></img>
            </div>

            <section id="sobremim">
                <p id="bloco"></p>
                <div id="miniCont">
                    <div class="texto">
                        <h3>Sobre mim</h3>
                        <p className="descricao">Olá, eu sou Davi, desenvolvedor web focado na criação de interfaces modernas, sistemas funcionais e soluções digitais que unem desempenho, organização e experiência do usuário.</p>
                        <p className="descricao">Tenho experiência no desenvolvimento de aplicações utilizando JavaScript, React, Node.js, Express, MongoDB, HTML, CSS e Tailwind CSS, criando projetos completos desde o frontend até a integração com banco de dados e APIs.</p>
                        <p className="descricao">Além do desenvolvimento web, também atuo com Power Apps e SharePoint, criando sistemas internos, automações e soluções empresariais para controle de processos, estoque, movimentações e gerenciamento de informações.</p>
                        <p className="descricao">Meu foco é desenvolver aplicações que não sejam apenas bonitas visualmente, mas que realmente resolvam problemas, otimizem processos e entreguem uma experiência fluida para o usuário.</p>
                        <p className="descricao">Estou sempre buscando evoluir tecnicamente, aprender novas ferramentas e criar projetos cada vez mais profissionais, performáticos e bem estruturados.</p>
                    </div>
                    <div id="divft">
                        <img id="minhaCara" src="./images/eu.jpeg" alt="eu"></img>
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
                <button><a href="https://wa.me/qr/ZZFAG3EVAASOA1" target="blank_" ><FaWhatsapp/> Whatsapp</a></button>
            </section>
            <hr></hr>

        </main>
    )
}
