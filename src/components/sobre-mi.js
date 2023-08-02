import React from "react";
import contenido from "../functional/contenido";

function SobreMi() {
    return (
        <div className="sobre-mi" id="yo">
            <div>
                <h2><span className="greenHighlight">Curriculum:<span className="blueHighlight">~</span></span>$ Sobre_mi</h2>
                <h3>{contenido["sobre-mi"].nombre}</h3>
                <p>{contenido["sobre-mi"].contenido}</p>
            </div>
            <div className="Img-dario" />
        </div>
    )
}

export default SobreMi