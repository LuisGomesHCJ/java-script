
function  carregar () {

    var agora = new Date() // data atual
    var horario = agora.getHours()
    var minuto = agora.getMinutes()
    var mensagem = document.getElementById('msg')   // associa a variável à div com id 'msg'
    var imagem = document.getElementById('imgs')    // associa a variável à div com id 'imgs'
    var recado = document.getElementById('recado')  // associa a variável à div com id 'recado'

    mensagem.innerHTML = `Agora são <strong>${horario}:${minuto}</strong>`

    if ( horario >= 0 && horario < 12)  // Se horario for maior ou igual a 0 (&& e) for menor que 12 = BOM DIA
        {
        imagem.src = 'img/manha.png'
        document.body.style.background = '#e2cd9f'
        recado.innerHTML = 'Bom dia!!'
        } 

    else if (horario >= 12 && horario <= 18 ) /* Se não, se horario for maior ou igual a 12 (&& e) menor ou igual a 18 = BOA TARDE */
        {
        imagem.src = 'img/tarde.png'
        document.body.style.background = '#b9846f'
        recado.innerHTML = 'Boa tarde!!'
        } 

    else { // Se não, BOA NOITE
        imagem.src = 'img/noite.png'
        document.body.style.background = '#515154'
        recado.innerHTML = 'Boa noite!!'
        }
}