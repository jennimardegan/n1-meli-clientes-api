const express = require("express")
const router = express.Router()
const controller = require("../controllers/clientesController")

//apidoc -i src/ -o public/apidoc -> comando para executar para gerar arquivo public para gerar pagina html com o doc

/**
 * @api {get} /clientes
 * @apiGroup Clientes
 * 
 * @apiSuccess {Object[]} clientes Lista de Clientes
 * 
 * @apiSuccessExample {json} Sucesso
 * HTTP/1.1 200 OK
 * [{
 *       "email": "Cindy@gmail.com",
 *       "nome": "Cindy ",
 *       "cpf": 2234567890,
 *       "dataNascimento": "1992-04-03T03:00:00.000Z",
 *       "estadoCivil": "Solteira",
 *       "telefone": 444456789,
 *       "comprou": true
 * }]
 */

router.get("/", controller.get)
router.get("/compradores", controller.getCompradores)
router.get("/:cpf", controller.getCPF)
router.post("/", controller.post)
router.put("/:cpf", controller.updateCliente)
router.delete("/:id", controller.deleteCliente)

module.exports = router
