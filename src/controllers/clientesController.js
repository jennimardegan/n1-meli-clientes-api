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

//exemplo busca por query
//exports.get = (req, res) => {
//  const filter = req.query
// Clientes.find(filter, function (err, clientes)
// if (err) res.status(500).send(err);
//    res.status(200).send(clientes)
//)}


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


exports.deleteCliente = (req, res) => { 
  const idCliente = req.params.id;

  Clientes.findById(idCliente, function (err, cliente) {
    if (err) res.status(500).send(err);

    if (!cliente) {
    res.status(200).send({ mensage: "Cliente não localizado!"});
  }

  cliente.remove(function(err) { //semelhante ao save incluido no post
    if (!err) {
      res.status(204).send({message: "Cliente removido com sucesso!"})
    }
  })

})}


