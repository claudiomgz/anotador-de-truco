// DECLARACION DE VARIABLES 
let bloquesBuenasNosotros = document.getElementById('bloquesBuenasNosotros')
let malasNosotros = document.getElementById('malasNosotros')
let bloquesMalasNosotros = document.getElementById('bloquesMalasNosotros')
let subirPuntajeNosotros = document.getElementById('subirPuntajeNosotros')
let bloquesBuenasEllos = document.getElementById('bloquesBuenasEllos')
let malasEllos = document.getElementById('malasEllos')
let bloquesMalasEllos = document.getElementById('bloquesMalasEllos')
let subirPuntajeEllos = document.getElementById('subirPuntajeEllos')
let borrarPuntajeNosotros = document.getElementById('borrarPuntajeNosotros')
let borrarPuntajeEllos = document.getElementById('borrarPuntajeEllos')
let respuesta = document.getElementById('respuesta')
let resultado = document.getElementById('resultado')
let app = document.getElementById('app')
let jugarRevancha = document.getElementById('jugarRevancha')
let a15Puntos = document.getElementById('a15Puntos')
let a30Puntos = document.getElementById('a30Puntos')
let selectorDePuntos = document.getElementById('selector-puntos')
let puntajeNosotros = 0
let puntajeEllos = 0
let puntajeInternoNosotros = 0
let puntajeInternoEllos = 0
let aCuanto = 0

// AL HACER CLICK EN 15 PUNTOS 
a15Puntos.addEventListener('click', function(){
    aCuanto = 15
    selectorDePuntos.style.display = "none"
    document.getElementById('titulo-malas').style.display = "none"
    app.style.display = "block"
})

// AL HACER CLICK EN 30 PUNTOS 
a30Puntos.addEventListener('click', function(){
    aCuanto = 30
    selectorDePuntos.style.display = "none"
    app.style.display = "block"
})

function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}

// AL HACER CLICK EN SUBIR PUNTAJE NOSOTROS 
subirPuntajeNosotros.addEventListener('click', function(){

    if (puntajeNosotros < 15) {
        if (puntajeInternoNosotros == 0) {
            let bloque = document.createElement('div')
            bloque.className = "bloque uno"
            bloquesBuenasNosotros.appendChild(bloque)
            puntajeInternoNosotros = puntajeInternoNosotros + 1
        } else if (puntajeInternoNosotros == 1) {
            bloquesBuenasNosotros.lastChild.className += " dos"
            puntajeInternoNosotros = puntajeInternoNosotros + 1
        } else if (puntajeInternoNosotros == 2) {
            bloquesBuenasNosotros.lastChild.className += " tres"
            puntajeInternoNosotros = puntajeInternoNosotros + 1
        } else if (puntajeInternoNosotros == 3) {
            bloquesBuenasNosotros.lastChild.className += " cuatro"
            puntajeInternoNosotros = puntajeInternoNosotros + 1
        } else if (puntajeInternoNosotros == 4) {
            let bloqueCompleto = document.createElement('div')
            bloqueCompleto.className = "bloque-completo"
            bloquesBuenasNosotros.lastChild.appendChild(bloqueCompleto)
            puntajeInternoNosotros = 0
        }
        puntajeNosotros++
        if (aCuanto == 15 && puntajeNosotros == 15) {
            document.getElementById("popup-1").classList.toggle("active");  
            resultado.innerHTML = "Ganamos nosotros " + puntajeNosotros + " a " + puntajeEllos;
        }
    } else if (puntajeNosotros < 30 && aCuanto == 30) {
        malasNosotros.style.display = "block"
        malasEllos.style.display = "block"
        if (puntajeInternoNosotros == 0) {
            let bloque = document.createElement('div')
            bloque.className = "bloque uno"
            bloquesMalasNosotros.appendChild(bloque)
            puntajeInternoNosotros = puntajeInternoNosotros + 1
        } else if (puntajeInternoNosotros == 1) {
            bloquesMalasNosotros.lastChild.className += " dos"
            puntajeInternoNosotros = puntajeInternoNosotros + 1
        } else if (puntajeInternoNosotros == 2) {
            bloquesMalasNosotros.lastChild.className += " tres"
            puntajeInternoNosotros = puntajeInternoNosotros + 1
        } else if (puntajeInternoNosotros == 3) {
            bloquesMalasNosotros.lastChild.className += " cuatro"
            puntajeInternoNosotros = puntajeInternoNosotros + 1
        } else if (puntajeInternoNosotros == 4) {
            let bloqueCompleto = document.createElement('div')
            bloqueCompleto.className = "bloque-completo"

            bloquesMalasNosotros.lastChild.appendChild(bloqueCompleto)
            puntajeInternoNosotros = 0
        }
        puntajeNosotros++
        if (puntajeNosotros == 30) {
            document.getElementById("popup-1").classList.toggle("active");
            resultado.innerHTML = "Ganamos nosotros " + puntajeNosotros + " a " + puntajeEllos;
        }
    } 

    borrarPuntajeNosotros.style.display = "block" 
}) 

