const express = require("express")
const { fork } = require('child_process');
const random = require('../funciones/random.js');

// const app = express();
const {
    Router
} = express;

const router = new Router();

router.get("/", (req, res) => {
    const child = fork('./src/factory/child.js');
    child.on('message', msg => {
        if (msg == 'ready') {
            child.send({ PID: child.pid });
        } else res.send(msg);
    });
})

router.get("/:cant", (req, res) => {
    let cant = req.params.cant
    let numeros = []
    for (let i = 0; i < cant; i++) {
        let randomNum = random()
        if (numeros.length === 0) {
            numeros.push({
                numero: randomNum,
                cantidad: 1
            })
        } else {
            let existe = numeros.some(num => num.numero === randomNum)
            if(!existe){
                numeros.push({
                    numero: randomNum,
                    cantidad: 1
                })
            }else{
                let test = numeros.find(e => e.numero === randomNum )
                test.cantidad++
            }
        }
    }
    let data = 'Los numeros son:'
    numeros.forEach(e => {
        data += `numero: ${e.numero} cantidad:${e.cantidad} <br/>`
    });

    res.send(data)
})




//EXPORT MODULO ROUTER
module.exports = router;