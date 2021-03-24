'use strict'

//Cargar módulos de node para crear el servidor
var express = require('express');
var bodyParser = require('body-parser');
//Ejecutar express
var app = express();
//Cargar ficheros rutas
var article_routes = require('./routes/article');
//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
//Añadir prefijos a rutas/ Cargar rutas
app.use('/api',article_routes);

//Ruta o metodo de prueba para el API
/*
app.post('/datos-curso', (req, res)=>{
    //console.log("HOLA MUNDO");
    //return res.status(200).send("<ul><li>NodeJS</li> <li>Angular</li> <li>React</li><li>Vue</li></ul>");
    var hola = req.body.hola;
    return res.status(200).send({
        curso:  'Master en Frameworks',
        estudiante: 'Brandon',
        usuario: 'Menernos',
        hola
    });
});
*/

//Exportar módulo (fichero actual)
module.exports = app;