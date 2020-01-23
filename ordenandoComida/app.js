function order () {
    let ceviche = true;
    let tacosAlPastor = false;
    let empanadaChilena = false;
    let hamburguesa = true;
    
    if(ceviche) {
        alert ("Me encanta el ceviche");
    } else if (tacosAlPastor) {
        alert ("Mmm tacos, Excelente opción");
    } else if (empanadaChilena) {
        alert ("mmm estaría bien");
    } else {
        alert ("ok, me da dos hamburguesas entonces.")
    }
}

let button = document.getElementById("button");
button.addEventListener("click", order , false); 
