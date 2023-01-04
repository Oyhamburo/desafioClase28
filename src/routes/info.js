const express = require("express")
const parseArgs = require('minimist')
const {exec} = require('child_process')
// version node con node - v
// exec('node -v',(err,stdout,stderr)=>{
//     console.log(stdout)
// })
exec('pwd',(err,stdout,stderr)=>{
    console.log('STDout',stdout)
})

const options = {
    default: { puerto: 8080 },
	alias: { p: 'puerto' }
}
const argumentos = parseArgs(process.argv.slice(2))

const app = express();
const {
    Router
} = express;
const router = new Router();

//GET DEL LOGIN
router.get("/", (req, res) => {
    let buscando = 'buscando'
    let data = `<ul>
    <p>Argumentos de entrada: <strong>${argumentos._}</strong></p>
    <p>Nombre de la plataforma: <strong>${buscando}</strong></p>
    <p>Version de node.js: <strong>${buscando}}</strong></p>
    <p>Memoria total reservada (rss): <strong>${buscando}</strong></p>
    <p>path de ejecucion: <strong>${buscando}</strong></p>
    <p>Process id: <strong>${buscando}</strong></p>
    <p>Carpeta del proyecto: <strong>${buscando}</strong></p>
    </ul>
    `

    res.send(data)
})

//EXPORT MODULO ROUTER
module.exports = router;


// console.log("modo",argumentos.modo)
// console.log("puerto",argumentos.puerto)
// console.log("debug",argumentos.debug)
// console.log("otros",argumentos._)


// argumentos de entrada
// nombre de la plataforma SO
// version de node
// Memoria total reservada
// path de ejecucion
// process id
// carpeta del proyecto