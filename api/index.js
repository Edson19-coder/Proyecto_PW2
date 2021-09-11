var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;

//Conexion DB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/pw02').then(()=>{
		console.log("La conexion a la base de datos pw02 se ha realizado correcatamente.");
		//Crear servidor
		app.listen(port, ()=>{
			console.log("Servidor creado correcatamente en http://localhost:" + port);
		})
	}).catch(err=> console.log(err));