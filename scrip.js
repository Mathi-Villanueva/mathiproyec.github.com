let button = document.getElementById("calcular");
button.addEventListener("click", calcular);

function hollidaysegar(peso){
    return "holliday"
}

function superficioCoporal (peso) {
    return "superficie"
}

function calcular() {
    const input = document.getElementById("peso")
    const peso = input.value;
    if (peso <= 30) {
        console.log(hollidaysegar(peso));
} else {
    console.log(superficioCoporal(peso));
    } 
}

