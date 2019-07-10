const Cat = require('./models/Cat');

// busco los contactos que tengan en su email "@ironhack\.com" y cambio la compañia a "Ironhack"
User.updateMany({ email: /@ironhack\.com/}, { company: "Ironhack" })
  .then(successCallback)
  .catch(errorCallback);

// cambio la compañia a Ironhack para la primera Alice que encuentre
User.updateOne({ name: "Alice"}, { company: "Ironhack" })
  .then(successCallback)
  .catch(errorCallback);

// Busco por id e incremento el salario en 4200
User.findByIdAndUpdate("5a3a7ecbc6ca8b9ce68bd41b", { $inc: {salary: 4200} })
  .then(successCallback)
  .catch(errorCallback);