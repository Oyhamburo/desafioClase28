const express = require("express");
const cluster = require('cluster')
const cpus = require('os').cpus()
const path = require("path");
const session = require('express-session')
const passport = require("passport")
const minimist = require('minimist')
const logger = require("./src/logger/Log4jsLogger.js");
const loggerMiddleware = require("./src/middlewares/routesLogger.middleware.js")


const options = {
	alias: {
		"p": "PORT",
		"m": "MODO"
	},
	default: {
		"PORT": 8081,
		"MODO": "FORK"
	}
};
const { PORT, MODO } = minimist(process.argv.slice(2), options);
const app = express();
//sessions
app.use(session({
	cookie: {
		maxAge: 600000
	},
	secret: "dalerojo",
	resave: false,
	saveUninitialized: false,
	rolling: true
}))


app.use(loggerMiddleware);

//Midleware
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({
	extended: true
}));
app.use(passport.initialize());
app.use(passport.session());


//Routes
const chatRoute = require("./src/routes/chat")
app.use("/api/chat", chatRoute);
const ptosTest = require("./src/routes/productosTest")
app.use("/api/productostest", ptosTest);
const login = require("./src/routes/login")
app.use("/api/login", login)
const logout = require("./src/routes/logout")
app.use("/api/logout", logout)
const register = require("./src/routes/register")
app.use("/api/register", register)
const info = require("./src/routes/info")
app.use("/api/info", info)
const random = require("./src/routes/random")
app.use("/api/random", random)

//Servidor HTTP
const http = require("http");
const server = http.createServer(app);

//Servidor de Socket
const {
	Server
} = require("socket.io");
const io = new Server(server);

io.on("connection", (socket) => {
	socket.emit("render", "")
	socket.on("actualizacion", () => {
		io.sockets.emit("render", "")
	})
})



//Comienzo Servidor
// if (MODO === "CLUSTER" && cluster.isPrimary) {
// 	const lengthCpu = cpus.length
// 	for (let index = 0; index < lengthCpu; index++) {
// 		cluster.fork()
// 	}
// } else {
// 	// server.listen(PORT, () => {
// 	// 	console.log(`Server is run on port ${server.address().port}`)
// 	// })
	
// 	const server = app.listen(PORT, () => {
// 		logger.info(`🚀 Server is run on port ${server.address().port}`)
// 	})
// }
server.listen(PORT, () => {
	console.log(`Server is run on port ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
server.on('error', (err) => logger.error(err));

