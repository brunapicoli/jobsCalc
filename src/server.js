const express = require("express")
const server = express()
const routes = require("./routes")
const path = require("path")

// using template engine (npm i ejs)
server.set('view engine', 'ejs')

// change the location of the views folder
server.set('views', path.join(__dirname, 'views'))

// enable files statics
server.use(express.static("public"))

// to use req.body
server.use(express.urlencoded({ extended: true }))

// routes
server.use(routes)

server.listen(3000, () => console.log('rodando'))