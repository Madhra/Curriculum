import React from "react";

function NavBar() {
    const elementosNavBar = ['Sobre_mi', 'Escolaridad', 'Experiencia_Laboral', 'Habilidades', 'Portafolio'];

    return (
        <nav className="Barra-Navegacion" id="nav">
            <h1><span class="prueba">Curriculum:<span class="prueba2">~</span></span>$ ls</h1>
            <ul>
                {elementosNavBar.map((element) => {
                    return <li>{element}</li>
                })}
            </ul>
        </nav>
    )
}

export default NavBar