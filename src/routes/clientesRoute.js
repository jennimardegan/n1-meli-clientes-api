const express = require("express")
const router = express.Router()
const controller = require("../controllers/clientesController")

router.get("/", controller.get)
router.get("/compradores", controller.getCompradores)
router.get("/:cpf", controller.getCPF)
router.post("/", controller.post)
router.put("/:cpf", controller.updateCliente)
router.delete("/:id", controller.deleteCliente)

module.exports = router
