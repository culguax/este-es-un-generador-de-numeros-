document.addEventListener("keypress", function(event) {
    // Verificamos si la tecla presionada es "Enter" (código 13)
    if (event.key === "Enter") {
        generarNumeros();
    }
});

function generarNumeros() {
    let numero = parseInt(document.getElementById("numeroInput"). value);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    for( let i = 0; i <= numero; i++){
        let color = "";

        if(i % 2 === 0){
            color = "green";
        }
        else if(esPrimo(i)){
            color = "red";
        }
        else{
            color = "yellow";
        }

        let numeroSpan = document.createElement("span");
        numeroSpan.textContent = i;
        numeroSpan.style.backgroundColor = color;
        resultado.appendChild(numeroSpan);
    }
}


function esPrimo(numero) {
    if(numero < 2){
        return false;
    }

    for(let i = 2; i < numero; i++){
        if(numero % i === 0){
            return false;
        }
    }
    return true;
}

