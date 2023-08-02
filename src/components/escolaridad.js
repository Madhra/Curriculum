import React from "react";
import Preparatoria from '../img/Preparatoria.jpeg';
import Universidad from '../img/140520_regiontequilera_cuvalles_3_0-3490864655.jpeg';
import contenido from "../functional/contenido";

function Escolaridad() {
    const referenceArray = [0, 1];
    return (
        <div className="escolaridad">
            <h2 id="Escuela"><span class="greenHighlight">Curriculum:<span class="blueHighlight">~</span></span>$ cd Escolaridad</h2>
            {referenceArray.map((element) =>
                <>
                    <div class="image-container">
                        <img src={!element ? Preparatoria : Universidad} alt="Preparatoria" />
                        <div class="preparatoria">
                            <h3>{contenido.escolaridad.escuela[element]}</h3>
                        </div>
                    </div><div class="texto-preparatoria">
                        <h4 class="celular"><span class="greenHighlight">Curriculum\Escolaridad:<span class="blueHighlight">~</span></span>$
                            {contenido.escolaridad.carrera[element]}</h4>
                        <p>{contenido.escolaridad.fecha[element]}</p>
                        <p>{contenido.escolaridad.descripcion[element]}</p>
                    </div>
                </>
            )}
        </div>
    )
}

export default Escolaridad;