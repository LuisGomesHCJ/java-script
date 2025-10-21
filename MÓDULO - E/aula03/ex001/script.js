function gerar() {
    
    let numero = document.getElementById(`numero`)
    let tabuada = document.getElementById(`tab`)

    if (numero.value.length == 0) { //  Se o input estiver vazio e o usuário apertar em gerar tabuada
        alert(`Preencha os dados e tente novamente.`)
    }
    else {
        let numb = Number(numero.value)
        tabuada.innerHTML = '' //para resetar a tabuada ao gerar outro número

        for (let contador = 1 ; contador <= 10 ; contador ++ ) {
            let item = document.createElement(`option`) // vai adicionar opções à tabuada 
            item.text = `${numb} X ${contador} = ${numb*contador}` // vai dar um texto aos itens da tabuada
            tabuada.appendChild(item) // faz com que os elementos apareçam no (select - HTML)
        }
    }
}