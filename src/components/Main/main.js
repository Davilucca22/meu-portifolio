import React from "react";
import Projetos from "../Projetos/projetos";
import Conhecimentos from "../Conhecimentos/Conhecimentos";
import './main.css'

export default function Main(){
    return(
        <main>
            <div class="apresentacao">
                <section className="helloW">
                    <p>HELLO WORLD 🖖</p>
                    <h1 id="eusou">EU SOU DAVI,</h1>
                    <h2>Desenvolvedor front-end...</h2>
                    <button type="button">Fale Comigo</button>
                </section>
                <img id="imgPC" src="./images/arte frontend.png" alt="foto de um notebook"></img>
                <div id="fraseEfeito">
                    <p>“Cada linha de código é um passo entre o caos e a ordem.”</p>
                </div>
            </div>

            <section id="sobremim">
                <div id="miniCont">
                    <p id="bloco"></p>
                    <h3>Sobre mim</h3>
                    <p id="descricao">Olá, me chamo Davi Lucas. Sou graduando em Análise e Desenvolvimento de Sistemas pela Universidade São Francisco (USF) e atuo como desenvolvedor web front-end. Estou no início da minha trajetória profissional na área de tecnologia, mas já carrego comigo a curiosidade e a dedicação de quem busca evoluir constantemente.Tenho interesse especial em construir interfaces funcionais, responsivas e bem estruturadas, sempre pensando na melhor experiência para o usuário. Estou em constante aprendizado, explorando novas ferramentas, linguagens e frameworks que possam agregar valor ao meu trabalho e ampliar minha visão como desenvolvedor.Meu próximo grande objetivo é me tornar um desenvolvedor fullstack, unindo o conhecimento do front-end com a solidez do back-end, para entregar soluções mais completas e integradas.</p>
                    <div id="divft">
                        <img id="minhaCara" src="./images/eu.jpg" alt="eu"></img>
                    </div>
                </div>
            </section>

            <section id="projetos">
                <p id="bloco"></p>
                <Projetos />
            </section>

            <section id='conhecimentos'>
                <p id="bloco"></p>
                <Conhecimentos />
            </section>
        </main>
    )
}
