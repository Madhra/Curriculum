import React from "react";

function NavBar() {
    const elementosNavBar = ['Sobre_mi', 'Escolaridad', 'Experiencia_Laboral', 'Habilidades', 'Portafolio'];

    return (
        <nav className="Barra-Navegacion" id="nav">
            <h1><span class="greenHighlight">Curriculum:<span class="blueHighlight">~</span></span>$</h1>
            <ul>
                {elementosNavBar.map((element) => {
                    return (<li>{element}</li>)
                })}
            </ul>
        </nav>
    )
}

export default NavBar