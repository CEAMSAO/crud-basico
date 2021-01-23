const express = require("express");

const router = express.Router();

const controlador = require("../controllers/index2");

router.get("/", controlador.home)
router.post("/crear", controlador.ceam)
router.get("/error", controlador.error)



module.exports=router;