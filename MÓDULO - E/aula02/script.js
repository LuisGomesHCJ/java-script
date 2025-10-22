function contar() {
    let inicio = document.getElementById(`inicio`)
    let fim = document.getElementById(`fim`)
    let passo = document.getElementById(`passo`)
    let resultado = document.getElementById(`result`)




    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { // Se o usuário não preencher os dados.
        resultado.innerHTML = (`Você não preencheu todos os dados, como quer contar assim???`)
    }
    else {
        resultado.innerHTML = (`Contando: <br>`)
        let ini = Number(inicio.value) // Cria o (ini), transfere o valor de (inicio) e transforma esse valor em número (Number)
        let fm = Number(fim.value)     // Cria o (fm), transfere o valor de (fim) e transforma esse valor em número (Number) 
        let pass = Number(passo.value) // Cria o (pass), transfere o valor de (passo) e transforma esse valor em número (Number)
        if (pass <= 0 ) { // se pass for menor ou igual a 0
            alert (`Passo inválido, considerando Passo: 01`)
            pass = 1
        }

        if (ini < fm) { // Contagem crescente / se ini for menor que fm
            for (let contador = ini ; contador <= fm ; contador += pass) {
                resultado.innerHTML += (` ${contador} \u{1F449}`)
            }
        }
        else { // Contagem decrescente / se ini for maior que fm
            for (let contador = ini ; contador >= fm ; contador -= pass ) {
                resultado.innerHTML += (` ${contador} \u{1F449}`)
            }
        }
        resultado.innerHTML += (`\u{1F3C1}`)
    }
}