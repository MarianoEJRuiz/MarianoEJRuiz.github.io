
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
       let div = document.createElement("div");
       div.className ="e";
       id_barra.appendChild(div); 
    }
}
let bobath = document.getElementById("bobath");
crearBarra(bobath);
let vojta = document.getElementById("vojta");
crearBarra(vojta);
let kabat = document.getElementById("kabat");
crearBarra(Kabat);
let peto = document.getElementById("peto");
crearBarra(peto);
let frenkel = document.getElementById("frenkel");
crearBarra(frenkel);
let feldenkrais = document.getElementById("feldenkrais");
crearBarra(feldenkrais);
let contadores = [-1,-1,-1,-1,-1,-1,];
let entro = false;

function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalBobath = setInterval(function(){pintarBarra(bobath, 16, 0, intervalBobath);},100);
        const intervalKabat = setInterval(function(){pintarBarra(kabat, 13, 0, intervalKabat);},100);
        const intervalVojta = setInterval(function(){pintarBarra(vojta, 5, 1, intervalVojta);},100);
        const intervalPeto = setInterval(function(){pintarBarra(peto, 4, 1, intervalPeto);},100);
        const intervalFrenkel = setInterval(function(){pintarBarra(frenkel, 11, 2, intervalFrenkel);},100);
        const intervalFeldenkrais = setInterval(function(){pintarBarra(feldenkrais, 4, 1, intervalFeldenkrais);},100);
    }
}
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementByClasName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}
window.onscroll = function(){
    efectoHabilidades();
}


    

    