// AL HACER CLICK EN SUBIR PUNTAJE ELLOS 
subirPuntajeEllos.addEventListener('click', function(){

    if (puntajeEllos < 15) {
        if (puntajeInternoEllos == 0) {
            let bloque = document.createElement('div')
            bloque.className = "bloque uno"
            bloquesBuenasEllos.appendChild(bloque)
            puntajeInternoEllos = puntajeInternoEllos + 1
        } else if (puntajeInternoEllos == 1) {
            bloquesBuenasEllos.lastChild.className += " dos"
            puntajeInternoEllos = puntajeInternoEllos + 1
        } else if (puntajeInternoEllos == 2) {
            bloquesBuenasEllos.lastChild.className += " tres"
            puntajeInternoEllos = puntajeInternoEllos + 1
        } else if (puntajeInternoEllos == 3) {
            bloquesBuenasEllos.lastChild.className += " cuatro"
            puntajeInternoEllos = puntajeInternoEllos + 1
        } else if (puntajeInternoEllos == 4) {
            let bloqueCompleto = document.createElement('div')
            bloqueCompleto.className = "bloque-completo"

            bloquesBuenasEllos.lastChild.appendChild(bloqueCompleto)
            puntajeInternoEllos = 0
        }
        puntajeEllos++
        if (aCuanto == 15 && puntajeEllos == 15) {
            document.getElementById("popup-1").classList.toggle("active");
            resultado.innerHTML = "Ganaron ellos " + puntajeNosotros + " a " + puntajeEllos;
        }
    } else if (puntajeEllos < 30 && aCuanto == 30) {
        malasNosotros.style.display = "block"
        malasEllos.style.display = "block"
        if (puntajeInternoEllos == 0) {
            let bloque = document.createElement('div')
            bloque.className = "bloque uno"
            bloquesMalasEllos.appendChild(bloque)
            puntajeInternoEllos = puntajeInternoEllos + 1
        } else if (puntajeInternoEllos == 1) {
            bloquesMalasEllos.lastChild.className += " dos"
            puntajeInternoEllos = puntajeInternoEllos + 1
        } else if (puntajeInternoEllos == 2) {
            bloquesMalasEllos.lastChild.className += " tres"
            puntajeInternoEllos = puntajeInternoEllos + 1
        } else if (puntajeInternoEllos == 3) {
            bloquesMalasEllos.lastChild.className += " cuatro"
            puntajeInternoEllos = puntajeInternoEllos + 1
        } else if (puntajeInternoEllos == 4) {
            let bloqueCompleto = document.createElement('div')
            bloqueCompleto.className = "bloque-completo"

            bloquesMalasEllos.lastChild.appendChild(bloqueCompleto)
            puntajeInternoEllos = 0
        }
        puntajeEllos++
        if (puntajeEllos == 30) {
            document.getElementById("popup-1").classList.toggle("active");
            resultado.innerHTML = "Ganaron ellos " + puntajeNosotros + " a " + puntajeEllos;
        }
    } 
    borrarPuntajeEllos.style.display = "block"
}) 

// AL HACER CLICK EN BORRAR PUNTAJE NOSOTROS 
borrarPuntajeNosotros.addEventListener('click', function(){

    if (puntajeNosotros <= 15 && puntajeNosotros > 0) {
        if (puntajeInternoNosotros === 1) {
            bloquesBuenasNosotros.lastChild.classList.remove("uno")
            puntajeInternoNosotros = puntajeInternoNosotros - 1
            puntajeNosotros = puntajeNosotros - 1
            bloquesBuenasNosotros.lastChild.remove();
        } else if (puntajeInternoNosotros === 2) {
            bloquesBuenasNosotros.lastChild.classList.remove("dos")
            puntajeInternoNosotros = puntajeInternoNosotros - 1
            puntajeNosotros = puntajeNosotros - 1
        } else if (puntajeInternoNosotros === 3) {
            bloquesBuenasNosotros.lastChild.classList.remove("tres")
            puntajeInternoNosotros = puntajeInternoNosotros - 1
            puntajeNosotros = puntajeNosotros - 1
        } else if (puntajeInternoNosotros === 4) {
            bloquesBuenasNosotros.lastChild.classList.remove("cuatro")
            puntajeInternoNosotros = puntajeInternoNosotros - 1
            puntajeNosotros = puntajeNosotros - 1
        } else if (puntajeInternoNosotros === 0) {
            bloquesBuenasNosotros.lastChild.innerHTML = ""
            puntajeNosotros = puntajeNosotros - 1
            puntajeInternoNosotros = 4
        }
    } else if (puntajeNosotros > 15) {
        if (puntajeInternoNosotros === 1) {
            bloquesMalasNosotros.lastChild.classList.remove("uno")
            puntajeInternoNosotros = puntajeInternoNosotros - 1
            puntajeNosotros = puntajeNosotros - 1
            bloquesMalasNosotros.lastChild.remove();
        } else if (puntajeInternoNosotros === 2) {
            bloquesMalasNosotros.lastChild.classList.remove("dos")
            puntajeInternoNosotros = puntajeInternoNosotros - 1
            puntajeNosotros = puntajeNosotros - 1
        } else if (puntajeInternoNosotros === 3) {
            bloquesMalasNosotros.lastChild.classList.remove("tres")
            puntajeInternoNosotros = puntajeInternoNosotros - 1
            puntajeNosotros = puntajeNosotros - 1
        } else if (puntajeInternoNosotros === 4) {
            bloquesMalasNosotros.lastChild.classList.remove("cuatro")
            puntajeInternoNosotros = puntajeInternoNosotros - 1
            puntajeNosotros = puntajeNosotros - 1
        } else if (puntajeInternoNosotros === 0) {
            bloquesMalasNosotros.lastChild.innerHTML = ""
            puntajeNosotros = puntajeNosotros - 1
            puntajeInternoNosotros = 4
        }
    }
    if (puntajeNosotros === 0) {
        borrarPuntajeNosotros.style.display = "none"
    }
})

