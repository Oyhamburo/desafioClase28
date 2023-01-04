const parseArgs = require('minimist')
const options = {
	default: { puerto: 8080 },
	alias: { p: 'puerto' }
}
const argumentos = parseArgs(process.argv.slice(2),options)

const express = require("express");
const path = require("path");
const session = require('express-session')
const passport = require("passport")

const app = express();
// const PORT = process.env.PORT || 8080;
const PORT = argumentos.puerto
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
server.listen(PORT, () => {
	console.log(`Server is run on port ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))