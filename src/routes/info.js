const express = require("express")
const parseArgs = require('minimist')
const {exec} = require('child_process')
const cpus=require('os').cpus()
const compression = require('compression')

// const path = require('path')
// const root = path.join(__dirname,'info.js')
// console.log("JS CLASICO: ",root)

const app = express();
const {
    Router
} = express;
const router = new Router();

//GET DEL LOGIN
router.get("/",compression(), (req, res) => {

    let data = `<ul>
    <p>Nombre de la plataforma: <strong>${process.platform}</strong></p>
    <p>Version de node.js: <strong>${process.version}</strong></p>
    <p>Memoria total reservada (rss): <strong>${process.memoryUsage().rss}</strong></p>
    <p>path de ejecucion: <strong>${process.execPath}</strong></p>
    <p>Process id: <strong>${process.pid}</strong></p>
    <p>Cantidad de nucleos: <strong>${cpus.length}</strong></p> 
    </ul>
    `

    // console.log(data)
    res.send(data)
})

//EXPORT MODULO ROUTER
module.exports = router;