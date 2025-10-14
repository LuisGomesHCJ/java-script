
function  carregar () {

    var agora = new Date() // data atual
    var horario = agora.getHours()
    var minuto = agora.getMinutes()
    var mensagem = document.getElementById('msg') // associa a variável à minha div com id 'msg'
    var imagem = document.getElementById('imgs') // associa a variável à minha div com id 'imgs'
    var recado = document.getElementById('recado')
    mensagem.innerHTML = `Agora são <strong>${horario}:${minuto}</strong>`

    if ( horario >= 0 && horario < 12) 
        {
        imagem.src = 'img/manha.png'
        document.body.style.background = '#e2cd9f'
        recado.innerHTML = 'Bom dia!!'
        } 

    else if (horario >= 12 && horario <= 18 ) 
        {
        imagem.src = 'img/tarde.png'
        document.body.style.background = '#b9846f'
        recado.innerHTML = 'Boa tarde!!'
        } 

    else {
        imagem.src = 'img/noite.png'
        document.body.style.background = '#515154'
        recado.innerHTML = 'Boa noite!!'
        }
}