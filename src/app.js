const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const app = express()

//conexão com o MongoDB local
mongoose.connect("mongodb://localhost:27017/reprograma", {useNewUrlParser:true});

let db = mongoose.connection;
db.on("error", console.log.bind(console, "connection error:")) //erro caso problema de conexão com mongo, mostrando no console
db.once("open", function(){
  console.log("conexão feita com sucesso.") //uma vez conectado ao mongo, aparece essa mensagem
})

//rotas
const clientes = require("./routes/clientesRoute")

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

//Linha incluida no momento de incluir o POST para o MongoDB
app.use(bodyParser.json());

app.use("/clientes", clientes)

module.exports = app