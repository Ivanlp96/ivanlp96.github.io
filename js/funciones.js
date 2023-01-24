
let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList="";
    menuVisible = false;
}

function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_habilidad = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_habilidad >=300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("php");
        habilidades[3].classList.add("c");
        habilidades[4].classList.add("sql");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajoEquipo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
    }
}


const preferedColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'ligth';
const slider = document.getElementById('slider');

const setTheme = (theme) =>{
    document.documentElement.setAttribute('data-theme',theme);
    localStorage.setItem('theme',theme);
}

slider.addEventListener('click',() =>{
    let swichTotheme = localStorage.getItem('theme')=== 'dark' ? 'ligth' : 'dark';
    setTheme(swichTotheme);
});

setTheme(localStorage.getItem('theme') || preferedColorScheme);
