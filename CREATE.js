
/// Crear un schema:

const Cat = require('./models/Cat')

// guardar 1 sin promesa
Cat.create({name: "Kity", color: "marron", age: 12}, function(err,cat){

  if (err) {
    console.log('An error happened:', err);
} else {
    console.log('The user is saved and its value is: ', user);
}


})

// guardar 1 con promesa:

Cat.create({name: "Kity", color: "marron", age: 12})
.then(cat => console.log("todo ok", cat))
.catch(err => console.log("error", err))


// guardar MUCHOS:
//para esto necesitamos un array:
const arrayGatos = [{name: "Kity", color: "marron", age: 12},{name: "Kity2", color: "marron1", age: 10}]


Cat.insertMany(arrayGatos)
.then(cats => console.log("todo ok", cats))
.catch(err => console.log("error", err))
