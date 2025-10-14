var agora = new Date()
var semana = agora.getDay()

// var semana = 7   para testar o default

/* --- Regra do getDay() ---

    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado

*/

/* Com o switch, você pode usar caracteres e números inteiros, e serve para condições pontuais.
   Casos como o ex02 ou 01, é mais viável utilizar o if, else if.
*/


switch (semana) {       // No switch, você precisa usar o break após cada case, se tiver outro case abaixo.
    case 0:
        console.log(`Domingo`)
        break

    case 1:
        console.log(`Segunda-feira`)
        break

    case 2: 
        console.log(`Terça-feira`)
        break
    
    case 3:
        console.log(`Quarta-feira`)
        break

    case 4:
        console.log(`Quinta-feira`)
        break

    case 5: 
        console.log(`Sexta-feira`)

    case 6:
        console.log(`Sábado`)
        break

    default:                    // testar o default, pois neste exercicio ele não seria necessário
        console.log(`[Erro] Este dia não existe`)
    
}