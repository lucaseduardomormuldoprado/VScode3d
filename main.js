const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-05-10T00:00:00");

function calculatempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempofinal = tempoObjetivo - tempoAtual;
    let segundos = math.floor(tempofinal / 1000);
    let minutos = math.floor(segundos/60);
    let horas = math.floor(minutos/60);
    let dias = math.floor(horas/24);
    return dias;
}

contadores[0].textContent = calculatempo(tempoObjetivo);

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        for (j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}