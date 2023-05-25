var express = require("express");
var router = express.Router();
var dadosUsuarioController = require("../controllers/dadosUsuarioController");

router.get("/listar", function (req, res){
    // função a ser chamada quando acessar /dadosUsuario/listar
    dadosUsuarioController.listar(req, res);
});

module.exports = router;