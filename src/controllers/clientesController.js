//const alunas = require("../model/alunas.json") -- Se fosse utilizado uma base JSON
const Clientes = require('../model/clientes')
const fs = require('fs');


exports.post = (req, res) => { 
    let cliente = new Clientes(req.body);
  
    cliente.save(function (err) {
      if (err) res.status(500).send(err);

      return res.status(201).send(cliente);

    })
    console.log("Cliente salvo com sucesso!")}


exports.get = (req, res) => {
  Clientes.find(function (err, clientes) {
    if (err) res.status(500).send(err);
    res.status(200).send(clientes)
  })
}

