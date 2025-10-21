function contar() {
    let inicio = document.getElementById(`inicio`)
    let fim = document.getElementById(`fim`)
    let passo = document.getElementById(`passo`)
    let resultado = document.getElementById(`result`)




    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = (`Você não preencheu todos os dados, como quer contar assim???`)
    }
    else {
        resultado.innerHTML = (`Contando: <br>`)
        let ini = Number(inicio.value)
        let fm = Number(fim.value)
        let pass = Number(passo.value)
        if (pass <= 0 ) {
            alert (`Passo inválido, considerando Passo: 01`)
            pass = 1
        }

        if (ini < fm) { // Contagem crescente
            for (let contador = ini ; contador <= fm ; contador += pass) {
                resultado.innerHTML += (` ${contador} \u{1F449}`)
            }
        }
        else { // Contagem decrescente 
            for (let contador = ini ; contador >= fm ; contador -= pass ) {
                resultado.innerHTML += (` ${contador} \u{1F449}`)
            }
        }
        resultado.innerHTML += (`\u{1F3C1}`)
    }
}