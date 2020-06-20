//Vinner
var express = require("express");
var app = express();
var bodyParser= require("body-parser");
var mongoose = require("mongoose");
// var Fundador = require("./models/fundador");
// var Aliado = require("./models/aliado");
// var Consultor = require("./models/consultor");
// var Colaborador = require("./models/colaborador");
// var seed=require("./seed");

// routes
var Routes = require("./routes/index");

// importar variables de entorno locales
require("dotenv").config({path: "./variables.env"});

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));

app.set("view engine", "ejs");

// use routing files
app.use(Routes);

const host= process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 3000;

app.listen(port, host, function(){
    console.log("Tendy server working");
})