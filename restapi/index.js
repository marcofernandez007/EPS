const express=require('express');
const routes=require('./routes');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

//cors permite a un cliente a otro servidor pra intercambio recursos
const cors=require('cors');
//conectar mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/restapi',{
    useNewUrlParser:true
});

var db=mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:')); 

db.once('open', function() {
    console.log("Connection Successful!");
}); 
   
//crear servidor
const app = express();

//habilitar bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//habilitar cors
app.use(cors());

//rutas de las apps
app.use('/',routes());

//puerto
app.listen(666);
