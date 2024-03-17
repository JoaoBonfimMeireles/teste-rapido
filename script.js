const valor = Number(Math.round(Math.random() * 10))
let meuvalor = "";
let text = document.getElementById("text");
let tentativas = []
// const button = document.getElementById("button").onclick = confirmar();

document.getElementById("input").addEventListener("input", function () {
    meuvalor = Number(this.value)
});


document.getElementById("button").addEventListener("click", function () {
    text = document.getElementById("text");
    tentativas.push(meuvalor)
    confirmar();
});

function confirmar() {
    if (meuvalor === valor) {
        text.innerHTML = "Parabens " +  tentativas.length
    } else if(meuvalor === "") {
        text.innerHTML = "digite um valor"
    } else {
        text.innerHTML = "Burrão"
    }
}

