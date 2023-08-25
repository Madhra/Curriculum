import React from "react";
import Game from "./svg/game";
import Coffee from "./svg/Coffee";
import Graphic from "./svg/Graphic";
import Palindrome from "./svg/palindrome";
import Messages from "./svg/Messages";
import Organism from "./svg/Organism";
function Portafolio(){
    return(
        <div className="escolaridad">
            <h2 id="habilidades"><span className="greenHighlight">Curriculum:<span className="blueHighlight">~</span></span>$ Habilidades</h2>
            <div className="proyectos">
                <div className="proyecto">
                    <Game />
                    <a href="https://github.com/Madhra/Mole-game" target="_blank">Juego de topos</a>
                    <p>Lenguaje: C</p>
                    <p>Objetivo: Realizar un juego de topos con un PIC18F4550 y 3 LED's.</p>
                </div>
                <div className="proyecto">
                    <Coffee />
                    <a href="https://github.com/Madhra/Blog-Cafe" target="_blank">Coffee Blog</a>
                    <p>Lenguajes: HTML CSS</p>
                    <p>Objetivo: Realizar un blog de cafe.</p>
                </div>
                <div className="proyecto">
                    <Graphic />
                    <a href="https://github.com/Madhra/Graficadora" target="_blank">Graficadora</a>
                    <p>Lenguaje: Python</p>
                    <p>Objetivo: Graficar series de Fourier.</p>
                </div>
                <div className="proyecto">
                    <Palindrome />
                    <a href="https://github.com/Madhra/Palindrome" target="_blank">Palindromo</a>
                    <p>Lenguaje: JS</p>
                    <p>Objetivo: Al introducir una cadena de caracteres sabras si es un Palindromo o no.</p>
                </div>
                <div className="proyecto">
                    <Messages />
                    <a href="https://github.com/Madhra/Mixed_Messages" target="_blank">Mensajes combinados</a>
                    <p>Lenguaje: JS</p>
                    <p>Objetivo: Generar frases cortas aleatorias.</p>
                </div>
                <div className="proyecto">
                    <Organism />
                    <a href="https://github.com/Madhra/mistery-organism" target="_blank">Organismo Misterioso</a>
                    <p>Lenguaje: JS</p>
                    <p>Objetivo: Generar Cadenas de ADN y compararlas.</p>
                </div>
            </div>
        </div>
    )
}

export default Portafolio;