const path = require('path');
const express = require ('express');
const morgan = require('morgan');
const app = express();

var mongoose = require("mongoose");
var Schema  = mongoose.Schema;

mongoose.connect("mongodb://localhost/Datos");

var userschemaJSON = {
    Accept : String
}

var user_schema = new Schema(userschemaJSON);

var User = mongoose.model("User",user_schema)

app.post("/users", function(req,res){
    var user = new User ({Accept: req.body.Accept});
    user.save(function(){
        res.send("Guardamos tus datos")
    })
})


//Importando rutas
const indexRoutes = require('./routes/index');
//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
//Middlewares -> Funcion antes de ejecuta de las rutas
app.use(morgan('dev'));
app.use(express.urlencoded({extended : false})); // Entender los datos de un formulario de HTML
//rutas
app.use('/', indexRoutes);
//Starting to server

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
});