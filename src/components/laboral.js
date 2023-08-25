import React from "react";
import Beliveo from '../img/Beliveo.jpeg';
import Central from '../img/central.jpg';
import Plexus from '../img/Screenshot from 2023-04-03 20-40-11.png';
import contenido from "../functional/contenido";

function Laboral() {
    const referenceArray = [0, 1, 2];
    return (
        <div className="escolaridad">
            <h2 id="Escuela"><span class="greenHighlight">Curriculum:<span class="blueHighlight">~</span></span>$ Experiecia_Laboral</h2>
            {referenceArray.map((element) =>
                <>
                    <div class="image-container">
                        <img src={!element ? Beliveo : element === 1 ? Central : Plexus} alt="Preparatoria" />
                        <div class="preparatoria">
                            <h3>{contenido.trabajo.trabajo[element]}</h3>
                        </div>
                    </div><div class="texto-preparatoria">
                        <h4 class="celular"><span class="greenHighlight">Curriculum\Laboral:<span class="blueHighlight">~</span></span>$
                            {contenido.trabajo.puesto[element]}</h4>
                        <p>{contenido.trabajo.fecha[element]}</p>
                        <p>{contenido.trabajo.descripcion[element]}</p>
                    </div>
                </>
            )}
        </div>
    )
}

export default Laboral;