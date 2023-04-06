const white = 16777215;
const black = 0;

//Funciones
const darkmode = () => {
    
    for(let i = white; i > black; i = i - 100){
        let hex = i.toString(16);
        if(hex.length === 3){
            console.log(`000${hex}`);
        }
        if(hex.length === 2){
            console.log(`0000${hex}`);
        }
        if(hex.length === 1){
            console.log(`00000${hex}`);
        }
    }
}

//Pruebas
darkmode();