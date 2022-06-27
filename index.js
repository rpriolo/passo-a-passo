var botao = document.querySelector('#botao');

botao.addEventListener('click', contarPasso)

function contarPasso() {
    var divContagem = document.querySelector('div#contagem');
    divContagem.innerHTML = ''; // Limpa o resultado anterior caso já tenha sido executado

    var inicio = document.querySelector('input#inicio').value;
    var fim = document.querySelector('input#fim').value;
    var passo = document.querySelector('input#passo').value;

    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        alert('Todos os campos precisam ser preenchidos antes de continuar.')
    } else if (passo <= 0) {
        alert('O valor do passo precisa ser um número maior que zero.');
    } else {
        var inicio = Number(inicio);
        var fim = Number(fim);
        var passo = Number(passo);

        divContagem.innerHTML = '<hr>';
        var h2 = document.createElement('h2');
        divContagem.appendChild(h2);
        h2.innerText = 'RESULTADO';

        if (inicio <= fim) {
            for (var i = inicio; i <= fim; i += passo) {
                var p = document.createElement('p');
                divContagem.appendChild(p);
                p.innerText += `${i}`
            }
        } else {
            for (var i = inicio; i >= fim; i -= passo) {
                var p = document.createElement('p');
                divContagem.appendChild(p);
                p.innerText += `${i}`
            }
        }
    }
}