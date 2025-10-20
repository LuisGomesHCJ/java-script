function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var iano = document.getElementById('iano')
    var result = document.getElementById('result')

    if (iano.value == 0 || iano.value >= ano) {
        alert('Parece que você digitou algo incorreto. Verifique seus dados e tente navemente...')
    }
    else {
        var gen = document.getElementsByName('gen')
        var idade = ano - Number(iano.value)
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto') 

        if (gen[0].checked) {
            
            if (idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'img/bebe-masc.png' )
                gênero = `Criança`
            }
            else if (idade < 18) {
                //jovem
                img.setAttribute('src', 'img/jovem-masc.png')
                gênero = `Jovem`
            }
            else if (idade >= 18 && idade < 65) {
                //adulto
                img.setAttribute('src', 'img/adulto-masc.png')
                gênero = `Adulto`
            }
            else {
                //idoso
                img.setAttribute('src', 'img/idoso-masc.png')
                gênero = `Idoso`
            }
        }

        else if (gen[1].checked){
            
            if (idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'img/bebe-fem.png' )
                gênero = `Criança`
            }
            else if (idade < 18) {
                //jovem
                img.setAttribute('src', 'img/jovem-fem.png')
                gênero = `Jovem`
            }
            else if (idade >= 18 && idade < 65) {
                //adulto
                img.setAttribute('src', 'img/adulto-fem.png')
                gênero = `Adulto`
            }
            else {
                //idoso
                img.setAttribute('src', 'img/idoso-fem.png')
                gênero = `Idosa`
            }
        }
        else {
            gênero = 'Retardado(a)'
            img.setAttribute('src', 'img/retard.png')
        }
        result.innerHTML = `Você é um(a) ${gênero} de ${idade} anos`
        result.appendChild(img)
    }
}


