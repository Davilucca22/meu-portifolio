import React from "react";
import './projetos.css'
import { FaGithub } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";


export default function Projetos(){
    return(
        <div id="ConteinerCards">
        <h3 id="titulo">Projetos</h3>
            <div className="card">
                <h2>Creatina Page</h2>
                <img className="img" src="./images/paginaCreatina.PNG" alt="print do site"></img>
                <p>um site desenvolvido para mostrar os beneficios e usos da Creatina</p>
                <p>CSS + HTML</p>
                <a href="https://github.com/Davilucca22/Creatine-Page" target="blank_" ><FaGithub /></a> 
                <a href="https://creatine-page.vercel.app/" target="blank_" ><IoEyeSharp /></a> 
            </div>

            <div className="card">
                <h2>Lista de Tarefas</h2>
                <img className="img" src="./images/listaDeTarefas.png" alt="print do site"></img>
                <p>uma lista de Tarefas simples com dados persistentes e responsividade</p>
                <p>CSS + HTML + Javascript</p>
                <a href="https://github.com/Davilucca22/Lista-de-Tarefas" target="blank_" ><FaGithub /></a> 
                <a href="https://lista-de-tarefas-liard-seven.vercel.app/" target="blank_" ><IoEyeSharp /></a> 
            </div>

            <div className="card">
                <h2>Tensao X Corrente</h2>
                <img className="img" src="./images/correnteXtensao.png" alt="print do site"></img>
                <p>site desenvolvido para cliente para fins industriais, carga de bancos de baterias de chumbo</p>
                <p>CSS + HTML + Javascript</p>
                <a href="https://github.com/Davilucca22/Tensao-Corrente" target="blank_" ><FaGithub /></a> 
                <a href="https://tensao-corrente.vercel.app/" target="blank_" ><IoEyeSharp /></a> 
            </div>

            <div className="card">
                <h2>Site dia dos namorados</h2>
                <img className="img" src="./images/diadosnamorados.png"  alt="print so site"></img>
                <p>um site desenvolvido para presentear quem voce ama em datas comemorativas</p>
                <p>CSS + HTML + Javascript</p>
                <a href="https://github.com/Davilucca22/site-dia-dos-namorados" target="blank_" ><FaGithub /></a> 
                <a href="https://site-dia-dos-namorados-umber.vercel.app/" target="blank_" ><IoEyeSharp /></a> 
            </div>
        </div>
    )
}