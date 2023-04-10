//Declaracion de variablesas
const body = document.body;
const moon = document.getElementById("moon");
const para = document.querySelectorAll("p");
const h1 = document.querySelectorAll("h1");
const h2 = document.querySelectorAll("h2");
const h3 = document.querySelectorAll("h3");
const h4 = document.querySelectorAll("h4");
const svg = document.querySelectorAll("svg");
const a = document.getElementById("whatsapp")
const li = document.querySelectorAll("li");
const nav = document.getElementById("nav");
const footer = document.querySelector("footer");
const sun = document.getElementById("sun");

//Funciones
const lightTheme = () => {
    body.style.backgroundColor = 'white';
    para.forEach(element => element.style.color = "black");
    h1.forEach(element => element.style.color = "black");
    h2.forEach(element => element.style.color = "black");
    h3.forEach(element => element.style.color = "black");
    h3.forEach(element => element.style.backgroundColor = "white");
    h4.forEach(element => element.style.color = "black");
    svg.forEach(element => element.style.stroke = "#000000");
    a.style.color = "black";
    li.forEach(element => element.style.color = 'black');
    nav.style.borderBottom = "0.2rem solid black";
    footer.style.borderTop = "0.2rem solid black";
    moon.style.display = "none";
    sun.style.display = "block"
}

const darkmode = () => {
    location.reload();
}

//Eventos

moon.onclick = lightTheme;
sun.onclick = darkmode;