import React from "react";
import './Conhecimentos.css'

export default function Conhecimentos(){
    return(
        <div>

        <div id="conteinercards">
        <h3>Conhecimentos</h3>
            <div className="cards">
                <img src="./images/iconeHTML.png" alt="icone HTML"></img>
                <h2>HTML</h2>
                <p>HTML é a linguagem de marcação responsável pela estruturação do conteúdo na web. Ele define a hierarquia e o significado semântico dos elementos, como títulos, parágrafos, listas, links, imagens e formulários</p>
            </div>
            <div className="cards">
                <img src="./images/iconeCSS.png" alt="icone CSS"></img>
                <h2>CSS</h2>
                <p>CSS é a linguagem utilizada para definir a apresentação visual de documentos HTML. Por meio dela, é possível aplicar estilos como cores, tipografia, espaçamentos, layouts responsivos e animações. Suporta diferentes paradigmas, como Flexbox e Grid, permitindo a criação de interfaces escaláveis e adaptáveis a múltiplos dispositivos.</p>
            </div>
            <div className="cards">
                <img src="./images/iconeJS.png" alt="icone HTML"></img>
                <h2>JavaScript</h2>
                <p>JavaScript é uma linguagem de programação interpretada, orientada a eventos e de tipagem dinâmica, utilizada principalmente no desenvolvimento web.Hoje é amplamente utilizado tanto no front-end quanto no back-end, graças ao Node.js.</p>
            </div>
            <div className="cards">
                <img src="./images/iconeNODE.png" alt="icone HTML"></img>
                <h2>Node.js</h2>
                <p>Node.js é um ambiente de execução JavaScript baseado no motor V8 do Google Chrome. Ele permite executar código JavaScript no lado do servidor, oferecendo recursos para criação de APIs, manipulação de arquivos, gerenciamento de pacotes (NPM) e integração com bancos de dados. Sua arquitetura orientada a eventos e não bloqueante o torna altamente eficiente para aplicações escaláveis.</p>
            </div>
            <div className="cards">
                <img src="./images/iconeREACT.png" alt="icone HTML"></img>
                <h2>React</h2>
                <p>React é uma biblioteca JavaScript de código aberto voltada para o desenvolvimento de interfaces de usuário. Baseado em componentes reutilizáveis, utiliza o conceito de Virtual DOM para otimizar a atualização da interface. React facilita a criação de aplicações de página única (SPAs) com gerenciamento de estado, escalabilidade e integração com bibliotecas auxiliares como Redux e React Router.</p>
            </div>
            <div className="cards" id="cardAprend">
                <img id="seeMore" src="./images/icons8-more-96.png" alt="icone HTML"></img>
                <h2>Em Breve...</h2>
                <p>O aprendizado nunca para, em breve mais Stacks</p>
            </div>
        </div>
    </div>

    )
}