// AL HACER CLICK EN BORAR PUNTAJE ELLOS 
borrarPuntajeEllos.addEventListener('click', function(){

    if (puntajeEllos <= 15 && puntajeEllos > 0) {
        if (puntajeInternoEllos === 1) {
            bloquesBuenasEllos.lastChild.classList.remove("uno")
            puntajeInternoEllos = puntajeInternoEllos - 1
            puntajeEllos = puntajeEllos - 1
            bloquesBuenasEllos.lastChild.remove();
        } else if (puntajeInternoEllos === 2) {
            bloquesBuenasEllos.lastChild.classList.remove("dos")
            puntajeInternoEllos = puntajeInternoEllos - 1
            puntajeEllos = puntajeEllos - 1
        } else if (puntajeInternoEllos === 3) {
            bloquesBuenasEllos.lastChild.classList.remove("tres")
            puntajeInternoEllos = puntajeInternoEllos - 1
            puntajeEllos = puntajeEllos - 1
        } else if (puntajeInternoEllos === 4) {
            bloquesBuenasEllos.lastChild.classList.remove("cuatro")
            puntajeInternoEllos = puntajeInternoEllos - 1
            puntajeEllos = puntajeEllos - 1
        } else if (puntajeInternoEllos === 0) {
            bloquesBuenasEllos.lastChild.innerHTML = ""
            puntajeEllos = puntajeEllos - 1
            puntajeInternoEllos = 4
        }
    } else if (puntajeEllos > 15) {
        if (puntajeInternoEllos === 1) {
            bloquesMalasEllos.lastChild.classList.remove("uno")
            puntajeInternoEllos = puntajeInternoEllos - 1
            puntajeEllos = puntajeEllos - 1
            bloquesMalasEllos.lastChild.remove();
        } else if (puntajeInternoEllos === 2) {
            bloquesMalasEllos.lastChild.classList.remove("dos")
            puntajeInternoEllos = puntajeInternoEllos - 1
            puntajeEllos = puntajeEllos - 1
        } else if (puntajeInternoEllos === 3) {
            bloquesMalasEllos.lastChild.classList.remove("tres")
            puntajeInternoEllos = puntajeInternoEllos - 1
            puntajeEllos = puntajeEllos - 1
        } else if (puntajeInternoEllos === 4) {
            bloquesMalasEllos.lastChild.classList.remove("cuatro")
            puntajeInternoEllos = puntajeInternoEllos - 1
            puntajeEllos = puntajeEllos - 1
        } else if (puntajeInternoEllos === 0) {
            bloquesMalasEllos.lastChild.innerHTML = ""
            puntajeEllos = puntajeEllos - 1
            puntajeInternoEllos = 4
        }
    }
    if (puntajeEllos === 0) {
        borrarPuntajeEllos.style.display = "none"
    }
})

// AL HACER CLICK EN JUGAR REVANCHA 
jugarRevancha.addEventListener('click', function(){
    bloquesBuenasNosotros.innerHTML = ""
    bloquesBuenasEllos.innerHTML = ""
    bloquesMalasEllos.innerHTML = ""
    bloquesMalasNosotros.innerHTML = ""
    malasNosotros.style.display = "none"
    malasEllos.style.display = "none"
    borrarPuntajeEllos.style.display = "none"
    borrarPuntajeNosotros.style.display = "none"
    puntajeEllos = 0
    puntajeNosotros = 0
    puntajeInternoNosotros = 0
    puntajeInternoEllos = 0
    app.style.display = "block"
    document.getElementById("popup-1").classList.toggle("active");
    window.scroll({top: 0, left: 0, behavior: 'smooth' });
})