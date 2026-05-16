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
            <div className="cards" >
                <img src="./images/mongodb.png" alt="icone HTML"></img>
                <h2>MongoDB</h2>
                <p>MongoDB é um banco de dados NoSQL orientado a documentos, utilizado para armazenar grandes volumes de informações de forma flexível, rápida e escalável.
Diferente dos bancos relacionais tradicionais, o MongoDB não utiliza tabelas e colunas. Os dados são armazenados em documentos no formato BSON (uma versão binária do JSON), permitindo estruturas mais dinâmicas e fáceis de adaptar conforme a necessidade do projeto.
Essa abordagem torna o MongoDB muito utilizado em aplicações web modernas, APIs, sistemas em tempo real e projetos que precisam de alta performance e flexibilidade no gerenciamento de dados.</p>
            </div>
        </div>
    </div>

    )
}