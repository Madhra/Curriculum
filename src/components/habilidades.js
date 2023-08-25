import React from "react";
import contenido from "../functional/contenido";
import Diagnostico from "./svg/Diagnostico";
import Mantenimiento from "./svg/Mantenimiento";
import Office from "./svg/Office";
import Git from "./svg/git";
import Administracion from "./svg/Administracion";
import Desarrollo from "./svg/Desarrollo";
import Conocimiento from "./svg/Conocimiento";
import Linux from "./svg/Linux";

function Habilidades() {
    
    const habilityArray = contenido.habilidades.habilidad;
    const svgs = [<Diagnostico />, <Mantenimiento />, <Office />, <Git />, <Administracion />, <Desarrollo />, <Conocimiento />, <Linux />]

    return (
        <div className="escolaridad">
            <h2 id="habilidades"><span class="greenHighlight">Curriculum:<span class="blueHighlight">~</span></span>$ Habilidades</h2>
            <div className="habilidades">
                {habilityArray.map((element, index) => {
                    return (
                        <div className="habilidad">
                            {svgs[index]}
                            <p>{element}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Habilidades