import React from "react";
import './projetos.css'
import { FaGithub } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";


export default function Projetos(){
    return(
        <div id="ConteinerCards">
            <div className="card">
                <h2>Creatina Page</h2>
                <img className="img" src="./images/paginaCreatina.PNG" alt="print do site"></img>
                <p>um site desenvolvido para mostrar os beneficios e usos da Creatina</p>
                <p>CSS + HTML</p>
                <div class="links">
                    <a href="https://github.com/Davilucca22/Creatine-Page" target="blank_" ><FaGithub /></a>
                    <a href="https://creatine-page.vercel.app/" target="blank_" ><IoEyeSharp /></a>
                </div>
            </div>

            <div className="card">
                <h2>Lista de Tarefas</h2>
                <img className="img" src="./images/listaDeTarefas.png" alt="print do site"></img>
                <p>uma lista de Tarefas simples com dados persistentes e responsividade</p>
                <p>CSS + HTML + Javascript</p>
                <div class="links">
                    <a href="https://github.com/Davilucca22/Lista-de-Tarefas" target="blank_" ><FaGithub /></a>
                    <a href="https://lista-de-tarefas-liard-seven.vercel.app/" target="blank_" ><IoEyeSharp /></a>
                </div>
            </div>

            <div className="card">
                <h2>Rede Social</h2>
                <video src="./video/videoProjetoBlog.mp4" autoPlay loop muted playsInline></video>
                <p>Um Blog completo com autenticação de usuario, pesquisa de outros usuarios, curtidas, postagens, edição de posts e exlusão</p>
                <p>CSS + React + Node.js + MongoDB</p>
                <div class="links">
                    <a href="https://github.com/Davilucca22/Blog-com-node" target="blank_" ><FaGithub /></a>
                    <a href="https://blog-com-node.vercel.app" target="blank_" ><IoEyeSharp /></a>
                </div>
            </div>

            <div className="card">
                <h2>Site dia dos namorados</h2>
                <img className="img" src="./images/diadosnamorados.png"  alt="print do site"></img>
                <p>um site desenvolvido para presentear quem voce ama em datas comemorativas</p>
                <p>CSS + HTML + Javascript</p>
                <div class="links">
                    <a href="https://github.com/Davilucca22/site-dia-dos-namorados" target="blank_" ><FaGithub /></a>
                    <a href="https://site-dia-dos-namorados-umber.vercel.app/" target="blank_" ><IoEyeSharp /></a>
                </div>
            </div>
            <div className="card">
                <h2>Meu Portifolio</h2>
                <img className="img" src="./images/portifolio.png"  alt="print do site"></img>
                <p>O presente site, desenvolvido para mostrar minhas habilidades, qualificaçoes e projetos.</p>
                <p>CSS + HTML + Javascript + React</p>
                <div class="links">
                    <a href="https://github.com/Davilucca22/meu-portifolio" target="blank_" ><FaGithub /></a>
                    <a href="https://meu-portifolio-dusky-five.vercel.app/" target="blank_" ><IoEyeSharp /></a>
                </div>
            </div>
        </div>
    )
}