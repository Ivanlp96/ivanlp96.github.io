
let menuVisible = false;
/*funcion para ocultar o mostrar el menu*/

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
 /*funcion para la carga de habilidades */ 
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
boton();


slider.addEventListener('click',() =>{
    let swichTotheme = localStorage.getItem('theme')=== 'dark' ? 'ligth' : 'dark';
    setTheme(swichTotheme);
});

setTheme(localStorage.getItem('theme') || preferedColorScheme);

/*funcion que cambia el icono segun la preferencia guardada*/
function boton(){
    if(localStorage.getItem('theme') == 'dark'){
        document.getElementById("slider").classList.add('active');
        cambio = true;
    }else{
        document.getElementById("slider").classList.remove('active');  
        cambio = false;
    }
}


/*funcion para el cambio de icono del solo y la luna */

slider.addEventListener('click',() =>{
    if(cambio){
        document.getElementById("slider").classList.remove('active');  
        cambio = false
    }else{
        document.getElementById("slider").classList.add('active');
        cambio = true;
    }
   });
