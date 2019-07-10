const mongoose = require('mongoose');
const Schema = mongoose.Schema

const AllTiposSchema = new Schema({

  string: String,
  number: Number,
  otroId: Schema.Types.ObjectId,
  mixed: Schema.Types.Mixed,
  array: Array,

})


const catSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, min: 0, max: 30 },
  color: { type: String, enum: ['white', 'black', 'brown'] },
  avatarUrl: { type: String, default: 'images/default-avatar.png' },
  location: {
    address: String,
    city: String
  },
  countryCode: { type: String, match: /^[A-Z]{2}$/ },
  created: { 
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// type:	String, Number,... --->	para poner el tipo que es
// default: 'images/default-avatar.png'	---> valor por defecto
// required:	true ---> 	Necesita estar
// unique:	true --->	No se puede repetir
// enum:[1,2,3]	 ----> puede ser uno de estos tipos
// min: 2 ---> 	un minimo
// max: 10 ---> max permitido
// minlength	--> lo mismo que min pero con longitud de caracteres
// maxlength -->max de caracteres
// trim	true	Adds a trim setter
// lowercase:	true	 ---> tiene que estar en minuscula 
// match: regularExpression --->	un validador con expresiones regulares
// validate:{} 	---> Adds a custom validator (see next part)
// set: function --->	Adds a custom setter (see next part)