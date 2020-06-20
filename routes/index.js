// Index routes
var express    = require("express");
var router     = express.Router();
var mongoose   = require("mongoose");

//HOME
router.get("/", function(req, res){
	res.render("home", {title:"Tendy"});
})

// NOSOTROS
router.get("/nosotros", function(req,res){
	res.render("nosotros",{title:"Nosotros | Tendy"});
})

//CONTACTO
router.get("/contacto", function(req, res){
	res.render("contacto", {title:"Contacto | Tendy"});
})

module.exports = router;