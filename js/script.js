
const empezar = document.getElementById('empezar');
empezar.onclick = calcularResultadoDe;

function calcularResultadoDe() {
    calcular('id1', 6);
    calcular('id2', 2);
    calcular('id2', 2);
    calcular('id6', 2);
    calcular('id8', 4);
    calcular('id9', 4);
    calcular('id10', 4);
    calcular('id11', 4);
    calcular('id17', 2);
    calcular('id18', 2);
    calcular('id21', 4);
    calcular('id22', 4);

    mostrarNumeroSinDividir('id3');
    mostrarNumeroSinDividir('id4');
    mostrarNumeroSinDividir('id5');
    mostrarNumeroSinDividir('id7');
    mostrarNumeroSinDividir('id12');
    mostrarNumeroSinDividir('id13');
}

function calcular(id, divisor) {
    let input = document.getElementById(id).value;
    if (input === '' || isNaN(parseFloat(input))) {
        document.getElementById('result' + id.slice(2)).textContent = '';
    } else {
        let result = parseFloat(input) / divisor;
        result = result.toFixed(2);
        document.getElementById('result' + id.slice(2)).textContent = result;
    }
}


function mostrarNumeroSinDividir(id) {
    let input = document.getElementById(id).value;
    if (input !== '') {
        document.getElementById('result' + id.slice(2)).textContent = input;
    }
}

window.onload = calcularResultadoDe;