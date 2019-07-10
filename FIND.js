// Buscar en base de datos:


const Cat = require('./models/Cat')

//BUSCO TODOS LOS GATOS:
Cat.find({})
.then(console.log("haz esto cuando los encuentres"))
.catch(console.log("que error tengo si no lo encuentra"))

//Busco los gatos cuyo nombre sea Kity y tengan mas de 2 años
Cat.find({ name: 'Kity', age: { $gte: 2 }}, callback);

//Busco uno cuyo nombre sea Alice
Cat.findOne({ name: "Alice" })
  .then(successCallback)
  .catch(errorCallback);

  // Busco por Id de Mongo:
Cat.findById("someMongoIdGoesHere129")
  .then(successCallback)
  .catch(errorCallback);