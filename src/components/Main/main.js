import React from "react";
import './main.css'

export default function Main(){
    return(
        <main>
            <div className="helloW">
            <p>HELLO WORLD 🖖</p>
            <h1 id="eusou">EU SOU DAVI,</h1>
            <h2>Desenvolvedor front-end...</h2>
            <button type="button">Fale Comigo</button>
            </div>

            <img src="./images/arte frontend.png" alt="foto de um notebook"></img>

            <div id="fraseEfeito">
                <p>“Cada linha de código é um passo entre o caos e a ordem.”</p>
            </div>
        </main>
    )
}