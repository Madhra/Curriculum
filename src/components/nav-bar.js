import React from "react";

function NavBar() {
    const elementosNavBar = ['Sobre_mi', 'Escolaridad', 'Experiencia_Laboral', 'Habilidades', 'Portafolio'];

    return (
        <nav className="Barra-Navegacion" id="nav">
            <h1><span class="greenHighlight">Curriculum:<span class="blueHighlight">~</span></span>$ ls</h1>
            <ul>
                {elementosNavBar.map((element) => {
                    return (<li>{element}</li>)
                })}
                <li><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun" width="44"
                    height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFF" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="12" r="4" />
                    <path
                        d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
                </svg></li>
            </ul>
        </nav>
    )
}

export default NavBar