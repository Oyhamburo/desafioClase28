const random = require('../funciones/random.js');
let numeros = []
let cant = 1000000
for (let i = 0; i < cant; i++) {
    let randomNum = random()
    if (numeros.length === 0) {
        numeros.push({
            numero: randomNum,
            cantidad: 1
        })
    } else {
        let existe = numeros.some(num => num.numero === randomNum)
        if (!existe) {
            numeros.push({
                numero: randomNum,
                cantidad: 1
            })
        } else {
            let test = numeros.find(e => e.numero === randomNum)
            test.cantidad++
        }
    }
}
let result = 'Los numeros son:'
numeros.forEach(e => {
    result += `numero: ${e.numero} cantidad:${e.cantidad} <br/>`
});

process.send(`Resultado de la suma: ${result}`);
process.exit();