const Clientes = require('../model/clientes')

exports.post = (req, res) => { 
    let cliente = new Clientes(req.body);
  
    cliente.save(function (err) {
      if (err) res.status(500).send(err);

      return res.status(201).send({
        status: true,
        mensagem: "Cliente incluido com sucesso!"
      });
    })}


exports.get = (req, res) => {
  Clientes.find(function (err, clientes) {
  if (err) res.status(500).send(err);
  res.status(200).send(clientes)
})
}


exports.getCompradores = (req, res) => {
  Clientes.find({comprou: true}, function (err, clientes) { //dentro do find já está filtrando comprou = true, forma de fazer com o Mongo
  if (err) res.status(500).send(err);
  const clientesRetorno = clientes.map(cliente => {
    return {
      nome: cliente.nome,
      email: cliente.email
    }
  })
  res.status(200).send(clientesRetorno)
})
}


exports.getCPF = (req, res) => {
  const cpf = req.params.cpf;
  Clientes.find({ cpf }, function(err, cliente) {
    if (err) res.status(500).send(err);
    res.status(200).send(cliente)
  })
}


exports.updateCliente = (req, res) => {
  Clientes.update(
    {cpf: req.params.cpf},
    {$set: req.body},
    {upsert: true},
    function(err) {
      if (err) return res.status(500).send({message: err});
      res.status(204).send({message: "Atualizado com sucesso!"})
    }
  )
}
