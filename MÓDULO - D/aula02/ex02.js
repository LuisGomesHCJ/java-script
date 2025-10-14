var agora = new Date()
var h = agora.getHours()
var m = agora.getMinutes()
console.log(`Agora são ${h} horas e ${m} minutos!!`)


if (h >= 1 && h <= 4 ) {    // Se hora for maior / igual a 1 &&(e) menor / igual a 4 - "Vai dormir"
    console.log(`Vai dormir`)
    
} else if (h < 12) {        // Se não, se hora for menor que 12 - "Bom dia"
    console.log(`Bom dia`)
} else if (h <= 18 ) {      // Se não, se hora for menor ou igual a 18 - "Boa tarde"
    console.log(`Boa tarde`)
} else {                    // Se não, - "Boa noite"
    console.log(`Boa noite`) 
}
 